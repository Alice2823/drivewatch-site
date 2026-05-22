import { createMetadata } from "../../lib/seo";
import { JsonLd } from "../../components/JsonLd";
import SectorRepairClient from "./SectorRepairClient";

export const metadata = createMetadata({
  title: "DriveWatch Sector Repair - Stabilize & Recover Disk Sectors",
  description: "Advanced sector stabilization and recovery system for weak and unstable drive sectors using DriveWatch's repair algorithms.",
  path: "/features/sector-repair",
  keywords: ["sector repair", "sector stabilization", "disk recovery", "bad sector repair", "drive repair", "sector recovery"],
});

const sectorRepairJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DriveWatch Sector Repair",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows",
  description: "Advanced sector stabilization and recovery system for weak and unstable drive sectors.",
  url: "https://drivewatch.site/features/sector-repair",
  publisher: {
    "@type": "Organization",
    name: "DriveWatch",
    url: "https://drivewatch.site",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function SectorRepairPage() {
  return (
    <>
      <JsonLd id="sector-repair-jsonld" data={sectorRepairJsonLd} />
      <SectorRepairClient />
    </>
  );
}
