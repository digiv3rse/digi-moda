import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";

export default function Author(props) {
  const { loading, author } = props;

  const slug = author?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const AuthorimageProps = post?.author?.image ?
    urlForImage(post.author.image) :
    null;

  return (
    <>
        <div className="mx-auto max-w-screen-md ">
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {author.name}
          </h1>

          <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
             {AuthorimageProps && (
                <Image
                  src={AuthorimageProps.src}
                  alt={author.mainImage?.name}
                  className="rounded-full object-cover"
                  fill
                  loading="eager"
                  sizes="80vw"
                />
              )}
          </div>
        </div>
      <article className="mx-auto max-w-screen-md ">
        <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
          {author.bio && <PortableText value={author.bio} />}
       </div>
    </article>
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