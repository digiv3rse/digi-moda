import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Head from "next/head";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "DiGi Moda - Digital Fashion Magazine for new generations"
    },
    description:
      settings?.description ||
      "DiGi Moda - Stay ahead of the game with our latest updates, trend reports, and insider tips. Join our fashion-forward community and let's explore the glamorous side of life!",
    keywords: [
      "DiGi Moda",
      "Fashion",
      "Beauty",
      "Cultures",
      "Technology"
    ],
    authors: [{ name: "DiGi Moda" }],
    creator: "DiGi Moda",
    canonical: settings?.url || "https://digimoda.sit",
    languages: "en-us",
    referrer: "origin-when-cross-origin",
    msapplicationTileColor: "#000000",
    manifest: "https://digimoda.site/manifest.json",
    openGraph: {
      title: "DiGi Moda",
      description:
        "DiGi Moda - Digital Fashion Magazine for new generations",
      url: "https://digimoda.site/",
      siteName: "DiGi Moda",
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/opengraph.png",
          width: 800,
          height: 600
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      title: settings?.title || "DiGi Moda",
      card: "summary_large_image",
      description:
        "DiGi Moda - Stay ahead of the game with our latest updates, trend reports, and insider tips. Join our fashion-forward community and let's explore the glamorous side of life!",
      images: "/img/opengraph.png"
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        new URL("/favicon.ico", "https://digimoda.site"),
        { url: "/icons/favicon-32x32.png", sizes: "32x32" },
        { url: "/icons/favicon-16x16.png", sizes: "16x16" }
      ],
      other: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          url: "/icons/apple-touch-icon.png"
        },
        {
          rel: "android-chrome-512x512.png",
          sizes: "512x51",
          url: "/icons/android-chrome-512x512.png"
        },
        {
          rel: "android-chrome-192x192.png",
          sizes: "192x192",
          url: "/icons/android-chrome-192x192.png"
        },
        {
          rel: "mask-icon",
          color: "#5bbad5",
          url: "/icons/safari-pinned-tab.svg"
        }
      ]
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
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
        </Head>
        <Script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-6589975999855442?ers=1"
          security="worker"
        />
        <Navbar {...settings} />
        <div>{children}</div>
        <Footer {...settings} />
        <GoogleAnalytics gaId="G-97HEWFM6VB" />
      </html>
    </>
  );
}
// enable revalidate for all pages in this layout
export const revalidate = 60;
