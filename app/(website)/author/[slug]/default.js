import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import PostAlt from "@/components/postalt";

export default function Author(props) {
  const { loading, author } = props;

  const slug = author?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const AuthorimageProps = author?.image ?
    urlForImage(post.author.image) :
    null;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            Author
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {AuthorimageProps && (
                  <Link href={`/author/${author.slug.current}`}>
                    <Image
                      src={AuthorimageProps.src}
                      alt={author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="80px"
                    />
                  </Link>
                )}
              </div>
              <div>
                <h2 className="text-gray-800 dark:text-gray-400">
                  <Link href={`/author/${author.slug.current}`}>
                    {author.name}
                  </Link>
                </h2>
                </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {author.bio && <PortableText value={author.bio} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href={`/author/${author.slug.current}`}
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
        </article>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          {posts.slice(0, 2).map(post => (
            <PostList
              key={author.post}
              post={post}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {posts.slice(2, 14).map(post => (
            <PostList key={author.post} post={post} aspect="square" />
          ))}
        </div>
      </Container>
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};