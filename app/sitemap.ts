import type { MetadataRoute } from "next";
import { blogPosts, featurePages, siteUrl } from "./lib/seo";

const lastModified = new Date("2026-05-16T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/download`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/features`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteUrl}/thermawatch`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const featureRoutes: MetadataRoute.Sitemap = featurePages.map((page) => ({
    url: `${siteUrl}${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.74,
  }));

  return [...staticRoutes, ...featureRoutes, ...blogRoutes];
}
