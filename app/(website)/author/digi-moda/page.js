import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

export default function DiGiModa() {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            Author
          </h1>
          <div className="grid grid-cols-1 gap-4 px-0 py-4 content-center">
            <div className="hero-content flex flex-col justity-center">
              <figure className="flex justify-center items-center rounded-full pb-6">
                <Image src="/public/img/digimoda.jpeg" className="max-w-sm rounded-full bg-center bg-cover" />
              </figure>
              <div className="flex-col py-2">
                <h1 className="text-xl text-center font-bold text-gray-700 md:text-2xl dark:text-white lg:text-4xl lg:leading-snug">
                  DIGI MODA
                </h1>
                <div className="px-8 mt-4 mx-12 text-lg md:text-xl text-gray-700 text-center dark:text-white lg:text-2xl lg:leading-snug justify-center text-pretty">
                  <p className="w-auto">
                    Stay updated on all things Fashion, Culture, Beauty, and Technology with insights from DiGi Moda.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}