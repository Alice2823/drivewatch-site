import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drivewatch.app"),
  title: "DriveWatch | Professional Storage Intelligence",
  description:
    "DriveWatch is a professional Windows software for drive health monitoring, USB and NAS monitoring, recovery tools, smart alerts, and real-time performance analytics.",
  openGraph: {
    title: "DriveWatch | Professional Storage Intelligence",
    description:
      "Monitor, protect, and optimize every drive with real-time analytics and smart alerts.",
    type: "website",
    url: "https://drivewatch.app",
    images: [
      {
        url: "/images/drivewatch-dashboard.png",
        width: 1200,
        height: 630,
        alt: "DriveWatch dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveWatch",
    description:
      "Professional drive, USB, and NAS monitoring for Windows with automatic updates.",
    images: ["/images/drivewatch-dashboard.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: ["/icon.png"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
