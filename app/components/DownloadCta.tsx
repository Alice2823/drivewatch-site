import Link from "next/link";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { downloadLinks, softwareVersion } from "../lib/seo";

type DownloadCtaProps = {
  heading?: string;
  description?: string;
};

export function DownloadCta({
  heading = "Download DriveWatch for Windows",
  description = "Install DriveWatch for SSD health monitoring, fan RPM context, CPU monitoring, GPU temperature tracking, disk health analytics, and system diagnostics.",
}: DownloadCtaProps) {
  return (
    <section id="download" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-8 rounded-3xl glass-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.16em] text-cyan-100">
            <ShieldCheck size={14} /> SECURE INSTALLER
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-3xl text-cyan-100/75">{description}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-cyan-100/85">
            <span className="rounded-full border border-cyan-300/35 px-3 py-1">
              Version {softwareVersion}
            </span>
            <span className="rounded-full border border-cyan-300/35 px-3 py-1">
              Windows installer
            </span>
            <span className="rounded-full border border-cyan-300/35 px-3 py-1">
              Hardware analytics
            </span>
            <span className="rounded-full border border-cyan-300/35 px-3 py-1">
              Smart alerts
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href={downloadLinks.windows}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
          >
            <Download size={16} /> Windows
          </a>
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20"
          >
            Install guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
