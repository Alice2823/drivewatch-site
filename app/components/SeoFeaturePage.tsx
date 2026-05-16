import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, CheckCircle2, Gauge, ShieldCheck } from "lucide-react";
import { DownloadCta } from "./DownloadCta";
import { SiteChrome } from "./SiteChrome";
import { FeaturePage, featurePages } from "../lib/seo";

type SeoFeaturePageProps = {
  page: FeaturePage;
};

export function SeoFeaturePage({ page }: SeoFeaturePageProps) {
  const relatedPages = page.relatedSlugs
    .map((slug) => featurePages.find((featurePage) => featurePage.slug === slug))
    .filter((relatedPage): relatedPage is FeaturePage => Boolean(relatedPage));

  return (
    <SiteChrome>
      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 md:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.18em] text-cyan-100">
            {page.eyebrow.toUpperCase()}
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cyan-50/80 md:text-lg">
            {page.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/download"
              className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
            >
              Download DriveWatch <ArrowRight size={16} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20"
            >
              Read Guides
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-b from-[#10243d] to-[#0a1530] p-4 shadow-[0_20px_100px_rgba(34,211,238,0.18)]">
          <div className="mb-3 flex items-center justify-between rounded-xl border border-cyan-300/20 bg-slate-900/70 px-4 py-2 text-xs text-cyan-100/80">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live Diagnostics
            </span>
            <span>{page.statLabel}</span>
          </div>
          <Image
            src="/images/drivewatch-dashboard.png"
            alt={`DriveWatch ${page.eyebrow} dashboard preview`}
            width={1200}
            height={700}
            priority
            className="rounded-2xl border border-cyan-300/20 shadow-[0_10px_60px_rgba(0,0,0,0.5)]"
          />
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              [page.stat, page.statLabel],
              ["20+", "Signals"],
              ["Smart", "Alerts"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-cyan-300/20 bg-slate-900/70 p-3">
                <p className="text-lg font-semibold text-cyan-300">{value}</p>
                <p className="text-xs text-cyan-100/65">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Professional {page.eyebrow} with DriveWatch
          </h2>
          <p className="mt-3 text-cyan-100/75">
            Built for people who want premium PC monitoring software, clearer hardware
            analytics, and practical system diagnostics without a noisy workflow.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {page.sections.map((section, index) => {
            const Icon = [Activity, Gauge, ShieldCheck][index] ?? Activity;

            return (
              <article key={section.title} className="rounded-2xl glass-card p-6">
                <Icon className="mb-5 h-6 w-6 text-cyan-300" />
                <h3 className="mb-3 text-xl font-semibold text-white">{section.title}</h3>
                <p className="text-sm leading-6 text-cyan-50/72">{section.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Why it helps</h2>
          <p className="mt-3 text-cyan-100/75">
            DriveWatch keeps the important signals close together so SSD health,
            fan RPM monitoring, CPU monitoring, GPU monitoring, and disk health
            analytics support the same diagnostic picture.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {page.benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-4">
              <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-300" />
              <p className="text-sm text-cyan-50/80">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">Related monitoring guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {relatedPages.map((relatedPage) => (
            <Link
              key={relatedPage.slug}
              href={relatedPage.slug}
              className="rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:neon-outline"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">{relatedPage.metaTitle}</h3>
              <p className="text-sm leading-6 text-cyan-100/70">{relatedPage.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl">FAQ</h2>
        <div className="space-y-3">
          {page.faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-medium text-cyan-50">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-cyan-100/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <DownloadCta />
    </SiteChrome>
  );
}
