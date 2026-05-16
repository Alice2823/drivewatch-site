import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, MonitorCog, ShieldCheck } from "lucide-react";
import { SiteChrome } from "../components/SiteChrome";
import {
  createMetadata,
  downloadLinks,
  featurePages,
  softwareVersion,
} from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Download DriveWatch for Windows",
  description:
    "Download DriveWatch for Windows and install professional SSD health monitoring, fan RPM monitoring, CPU monitoring, GPU temperature tracking, disk health analytics, and diagnostics.",
  path: "/download",
  keywords: ["download DriveWatch", "Windows monitoring software download", "PC monitoring software"],
});

const installSteps = [
  "Download the Windows installer",
  "Run the setup package",
  "Launch DriveWatch",
  "Enable smart monitoring alerts",
];

const faqs = [
  {
    question: "What does DriveWatch monitor?",
    answer:
      "DriveWatch monitors SSD health, disk health analytics, USB and NAS activity, CPU and GPU temperature context, fan RPM monitoring context, system diagnostics, and smart alerts.",
  },
  {
    question: "Is DriveWatch built for Windows?",
    answer:
      "Yes. DriveWatch is positioned as professional Windows monitoring software, with installer downloads and a workflow designed for PC diagnostics.",
  },
  {
    question: "Which version is available?",
    answer: `The current website download points to DriveWatch version ${softwareVersion}.`,
  },
];

export default function DownloadPage() {
  return (
    <SiteChrome>
      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-16 pt-20 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.18em] text-cyan-100">
            DRIVEWATCH DOWNLOAD
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Download DriveWatch for Windows monitoring
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cyan-50/80 md:text-lg">
            Install DriveWatch for SSD health monitoring, fan RPM monitoring,
            CPU monitoring, GPU temperature tracking, disk health analytics,
            smart alerts, and system diagnostics.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={downloadLinks.windows}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
            >
              <Download size={16} /> Windows Installer
            </a>
            <a
              href={downloadLinks.mac}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20"
            >
              macOS Package
            </a>
          </div>
        </div>

        <div className="rounded-3xl glass-card p-6">
          <MonitorCog className="mb-5 h-8 w-8 text-cyan-300" />
          <h2 className="mb-4 text-2xl font-semibold text-white">Compatibility</h2>
          <div className="space-y-3 text-sm text-cyan-100/75">
            <p>Version: {softwareVersion}</p>
            <p>Primary platform: Windows monitoring software</p>
            <p>Package: secure installer with automatic update workflow</p>
            <p>Use cases: SSD health, disk health, thermals, fan RPM, diagnostics</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
          Installation steps
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {installSteps.map((step, index) => (
            <div key={step} className="rounded-2xl glass-card p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "SSD health monitor and disk health checker",
            "Fan RPM monitoring with CPU and GPU temperature context",
            "Windows system diagnostics with hardware analytics",
          ].map((feature) => (
            <div key={feature} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5">
              <CheckCircle2 className="mb-4 h-6 w-6 text-cyan-300" />
              <h2 className="text-lg font-semibold text-white">{feature}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">
          Feature pages
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featurePages.map((page) => (
            <Link
              key={page.slug}
              href={page.slug}
              className="rounded-2xl glass-card p-5 transition-all hover:-translate-y-1 hover:neon-outline"
            >
              <h3 className="mb-2 text-lg font-semibold text-cyan-50">{page.metaTitle}</h3>
              <p className="text-sm leading-6 text-cyan-100/70">{page.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.16em] text-cyan-100">
          <ShieldCheck size={14} /> DOWNLOAD FAQ
        </div>
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-medium text-cyan-50">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-cyan-100/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/15 via-slate-900/70 to-violet-500/20 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Start monitoring your PC with DriveWatch
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-cyan-100/75">
            Download DriveWatch and connect SSD health monitoring, hardware
            analytics, fan RPM monitoring, CPU monitoring, GPU monitoring, and
            system diagnostics in one premium workflow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={downloadLinks.windows}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
            >
              Download Windows <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
