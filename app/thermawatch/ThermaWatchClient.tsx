"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BellRing,
  CheckCircle2,
  Cpu,
  Download,
  Gauge,
  HardDrive,
  Layers,
  Layout,
  LineChart,
  Settings,
  ShieldAlert,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";
import { downloadLinks } from "../lib/seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featureCards: Array<{
  title: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  points: string[];
}> = [
  {
    title: "Real-Time Temperature Monitoring",
    icon: Thermometer,
    accent: "from-cyan-300 to-sky-400",
    description: "Continuous thermal telemetry for the hardware that matters most.",
    points: [
      "CPU package temperature",
      "CPU core temperatures",
      "GPU temperature",
      "SSD/NVMe temperatures",
    ],
  },
  {
    title: "Live Performance Monitoring",
    icon: Activity,
    accent: "from-emerald-300 to-cyan-400",
    description: "Readable load data for daily work, gaming, testing, and diagnostics.",
    points: [
      "CPU usage",
      "Per-core utilization",
      "RAM usage",
      "GPU utilization",
    ],
  },
  {
    title: "Advanced Hardware Sensors",
    icon: Gauge,
    accent: "from-violet-300 to-fuchsia-400",
    description: "Deep sensor visibility across boards, cooling, power, and voltage rails.",
    points: [
      "Motherboard sensors",
      "Fan speeds",
      "Voltages",
      "Power consumption",
    ],
  },
  {
    title: "Historical Charts",
    icon: LineChart,
    accent: "from-sky-300 to-violet-400",
    description: "Live visual history that makes thermal and performance trends easier to spot.",
    points: [
      "Temperature history",
      "Performance trends",
      "Real-time graphs",
    ],
  },
  {
    title: "Alerts & Warnings",
    icon: ShieldAlert,
    accent: "from-rose-300 to-orange-400",
    description: "Clear warning states for thermal risk and abnormal sensor behavior.",
    points: [
      "Overheating detection",
      "Critical temperature alerts",
      "Visual warning indicators",
    ],
  },
  {
    title: "Detailed Diagnostics",
    icon: Wrench,
    accent: "from-indigo-300 to-cyan-400",
    description: "Hardware identity and raw telemetry for troubleshooting tricky machines.",
    points: [
      "Sensor diagnostics",
      "Hardware identification",
      "Raw sensor information",
    ],
  },
  {
    title: "Modern Dashboard",
    icon: Layout,
    accent: "from-cyan-300 to-teal-400",
    description: "A polished command center built for long monitoring sessions.",
    points: [
      "Dark professional UI",
      "Live updating widgets",
      "Easy navigation",
    ],
  },
  {
    title: "Lightweight Performance",
    icon: Zap,
    accent: "from-amber-300 to-cyan-400",
    description: "Designed to stay open continuously without getting in your way.",
    points: [
      "Low CPU usage",
      "Minimal RAM usage",
      "Optimized for continuous monitoring",
    ],
  },
];

const telemetryStats = [
  { label: "CPU Package", value: "48 C", icon: Cpu, meter: "w-[58%]", tone: "bg-cyan-300" },
  { label: "GPU Core", value: "62 C", icon: Zap, meter: "w-[72%]", tone: "bg-violet-300" },
  { label: "NVMe Drive", value: "39 C", icon: HardDrive, meter: "w-[46%]", tone: "bg-emerald-300" },
  { label: "RAM Load", value: "41%", icon: Layers, meter: "w-[41%]", tone: "bg-sky-300" },
];

const screenshots = [
  {
    title: "Thermal Overview",
    caption: "CPU, GPU, SSD, and NVMe temperature panels with live status indicators.",
    metrics: [
      ["CPU", "48 C", "w-[54%]", "bg-cyan-300"],
      ["GPU", "62 C", "w-[70%]", "bg-violet-300"],
      ["SSD", "35 C", "w-[39%]", "bg-emerald-300"],
    ],
    path: "M0 58 C38 44 54 31 92 42 C133 54 147 76 188 62 C230 48 244 18 292 30 C323 38 342 32 380 20",
  },
  {
    title: "Performance Dashboard",
    caption: "Per-core utilization, memory pressure, and GPU load in one scanning view.",
    metrics: [
      ["Core 1", "32%", "w-[32%]", "bg-cyan-300"],
      ["Core 2", "61%", "w-[61%]", "bg-sky-300"],
      ["GPU", "74%", "w-[74%]", "bg-fuchsia-300"],
    ],
    path: "M0 72 C28 46 55 76 82 52 C120 18 141 41 173 28 C211 11 234 62 269 42 C315 16 342 50 380 34",
  },
  {
    title: "Sensor Diagnostics",
    caption: "Motherboard sensors, voltages, fan RPM, and raw hardware information.",
    metrics: [
      ["Fan", "1420", "w-[59%]", "bg-cyan-300"],
      ["12V", "12.1", "w-[86%]", "bg-emerald-300"],
      ["Power", "95W", "w-[64%]", "bg-amber-300"],
    ],
    path: "M0 44 C36 50 64 22 99 29 C145 39 155 66 194 59 C235 52 240 28 285 33 C326 38 344 63 380 46",
  },
];

