import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "./components/JsonLd";
import "./globals.css";
import {
  createMetadata,
  seoKeywords,
  siteDescription,
  siteName,
  softwareApplicationJsonLd,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "DriveWatch | SSD Health Monitor, Fan RPM & PC Diagnostics",
    description: siteDescription,
    path: "/",
    keywords: seoKeywords,
  }),
  applicationName: siteName,
  category: "PC monitoring software",
  creator: siteName,
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  title: {
    default: "DriveWatch | SSD Health Monitor, Fan RPM & PC Diagnostics",
    template: "%s | DriveWatch",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06111f" },
    { media: "(prefers-color-scheme: dark)", color: "#04050a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd id="drivewatch-software-application" data={softwareApplicationJsonLd} />
        {children}
      </body>
    </html>
  );
}
