"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { blogPosts, downloadLinks, featurePages, softwareVersion } from "./lib/seo";
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
    desc: "Use as an HDD health monitor and SSD monitoring tool to track utilization, speed, and disk health with high-frequency live telemetry.",
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
    desc: "Surface proactive SSD health monitoring, SMART drive monitor analytics, and predictive risk indicators before failure.",
  },
  {
    title: "Recovery Lab",
    icon: Wrench,
    desc: "A complete drive scan tool and disk diagnostic tool with guided recovery workflows, sector checks, and integrity restoration.",
  },
  {
    title: "Performance Tracking",
    icon: Gauge,
    desc: "Analyze read/write throughput, queue depth, sustained load behavior, and hardware analytics trends.",
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
    desc: "Manage multiple internal and external drives from one consolidated control center and hard drive checker.",
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
    desc: "Engineered for low overhead so PC monitoring software never slows your critical workflows.",
  },
  {
    title: "SSD Health Monitor",
    icon: HardDrive,
    desc: "Perform an SSD health check, monitor storage temperature, activity spikes, and disk health from a clean monitoring workspace.",
  },
  {
    title: "Fan RPM Monitoring",
    icon: Gauge,
    desc: "Understand fan RPM monitoring context alongside CPU temperature, GPU temperature tracking, and system load.",
  },
  {
    title: "CPU & GPU Monitoring",
    icon: Cpu,
    desc: "Monitor CPU temperature, GPU temperature tracking, and performance behavior for stable Windows systems.",
  },
  {
    title: "System Diagnostics",
    icon: Activity,
    desc: "Run practical Windows system diagnostics with storage, thermal, event, and smart alert visibility.",
  },
  {
    title: "Disk Health Analytics",
    icon: LineChart,
    desc: "Turn raw drive activity into readable disk health software analytics for internal, external, USB, and NAS storage.",
  },
];

const faqItems = [
  {
    question: "What is DriveWatch?",
    answer:
      "DriveWatch is professional Windows monitoring software acting as an HDD health monitor, hard drive checker, and SSD monitoring tool. It includes disk health analytics, fan RPM monitoring, CPU and GPU tracking, and system diagnostics.",
  },
  {
    question: "Is DriveWatch free?",
    answer:
      "The website currently provides public DriveWatch installer downloads so users can try the monitoring dashboard, smart alerts, and hardware analytics workflow.",
  },
  {
    question: "Does it support NAS monitoring?",
    answer:
      "Yes. DriveWatch includes NAS monitoring and drive scan tools for mapped storage, response latency, activity flow, and status visibility.",
  },
  {
    question: "Can it monitor USB devices?",
    answer:
      "DriveWatch includes USB monitoring for connected devices, trust status, transfer spikes, serial identities, and device events.",
  },
  {
    question: "Does it include automatic updates?",
    answer:
      "Yes. DriveWatch highlights a secure automatic update workflow with release notifications and one-click update behavior.",
  },
  {
    question: "Is it lightweight?",
    answer:
      "DriveWatch is built as lightweight PC monitoring software with a low-overhead dashboard for ongoing hardware monitoring.",
  },
  {
    question: "Is it safe?",
    answer:
      "DriveWatch uses a secure installer workflow. As a reliable SMART drive monitor and disk health software, it provides public release downloads and clear update messaging for safer installation.",
  },
  {
    question: "Does it support multiple drives?",
    answer:
      "DriveWatch is designed for multi-drive visibility across internal drives, external storage, USB devices, and NAS environments.",
  },
];

const seoFeatureSections = [
  {
    title: "SSD Health Monitoring",
    href: "/ssd-health-monitor",
    desc: "Use DriveWatch as an SSD health monitor and drive health monitor for temperature trends, storage activity, smart alerts, and disk health analytics.",
  },
  {
    title: "Fan RPM Monitoring",
    href: "/fan-rpm-monitor",
    desc: "Review fan RPM monitoring context with CPU temperature, GPU temperature tracking, and workload behavior to understand cooling performance.",
  },
  {
    title: "CPU & GPU Monitoring",
    href: "/cpu-temperature-monitor",
    desc: "Track CPU monitoring, CPU temperature, GPU monitoring, and GPU temperature tracking alongside storage and system diagnostics.",
  },
  {
    title: "System Diagnostics",
    href: "/system-diagnostics",
    desc: "Diagnose Windows systems with hardware monitoring, event logs, thermal awareness, storage health, and proactive alert workflows.",
  },
  {
    title: "Disk Health Analytics",
    href: "/ssd-health-monitor",
    desc: "Turn drive performance, disk health, USB activity, and NAS behavior into readable hardware analytics for maintenance decisions.",
  },
];

