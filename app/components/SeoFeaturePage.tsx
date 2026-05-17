import type { FeaturePage } from "../lib/seo";
import { featurePages } from "../lib/seo";
import Link from "next/link";
import { Activity, ArrowRight, CheckCircle2, Gauge, ShieldCheck } from "lucide-react";
import { DownloadCta } from "./DownloadCta";

type SeoFeaturePageProps = {
  page: FeaturePage;
};

export function SeoFeaturePage({ page }: SeoFeaturePageProps) {
  const relatedPages = page.relatedSlugs
    .map((slug) => featurePages.find((featurePage) => featurePage.slug === slug))
    .filter((relatedPage): relatedPage is FeaturePage => Boolean(relatedPage));

  return (
    <>
      {/* Premium Centered Hero - Removed Showcase Image & Stats Card */}
      <section className="relative mx-auto max-w-4xl px-6 pb-20 pt-20 md:px-10 text-center flex flex-col items-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        <span className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-1.5 text-xs tracking-[0.18em] text-cyan-200 font-semibold uppercase">
          {page.eyebrow}
        </span>
        
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl max-w-3xl bg-clip-text">
          {page.title}
        </h1>
        
        <p className="mt-6 max-w-2xl text-base text-cyan-100/80 md:text-lg leading-relaxed">
          {page.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
          <Link
            href="/download"
            className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
          >
            Download DriveWatch <ArrowRight size={16} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-7 py-3.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20 active:scale-95"
          >
            Read Guides
          </Link>
        </div>
      </section>

      {/* Clean features grid section */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Professional {page.eyebrow} with DriveWatch
          </h2>
          <p className="mt-3 text-cyan-100/75 leading-relaxed">
            Built for people who want premium PC monitoring software, clearer hardware
            analytics, and practical system diagnostics without a noisy workflow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {page.sections.map((section, index) => {
            const Icon = [Activity, Gauge, ShieldCheck][index] ?? Activity;

            return (
              <article key={section.title} className="rounded-2xl glass-card p-6 border border-cyan-500/10">
                <Icon className="mb-5 h-6 w-6 text-cyan-300" />
                <h3 className="mb-3 text-xl font-semibold text-white">{section.title}</h3>
                <p className="text-sm leading-6 text-cyan-50/72">{section.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Benefits grid section */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-10 border-t border-cyan-500/10">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Why it helps</h2>
          <p className="mt-3 text-cyan-100/75 leading-relaxed">
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

      {/* Related monitoring guides */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 border-t border-cyan-500/10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl text-center">
          Related monitoring guides
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {relatedPages.map((relatedPage) => (
            <Link
              key={relatedPage.slug}
              href={relatedPage.slug}
              className="rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:neon-outline border border-cyan-500/10"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">{relatedPage.metaTitle}</h3>
              <p className="text-sm leading-6 text-cyan-100/70">{relatedPage.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10 border-t border-cyan-500/10">
        <h2 className="mb-6 text-3xl font-semibold text-white md:text-4xl text-center">FAQ</h2>
        <div className="space-y-3">
          {page.faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5 transition-all">
              <summary className="cursor-pointer font-medium text-cyan-50 hover:text-cyan-300 transition-colors">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-cyan-100/70 pl-2 border-l border-cyan-500/30">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <DownloadCta />
    </>
  );
}