const requirements = [
  "Windows 10 or Windows 11",
  "64-bit processor",
  "4 GB RAM minimum",
  "Administrator permissions recommended for full sensor access",
];

const installSteps = [
  "Download ThermaWatch",
  "Run the installer",
  "Complete setup",
  "Launch ThermaWatch",
  "Allow administrator access when prompted for full hardware monitoring",
];

const whyItems = [
  "Accurate hardware monitoring",
  "Real-time sensor readings",
  "Professional dashboard",
  "Detailed diagnostics",
  "Built for enthusiasts and professionals",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-cyan-50/70 md:text-lg">{description}</p>
    </div>
  );
}

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={downloadLinks.thermawatch}
      download
      className={`neon-outline inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 px-8 py-4 text-base font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95 sm:w-auto ${className}`}
    >
      <Download size={20} />
      Download ThermaWatch
    </a>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.15 }}
      className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-slate-950/90 p-4 shadow-[0_22px_90px_rgba(34,211,238,0.16)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400" />
      <div className="flex items-center justify-between border-b border-cyan-300/10 pb-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/thermawatch-icon.png"
            alt="ThermaWatch logo"
            width={44}
            height={44}
            className="rounded-full border border-cyan-300/25 bg-slate-900"
            priority
          />
          <div>
            <p className="text-sm font-semibold text-white">ThermaWatch Live</p>
            <p className="text-xs text-cyan-100/55">Sensor stream active</p>
          </div>
        </div>
        <div className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          Stable
        </div>
      </div>

      <div className="grid gap-3 py-4 sm:grid-cols-2">
        {telemetryStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-cyan-300/10 bg-slate-900/70 p-4"
          >
            <div className="mb-3 flex items-center justify-between text-xs text-cyan-100/60">
              <span className="inline-flex items-center gap-2">
                <stat.icon size={14} className="text-cyan-300" />
                {stat.label}
              </span>
              <span>Live</span>
            </div>
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-950">
              <div className={`h-full ${stat.meter} ${stat.tone}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-cyan-300/10 bg-slate-900/55 p-4">
        <div className="mb-3 flex items-center justify-between text-xs text-cyan-100/60">
          <span className="inline-flex items-center gap-2">
            <LineChart size={14} className="text-cyan-300" />
            Thermal History
          </span>
          <span>250 ms polling</span>
        </div>
        <svg viewBox="0 0 380 100" className="h-28 w-full" role="img" aria-label="Thermal history chart preview">
          <defs>
            <linearGradient id="heroChartLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="55%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="heroChartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 72 C24 58 42 35 77 44 C108 52 119 78 154 63 C185 50 205 24 238 31 C278 39 285 71 326 52 C348 42 362 30 380 24 L380 100 L0 100 Z"
            fill="url(#heroChartFill)"
          />
          <path
            d="M0 72 C24 58 42 35 77 44 C108 52 119 78 154 63 C185 50 205 24 238 31 C278 39 285 71 326 52 C348 42 362 30 380 24"
            fill="none"
            stroke="url(#heroChartLine)"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function ScreenshotMock({
  title,
  caption,
  metrics,
  path,
  index,
}: {
  title: string;
  caption: string;
  metrics: string[][];
  path: string;
  index: number;
}) {
  const lineId = `screenshotLine${index}`;
  const fillId = `screenshotFill${index}`;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.28 }}
      className="group overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950/85 shadow-[0_18px_70px_rgba(0,0,0,0.42)]"
    >
      <div className="border-b border-cyan-300/10 bg-slate-900/70 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="text-xs font-medium text-cyan-100/55">ThermaWatch</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 min-h-[48px] text-sm leading-6 text-cyan-50/65">{caption}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {metrics.map(([label, value, width, color]) => (
            <div key={label} className="rounded-lg border border-cyan-300/10 bg-slate-900/65 p-3">
              <p className="text-xs text-cyan-100/50">{label}</p>
              <p className="mt-1 text-lg font-semibold text-white">{value}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-950">
                <div className={`h-full ${width} ${color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.96))] p-4">
          <svg viewBox="0 0 380 100" className="h-32 w-full" role="img" aria-label={`${title} graph preview`}>
            <defs>
              <linearGradient id={lineId} x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id={fillId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${path} L380 100 L0 100 Z`} fill={`url(#${fillId})`} />
            <path d={path} fill="none" stroke={`url(#${lineId})`} strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

export function ThermaWatchClient() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
          >
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-cyan-100/65">
              <Link href="/" className="font-semibold text-cyan-200 hover:text-white">
                DriveWatch
              </Link>
              <ArrowRight size={14} className="text-cyan-300/60" />
              <span className="text-white">ThermaWatch</span>
            </nav>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Image
                src="/images/thermawatch-icon.png"
                alt=""
                width={26}
                height={26}
                className="rounded-full"
                priority
              />
              Windows hardware monitoring
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
              ThermaWatch
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-semibold text-cyan-100 md:text-3xl">
              Advanced Real-Time Hardware Monitoring for Windows
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cyan-50/75 md:text-lg">
              ThermaWatch provides live CPU, GPU, SSD, NVMe, RAM, motherboard, fan,
              power, voltage, and thermal monitoring in a professional real-time
              dashboard built for enthusiasts and technicians.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <DownloadButton />
              <a
                href="#screenshots"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/35 bg-slate-950/60 px-7 py-4 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-400/10 sm:w-auto"
              >
                View screenshots
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-cyan-100/70">
              <span className="rounded-full border border-cyan-300/20 bg-slate-900/70 px-3 py-1.5">v0.1.1</span>
              <span className="rounded-full border border-cyan-300/20 bg-slate-900/70 px-3 py-1.5">Windows 10/11</span>
              <span className="rounded-full border border-cyan-300/20 bg-slate-900/70 px-3 py-1.5">x64 installer</span>
            </div>
          </motion.div>

          <HeroDashboard />
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Feature set"
          title="Complete hardware visibility in one dark dashboard"
          description="ThermaWatch combines thermal, performance, voltage, power, and diagnostic signals so you can understand your Windows PC at a glance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featureCards.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeInUp}
              transition={{ duration: 0.45 }}
              className="group rounded-lg border border-cyan-300/20 bg-slate-950/75 p-5 shadow-[0_10px_46px_rgba(8,47,73,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:shadow-[0_18px_70px_rgba(34,211,238,0.18)]"
            >
              <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.accent} p-3 text-slate-950`}>
                <feature.icon size={23} />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-50/65">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-cyan-50/80">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="screenshots" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Screenshot gallery"
          title="A monitoring workspace designed for fast decisions"
          description="Explore ThermaWatch dashboard views for live temperatures, performance telemetry, and low-level sensor diagnostics."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {screenshots.map((screenshot, index) => (
            <ScreenshotMock key={screenshot.title} index={index} {...screenshot} />
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,47,73,0.36),rgba(15,23,42,0.78),rgba(49,46,129,0.24))] p-6 md:p-8"
          >
            <div className="mb-4 inline-flex rounded-lg bg-cyan-300/10 p-3 text-cyan-300">
              <Settings size={26} />
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">System requirements</h2>
            <p className="mt-4 text-cyan-50/70">
              ThermaWatch is built for modern 64-bit Windows desktops and laptops,
              with administrator access recommended when deeper sensor paths are needed.
            </p>
            <div className="mt-7 grid gap-3">
              {requirements.map((requirement) => (
                <div
                  key={requirement}
                  className="flex items-start gap-3 rounded-lg border border-cyan-300/15 bg-slate-950/60 p-4 text-sm text-cyan-50/85"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-lg border border-cyan-300/20 bg-slate-950/75 p-6 md:p-8"
          >
            <div className="mb-4 inline-flex rounded-lg bg-violet-300/10 p-3 text-violet-200">
              <Download size={26} />
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Installation guide</h2>
            <ol className="mt-7 space-y-4">
              {installSteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
                    {index + 1}
                  </span>
                  <div className="rounded-lg border border-cyan-300/15 bg-slate-900/55 p-4">
                    <p className="text-base font-semibold text-white">Step {index + 1}</p>
                    <p className="mt-1 text-sm leading-6 text-cyan-50/70">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 rounded-lg border border-cyan-300/25 bg-[linear-gradient(120deg,rgba(8,47,73,0.42),rgba(2,6,23,0.88),rgba(88,28,135,0.28))] p-7 shadow-[0_24px_100px_rgba(34,211,238,0.12)] md:grid-cols-[1fr_1fr] md:p-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-cyan-300">Why ThermaWatch?</p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Built for enthusiasts and professionals who need the signal fast.
            </h2>
            <p className="mt-5 leading-7 text-cyan-50/70">
              ThermaWatch turns raw hardware sensor data into a clean operational view
              for thermal tuning, stress testing, workstation checks, and everyday
              system confidence.
            </p>
            <div className="mt-8">
              <DownloadButton />
            </div>
          </div>

          <div className="grid gap-3">
            {whyItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 rounded-lg border border-cyan-300/15 bg-slate-950/60 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                  {index === 0 ? <Gauge size={18} /> : null}
                  {index === 1 ? <Activity size={18} /> : null}
                  {index === 2 ? <Layout size={18} /> : null}
                  {index === 3 ? <Wrench size={18} /> : null}
                  {index === 4 ? <BellRing size={18} /> : null}
                </span>
                <span className="font-medium text-cyan-50">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-lg border border-cyan-300/25 bg-slate-950/80 p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.38)] md:p-12"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
            <AlertTriangle size={26} />
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Start monitoring your PC in real time.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50/70">
            Download the Windows x64 setup package and launch ThermaWatch for
            live temperatures, utilization, sensor diagnostics, alerts, and
            lightweight continuous monitoring.
          </p>
          <div className="mt-8">
            <DownloadButton />
          </div>
        </motion.div>
      </section>
    </>
  );
}
