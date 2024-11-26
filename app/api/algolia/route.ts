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
export const handler = (req: VercelResponse, res: VercelResponse) => {
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
          slug,
          body[],
        }`,
      },
    },

    (document: SanityDocumentStub) => {
      if (document._type(post)) {
          return Object.assign({}, document, {
            custom: 'An additional custom field for posts, perhaps?',
          })
          return true
        }
    },
    (document: SanityDocumentStub) => {
      if (document.hasOwnProperty('isHidden')) {
        return !document.isHidden
      }
      return true
    }
  )

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