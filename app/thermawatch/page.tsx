import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";
import { JsonLd } from "../components/JsonLd";
import { ThermaWatchClient } from "./ThermaWatchClient";

export const metadata: Metadata = {
  ...createMetadata({
    title: "ThermaWatch - Advanced Hardware Monitoring Software",
    description:
      "Download ThermaWatch, a powerful Windows hardware monitoring application with real-time CPU, GPU, SSD, RAM, temperature, power, voltage, and performance monitoring.",
    path: "/thermawatch",
    keywords: [
      "ThermaWatch",
      "hardware monitoring",
      "advanced hardware monitoring",
      "CPU temperature monitor",
      "GPU temperature tracking",
      "SSD temperature monitoring",
      "RAM usage checker",
      "system diagnostics",
      "Windows monitoring software",
      "PC telemetry",
      "SMART hardware diagnostic",
    ],
  }),
  title: {
    absolute: "ThermaWatch - Advanced Hardware Monitoring Software",
  },
};

const thermawatchJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ThermaWatch",
  operatingSystem: "Windows 10, Windows 11",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Monitoring application, hardware diagnostics, CPU GPU tracker",
  softwareVersion: "0.1.1",
  description:
    "Download ThermaWatch, a powerful Windows hardware monitoring application with real-time CPU, GPU, SSD, RAM, temperature, power, voltage, and performance monitoring.",
  url: "https://drivewatch.site/thermawatch",
  downloadUrl: "https://drivewatch.site/downloads/ThermaWatch_0.1.1_x64-setup.exe",
  featureList: [
    "Real-Time Temperature Monitoring",
    "Live Performance Monitoring",
    "Advanced Hardware Sensors",
    "Historical Charts",
    "Alerts & Warnings",
    "Detailed Diagnostics",
    "Modern Dashboard",
    "Lightweight Performance"
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  },
  publisher: {
    "@type": "Organization",
    name: "DriveWatch",
    url: "https://drivewatch.site"
  }
};

export default function ThermaWatchPage() {
  return (
    <>
      <JsonLd id="thermawatch-software-application" data={thermawatchJsonLd} />
      <ThermaWatchClient />
    </>
  );
}
