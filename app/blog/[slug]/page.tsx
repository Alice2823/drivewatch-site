import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Download } from "lucide-react";
import { DownloadCta } from "../../components/DownloadCta";
import { SiteChrome } from "../../components/SiteChrome";
import { blogPosts, createMetadata, getBlogPost, getFeaturePage } from "../../lib/seo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: `${post.publishedAt}T00:00:00.000Z`,
    modifiedTime: `${post.publishedAt}T00:00:00.000Z`,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedFeature = getFeaturePage(post.relatedFeatureSlug);

  return (
    <SiteChrome>
      <article className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 md:px-10">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
        >
          <ArrowRight className="rotate-180" size={15} /> Blog
        </Link>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-cyan-100/65">
          <span className="rounded-full border border-cyan-300/25 px-3 py-1">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={14} /> {post.publishedAt}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-cyan-50/80">{post.description}</p>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="text-base leading-8 text-cyan-100/75">{section.body}</p>
            </section>
          ))}
        </div>

        <aside className="mt-12 rounded-2xl glass-card p-6">
          <h2 className="mb-3 text-2xl font-semibold text-white">Key takeaway</h2>
          <p className="text-base leading-8 text-cyan-100/75">{post.takeaway}</p>
        </aside>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href={relatedFeature.slug}
            className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5 transition-all hover:neon-outline"
          >
            <h2 className="mb-2 text-lg font-semibold text-white">{relatedFeature.metaTitle}</h2>
            <p className="text-sm leading-6 text-cyan-100/70">{relatedFeature.metaDescription}</p>
          </Link>
          <Link
            href="/download"
            className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5 transition-all hover:neon-outline"
          >
            <h2 className="mb-2 inline-flex items-center gap-2 text-lg font-semibold text-white">
              <Download size={18} /> Download DriveWatch
            </h2>
            <p className="text-sm leading-6 text-cyan-100/70">
              Install DriveWatch for SSD health monitoring, fan RPM monitoring,
              CPU monitoring, GPU temperature tracking, and diagnostics.
            </p>
          </Link>
        </div>
      </article>
      <DownloadCta />
    </SiteChrome>
  );
}
