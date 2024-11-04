import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "DiGi Moda",
        short_name: "DiGi Moda",
        description: "DiGi Moda - Stay ahead of the game with our latest updates, trend reports, and insider tips. Join our fashion-forward community and let's explore the glamorous side of life!",
        start_url: '/',
        display: 'standalone',
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
            },
            {
                src: "/icons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/icons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
    }
}