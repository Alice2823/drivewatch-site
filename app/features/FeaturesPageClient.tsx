"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HardDrive,
  Fan,
  Thermometer,
  Cpu,
  Activity,
  Database,
  ShieldCheck,
  Search,
  CheckCircle,
  LineChart,
  Radar,
  Wrench,
  ArrowRight,
  Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Feature Data ─────────────────────────────────────────────────── */

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  id?: string;
}

const features: FeatureItem[] = [
  { title: "SSD Health", description: "Monitor SSD lifespan, wear level, and health status in real time.", icon: HardDrive, href: "/ssd-health-monitor" },
  { title: "Fan RPM", description: "Track system fan speeds and cooling performance.", icon: Fan, href: "/fan-rpm-monitor" },
  { title: "GPU Temps", description: "Live GPU temperature monitoring with overheating alerts.", icon: Thermometer, href: "/gpu-temperature-monitor" },
  { title: "CPU Temps", description: "Monitor processor temperatures and thermal behavior.", icon: Cpu, href: "/cpu-temperature-monitor" },
  { title: "Diagnostics", description: "Advanced hardware diagnostics for system stability and drive reliability.", icon: Activity, href: "/system-diagnostics" },
  { title: "HDD Monitor", description: "Track HDD performance, bad sectors, and read/write behavior.", icon: Database, href: "/hdd-health-monitor" },
  { title: "SSD Check", description: "Analyze SSD condition, endurance, and SMART data.", icon: ShieldCheck, href: "/ssd-health-check" },
  { title: "Drive Scan", description: "Deep disk scanning for errors, unstable sectors, and failures.", icon: Search, href: "/drive-scan-tool" },
  { title: "Disk Checker", description: "Detect filesystem issues and corrupted sectors.", icon: CheckCircle, href: "/disk-health-checker" },
  { title: "SMART Monitor", description: "Real-time SMART attribute analysis and warnings.", icon: LineChart, href: "/smart-drive-monitor" },
  { title: "Sector Surface Scan", description: "Perform low-level sector-by-sector surface analysis to detect damaged, weak, slow, or unstable sectors.", icon: Radar, href: "/features/surface-scan" },
  { title: "Sector Repair / Stabilization", description: "Attempt recovery and stabilization of weak or unstable disk sectors using advanced repair algorithms.", icon: Wrench, href: "/features/sector-repair" },
];

/* ─── Feature Animations ───────────────────────────────────────────── */

function FeatureAnimation({ title, reducedMotion }: { title: string; reducedMotion: boolean }) {
  switch (title) {
    case "SSD Health":
      return <SSDHealthAnim reducedMotion={reducedMotion} />;
    case "Fan RPM":
      return <FanRPMAnim reducedMotion={reducedMotion} />;
    case "GPU Temps":
      return <GPUTempsAnim reducedMotion={reducedMotion} />;
    case "CPU Temps":
      return <CPUTempsAnim reducedMotion={reducedMotion} />;
    case "Diagnostics":
      return <DiagnosticsAnim reducedMotion={reducedMotion} />;
    case "HDD Monitor":
      return <HDDMonitorAnim reducedMotion={reducedMotion} />;
    case "SSD Check":
      return <SSDCheckAnim reducedMotion={reducedMotion} />;
    case "Drive Scan":
      return <DriveScanAnim reducedMotion={reducedMotion} />;
    case "Disk Checker":
      return <DiskCheckerAnim reducedMotion={reducedMotion} />;
    case "SMART Monitor":
      return <SMARTMonitorAnim reducedMotion={reducedMotion} />;
    case "Sector Surface Scan":
      return <SectorSurfaceScanAnim reducedMotion={reducedMotion} />;
    case "Sector Repair / Stabilization":
      return <SectorRepairAnim reducedMotion={reducedMotion} />;
    default:
      return null;
  }
}