const downloadDetails = [
  "Compatible with Windows monitoring software workflows",
  "Includes SSD health monitor, HDD scan capabilities, and disk health checker coverage",
  "Supports fan RPM, CPU, and GPU monitoring context",
  "Designed for hardware analytics, alerts, and system diagnostics",
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
  target,
  rel,
}: {
  children: React.ReactNode;
  href: string;
  ghost?: boolean;
  target?: string;
  rel?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
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

  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-10">

        <div className="grid gap-16 lg:grid-cols-[1.12fr_1fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={riseIn}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs tracking-[0.18em] text-cyan-100">
              PROFESSIONAL MONITORING FOR WINDOWS & MACOS
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Monitor. Protect.
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                Optimize Every Drive.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cyan-50/80 md:text-lg">
              DriveWatch is a professional HDD and SSD health monitoring software for real-time drive scanning, SMART diagnostics, temperature monitoring, and disk health analysis. DriveWatch helps you monitor SSD health, USB devices,
              NAS systems, fan RPM context, CPU temperature, and GPU temperature
              tracking with real-time analytics, smart alerts, recovery tools,
              and automatic updates.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton
                href={downloadLinks.windows}
                target="_blank"
                rel="noopener noreferrer"
              >
                Windows <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href={downloadLinks.mac}
                target="_blank"
                rel="noopener noreferrer"
                ghost
              >
                macOS <ArrowRight size={16} />
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
              alt="DriveWatch SSD health monitor and hardware diagnostics dashboard preview"
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
          Purpose-built features for serious PC monitoring
        </h2>
        <p className="mb-10 max-w-3xl text-cyan-50/70">
          Every panel, signal, and alert is tuned for SSD health monitoring,
          disk health analytics, fan RPM context, CPU monitoring, GPU monitoring,
          and high confidence diagnostic decisions.
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

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">
            Hardware monitoring and system diagnostics
          </h2>
          <p className="text-cyan-50/70">
            DriveWatch connects the search-critical workflows people expect from
            premium Windows monitoring software: SSD health monitoring, fan RPM
            monitoring, CPU temperature monitoring, GPU temperature tracking,
            system diagnostics, and disk health analytics.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoFeatureSections.map((section, index) => (
            <motion.article
              key={section.title}
              className="rounded-2xl glass-card p-5 transition-all hover:-translate-y-1 hover:neon-outline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-white">{section.title}</h3>
              <p className="mb-5 text-sm leading-6 text-cyan-50/70">{section.desc}</p>
              <Link
                href={section.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
              >
                Learn more <ArrowRight size={15} />
              </Link>
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
          <div className="mb-4 inline-flex md:absolute md:right-10 md:top-10 md:mb-0 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">
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
              <span>DriveWatch v{softwareVersion} update package</span>
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
              type="button"
              key={item.id}
              onClick={() => setModalImage(item.src)}
              whileHover={{ y: -4, scale: 1.01 }}
              aria-label={`Open ${item.alt}`}
              className="group relative overflow-hidden rounded-2xl border border-cyan-300/25"
            >
              <Image src={item.src} alt={item.alt} width={1000} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity group-hover:opacity-35" />
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">
            Monitoring guides and feature pages
          </h2>
          <p className="text-cyan-100/75">
            Explore deeper DriveWatch resources for SSD health monitoring, fan
            RPM monitoring, CPU temperature monitoring, GPU monitoring, disk
            health analytics, and Windows system diagnostics.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl glass-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Feature pages</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {featurePages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.slug}
                  className="rounded-xl border border-cyan-300/20 bg-slate-900/60 p-4 text-sm font-semibold text-cyan-50 transition-colors hover:bg-cyan-500/10"
                >
                  {page.metaTitle}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-2xl glass-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Latest articles</h3>
            <div className="space-y-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-cyan-300/20 bg-slate-900/60 p-4 text-sm text-cyan-50 transition-colors hover:bg-cyan-500/10"
                >
                  <span>{post.title}</span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 rounded-3xl glass-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Download DriveWatch for Windows</h2>
            <p className="mt-3 text-cyan-100/75">
              Windows installer package for SSD health monitoring, fan RPM
              monitoring, CPU monitoring, GPU temperature tracking, disk health
              analytics, smart alerts, and smooth setup.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-cyan-100/85">
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Version {softwareVersion}</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">File Size 98.3 MB</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Virus-Free Badge</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Secure Download</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {downloadDetails.map((detail) => (
                <div key={detail} className="rounded-xl border border-cyan-300/20 bg-slate-900/55 p-3">
                  <p className="text-xs text-cyan-50/80">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-cyan-50/70">
              Install guide: Download EXE → Run setup → Launch DriveWatch → Enable notifications.
            </p>
            <Link href="/download" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
              View compatibility, FAQ, and installation steps <ArrowRight size={15} />
            </Link>
          </div>
          <MagneticButton
            href={downloadLinks.windows}
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Version {softwareVersion}</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">File Size 116 MB</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Apple Silicon Ready</span>
              <span className="rounded-full border border-cyan-300/35 px-3 py-1">Notarized Build</span>
            </div>
            <p className="mt-4 text-sm text-cyan-50/70">
              Install guide: Download DMG → Open package → Drag to Applications → Launch DriveWatch.
            </p>
          </div>
          <MagneticButton
            href={downloadLinks.mac}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} /> Download DriveWatch for macOS
          </MagneticButton>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">FAQ</h2>
        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div key={item.question} className="rounded-2xl border border-cyan-300/20 bg-slate-900/60">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                aria-expanded={activeFaq === idx}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-cyan-50">{item.question}</span>
                <ChevronDown
                  className={`transition-transform ${activeFaq === idx ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>
              {activeFaq === idx && (
                <p className="px-5 pb-4 text-sm text-cyan-100/70">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/15 via-slate-900/70 to-violet-500/20 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Take full control of your PC monitoring
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-cyan-100/75">
            Professional hardware monitoring starts here. Install DriveWatch
            and unlock SSD health monitoring, fan RPM monitoring, CPU
            monitoring, GPU temperature tracking, and real-time intelligence for
            every device you manage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={downloadLinks.windows}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download DriveWatch for Windows
            </MagneticButton>
            <MagneticButton
              href={downloadLinks.mac}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download DriveWatch for macOS
            </MagneticButton>
          </div>
        </div>
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 z-[110] grid place-items-center bg-black/80 p-4"
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
    </>
  );
}
