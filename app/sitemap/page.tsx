import type { Metadata } from "next";
import Link from "next/link";
import { Map, Home, Download, FileText, Activity, BookOpen } from "lucide-react";
import { createMetadata, featurePages, blogPosts } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Sitemap | DriveWatch",
  description: "Navigate through all DriveWatch pages, features, and blog posts with our complete sitemap.",
  path: "/sitemap",
});

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <header className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-cyan-500/10 p-3 text-cyan-400">
          <Map size={32} />
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Sitemap</h1>
        <p className="mt-4 text-cyan-100/60 text-sm">A complete overview of the DriveWatch website</p>
      </header>

      <div className="space-y-8">
        {/* Main Pages */}
        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Home className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Main Pages</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all">
              <Home size={18} className="text-cyan-400/70" />
              <span className="text-cyan-100/80">Home</span>
            </Link>
            <Link href="/download" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all">
              <Download size={18} className="text-cyan-400/70" />
              <span className="text-cyan-100/80">Download</span>
            </Link>
            <Link href="/blog" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all">
              <BookOpen size={18} className="text-cyan-400/70" />
              <span className="text-cyan-100/80">Blog</span>
            </Link>
            <Link href="/privacy" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all">
              <FileText size={18} className="text-cyan-400/70" />
              <span className="text-cyan-100/80">Privacy Policy</span>
            </Link>
            <Link href="/terms" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all">
              <FileText size={18} className="text-cyan-400/70" />
              <span className="text-cyan-100/80">Terms of Service</span>
            </Link>
          </div>
        </section>

        {/* Feature Pages */}
        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Features</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featurePages.map((page) => (
              <Link 
                key={page.slug} 
                href={page.slug}
                className="flex flex-col gap-2 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
              >
                <span className="text-white font-medium">{page.navTitle}</span>
                <span className="text-xs text-cyan-100/60 line-clamp-1">{page.description}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Blog Posts</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 p-4 rounded-xl bg-slate-900/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
              >
                <span className="text-white font-medium line-clamp-1">{post.title}</span>
                <span className="text-xs text-cyan-100/60 line-clamp-1">{post.description}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
