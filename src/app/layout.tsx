import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pivoto - Lightning-Fast Browser Tab Navigation & Productivity Extension",
  description:
    "Transform your browsing experience with Pivoto - the ultimate Chrome extension for tab management, cross-window navigation, and productivity. Features intelligent search with @ commands, customizable shortcuts (Cmd+Shift+K, Cmd+Q), and seamless workflow integration. Boost productivity with lightning-fast tab switching and focus management.",
  keywords: [
    "chrome extension",
    "tab management",
    "browser productivity",
    "tab navigation",
    "browser extension",
    "productivity tools",
    "tab switcher",
    "browser shortcuts",
    "workflow optimization",
    "cross-window navigation",
    "focus management",
    "browser efficiency",
    "tab organizer",
    "quick search",
    "browser automation"
  ],
  authors: [{ name: "Pivoto Team" }],
  creator: "Pivoto",
  publisher: "Pivoto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pivoto.vercel.app/",
    title: "Pivoto - Lightning-Fast Browser Tab Navigation & Productivity Extension",
    description:
      "Transform your browsing experience with Pivoto - the ultimate Chrome extension for tab management, cross-window navigation, and productivity. Features intelligent search, customizable shortcuts, and seamless workflow integration.",
    siteName: "Pivoto",
    images: [
      {
        url: "https://pivoto.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pivoto - Browser Tab Navigation Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pivoto - Lightning-Fast Browser Tab Navigation & Productivity Extension",
    description:
      "Transform your browsing experience with Pivoto - the ultimate Chrome extension for tab management and productivity.",
    images: ["https://pivoto.vercel.app/og-image.png"],
    creator: "@pivoto",
  },
  alternates: {
    canonical: "https://pivoto.vercel.app/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8Ld3zqjkH7FNael7CdGb-aWxAsdD2nx8xxv6VCB3mh0"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5D2CA8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pivoto" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="msapplication-TileColor" content="#5D2CA8" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
               "name": "Pivoto",
               "description": "Transform your browsing experience with Pivoto - the ultimate Chrome extension for tab management, cross-window navigation, and productivity. Features intelligent search with @ commands, customizable shortcuts, and seamless workflow integration.",
               "url": "https://pivoto.vercel.app/",
              "applicationCategory": "BrowserApplication",
              "operatingSystem": "Chrome, Chromium-based browsers",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "author": {
                "@type": "Organization",
                "name": "Pivoto Team"
              },
              "downloadUrl": "https://chromewebstore.google.com/detail/pivoto/iegmcjfaancbpebgdgjldfadenkceffl",
               "screenshot": "https://pivoto.vercel.app/screenshot.png",
              "featureList": [
                "Lightning-fast tab navigation",
                "Cross-window tab switching",
                "Intelligent search with @ commands",
                "Customizable keyboard shortcuts",
                "Bookmark and history search",
                "Focus management tools",
                "Productivity workflow integration"
              ]
            })
          }}
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased") + ' bg-black'}>{children}</body>
    </html>
  );
}
