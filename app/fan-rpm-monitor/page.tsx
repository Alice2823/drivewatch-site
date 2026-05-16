import type { Metadata } from "next";
import { SeoFeaturePage } from "../components/SeoFeaturePage";
import { createMetadata, getFeaturePage } from "../lib/seo";

const page = getFeaturePage("/fan-rpm-monitor");

export const metadata: Metadata = createMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.slug,
  keywords: page.keywords,
});

export default function FanRpmMonitorPage() {
  return <SeoFeaturePage page={page} />;
}
