import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Label from "@/components/ui/label";

export default function CategoryPost({
  category,
  aspect,
  nomargin = false,
  preloadImage,
  featured = false
}) {
  const imageProps = post?.mainImage
    ? urlForImage(post.mainImage)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  return (
    <>
      <div className="w-full h-auto px-5 pb-8">
          {category.map((category, index) => (
            <Link
              href={`/category/${category.slug.current}`}
              key={index}>
              <Label nomargin={nomargin} color={category.color}>
                {category.title}
              </Label>
            </Link>
          ))}
      </div>
      <div
        className={cx(
          "group grid cursor-pointer content-start gap-3",
          featured && " lg:grid-cols-2 lg:gap-10"
        )}>
        <div
          className={cx(
            "relative overflow-hidden rounded-md bg-gray-100 transition-all dark:bg-gray-800",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}>
          <Link href={`/post/${category.post.slug.current}`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(category.post.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: category.post.mainImage.blurDataURL
                })}
                alt={category.post.mainImage.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover object-top transition-all"
                fill
                sizes="80vw"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div
          className={cx(
            "flex flex-col justify-center",
            !featured && "lg:mt-5"
          )}>
          <div
            className={cx(
              "flex items-center space-x-3 text-gray-500 dark:text-gray-400"
            )}>
            <time
              className="text-sm"
              dateTime={
                category?.post?.publishedAt ||
                category.post._createdAt
              }>
              {format(
                parseISO(
                  category?.post?.publishedAt ||
                    category.post._createdAt
                ),
                "MMMM dd, yyyy"
              )}
            </time>
          </div>

          <h2
            className={cx(
              "text-brand-primary mt-2 line-clamp-2 text-xl font-semibold tracking-normal dark:text-white",
              featured ? "lg:text-3xl" : "lg:text-2xl"
            )}>
            <Link href={`/post/${category.post.slug.current}`}>
              <span className="bg-gradient-to-r from-black to-black bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px] dark:from-white dark:to-white">
                {category.post.title}
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