/* 1. SSD Health — Pulsing health bar 92-98% */
function SSDHealthAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex flex-col justify-center" aria-hidden="true">
      <div className="flex items-center gap-2">
        <div className="relative h-3 w-full rounded-full bg-slate-800/80 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, #34d399, #22d3ee)",
              width: reducedMotion ? "95%" : undefined,
              animation: reducedMotion ? undefined : "ssdPulse 3s ease-in-out infinite",
            }}
          />
        </div>
        <span className="text-[10px] font-mono text-emerald-400 whitespace-nowrap"
          style={{ animation: reducedMotion ? undefined : "ssdPercent 3s ease-in-out infinite" }}
        >
          95%
        </span>
      </div>
      {!reducedMotion && (
        <style>{`
          @keyframes ssdPulse {
            0%, 100% { width: 92%; }
            50% { width: 98%; }
          }
          @keyframes ssdPercent {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
        `}</style>
      )}
    </div>
  );
}

/* 2. Fan RPM — Spinning fan blade */
function FanRPMAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center justify-center" aria-hidden="true">
      <div
        className="relative w-8 h-8"
        style={{ animation: reducedMotion ? undefined : "fanSpin 2s linear infinite" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute top-1/2 left-1/2 w-3 h-[2px] rounded-full bg-cyan-300 origin-left"
            style={{ transform: `rotate(${deg}deg) translateX(1px)` }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/60" />
      </div>
      <span className="ml-3 text-[10px] font-mono text-cyan-300">1420 RPM</span>
      {!reducedMotion && (
        <style>{`
          @keyframes fanSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      )}
    </div>
  );
}

/* 3. GPU Temps — Temperature gauge oscillating 45-72°C */
function GPUTempsAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center gap-2" aria-hidden="true">
      <div className="relative h-5 w-full max-w-[120px] rounded-full bg-slate-800/80 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            animation: reducedMotion ? undefined : "gpuTemp 4s ease-in-out infinite",
            width: reducedMotion ? "55%" : undefined,
            background: reducedMotion
              ? "#fbbf24"
              : undefined,
          }}
        />
      </div>
      <span
        className="text-[10px] font-mono whitespace-nowrap"
        style={{
          color: reducedMotion ? "#fbbf24" : undefined,
          animation: reducedMotion ? undefined : "gpuTempColor 4s ease-in-out infinite",
        }}
      >
        {reducedMotion ? "58°C" : ""}
      </span>
      {!reducedMotion && (
        <style>{`
          @keyframes gpuTemp {
            0%, 100% { width: 38%; background: #34d399; }
            50% { width: 72%; background: #f97316; }
            25%, 75% { background: #fbbf24; }
          }
          @keyframes gpuTempColor {
            0%, 100% { color: #34d399; }
            25%, 75% { color: #fbbf24; }
            50% { color: #f97316; }
          }
        `}</style>
      )}
    </div>
  );
}

/* 4. CPU Temps — 2x2 core grid lighting up in sequence */
function CPUTempsAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center gap-3" aria-hidden="true">
      <div className="grid grid-cols-2 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-sm border border-cyan-400/30"
            style={{
              backgroundColor: reducedMotion ? "rgba(34,211,238,0.3)" : undefined,
              animation: reducedMotion ? undefined : `cpuCore 2s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>
      <span className="text-[10px] font-mono text-cyan-300">4 cores</span>
      {!reducedMotion && (
        <style>{`
          @keyframes cpuCore {
            0%, 100% { background-color: rgba(34,211,238,0.1); }
            25%, 50% { background-color: rgba(34,211,238,0.7); box-shadow: 0 0 6px rgba(34,211,238,0.5); }
          }
        `}</style>
      )}
    </div>
  );
}

/* 5. Diagnostics — ECG heartbeat line */
function DiagnosticsAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center overflow-hidden" aria-hidden="true">
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" className="flex-shrink-0">
        <polyline
          points="0,16 15,16 20,16 25,4 30,28 35,10 40,20 45,16 60,16 75,16 80,16 85,4 90,28 95,10 100,20 105,16 120,16"
          stroke="#34d399"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: reducedMotion ? undefined : "200",
            strokeDashoffset: reducedMotion ? undefined : "200",
            animation: reducedMotion ? undefined : "ecgDraw 2.5s linear infinite",
          }}
        />
      </svg>
      {!reducedMotion && (
        <style>{`
          @keyframes ecgDraw {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
        `}</style>
      )}
    </div>
  );
}

/* 6. HDD Monitor — Spinning platter with read head */
function HDDMonitorAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center justify-center" aria-hidden="true">
      <div className="relative w-10 h-10">
        {/* Platter rings */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/30"
          style={{ animation: reducedMotion ? undefined : "hddSpin 3s linear infinite" }}
        >
          <div className="absolute inset-[6px] rounded-full border border-cyan-400/20" />
          <div className="absolute inset-[12px] rounded-full border border-cyan-400/15" />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/40" />
        </div>
        {/* Read head arm */}
        <div
          className="absolute top-1/2 right-0 w-5 h-[2px] bg-amber-400/80 origin-right rounded"
          style={{
            transform: reducedMotion ? "rotate(-20deg)" : undefined,
            animation: reducedMotion ? undefined : "hddArm 2s ease-in-out infinite",
          }}
        />
      </div>
      {!reducedMotion && (
        <style>{`
          @keyframes hddSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes hddArm {
            0%, 100% { transform: rotate(-30deg); }
            50% { transform: rotate(10deg); }
          }
        `}</style>
      )}
    </div>
  );
}

/* 7. SSD Check — TBW progress bar with wear percentage */
function SSDCheckAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex flex-col justify-center" aria-hidden="true">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] font-mono text-cyan-300/70 uppercase tracking-wider">TBW Used</span>
        <span
          className="text-[10px] font-mono text-violet-400"
          style={{ animation: reducedMotion ? undefined : "tbwCount 4s ease-in-out infinite" }}
        >
          {reducedMotion ? "34%" : ""}
        </span>
      </div>
      <div className="relative h-2.5 w-full rounded-full bg-slate-800/80 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          style={{
            width: reducedMotion ? "34%" : undefined,
            animation: reducedMotion ? undefined : "tbwFill 4s ease-in-out infinite",
          }}
        />
      </div>
      {!reducedMotion && (
        <style>{`
          @keyframes tbwFill {
            0%, 100% { width: 20%; }
            50% { width: 48%; }
          }
          @keyframes tbwCount {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      )}
    </div>
  );
}

/* 8. Drive Scan — Radar sweep animation */
function DriveScanAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center justify-center" aria-hidden="true">
      <div className="relative w-10 h-10">
        {/* Radar circle */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
        <div className="absolute inset-[5px] rounded-full border border-cyan-400/20" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400" />
        {/* Sweep line */}
        <div
          className="absolute top-1/2 left-1/2 w-[18px] h-[2px] origin-left"
          style={{
            background: "linear-gradient(90deg, rgba(34,211,238,0.8), transparent)",
            transform: reducedMotion ? "rotate(45deg)" : undefined,
            animation: reducedMotion ? undefined : "radarSweep 3s linear infinite",
          }}
        />
        {/* Blip dots */}
        <div className="absolute top-[8px] left-[22px] w-1 h-1 rounded-full bg-emerald-400"
          style={{ animation: reducedMotion ? undefined : "radarBlip 3s ease-in-out infinite" }}
        />
        <div className="absolute top-[24px] left-[12px] w-1 h-1 rounded-full bg-emerald-400"
          style={{ animation: reducedMotion ? undefined : "radarBlip 3s ease-in-out 1.5s infinite" }}
        />
      </div>
      {!reducedMotion && (
        <style>{`
          @keyframes radarSweep {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes radarBlip {
            0%, 70%, 100% { opacity: 0.2; }
            30%, 50% { opacity: 1; }
          }
        `}</style>
      )}
    </div>
  );
}

/* 9. Disk Checker — Filesystem tree with checkmarks appearing */
function DiskCheckerAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center gap-1" aria-hidden="true">
      <div className="flex flex-col gap-[3px] text-[9px] font-mono">
        {["C:\\", "├ sys", "├ usr", "└ tmp"].map((item, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="text-cyan-300/60">{item}</span>
            <span
              className="text-emerald-400"
              style={{
                opacity: reducedMotion ? 1 : undefined,
                animation: reducedMotion ? undefined : `checkAppear 3s ease-in-out ${i * 0.6}s infinite`,
              }}
            >
              ✓
            </span>
          </div>
        ))}
      </div>
      {!reducedMotion && (
        <style>{`
          @keyframes checkAppear {
            0%, 15% { opacity: 0; transform: scale(0.5); }
            25%, 85% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.5); }
          }
        `}</style>
      )}
    </div>
  );
}

/* 10. SMART Monitor — Mini line chart with data points animating in */
function SMARTMonitorAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center overflow-hidden" aria-hidden="true">
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" className="flex-shrink-0">
        {/* Grid lines */}
        <line x1="0" y1="8" x2="120" y2="8" stroke="rgba(34,211,238,0.1)" strokeWidth="0.5" />
        <line x1="0" y1="16" x2="120" y2="16" stroke="rgba(34,211,238,0.1)" strokeWidth="0.5" />
        <line x1="0" y1="24" x2="120" y2="24" stroke="rgba(34,211,238,0.1)" strokeWidth="0.5" />
        {/* Data line */}
        <polyline
          points="0,20 15,18 30,12 45,22 60,8 75,14 90,10 105,16 120,12"
          stroke="#22d3ee"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: reducedMotion ? undefined : "180",
            strokeDashoffset: reducedMotion ? undefined : "180",
            animation: reducedMotion ? undefined : "smartDraw 3s ease-out infinite",
          }}
        />
        {/* Data points */}
        {[
          [0, 20], [15, 18], [30, 12], [45, 22], [60, 8], [75, 14], [90, 10], [105, 16], [120, 12],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="2"
            fill="#22d3ee"
            style={{
              opacity: reducedMotion ? 1 : 0,
              animation: reducedMotion ? undefined : `smartDot 3s ease-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </svg>
      {!reducedMotion && (
        <style>{`
          @keyframes smartDraw {
            0% { stroke-dashoffset: 180; }
            60%, 100% { stroke-dashoffset: 0; }
          }
          @keyframes smartDot {
            0%, 15% { opacity: 0; }
            30%, 85% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}</style>
      )}
    </div>
  );
}

/* 11. Sector Surface Scan — 4x4 grid with cells lighting up sequentially */
function SectorSurfaceScanAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center justify-center" aria-hidden="true">
      <div className="grid grid-cols-4 gap-[3px]">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className="w-[9px] h-[9px] rounded-[2px] border border-cyan-400/20"
            style={{
              backgroundColor: reducedMotion ? "rgba(34,211,238,0.3)" : undefined,
              animation: reducedMotion ? undefined : `sectorScan 4s ease-in-out ${i * 0.25}s infinite`,
            }}
          />
        ))}
      </div>
      {!reducedMotion && (
        <style>{`
          @keyframes sectorScan {
            0%, 10% { background-color: rgba(34,211,238,0.05); }
            15%, 30% { background-color: rgba(34,211,238,0.7); box-shadow: 0 0 4px rgba(34,211,238,0.5); }
            45%, 100% { background-color: rgba(52,211,153,0.3); }
          }
        `}</style>
      )}
    </div>
  );
}

/* 12. Sector Repair / Stabilization — Three dots cycling red→amber→green */
function SectorRepairAnim({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="mt-3 h-[40px] flex items-center gap-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: reducedMotion
                ? i === 0 ? "#f87171" : i === 1 ? "#fbbf24" : "#34d399"
                : undefined,
              animation: reducedMotion ? undefined : `repairDot 3s ease-in-out ${i * 1}s infinite`,
            }}
          />
          <span className="text-[8px] font-mono text-cyan-300/50">
            {i === 0 ? "ERR" : i === 1 ? "FIX" : "OK"}
          </span>
        </div>
      ))}
      {!reducedMotion && (
        <style>{`
          @keyframes repairDot {
            0%, 20% { background-color: #f87171; box-shadow: 0 0 6px rgba(248,113,113,0.5); }
            40%, 60% { background-color: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.5); }
            80%, 100% { background-color: #34d399; box-shadow: 0 0 6px rgba(52,211,153,0.5); }
          }
        `}</style>
      )}
    </div>
  );
}

/* ─── Particle Background ──────────────────────────────────────────── */

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

function ParticleBackground({ reducedMotion }: { reducedMotion: boolean }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.3,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
    }));
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `particleDrift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes particleDrift {
          0% { transform: translateY(0px); opacity: var(--tw-opacity, 0.2); }
          50% { opacity: calc(var(--tw-opacity, 0.2) * 1.5); }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─── Cursor Glow ──────────────────────────────────────────────────── */

function CursorGlow({ reducedMotion }: { reducedMotion: boolean }) {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) return <div ref={gridRef} />;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          background: "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─── Animated Grid Background ─────────────────────────────────────── */

function AnimatedGrid({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        opacity: 0.15,
        animation: "gridPulse 8s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.18; }
        }
      `}</style>
    </div>
  );
}

/* ─── Feature Card with Animation ──────────────────────────────────── */

function FeatureCard({ feature, index, reducedMotion }: { feature: FeatureItem; index: number; reducedMotion: boolean }) {
  const cardContent = (
    <>
      <feature.icon className="mb-4 h-6 w-6 text-cyan-300" />
      <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="text-sm text-cyan-50/70">{feature.description}</p>
      <FeatureAnimation title={feature.title} reducedMotion={reducedMotion} />
      {feature.href && (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan-300/80 group-hover:text-cyan-200">
          Learn more <ArrowRight size={12} />
        </span>
      )}
    </>
  );

  const motionProps = {
    initial: reducedMotion ? {} : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.35, delay: index * 0.03 },
  };

  if (feature.href) {
    return (
      <motion.article
        className="group relative rounded-2xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:neon-outline"
        {...motionProps}
      >
        <Link href={feature.href} className="absolute inset-0 z-10" aria-label={`Learn more about ${feature.title}`} />
        {cardContent}
      </motion.article>
    );
  }

  return (
    <motion.article
      id={feature.id}
      className="group relative rounded-2xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:neon-outline"
      {...motionProps}
    >
      {cardContent}
    </motion.article>
  );
}

/* ─── Hero Section ─────────────────────────────────────────────────── */

function HeroSection({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-32">
      {/* Animated background blurs */}
      {!reducedMotion && (
        <>
          <div className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[140px]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/15 blur-[120px]" aria-hidden="true" />
        </>
      )}

      <motion.div
        className="relative z-10 text-center"
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Advanced Drive Monitoring{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
            &amp; Repair
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-cyan-50/80 md:text-lg">
          Professional SSD &amp; HDD diagnostics, SMART monitoring, sector surface scanning, and repair tools.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/download"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 neon-outline"
          >
            <Download size={16} /> Download DriveWatch
          </a>
          <a
            href="/download"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Start Free Scan <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Feature Grid ─────────────────────────────────────────────────── */

function FeatureGrid({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
      <motion.div
        className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={
          reducedMotion
            ? {}
            : {
                hidden: {},
                visible: { transition: { staggerChildren: 0.03 } },
              }
        }
      >
        {features.map((feature, index) => {
          return <FeatureCard key={feature.title} feature={feature} index={index} reducedMotion={reducedMotion} />;
        })}
      </motion.div>
    </section>
  );
}

/* ─── Main Page Client Component ───────────────────────────────────── */

export default function FeaturesPageClient() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground reducedMotion={prefersReducedMotion} />
      <AnimatedGrid reducedMotion={prefersReducedMotion} />
      <CursorGlow reducedMotion={prefersReducedMotion} />

      <div className="relative z-20">
        <HeroSection reducedMotion={prefersReducedMotion} />
        <FeatureGrid reducedMotion={prefersReducedMotion} />
      </div>
    </div>
  );
}
