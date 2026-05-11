"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BellRing,
  Cable,
  ChevronDown,
  Cloud,
  Cpu,
  Download,
  Gauge,
  HardDrive,
  LineChart,
  RefreshCw,
  ShieldCheck,
  Usb,
  Workflow,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Drive Monitoring",
    icon: Activity,
    desc: "Track utilization, speed, health, and thermals with high-frequency live telemetry.",
  },
  {
    title: "USB Detection",
    icon: Usb,
    desc: "Instantly detect USB insertions, removals, serial identities, and access patterns.",
  },
  {
    title: "NAS Monitoring",
    icon: Cloud,
    desc: "Monitor mapped NAS performance, uptime, latency spikes, and status transitions.",
  },
  {
    title: "Smart Health Analytics",
    icon: ShieldCheck,
    desc: "Surface proactive health scoring and predictive risk indicators before failure.",
  },
  {
    title: "Recovery Lab",
    icon: Wrench,
    desc: "Use guided recovery workflows, sector checks, and integrity restoration tools.",
  },
  {
    title: "Performance Tracking",
    icon: Gauge,
    desc: "Analyze read/write throughput, queue depth, and sustained load behavior trends.",
  },
  {
    title: "Device Logs",
    icon: Workflow,
    desc: "Review detailed historical event streams with timestamps and filterable details.",
  },
  {
    title: "Smart Notifications",
    icon: BellRing,
    desc: "Receive intelligent alerts for thermal stress, health anomalies, and activity spikes.",
  },
  {
    title: "Multi-Drive Support",
    icon: HardDrive,
    desc: "Manage multiple internal and external drives from one consolidated control center.",
  },
  {
    title: "Modern Dashboard",
    icon: LineChart,
    desc: "Operate from a polished dashboard designed for speed, clarity, and confidence.",
  },
  {
    title: "Auto Updates",
    icon: RefreshCw,
    desc: "Stay continuously updated with secure update prompts and one-click installation.",
  },
  {
    title: "Lightweight Performance",
    icon: Cpu,
    desc: "Engineered for low overhead so monitoring never slows your critical workflows.",
  },
];

const faqItems = [
  "What is DriveWatch?",
  "Is DriveWatch free?",
  "Does it support NAS monitoring?",
  "Can it monitor USB devices?",
  "Does it include automatic updates?",
  "Is it lightweight?",
  "Is it safe?",
  "Does it support multiple drives?",
];

const galleryImages = [
  {
    id: 1,
    src: "/images/section-dashboard-showcase.png",
    alt: "Dashboard showcase preview",
  },
  {
    id: 2,
    src: "/images/section-realtime-monitoring.png",
    alt: "Real-time monitoring preview",
  },
  { id: 3, src: "/images/section-nas-monitoring.png", alt: "NAS monitoring preview" },
  { id: 4, src: "/images/section-usb-monitoring.png", alt: "USB monitoring preview" },
  { id: 5, src: "/images/section-recovery-lab.png", alt: "Recovery lab preview" },
  { id: 6, src: "/images/section-smart-alerts.png", alt: "Smart alerts preview" },
];

const riseIn = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

