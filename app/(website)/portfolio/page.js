import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <Container className="flex flex-col w-full mx-auto justify-center py-6 items-center md:py-10 md:mt-12 lg:mt-16 lg:py-14">
        <div className="w-full sm:px-8 md:px-18 lg:px-24">
          <Image
            src="/img/coming-soon-1.png"
            alt="Coming Soon"
            className="object-cover w-full rounded-xl"
          />
         </div>
        <Link href="/" className="flex items-center justify-center py-6 mx-auto text-center">
          <button type="button" class="bg-[#5377b3] rounded-lg text-lg h-[45px] w-[90px] md:h-[60px] md:w-[135px] p-4 shadow-lg md:text-xl font-medium hover:bg-pink-600">Back Home</button>
        </Link>
      </Container>
    </>
  );
}
