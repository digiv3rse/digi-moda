import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center h-full py-6 md:py-10 lg:py-14">
        <div className="w-full p-6 mx-auto md:p-10 lg:p-14">
          <Image
            src="/img/coming-soon-1.png"
            alt="Coming Soon"
            className="object-cover rounded-xl"
          />
        </div>
        <Link href="/" className="flex items-center justify-center py-6 mx-auto text-center">
          <button type="button" class="bg-[#5377b3] rounded-full p-4 shadow-lg text-xl font-medium  hover:bg-pink-600">Back Home</button>
        </Link>
      </Container>
    </>
  );
}
