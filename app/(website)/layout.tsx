import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "DiGi Moda - Digital Fashion Blog for new generations",
    },
    description:
      settings?.description ||
      "DiGi Moda - Stay ahead of the game with our latest updates, trend reports, and insider tips. Join our fashion-forward community and let's explore the glamorous side of life!",
    keywords: ["DiGi Moda", "Fashion", "Beauty", "Cultures", "Technology"],
    authors: [{ name: "DiGi Moda" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.png",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "DiGi Moda",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
      <GoogleAnalytics gaId="G-8GDENFPPNN" />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
