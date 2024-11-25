import algoliasearch from 'algoliasearch'
import {createClient, type SanityDocumentStub } from '@sanity/client'
import type { VercelResponse, VercelResponse } from '@vercel/node'
import indexer from 'sanity-algolia'

const algolia = algoliasearch(
  '71SBE8DDO5',
  process.env.ALGOLIA_ADMIN_API_KEY
)

const sanity = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  token: process.env.SANITY_API_READ_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: false,
})

/**
 *  This function receives webhook POSTs from Sanity and updates, creates or
 *  deletes records in the corresponding Algolia indices.
 */
const handler = (req: VercelResponse, res: VercelResponse) => {
  // Tip: Add webhook secrets to verify that the request is coming from Sanity.
  // See more at: https://www.sanity.io/docs/webhooks#bfa1758643b3
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400)
    res.json({ message: 'Bad request' })
    return
  }

  // Configure this to match an existing Algolia index name
  const algoliaIndex = algolia.initIndex('digi-moda')

  const sanityAlgolia = indexer(
    {
      post: {
        index: algoliaIndex,
        projection: `{
          title,
          "path": slug.current,
          "body": pt::text(body)
        }`,
      },
      // For the article document in this example we want to resolve a list of
      // references to authors and get their names as an array. We can do this
      // directly in the GROQ query in the custom projection.
      article: {
        index: algoliaIndex,
        projection: `{
          heading,
          "body": pt::text(body),
          "authorNames": authors[]->name
        }`,
      },
    },

    (document: SanityDocumentStub) => {
      switch (document._type) {
        case 'post':
          return Object.assign({}, document, {
            custom: 'An additional custom field for posts, perhaps?',
          })
        case 'article':
          return {
            title: document.heading,
            body: document.body,
            authorNames: document.authorNames,
          }
        default:
          return document
      }
    },
    (document: SanityDocumentStub) => {
      if (document.hasOwnProperty('isHidden')) {
        return !document.isHidden
      }
      return true
    }
  )

  // Finally connect the Sanity webhook payload to Algolia indices via the
  // configured serializers and optional visibility function. `webhookSync` will
  // inspect the webhook payload, make queries back to Sanity with the `sanity`
  // client and make sure the algolia indices are synced to match.
  return sanityAlgolia
    .webhookSync(sanity, req.body)
    .then(() => res.status(200).send('ok'))
    .catch(err => {
      return {
        statusCode: 500,
        body: JSON.stringify({message: 'Something went wrong'})
      }
    })
}

export default handler;