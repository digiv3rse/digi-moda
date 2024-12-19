import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function CategoryList({
  category,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight
}) {
  const category = [
    { title: "Fashion", mainImage: "", alt: "fashion", slug: "fashion"},
    { title: "Beauty", mainImage: "", alt: "beauty", slug: "beauty"},
    { title: "Culture", mainImage: "", alt: "culture", slug: "culture"},
    { title: "Business", mainImage: "", alt: "business", slug: "business"},
    { title: "Technology", mainImage: "", alt: "technology", slug: "technology"},
  ];
  const imageProps = category?.mainImage ?
    urlForImage(category.mainImage) :
    null;
  return (
        <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}>
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                  ? "aspect-[5/4]"
                  : "aspect-square"
            )}
            href={`/category/${pathPrefix ? `${pathPrefix}/` : ""}${
              category.slug
            }`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                alt={imageProps.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover object-top transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}