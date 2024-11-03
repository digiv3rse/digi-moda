import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    metadataBase: new URL(settings.url),
    title: {
      default: settings?.title ||
        "DiGi Moda - Digital Fashion Blog for new generations",
    },
    description: settings?.description ||
      "DiGi Moda - Stay ahead of the game with our latest updates, trend reports, and insider tips. Join our fashion-forward community and let's explore the glamorous side of life!",
    keywords: ["DiGi Moda", "Fashion", "Beauty", "Cultures", "Technology"],
    authors: [{ name: "DiGi Moda" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src ||
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
      <html lang="en">
        <Head>
          <meta name="google-site-verification" content="yeuFnQXHqjX1bdE_zygqNNwrp5IwlUEMYBDjAJSrc9M" />
          <meta property="og:site_name" content="DiGi Moda" />
          <meta property="og:url" content="https://digimoda.site" />
          <link rel="icon" sizes="48x48" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon/android-chrome-512x512.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-chrome-192x192.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="google-adsense-account" content="ca-pub-6589975999855442" />
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6589975999855442" />
        </Head>
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
