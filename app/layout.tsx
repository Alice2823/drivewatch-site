import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { GoogleAnalyticsPageView } from "./components/GoogleAnalyticsPageView";
import { JsonLd } from "./components/JsonLd";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./globals.css";
import {
  createMetadata,
  seoKeywords,
  siteDescription,
  siteName,
  softwareApplicationJsonLd,
} from "./lib/seo";
import { GA_MEASUREMENT_ID } from "./lib/analytics";

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
      <body className="min-h-full flex flex-col bg-slate-950">
        <JsonLd id="drivewatch-software-application" data={softwareApplicationJsonLd} />
        
        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 cyber-grid opacity-[0.15]" />
          <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute right-[10%] bottom-[20%] h-[500px] w-[500px] bg-violet-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        </div>

        <Navbar />
        
        <main className="relative z-10 flex-grow pt-20">
          {children}
        </main>

        <Footer />

        <Script
          id="google-tag-manager"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
            `,
          }}
        />
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
      </body>
    </html>
  );
}

