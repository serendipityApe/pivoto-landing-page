import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chrome Extension - Pivoto",
  description:
    "Pivoto is a chrome extension that helps you to manage your tabs.",
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
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
