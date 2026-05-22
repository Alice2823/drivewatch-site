"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Radar,
  Search,
  HardDrive,
  Cpu,
  ShieldCheck,
  Activity,
  CheckCircle,
  ArrowRight,
  Download,
  ChevronDown,
} from "lucide-react";

/* ─── Types ────────────────────────────────────────────────────────── */

type SectorState = "healthy" | "slow" | "weak" | "damaged";

/* ─── Sector Grid Visualization ────────────────────────────────────── */

function SectorGrid({ reducedMotion }: { reducedMotion: boolean }) {
  const grid = useMemo<SectorState[]>(() => {
    const states: SectorState[] = [];
    for (let i = 0; i < 64; i++) {
      const rand = Math.random();
      if (rand < 0.7) states.push("healthy");
      else if (rand < 0.85) states.push("slow");
      else if (rand < 0.95) states.push("weak");
      else states.push("damaged");
    }
    return states;
  }, []);

  const colorMap: Record<SectorState, string> = {
    healthy: "bg-emerald-400",
    slow: "bg-yellow-400",
    weak: "bg-orange-400",
    damaged: "bg-red-400",
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-8 gap-1">
        {grid.map((state, i) => (
          <div
            key={i}
            className={`h-4 w-4 rounded-sm ${colorMap[state]} sm:h-5 sm:w-5`}
            style={
              reducedMotion
                ? { opacity: 1 }
                : {
                    opacity: 0.2,
                    animation: `sectorReveal 0.3s ease-in-out ${(Math.floor(i / 8) * 0.5) + (i % 8) * 0.05}s forwards`,
                  }
            }
          />
        ))}
      </div>

      {/* Scan line */}
      {!reducedMotion && (
        <div
          className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ animation: "scanSweep 4s linear infinite" }}
        />
      )}

      {/* Progress bar */}
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cyan-950/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
          style={
            reducedMotion
              ? { width: "100%" }
              : { animation: "scanProgress 5s ease-in-out infinite" }
          }
        />
      </div>

      <style>{`
        @keyframes scanSweep {
          0% { top: 0; }
          100% { top: 100%; }
        }
        @keyframes sectorReveal {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes scanProgress {
          0% { width: 0%; }
          80% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
}

/* ─── Floating Particles ───────────────────────────────────────────── */

function FloatingParticles({ reducedMotion }: { reducedMotion: boolean }) {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 12 + Math.random() * 20,
      delay: Math.random() * 8,
    }));
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.15,
            animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes particleFloat {
          0% { transform: translateY(0); opacity: 0.15; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─── FAQ Item ─────────────────────────────────────────────────────── */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white sm:text-base">{question}</span>
        <ChevronDown
          size={18}
          className={`ml-3 shrink-0 text-cyan-300 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-4" : "max-h-0"}`}
      >
        <p className="px-6 text-sm text-cyan-50/70">{answer}</p>
      </div>
    </div>
  );
}

/* ─── Hero Section ─────────────────────────────────────────────────── */

