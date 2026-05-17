import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { blogPosts, createMetadata, featurePages } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "DriveWatch Blog",
  description:
    "Read DriveWatch guides for SSD health monitoring, fan RPM monitoring, CPU temperature monitoring, GPU temperature tracking, and Windows system diagnostics.",
  path: "/blog",
  keywords: ["DriveWatch blog", "hardware monitoring guides", "PC monitoring guides", "disk diagnostic tool", "HDD health monitor"],
});

export default function BlogPage() {
  return (
    <>
      {/* Premium Centered Hero for Blog - Removed Showcase Image */}
      <section className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 md:px-10 text-center flex flex-col items-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        <span className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-1.5 text-xs tracking-[0.18em] text-cyan-200 font-semibold uppercase">
          DRIVEWATCH GUIDES
        </span>
        
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl max-w-3xl">
          PC monitoring guides for storage, thermals, and drive health
        </h1>
        
        <p className="mt-6 max-w-2xl text-base text-cyan-100/80 md:text-lg leading-relaxed">
          Learn how to use DriveWatch as a disk diagnostic tool to check SSD health, perform an HDD scan, monitor fan RPM, understand CPU
          temperature, track GPU temperatures, and use hardware analytics.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
          <Link
            href="/download"
            className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
          >
            <Download size={16} /> Download DriveWatch
          </Link>
          <Link
            href="/ssd-health-monitor"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-7 py-3.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20 active:scale-95"
          >
            SSD health monitor <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Blog Posts list */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl glass-card p-6 border border-cyan-500/10">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-cyan-100/65">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 px-3 py-1">
                  <BookOpen size={14} /> {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-cyan-200">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-5 text-sm leading-6 text-cyan-100/72">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
              >
                Read article <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Feature pages linking */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 border-t border-cyan-500/10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl text-center">
          Explore DriveWatch features
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featurePages.map((page) => (
            <Link
              key={page.slug}
              href={page.slug}
              className="rounded-2xl glass-card p-5 transition-all hover:-translate-y-1 hover:neon-outline border border-cyan-500/10"
            >
              <h3 className="mb-2 text-lg font-semibold text-cyan-50">{page.navTitle}</h3>
              <p className="text-sm leading-6 text-cyan-100/70">{page.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
