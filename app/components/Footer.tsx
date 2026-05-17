"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { featurePages } from "../lib/seo";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-500/10 bg-slate-950 px-6 py-12 md:px-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="DriveWatch home">
              <Image
                src="/favicon.png"
                alt="DriveWatch logo"
                width={48}
                height={48}
                className="rounded-full bg-white p-0.5"
              />
              <div>
                <p className="text-xl font-bold text-white tracking-tight">DriveWatch</p>
                <p className="text-xs text-cyan-400 font-medium tracking-wider uppercase">Storage Intelligence</p>
              </div>
            </Link>
            <p className="text-sm text-cyan-100/60 leading-relaxed max-w-xs">
              Professional PC monitoring software for SSD health, fan RPM, CPU & GPU diagnostics.
              Take full control of your hardware performance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ap2823"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-100/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:allipatel33@gmail.com"
                className="p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-100/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Features Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Features</h3>
            <nav className="flex flex-col gap-3">
              {featurePages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.slug}
                  className="text-sm text-cyan-100/60 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-cyan-500/30" />
                  {page.navTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Resources</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/blog" className="text-sm text-cyan-100/60 hover:text-cyan-300 transition-colors">
                Monitoring Blog
              </Link>
              <Link href="/download" className="text-sm text-cyan-100/60 hover:text-cyan-300 transition-colors">
                Download Center
              </Link>
              <Link href="/system-diagnostics" className="text-sm text-cyan-100/60 hover:text-cyan-300 transition-colors">
                System Diagnostics
              </Link>
              <Link href="/sitemap" className="text-sm text-cyan-100/60 hover:text-cyan-300 transition-colors">
                Sitemap
              </Link>
            </nav>
          </div>

          {/* Feedback Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Send Feedback</h3>
            <p className="text-sm text-cyan-100/60">
              Your feedback helps us improve DriveWatch.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const msg = formData.get("message") as string;
                window.location.href = `mailto:allipatel33@gmail.com?subject=DriveWatch Feedback&body=${encodeURIComponent(msg)}`;
              }}
              className="space-y-3"
            >
              <textarea
                name="message"
                required
                placeholder="How can we improve?"
                rows={3}
                className="w-full bg-slate-900 border border-cyan-500/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-cyan-100/30 focus:outline-none focus:border-cyan-400/50 transition-all resize-none"
              />
              <button 
                type="submit"
                className="w-full py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 rounded-xl text-sm font-bold hover:bg-cyan-500/20 transition-all active:scale-95"
              >
                Send Feedback
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cyan-100/40">
            &copy; {new Date().getFullYear()} DriveWatch. All rights reserved. Professional PC monitoring software.
          </p>
          <div className="flex items-center gap-6 text-xs text-cyan-100/40">
            <Link href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