function HeroSection({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-32">
      <FloatingParticles reducedMotion={reducedMotion} />

      {/* Background glows */}
      {!reducedMotion && (
        <>
          <div className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[140px]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/15 blur-[120px]" aria-hidden="true" />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-cyan-300">
            Sector surface scan
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Sector Surface Scan
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-cyan-50/80 md:text-lg">
            Deep sector-by-sector disk analysis for detecting damaged, weak, unstable, or slow sectors.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 neon-outline"
            >
              <Radar size={16} /> Start Surface Scan
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Download size={16} /> Download DriveWatch
            </Link>
          </div>
        </motion.div>

        {/* Sector grid visualization */}
        <motion.div
          className="flex-shrink-0"
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-2xl glass-card p-6 neon-outline">
            <SectorGrid reducedMotion={reducedMotion} />
            <div className="mt-3 flex items-center gap-3 text-xs text-cyan-100/60">
              <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-emerald-400" /> Healthy</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-yellow-400" /> Slow</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-orange-400" /> Weak</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-red-400" /> Damaged</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Content Sections ─────────────────────────────────────────────── */

function WhatIsSurfaceScan({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        className="rounded-2xl glass-card p-8 md:p-12"
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-cyan-500/10 p-3">
            <Search className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">What is Surface Scan</h2>
            <p className="mt-3 max-w-3xl text-cyan-50/70">
              A low-level sector-by-sector analysis that reads every addressable block on your drive to detect physical and logical damage. Unlike quick filesystem checks, surface scanning tests the actual magnetic or flash storage medium to find sectors that are failing, slow to respond, or returning inconsistent data.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HowDetectsBadSectors({ reducedMotion }: { reducedMotion: boolean }) {
  const techniques = [
    { icon: Radar, label: "Read-Verify Testing", desc: "Tests each sector's ability to return consistent data" },
    { icon: Activity, label: "Response Time Analysis", desc: "Measures sector access latency to detect slowdowns" },
    { icon: ShieldCheck, label: "Data Integrity Check", desc: "Validates stored data against ECC checksums" },
    { icon: Cpu, label: "Pattern Recognition", desc: "Identifies clusters of degrading sectors" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
          How DriveWatch Detects Bad Sectors
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-50/70">
          Advanced read-verify algorithms test each sector&apos;s response time and data integrity to classify sector health status.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techniques.map((t, i) => (
            <motion.div
              key={t.label}
              className="rounded-xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:neon-outline"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <t.icon className="mb-3 h-5 w-5 text-cyan-300" />
              <h3 className="text-sm font-semibold text-white">{t.label}</h3>
              <p className="mt-1 text-xs text-cyan-50/60">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SsdVsHddAnalysis({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
          SSD vs HDD Sector Analysis
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-50/70">
          Different scanning strategies optimized for flash memory cells versus magnetic platters ensure accurate results on any drive type.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl glass-card p-6 transition-all duration-300 hover:neon-outline">
            <div className="mb-4 flex items-center gap-3">
              <HardDrive className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">HDD Scanning</h3>
            </div>
            <ul className="space-y-2 text-sm text-cyan-50/70">
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Sequential platter reads for maximum throughput</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Head positioning optimization to reduce wear</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Magnetic signal strength analysis</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Spindle speed compensation algorithms</li>
            </ul>
          </div>
          <div className="rounded-2xl glass-card p-6 transition-all duration-300 hover:neon-outline">
            <div className="mb-4 flex items-center gap-3">
              <Cpu className="h-5 w-5 text-violet-400" />
              <h3 className="text-lg font-semibold text-white">SSD Scanning</h3>
            </div>
            <ul className="space-y-2 text-sm text-cyan-50/70">
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Flash cell voltage threshold testing</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Wear-leveling aware scan patterns</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> NAND page-level integrity verification</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" /> Controller health assessment</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function RealtimeScanVisualization({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        className="rounded-2xl glass-card p-8 md:p-12"
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">Real-time Scan Visualization</h2>
            <p className="mt-3 text-cyan-50/70">
              Watch your drive scan in real time with a visual sector map that updates as each block is tested. Color-coded results make it easy to identify problem areas at a glance.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cyan-50/70">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-300" /> Live sector map with color-coded health status</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-300" /> Progress tracking with ETA estimation</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-300" /> Sector access time histogram</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-300" /> Exportable scan reports</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-xl bg-slate-950/50 p-4">
              <SectorGrid reducedMotion={reducedMotion} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectorHealthMonitoring({ reducedMotion }: { reducedMotion: boolean }) {
  const benefits = [
    "Detect damaged sectors before data loss occurs",
    "Identify slow and unstable sectors affecting performance",
    "Map entire drive surface with sector-level granularity",
    "Distinguish between recoverable and permanently failed sectors",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
          Sector Health Monitoring
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-50/70">
          Continuous monitoring ensures your drive stays healthy over time with proactive alerts and trend analysis.
        </p>
        <div className="mx-auto mt-8 max-w-2xl space-y-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              className="flex items-center gap-3 rounded-xl glass-card px-5 py-4"
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <CheckCircle size={18} className="shrink-0 text-cyan-300" />
              <span className="text-sm text-white">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── FAQ Section ──────────────────────────────────────────────────── */

function FaqSection({ reducedMotion }: { reducedMotion: boolean }) {
  const faqs = [
    { question: "How long does a surface scan take?", answer: "Scan duration depends on drive size and speed. A 1TB HDD typically takes 2-4 hours for a full surface scan, while NVMe SSDs complete in minutes." },
    { question: "Will a surface scan damage my drive?", answer: "No. Surface scanning performs read-only operations that do not write data or consume SSD write cycles." },
    { question: "Can I use my computer during a scan?", answer: "Yes. DriveWatch runs scans at low priority so your system remains responsive during the analysis." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────────────── */

function FinalCta({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-violet-500/20 p-10 text-center md:p-16"
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/20" />
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Protect Your Data with Surface Scanning
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cyan-50/70">
          Download DriveWatch and run a full surface scan to detect sector damage before it leads to data loss.
        </p>
        <Link
          href="/download"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 neon-outline"
        >
          <Download size={16} /> Download DriveWatch Free
        </Link>
      </motion.div>
    </section>
  );
}

/* ─── Main Component ───────────────────────────────────────────────── */

export default function SurfaceScanClient() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroSection reducedMotion={prefersReducedMotion} />
      <WhatIsSurfaceScan reducedMotion={prefersReducedMotion} />
      <HowDetectsBadSectors reducedMotion={prefersReducedMotion} />
      <SsdVsHddAnalysis reducedMotion={prefersReducedMotion} />
      <RealtimeScanVisualization reducedMotion={prefersReducedMotion} />
      <SectorHealthMonitoring reducedMotion={prefersReducedMotion} />
      <FaqSection reducedMotion={prefersReducedMotion} />
      <FinalCta reducedMotion={prefersReducedMotion} />
    </div>
  );
}
