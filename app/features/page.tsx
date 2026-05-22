import { createMetadata } from "../lib/seo";
import { JsonLd } from "../components/JsonLd";
import FeaturesPageClient from "./FeaturesPageClient";

export const metadata = createMetadata({
  title: "DriveWatch Features - SSD Health, SMART Monitor & Sector Repair",
  description:
    "DriveWatch offers advanced SSD and HDD monitoring, SMART diagnostics, sector surface scanning, disk repair, and system health tools.",
  path: "/features",
  keywords: [
    "SSD Health",
    "HDD Monitor",
    "SMART Monitor",
    "Sector Surface Scan",
    "Sector Repair",
    "Disk Checker",
    "Drive Diagnostics",
  ],
});

const featuresJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "DriveWatch Features - SSD Health, SMART Monitor & Sector Repair",
  description:
    "DriveWatch offers advanced SSD and HDD monitoring, SMART diagnostics, sector surface scanning, disk repair, and system health tools.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SSD Health" },
      { "@type": "ListItem", position: 2, name: "Fan RPM" },
      { "@type": "ListItem", position: 3, name: "GPU Temps" },
      { "@type": "ListItem", position: 4, name: "CPU Temps" },
      { "@type": "ListItem", position: 5, name: "Diagnostics" },
      { "@type": "ListItem", position: 6, name: "HDD Monitor" },
      { "@type": "ListItem", position: 7, name: "SSD Check" },
      { "@type": "ListItem", position: 8, name: "Drive Scan" },
      { "@type": "ListItem", position: 9, name: "Disk Checker" },
      { "@type": "ListItem", position: 10, name: "SMART Monitor" },
      { "@type": "ListItem", position: 11, name: "Sector Surface Scan" },
      {
        "@type": "ListItem",
        position: 12,
        name: "Sector Repair / Stabilization",
      },
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "DriveWatch",
    url: "https://drivewatch.site",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd id="features-jsonld" data={featuresJsonLd} />
      <FeaturesPageClient />
    </>
  );
}
