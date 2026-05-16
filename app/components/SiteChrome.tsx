import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { featurePages } from "../lib/seo";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />
      <div className="glow-orb left-[6%] top-28 h-48 w-48 bg-cyan-400/25" />
      <div className="glow-orb right-[8%] top-96 h-60 w-60 bg-violet-500/20 [animation-delay:2s]" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 pt-8 md:px-10">
      <Link href="/" className="flex items-center gap-3" aria-label="DriveWatch home">
        <Image
          src="/images/drivewatch-logo.png"
          alt="DriveWatch logo"
          width={44}
          height={44}
          className="rounded-full bg-white p-0.5 ring-1 ring-cyan-200/45"
          priority
        />
        <div>
          <p className="text-lg font-semibold tracking-wide text-white">DriveWatch</p>
          <p className="text-xs text-cyan-100/70">Live Storage Intelligence</p>
        </div>
      </Link>
      <nav className="hidden flex-wrap items-center gap-5 text-sm text-cyan-100/80 lg:flex">
        {featurePages.slice(0, 4).map((page) => (
          <Link key={page.slug} href={page.slug} className="transition-colors hover:text-white">
            {page.navTitle}
          </Link>
        ))}
        <Link href="/blog" className="transition-colors hover:text-white">
          Blog
        </Link>
      </nav>
      <Link
        href="/download"
        className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
      >
        <Download size={16} /> Download
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-cyan-300/15 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <Link href="/" className="flex items-center gap-3" aria-label="DriveWatch home">
          <Image
            src="/images/drivewatch-logo.png"
            alt="DriveWatch logo"
            width={38}
            height={38}
            className="rounded-full bg-white p-0.5"
          />
          <p className="font-semibold text-white">DriveWatch</p>
        </Link>
        <nav className="flex flex-wrap gap-5 text-sm text-cyan-100/80">
          <Link href="/ssd-health-monitor">SSD Health</Link>
          <Link href="/fan-rpm-monitor">Fan RPM</Link>
          <Link href="/system-diagnostics">Diagnostics</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/download">Download</Link>
        </nav>
        <div className="text-xs text-cyan-100/60">&copy; 2026 DriveWatch. All rights reserved.</div>
      </div>
    </footer>
  );
}
