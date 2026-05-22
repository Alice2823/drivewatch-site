import { createMetadata } from "../../lib/seo";
import { JsonLd } from "../../components/JsonLd";
import SurfaceScanClient from "./SurfaceScanClient";

export const metadata = createMetadata({
  title: "DriveWatch Surface Scan - Detect Bad & Weak Disk Sectors",
  description: "Perform deep sector-by-sector surface analysis to detect damaged, weak, slow, or unstable disk sectors with DriveWatch's advanced scanning technology.",
  path: "/features/surface-scan",
  keywords: ["surface scan", "sector scan", "bad sector detection", "disk surface analysis", "weak sectors", "sector surface scan"],
});

const surfaceScanJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DriveWatch Surface Scan",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows",
  description: "Perform deep sector-by-sector surface analysis to detect damaged, weak, slow, or unstable disk sectors.",
  url: "https://drivewatch.site/features/surface-scan",
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

export default function SurfaceScanPage() {
  return (
    <>
      <JsonLd id="surface-scan-jsonld" data={surfaceScanJsonLd} />
      <SurfaceScanClient />
    </>
  );
}
