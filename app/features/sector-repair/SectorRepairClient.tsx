"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  Activity,
  Database,
  LineChart,
  CheckCircle,
  ArrowRight,
  Download,
  ChevronDown,
  Zap,
  Lock,
} from "lucide-react";

/* ─── Repair Pulse Visualization ───────────────────────────────────── */

function RepairPulse({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
      {/* Concentric rings */}
      {!reducedMotion && (
        <>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-cyan-400/30"
              style={{
                animation: `repairPulse 3s ease-out ${i * 1}s infinite`,
              }}
            />
          ))}
        </>
      )}

      {/* Center icon */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 backdrop-blur-sm">
        <Wrench className="h-7 w-7 text-cyan-300" />
      </div>

      {/* Sector cells transitioning */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 38 * Math.cos(rad);
          const y = 50 + 38 * Math.sin(rad);
          return (
            <div
              key={i}
              className="absolute h-3 w-3 rounded-sm"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                ...(reducedMotion
                  ? { backgroundColor: "rgb(52, 211, 153)" }
                  : { animation: `cellRecover 2s ease-in-out ${i * 0.25}s infinite` }),
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes repairPulse {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes cellRecover {
          0% { background-color: rgb(248, 113, 113); }
          50% { background-color: rgb(251, 191, 36); }
          100% { background-color: rgb(52, 211, 153); }
        }
      `}</style>
    </div>
  );
}

/* ─── Status Indicators ────────────────────────────────────────────── */

function StatusIndicators({ reducedMotion }: { reducedMotion: boolean }) {
  const states = [
    { label: "Scanning", color: "bg-red-400", glowColor: "shadow-red-400/50" },
    { label: "Repairing", color: "bg-amber-400", glowColor: "shadow-amber-400/50" },
    { label: "Recovered", color: "bg-emerald-400", glowColor: "shadow-emerald-400/50" },
  ];

  return (
    <div className="flex items-center gap-5">
      {states.map((state, i) => (
        <div key={state.label} className="flex items-center gap-2">
          <div
            className={`h-3 w-3 rounded-full ${state.color} shadow-lg ${state.glowColor}`}
            style={
              reducedMotion
                ? {}
                : { animation: `statusPulse 3s ease-in-out ${i * 1}s infinite` }
            }
          />
          <span className="text-xs text-cyan-100/70">{state.label}</span>
        </div>
      ))}
      <style>{`
        @keyframes statusPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          33%, 66% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

/* ─── Progress Bar ─────────────────────────────────────────────────── */

function SegmentedProgress({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="h-2 flex-1 rounded-full bg-cyan-950/60 overflow-hidden"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            style={
              reducedMotion
                ? { width: "100%" }
                : { animation: `segmentFill 4s ease-in-out ${i * 0.3}s infinite` }
            }
          />
        </div>
      ))}
      <style>{`
        @keyframes segmentFill {
          0%, 10% { width: 0%; }
          50%, 60% { width: 100%; }
          90%, 100% { width: 0%; }
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
      {/* Background glows */}
      {!reducedMotion && (
        <>
          <div className="pointer-events-none absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[140px]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[120px]" aria-hidden="true" />
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
          <span className="mb-4 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-300">
            Sector repair &amp; stabilization
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Sector Repair &amp; Stabilization
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-cyan-50/80 md:text-lg">
            Advanced sector stabilization and recovery system for weak and unstable drive sectors.
          </p>

          {/* Status indicators */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <StatusIndicators reducedMotion={reducedMotion} />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 neon-outline"
            >
              <Wrench size={16} /> Start Repair
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Download size={16} /> Download DriveWatch
            </Link>
          </div>
        </motion.div>

        {/* Repair pulse visualization */}
        <motion.div
          className="flex-shrink-0"
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-2xl glass-card p-8 neon-outline">
            <RepairPulse reducedMotion={reducedMotion} />
            <div className="mt-4">
              <SegmentedProgress reducedMotion={reducedMotion} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Content Sections ─────────────────────────────────────────────── */

function HowRepairWorks({ reducedMotion }: { reducedMotion: boolean }) {
  const steps = [
    { num: "01", title: "Identify", desc: "Locate weak and failing sectors through deep scanning" },
    { num: "02", title: "Recover", desc: "Read data using multiple passes with varying parameters" },
    { num: "03", title: "Remap", desc: "Trigger firmware reallocation to spare sector areas" },
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
          How Sector Repair Works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-50/70">
          DriveWatch reads weak sectors multiple times with varying parameters, reconstructs data using ECC, and triggers firmware-level reallocation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative rounded-xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:neon-outline"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <span className="text-3xl font-bold text-cyan-400/20">{step.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-cyan-50/70">{step.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-400/40 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function StabilizationTechnology({ reducedMotion }: { reducedMotion: boolean }) {
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
          <div className="rounded-xl bg-violet-500/10 p-3">
            <Zap className="h-6 w-6 text-violet-400" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Stabilization Technology</h2>
            <p className="mt-3 max-w-3xl text-cyan-50/70">
              Proprietary algorithms refresh magnetic charge on HDD sectors and optimize flash cell voltage thresholds on SSDs to extend sector life. This proactive approach prevents weak sectors from degrading further, buying time for data backup and drive replacement planning.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950/40 p-4">
                <h4 className="text-sm font-medium text-cyan-300">HDD Stabilization</h4>
                <p className="mt-1 text-xs text-cyan-50/60">Magnetic charge refresh and head calibration optimization</p>
              </div>
              <div className="rounded-lg bg-slate-950/40 p-4">
                <h4 className="text-sm font-medium text-violet-300">SSD Stabilization</h4>
                <p className="mt-1 text-xs text-cyan-50/60">Flash cell voltage threshold tuning and wear-leveling coordination</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function RecoveryProcess({ reducedMotion }: { reducedMotion: boolean }) {
  const phases = [
    { label: "Scanning", color: "bg-red-400", desc: "Identifying failing sectors" },
    { label: "Repairing", color: "bg-amber-400", desc: "Attempting data recovery" },
    { label: "Recovered", color: "bg-emerald-400", desc: "Remapping to spare areas" },
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
          Recovery Process
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-50/70">
          A three-phase approach: identify failing sectors, attempt data recovery, then remap to spare areas to prevent future access failures.
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center justify-between">
            {phases.map((phase, i) => (
              <div key={phase.label} className="flex flex-col items-center gap-2">
                <div
                  className={`h-10 w-10 rounded-full ${phase.color} flex items-center justify-center shadow-lg`}
                  style={
                    reducedMotion
                      ? {}
                      : { animation: `statusPulse 3s ease-in-out ${i * 1}s infinite` }
                  }
                >
                  <span className="text-xs font-bold text-slate-950">{i + 1}</span>
                </div>
                <span className="text-sm font-medium text-white">{phase.label}</span>
                <span className="text-xs text-cyan-50/60">{phase.desc}</span>
              </div>
            ))}
          </div>
          {/* Connecting line */}
          <div className="relative mx-auto mt-4 h-1 w-3/4 overflow-hidden rounded-full bg-cyan-950/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400"
              style={
                reducedMotion
                  ? { width: "100%" }
                  : { animation: "recoveryProgress 4s ease-in-out infinite" }
              }
            />
          </div>
        </div>
        <style>{`
          @keyframes recoveryProgress {
            0% { width: 0%; }
            80% { width: 100%; }
            100% { width: 0%; }
          }
        `}</style>
      </motion.div>
    </section>
  );
}

function PreventingDataLoss({ reducedMotion }: { reducedMotion: boolean }) {
  const benefits = [
    "Recover data from failing sectors before permanent loss",
    "Stabilize weak sectors to extend drive lifespan",
    "Automatic bad sector reallocation via firmware commands",
    "Integrated SMART health monitoring during repair",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-cyan-500/10 p-3">
            <Lock className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Preventing Data Loss</h2>
            <p className="mt-3 max-w-3xl text-cyan-50/70">
              Sector repair is most effective as a preventive measure. By addressing weak sectors early, you protect critical data and extend the usable life of your storage hardware.
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              className="flex items-center gap-3 rounded-xl glass-card px-5 py-4"
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <CheckCircle size={18} className="shrink-0 text-emerald-400" />
              <span className="text-sm text-white">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SmartHealthIntegration({ reducedMotion }: { reducedMotion: boolean }) {
  const attributes = [
    { icon: Activity, label: "Reallocated Sector Count", desc: "Tracks sectors moved to spare areas" },
    { icon: Database, label: "Current Pending Sectors", desc: "Sectors awaiting reallocation" },
    { icon: LineChart, label: "Offline Uncorrectable", desc: "Sectors that failed offline verification" },
    { icon: ShieldCheck, label: "UDMA CRC Errors", desc: "Data transfer integrity monitoring" },
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
          SMART Health Integration
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-50/70">
          Sector repair works hand-in-hand with SMART monitoring to provide a complete picture of drive health during the recovery process.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attributes.map((attr, i) => (
            <motion.div
              key={attr.label}
              className="rounded-xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:neon-outline"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <attr.icon className="mb-3 h-5 w-5 text-cyan-300" />
              <h3 className="text-sm font-semibold text-white">{attr.label}</h3>
              <p className="mt-1 text-xs text-cyan-50/60">{attr.desc}</p>
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
    { question: "Can sector repair fix a failing drive?", answer: "Sector repair can stabilize and recover weak sectors, but it cannot reverse physical damage. It is most effective as a preventive measure on drives showing early warning signs." },
    { question: "Is sector repair safe for SSDs?", answer: "Yes. DriveWatch uses SSD-appropriate techniques that work with the drive's wear leveling and garbage collection rather than against them." },
    { question: "How long does sector repair take?", answer: "Repair time depends on the number of affected sectors. A drive with a few dozen weak sectors typically completes in 15-30 minutes." },
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
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/20 via-sky-500/10 to-cyan-500/20 p-10 text-center md:p-16"
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-violet-400/20" />
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Recover and Stabilize Your Drive Sectors
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cyan-50/70">
          Download DriveWatch and use advanced sector repair to stabilize weak sectors before they cause permanent data loss.
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

export default function SectorRepairClient() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroSection reducedMotion={prefersReducedMotion} />
      <HowRepairWorks reducedMotion={prefersReducedMotion} />
      <StabilizationTechnology reducedMotion={prefersReducedMotion} />
      <RecoveryProcess reducedMotion={prefersReducedMotion} />
      <PreventingDataLoss reducedMotion={prefersReducedMotion} />
      <SmartHealthIntegration reducedMotion={prefersReducedMotion} />
      <FaqSection reducedMotion={prefersReducedMotion} />
      <FinalCta reducedMotion={prefersReducedMotion} />
    </div>
  );
}