function MagneticButton({
  children,
  href,
  ghost = false,
}: {
  children: React.ReactNode;
  href: string;
  ghost?: boolean;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.16,
          y: (e.clientY - rect.top - rect.height / 2) * 0.16,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 15 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
        ghost
          ? "border border-cyan-300/50 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-400/20"
          : "neon-outline bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 text-slate-950 hover:brightness-110"
      }`}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />
      <div className="glow-orb left-[6%] top-28 h-48 w-48 bg-cyan-400/25" />
      <div className="glow-orb right-[8%] top-96 h-60 w-60 bg-violet-500/20 [animation-delay:2s]" />

      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-8 md:px-10">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/drivewatch-logo.png"
              alt="DriveWatch logo"
              width={44}
              height={44}
              className="rounded-full bg-white p-0.5 ring-1 ring-cyan-200/45"
            />
            <div>
              <p className="text-lg font-semibold tracking-wide">DriveWatch</p>
              <p className="text-xs text-cyan-100/70">Live Storage Intelligence</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDownloadMenuOpen((prev) => !prev)}
              className="neon-outline inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
            >
              <Download size={16} /> Download
              <ChevronDown
                size={16}
                className={`transition-transform ${isDownloadMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isDownloadMenuOpen && (
              <div className="absolute right-0 z-30 mt-3 w-72 rounded-2xl border border-cyan-300/35 bg-slate-950/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
                <a
                  href="/downloads/DriveWatch-Setup.exe"
                  className="mb-2 block rounded-xl border border-cyan-300/25 bg-slate-900/70 p-3 transition-colors hover:bg-cyan-500/10"
                >
                  <p className="text-sm font-semibold text-cyan-100">Windows (.exe)</p>
                  <p className="text-xs text-cyan-100/70">Version 1.2.3 • 98.3 MB</p>
                </a>
                <a
                  href="/downloads/DriveWatch.dmg"
                  className="block rounded-xl border border-cyan-300/25 bg-slate-900/70 p-3 transition-colors hover:bg-cyan-500/10"
                >
                  <p className="text-sm font-semibold text-cyan-100">macOS (.dmg)</p>
                  <p className="text-xs text-cyan-100/70">Version 1.2.3 • 116 MB</p>
                </a>
              </div>
            )}
          </div>
        </header>

        <div className="grid gap-16 lg:grid-cols-[1.12fr_1fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={riseIn}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.18em] text-cyan-100">
              PROFESSIONAL STORAGE MANAGEMENT
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Monitor. Protect.
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                Optimize Every Drive.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cyan-50/80 md:text-lg">
              DriveWatch helps you monitor drives, USB devices, and NAS systems
              with real-time analytics, smart alerts, recovery tools, and
              automatic updates.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton href="/downloads/DriveWatch-Setup.exe">
                Download for Windows <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#features" ghost>
                Explore Features
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-b from-[#10243d] to-[#0a1530] p-4 shadow-[0_20px_100px_rgba(34,211,238,0.18)]"
          >
            <div className="mb-3 flex items-center justify-between rounded-xl border border-cyan-300/20 bg-slate-900/70 px-4 py-2 text-xs text-cyan-100/80">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live Monitoring
              </span>
              <span>DriveWatch Core</span>
            </div>
            <Image
              src="/images/drivewatch-dashboard.png"
              alt="DriveWatch software preview"
              width={1200}
              height={700}
              priority
              className="rounded-2xl border border-cyan-300/20 shadow-[0_10px_60px_rgba(0,0,0,0.5)]"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["42°C", "Avg Temp"],
                ["1 MB/s", "Current I/O"],
                ["98%", "System Health"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-cyan-300/20 bg-slate-900/70 p-3">
                  <p className="text-lg font-semibold text-cyan-300">{value}</p>
                  <p className="text-xs text-cyan-100/65">{label}</p>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-300/10 via-transparent to-violet-400/12" />
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">
          Purpose-built features for serious monitoring
        </h2>
        <p className="mb-10 max-w-3xl text-cyan-50/70">
          Every panel, signal, and alert is tuned for real-world storage
          operations and high confidence decision-making.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group rounded-2xl glass-card p-5 transition-all hover:-translate-y-1 hover:neon-outline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <feature.icon className="mb-4 h-6 w-6 text-cyan-300" />
              <h3 className="mb-2 text-lg font-medium text-cyan-50">{feature.title}</h3>
              <p className="text-sm text-cyan-50/70">{feature.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 md:px-10">
        {[
          {
            title: "Dashboard Showcase",
            subtitle: "Live drive analytics in a cinematic interface",
            icon: LineChart,
            image: "/images/section-dashboard-showcase.png",
          },
          {
            title: "Real-Time Monitoring",
            subtitle: "Active load, throughput, temperature, and health in motion",
            icon: Activity,
            image: "/images/section-realtime-monitoring.png",
          },
          {
            title: "NAS Monitoring",
            subtitle: "Track remote volumes, response latency, and activity flow",
            icon: Cloud,
            image: "/images/section-nas-monitoring.png",
          },
          {
            title: "USB Monitoring",
            subtitle: "Detect connected devices, trust status, and transfer spikes",
            icon: Cable,
            image: "/images/section-usb-monitoring.png",
          },
          {
            title: "Recovery Lab",
            subtitle: "Professional recovery workflows and maintenance diagnostics",
            icon: Wrench,
            image: "/images/section-recovery-lab.png",
          },
          {
            title: "Smart Alerts",
            subtitle: "High-priority anomaly detection with actionable notification",
            icon: AlertTriangle,
            image: "/images/section-smart-alerts.png",
            fit: "contain",
          },
        ].map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="glass-card rounded-3xl p-6"
          >
            <div className="mb-4 inline-flex rounded-xl bg-cyan-300/10 p-2 text-cyan-300">
              <item.icon size={21} />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mb-6 text-cyan-100/75">{item.subtitle}</p>
            <div className="relative overflow-hidden rounded-xl border border-cyan-300/25">
              <Image
                src={item.image}
                alt={`${item.title} section screenshot`}
                width={1200}
                height={700}
                className={`h-44 w-full ${
                  item.fit === "contain" ? "bg-black/40 object-contain" : "object-cover"
                }`}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.16),transparent)]"
                animate={{ x: ["-100%", "120%"] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3.2 + idx * 0.4,
                  ease: "linear",
                }}
              />
            </div>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-10"
        >
          <div className="absolute right-10 top-10 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">
            NEW UPDATE AVAILABLE
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">
            Automatic update system keeps DriveWatch secure and modern
          </h2>
          <p className="mt-4 max-w-3xl text-cyan-100/75">
            Users receive instant update notifications as soon as new versions
            are released. Every release delivers improvements, fixes, and
            features through a seamless one-click update flow.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Instant update notifications",
              "Seamless in-app update process",
              "Continuous security and feature improvements",
            ].map((line) => (
              <div key={line} className="rounded-2xl border border-cyan-300/20 bg-slate-900/55 p-4">
                <p className="text-sm text-cyan-50">{line}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-300/25 bg-slate-900/70 p-5">
            <div className="mb-3 flex items-center justify-between text-sm text-cyan-100/80">
              <span>DriveWatch v1.2.3 update package</span>
              <span>78%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-cyan-950">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">Performance stats</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["99.98%", "Monitoring Uptime"],
            ["<1.5%", "CPU Footprint"],
            ["20+", "Telemetry Signals"],
            ["250ms", "Alert Reaction Time"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl glass-card p-5">
              <p className="text-3xl font-semibold text-cyan-300">{value}</p>
              <p className="mt-1 text-sm text-cyan-50/75">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">Screenshot gallery</h2>
        <p className="mb-8 text-cyan-100/75">
          Explore the DriveWatch interface with interactive previews.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {galleryImages.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setModalImage(item.src)}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-300/25"
            >
              <Image src={item.src} alt={item.alt} width={1000} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity group-hover:opacity-35" />
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 rounded-3xl glass-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Download DriveWatch for Windows</h2>
            <p className="mt-3 text-cyan-100/75">
              Windows installer package with secure checksum delivery and smooth setup.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-cyan-100/85">
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Version 1.2.3</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">File Size 98.3 MB</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Virus-Free Badge</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Secure Download</span>
            </div>
            <p className="mt-4 text-sm text-cyan-50/70">
              Install guide: Download EXE → Run setup → Launch DriveWatch → Enable notifications.
            </p>
          </div>
          <MagneticButton href="/downloads/DriveWatch-Setup.exe">
            <Download size={16} /> Download DriveWatch for Windows
          </MagneticButton>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-8 rounded-3xl glass-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Download DriveWatch for macOS</h2>
            <p className="mt-3 text-cyan-100/75">
              Native macOS package with secure signing, optimized performance, and fast setup.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-cyan-100/85">
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Version 1.2.3</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">File Size 116 MB</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Apple Silicon Ready</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Notarized Build</span>
            </div>
            <p className="mt-4 text-sm text-cyan-50/70">
              Install guide: Download DMG → Open package → Drag to Applications → Launch DriveWatch.
            </p>
          </div>
          <MagneticButton href="/downloads/DriveWatch.dmg">
            <Download size={16} /> Download DriveWatch for macOS
          </MagneticButton>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">FAQ</h2>
        <div className="space-y-3">
          {faqItems.map((question, idx) => (
            <div key={question} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-cyan-50">{question}</span>
                <ChevronDown
                  className={`transition-transform ${activeFaq === idx ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>
              {activeFaq === idx && (
                <p className="px-5 pb-4 text-sm text-cyan-100/70">
                  DriveWatch delivers enterprise-grade monitoring and clear insights
                  for drives, USB devices, and NAS environments with a lightweight,
                  secure, and update-ready architecture.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/15 via-slate-900/70 to-violet-500/20 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Take full control of your storage
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-cyan-100/75">
            Professional drive monitoring starts here. Install DriveWatch and unlock
            real-time intelligence for every device you manage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/downloads/DriveWatch-Setup.exe">
              Download DriveWatch for Windows
            </MagneticButton>
            <MagneticButton href="/downloads/DriveWatch.dmg">
              Download DriveWatch for macOS
            </MagneticButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-300/15 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/drivewatch-logo.png"
              alt="DriveWatch"
              width={38}
              height={38}
              className="rounded-full bg-white p-0.5"
            />
            <div>
              <p className="font-semibold text-white">DriveWatch</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-cyan-100/80">
            <a href="#features">Features</a>
            <a href="/downloads/DriveWatch-Setup.exe">Download</a>
            <a href="https://www.linkedin.com/in/ap2823" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </nav>
          <div className="text-xs text-cyan-100/60">© {new Date().getFullYear()} DriveWatch. All rights reserved.</div>
        </div>
      </footer>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={() => setModalImage(null)}
        >
          <Image
            src={modalImage}
            alt="DriveWatch screenshot full preview"
            width={1400}
            height={800}
            className="max-h-[85vh] w-auto rounded-2xl border border-cyan-300/30"
          />
        </div>
      )}
    </main>
  );
}
