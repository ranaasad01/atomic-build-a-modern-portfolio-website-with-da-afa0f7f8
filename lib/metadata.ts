import type { Metadata } from "next";

const siteConfig = {
  name: "Alex Chen — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, performant web applications.",
  url: "https://alexchen.dev",
  ogImage: "/og-image.png",
  author: "Alex Chen",
  twitterHandle: "@alexchendev",
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | Alex Chen",
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
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
};
