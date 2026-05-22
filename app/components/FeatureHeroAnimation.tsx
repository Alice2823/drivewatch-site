"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

/* ─── Types ────────────────────────────────────────────────────────── */

type AnimationSlug =
  | "/ssd-health-monitor"
  | "/fan-rpm-monitor"
  | "/gpu-temperature-monitor"
  | "/cpu-temperature-monitor"
  | "/system-diagnostics"
  | "/hdd-health-monitor"
  | "/ssd-health-check"
  | "/drive-scan-tool"
  | "/disk-health-checker"
  | "/smart-drive-monitor";

/* ─── SSD Health Monitor ───────────────────────────────────────────── */

function SsdHealthViz({ paused }: { paused: boolean }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 w-full h-full">
      {/* SSD Chip */}
      <div className="relative w-40 h-24 rounded-lg border-2 border-cyan-400/60 bg-slate-900/80 flex flex-col items-center justify-center gap-1.5 overflow-hidden">
        {/* Chip pins left */}
        <div className="absolute left-0 top-2 bottom-2 w-1 flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1 h-1.5 bg-cyan-300/50 rounded-sm" />
          ))}
        </div>
        {/* Chip pins right */}
        <div className="absolute right-0 top-2 bottom-2 w-1 flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1 h-1.5 bg-cyan-300/50 rounded-sm" />
          ))}
        </div>
        {/* Health bars inside chip */}
        {[
          { label: "Life", color: "bg-emerald-400", delay: "0s" },
          { label: "Wear", color: "bg-cyan-400", delay: "0.5s" },
          { label: "Temp", color: "bg-amber-400", delay: "1s" },
          { label: "Spd", color: "bg-violet-400", delay: "1.5s" },
        ].map((bar) => (
          <div key={bar.label} className="flex items-center gap-2 w-28">
            <span className="text-[9px] text-cyan-200/70 w-7 text-right">{bar.label}</span>
            <div className="flex-1 h-2 rounded-full bg-slate-800/80 overflow-hidden">
              <div
                className={`h-full rounded-full ${bar.color}`}
                style={
                  paused
                    ? { width: "85%" }
                    : { animation: `ssdBarPulse 3s ease-in-out ${bar.delay} infinite` }
                }
              />
            </div>
          </div>
        ))}
        {/* Chip label */}
        <span className="absolute bottom-0.5 right-2 text-[7px] text-cyan-300/40 font-mono">NAND</span>
      </div>

      {/* Circular health indicator */}
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="4" />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#ssdGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="176"
            style={
              paused
                ? { strokeDashoffset: "4" }
                : { animation: "ssdRingPulse 4s ease-in-out infinite" }
            }
          />
          <defs>
            <linearGradient id="ssdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-cyan-200">98%</span>
        </div>
      </div>

      <style>{`
        @keyframes ssdBarPulse {
          0%, 100% { width: 65%; }
          50% { width: 95%; }
        }
        @keyframes ssdRingPulse {
          0%, 100% { stroke-dashoffset: 20; }
          50% { stroke-dashoffset: 4; }
        }
      `}</style>
    </div>
  );
}

/* ─── Fan RPM Monitor ──────────────────────────────────────────────── */

function FanRpmViz({ paused }: { paused: boolean }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full">
      {/* Speed rings */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {[42, 37, 32].map((r, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={`rgba(34,211,238,${0.1 + i * 0.05})`}
              strokeWidth="0.5"
              style={
                paused
                  ? {}
                  : { animation: `fanRingPulse 2s ease-in-out ${i * 0.4}s infinite` }
              }
            />
          ))}
        </svg>

        {/* Fan blades */}
        <div
          className="w-32 h-32 relative"
          style={
            paused
              ? {}
              : { animation: "fanSpin 2s linear infinite" }
          }
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-12 h-3 origin-left"
              style={{ transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(4px)` }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400/80 to-cyan-400/20" />
            </div>
          ))}
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 border-2 border-cyan-400/60" />
        </div>
      </div>

      {/* RPM readout */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full bg-emerald-400"
          style={paused ? {} : { animation: "fanIndicatorBlink 1.5s ease-in-out infinite" }}
        />
        <span className="text-lg font-mono font-bold text-cyan-200">1420</span>
        <span className="text-xs text-cyan-300/60 uppercase">RPM</span>
      </div>

      <style>{`
        @keyframes fanSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fanRingPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes fanIndicatorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

/* ─── GPU Temperature Monitor ──────────────────────────────────────── */

function GpuTempViz({ paused }: { paused: boolean }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full">
      {/* GPU Card shape */}
      <div className="relative w-48 h-28 rounded-xl border border-cyan-400/40 bg-slate-900/80 overflow-hidden">
        {/* Heatmap overlay */}
        <div
          className="absolute inset-0"
          style={
            paused
              ? { background: "linear-gradient(135deg, rgba(34,211,238,0.3) 0%, rgba(251,146,60,0.3) 100%)" }
              : { animation: "gpuHeatShift 5s ease-in-out infinite" }
          }
        />
        {/* GPU chip area */}
        <div className="absolute top-3 left-3 w-12 h-12 rounded border border-cyan-300/30 bg-slate-800/60 flex items-center justify-center">
          <span className="text-[8px] text-cyan-300/60 font-mono">GPU</span>
        </div>
        {/* VRAM modules */}
        <div className="absolute top-4 right-3 flex flex-col gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-2.5 rounded-sm border border-cyan-400/20 bg-slate-800/60"
              style={
                paused
                  ? { opacity: 0.7 }
                  : { animation: `gpuVramPulse 3s ease-in-out ${i * 0.3}s infinite` }
              }
            />
          ))}
        </div>
        {/* PCIe connector */}
        <div className="absolute bottom-0 left-4 right-4 h-2 bg-amber-500/20 rounded-t-sm flex gap-0.5 px-1 items-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-amber-400/40 rounded-sm" />
          ))}
        </div>
        {/* Fan area */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-cyan-300/20 flex items-center justify-center">
          <div
            className="w-7 h-7 rounded-full border border-cyan-300/15"
            style={paused ? {} : { animation: "fanSpin 3s linear infinite" }}
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-1 origin-left bg-cyan-300/30 rounded-full"
                style={{ transform: `translate(-50%, -50%) rotate(${i * 90}deg)` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Temperature readout */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-8 rounded-full bg-slate-800 border border-cyan-400/30 overflow-hidden relative">
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-400 to-cyan-400 rounded-full"
              style={
                paused
                  ? { height: "60%" }
                  : { animation: "gpuTempBar 4s ease-in-out infinite" }
              }
            />
          </div>
        </div>
        <span
          className="text-xl font-mono font-bold text-cyan-200"
          style={paused ? {} : { animation: "gpuTempText 4s ease-in-out infinite" }}
        >
          62°C
        </span>
      </div>

      <style>{`
        @keyframes gpuHeatShift {
          0%, 100% { background: linear-gradient(135deg, rgba(34,211,238,0.3) 0%, rgba(251,146,60,0.15) 100%); }
          50% { background: linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(251,146,60,0.4) 100%); }
        }
        @keyframes gpuVramPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes gpuTempBar {
          0%, 100% { height: 45%; }
          50% { height: 80%; }
        }
        @keyframes gpuTempText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

/* ─── CPU Temperature Monitor ──────────────────────────────────────── */

function CpuTempViz({ paused }: { paused: boolean }) {
  const coreHeats = useMemo(() => {
    return [...Array(16)].map(() => Math.random() * 0.6 + 0.4);
  }, []);

  return (
    <div className="relative flex items-center justify-center gap-4 w-full h-full">
      {/* CPU Die grid */}
      <div className="relative">
        <div className="grid grid-cols-4 gap-1.5 p-3 rounded-lg border-2 border-cyan-400/40 bg-slate-900/80">
          {coreHeats.map((heat, i) => {
            const hue = heat > 0.75 ? "bg-amber-400" : heat > 0.55 ? "bg-cyan-400" : "bg-emerald-400";
            return (
              <div
                key={i}
                className={`w-7 h-7 rounded-sm ${hue} flex items-center justify-center`}
                style={
                  paused
                    ? { opacity: heat }
                    : { animation: `cpuCorePulse 3s ease-in-out ${i * 0.15}s infinite` }
                }
              >
                <span className="text-[7px] font-mono text-slate-900/70">{i}</span>
              </div>
            );
          })}
        </div>
        {/* IHS label */}
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] text-cyan-300/50 font-mono bg-slate-900 px-1">CPU DIE</span>
      </div>

      {/* Thermometer bar */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-4 h-32 rounded-full bg-slate-800 border border-cyan-400/30 overflow-hidden relative">
          <div
            className="absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-t from-red-400 via-amber-400 to-cyan-400"
            style={
              paused
                ? { height: "65%" }
                : { animation: "cpuThermometer 5s ease-in-out infinite" }
            }
          />
          {/* Tick marks */}
          {[20, 40, 60, 80].map((pos) => (
            <div
              key={pos}
              className="absolute left-0 right-0 h-px bg-cyan-300/20"
              style={{ bottom: `${pos}%` }}
            />
          ))}
        </div>
        <span className="text-[9px] text-cyan-300/60 font-mono">°C</span>
      </div>

      <style>{`
        @keyframes cpuCorePulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes cpuThermometer {
          0%, 100% { height: 50%; }
          30% { height: 80%; }
          60% { height: 60%; }
        }
      `}</style>
    </div>
  );
}

/* ─── System Diagnostics ───────────────────────────────────────────── */

function SystemDiagViz({ paused }: { paused: boolean }) {
  const gauges = [
    { label: "CPU", value: 72, color: "text-cyan-400", stroke: "#22d3ee" },
    { label: "GPU", value: 58, color: "text-violet-400", stroke: "#a78bfa" },
    { label: "Disk", value: 45, color: "text-emerald-400", stroke: "#34d399" },
    { label: "RAM", value: 83, color: "text-amber-400", stroke: "#fbbf24" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center gap-2 w-full h-full">
      <div className="grid grid-cols-2 gap-3">
        {gauges.map((gauge, i) => (
          <div key={gauge.label} className="flex flex-col items-center gap-1 p-2 rounded-lg border border-cyan-500/15 bg-slate-900/50">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="5" />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke={gauge.stroke}
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="163"
                  transform="rotate(-90 32 32)"
                  style={
                    paused
                      ? { strokeDashoffset: `${163 - (163 * gauge.value) / 100}` }
                      : { animation: `diagGauge${i} 4s ease-in-out infinite` }
                  }
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xs font-bold ${gauge.color}`}>{gauge.value}%</span>
              </div>
            </div>
            <span className="text-[10px] text-cyan-200/60 font-medium">{gauge.label}</span>
          </div>
        ))}
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-2 mt-1">
        <div
          className="w-2 h-2 rounded-full bg-emerald-400"
          style={paused ? {} : { animation: "fanIndicatorBlink 2s ease-in-out infinite" }}
        />
        <span className="text-[10px] text-emerald-300/80 font-medium uppercase tracking-wider">All Systems Normal</span>
      </div>

      <style>{`
        @keyframes diagGauge0 {
          0%, 100% { stroke-dashoffset: ${163 - (163 * 72) / 100}; }
          50% { stroke-dashoffset: ${163 - (163 * 85) / 100}; }
        }
        @keyframes diagGauge1 {
          0%, 100% { stroke-dashoffset: ${163 - (163 * 58) / 100}; }
          50% { stroke-dashoffset: ${163 - (163 * 70) / 100}; }
        }
        @keyframes diagGauge2 {
          0%, 100% { stroke-dashoffset: ${163 - (163 * 45) / 100}; }
          50% { stroke-dashoffset: ${163 - (163 * 60) / 100}; }
        }
        @keyframes diagGauge3 {
          0%, 100% { stroke-dashoffset: ${163 - (163 * 83) / 100}; }
          50% { stroke-dashoffset: ${163 - (163 * 92) / 100}; }
        }
      `}</style>
    </div>
  );
}


/* ─── HDD Health Monitor ───────────────────────────────────────────── */

function HddHealthViz({ paused }: { paused: boolean }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full">
      {/* Spinning platter */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        {/* Concentric tracks */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={paused ? {} : { animation: "hddPlatterSpin 8s linear infinite" }}
        >
          {[40, 34, 28, 22, 16, 10].map((r, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-cyan-400/20"
              style={{ width: `${r * 2}%`, height: `${r * 2}%` }}
            />
          ))}
          {/* Sector indicators */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/60"
              style={{
                top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`,
                left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`,
                ...(paused ? {} : { animation: `hddSectorBlink 2s ease-in-out ${i * 0.25}s infinite` }),
              }}
            />
          ))}
        </div>

        {/* Center spindle */}
        <div className="absolute w-5 h-5 rounded-full bg-slate-700 border-2 border-cyan-400/40 z-10" />

        {/* Read/write arm */}
        <div
          className="absolute top-1/2 right-2 w-20 h-1 origin-right z-20"
          style={paused ? { transform: "rotate(-30deg)" } : { animation: "hddArmSweep 4s ease-in-out infinite" }}
        >
          <div className="w-full h-full bg-gradient-to-l from-slate-500 to-cyan-400/80 rounded-full" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-3 bg-cyan-300/80 rounded-sm" />
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-cyan-300/60 font-mono">SECTORS OK</span>
        <div
          className="w-2 h-2 rounded-full bg-emerald-400"
          style={paused ? {} : { animation: "fanIndicatorBlink 1.5s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes hddPlatterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hddArmSweep {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(-50deg); }
        }
        @keyframes hddSectorBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ─── SSD Health Check (NAND Flash Grid) ───────────────────────────── */

function SsdHealthCheckViz({ paused }: { paused: boolean }) {
  const cells = useMemo(() => {
    return [...Array(48)].map(() => {
      const rand = Math.random();
      if (rand < 0.6) return "fresh";
      if (rand < 0.85) return "used";
      return "worn";
    });
  }, []);

  const cellColor: Record<string, string> = {
    fresh: "bg-emerald-400",
    used: "bg-amber-400",
    worn: "bg-red-400",
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full">
      {/* NAND label */}
      <span className="text-[9px] text-cyan-300/50 font-mono uppercase tracking-widest">NAND Flash Cells</span>

      {/* Cell grid */}
      <div className="grid grid-cols-8 gap-1 p-3 rounded-lg border border-cyan-400/30 bg-slate-900/70">
        {cells.map((state, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-sm ${cellColor[state]}`}
            style={
              paused
                ? { opacity: state === "fresh" ? 0.9 : state === "used" ? 0.7 : 0.5 }
                : { animation: `nandCellPulse 4s ease-in-out ${(i % 8) * 0.2 + Math.floor(i / 8) * 0.3}s infinite` }
            }
          />
        ))}
      </div>

      {/* TBW Counter */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-cyan-300/60 font-mono">TBW:</span>
        <span
          className="text-sm font-mono font-bold text-cyan-200"
          style={paused ? {} : { animation: "tbwPulse 3s ease-in-out infinite" }}
        >
          142.7 TB
        </span>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3">
        {[
          { label: "Fresh", color: "bg-emerald-400" },
          { label: "Used", color: "bg-amber-400" },
          { label: "Worn", color: "bg-red-400" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-sm ${item.color}`} />
            <span className="text-[8px] text-cyan-200/50">{item.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes nandCellPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes tbwPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

/* ─── Drive Scan Tool (Radar) ──────────────────────────────────────── */

function DriveScanViz({ paused }: { paused: boolean }) {
  const blips = useMemo(() => {
    return [...Array(7)].map(() => ({
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full">
      {/* Radar circle */}
      <div className="relative w-44 h-44">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Concentric rings */}
          {[20, 30, 40].map((r, i) => (
            <circle key={i} cx="50" cy="50" r={r} fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
          ))}
          {/* Cross hairs */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(34,211,238,0.1)" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(34,211,238,0.1)" strokeWidth="0.5" />
          {/* Outer ring */}
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
        </svg>

        {/* Sweep line */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={paused ? {} : { animation: "radarSweep 3s linear infinite" }}
        >
          <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-cyan-400/80 to-transparent" />
          {/* Sweep trail */}
          <div
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: "50%",
              height: "50%",
              background: "conic-gradient(from -30deg, rgba(34,211,238,0.15), transparent 30deg)",
              clipPath: "polygon(0 0, 100% -50%, 100% 50%)",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        {/* Blip dots */}
        {blips.map((blip, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-300"
            style={{
              top: `${blip.y}%`,
              left: `${blip.x}%`,
              ...(paused ? { opacity: 0.6 } : { animation: `radarBlip 3s ease-in-out ${blip.delay}s infinite` }),
            }}
          />
        ))}

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-cyan-300/60 font-mono">SCANNING</span>
        <span
          className="text-sm font-mono font-bold text-cyan-200"
          style={paused ? {} : { animation: "scanPercent 6s linear infinite" }}
        >
          67%
        </span>
      </div>

      <style>{`
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes radarBlip {
          0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
          75%, 95% { opacity: 1; transform: scale(1); }
        }
        @keyframes scanPercent {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

/* ─── Disk Health Checker ──────────────────────────────────────────── */

function DiskHealthViz({ paused }: { paused: boolean }) {
  const sectors = useMemo(() => {
    return [...Array(12)].map(() => ({
      health: Math.random() > 0.15 ? "healthy" : "warning",
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full">
      {/* Disk shape */}
      <div className="relative w-44 h-44">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Disk sectors as pie slices */}
          {sectors.map((sector, i) => {
            const angle = (i * 360) / 12;
            const nextAngle = ((i + 1) * 360) / 12;
            const startRad = (angle * Math.PI) / 180;
            const endRad = (nextAngle * Math.PI) / 180;
            const x1 = 50 + 40 * Math.cos(startRad);
            const y1 = 50 + 40 * Math.sin(startRad);
            const x2 = 50 + 40 * Math.cos(endRad);
            const y2 = 50 + 40 * Math.sin(endRad);
            const innerX1 = 50 + 15 * Math.cos(startRad);
            const innerY1 = 50 + 15 * Math.sin(startRad);
            const innerX2 = 50 + 15 * Math.cos(endRad);
            const innerY2 = 50 + 15 * Math.sin(endRad);

            const fillColor = sector.health === "healthy" ? "rgba(52,211,153,0.4)" : "rgba(251,191,36,0.5)";

            return (
              <path
                key={i}
                d={`M ${innerX1} ${innerY1} L ${x1} ${y1} A 40 40 0 0 1 ${x2} ${y2} L ${innerX2} ${innerY2} A 15 15 0 0 0 ${innerX1} ${innerY1}`}
                fill={fillColor}
                stroke="rgba(34,211,238,0.2)"
                strokeWidth="0.5"
                style={
                  paused
                    ? { opacity: 0.8 }
                    : { animation: `diskSectorPulse 4s ease-in-out ${sector.delay}s infinite` }
                }
              />
            );
          })}
          {/* Center */}
          <circle cx="50" cy="50" r="12" fill="rgba(15,23,42,0.9)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
        </svg>

        {/* Checkmarks appearing */}
        {sectors.map((sector, i) => {
          if (sector.health !== "healthy") return null;
          const angle = ((i * 360) / 12 + 15) * (Math.PI / 180);
          const x = 50 + 28 * Math.cos(angle);
          const y = 50 + 28 * Math.sin(angle);
          return (
            <div
              key={i}
              className="absolute text-emerald-400 text-[8px]"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
                ...(paused ? { opacity: 1 } : { animation: `checkAppear 3s ease-in-out ${i * 0.3}s infinite` }),
              }}
            >
              ✓
            </div>
          );
        })}
      </div>

      {/* Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[9px] text-cyan-200/60">Healthy</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-[9px] text-cyan-200/60">Warning</span>
        </div>
      </div>

      <style>{`
        @keyframes diskSectorPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes checkAppear {
          0%, 40%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          50%, 90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ─── SMART Drive Monitor ──────────────────────────────────────────── */

function SmartDriveViz({ paused }: { paused: boolean }) {
  const attributes = [
    { name: "Reallocated Sectors", value: 0, max: 100, status: "green", delay: "0s" },
    { name: "Power-On Hours", value: 8742, max: 50000, status: "green", delay: "0.3s" },
    { name: "Temperature", value: 38, max: 70, status: "green", delay: "0.6s" },
    { name: "Wear Leveling", value: 12, max: 100, status: "yellow", delay: "0.9s" },
    { name: "CRC Errors", value: 2, max: 50, status: "green", delay: "1.2s" },
  ];

  const statusColor: Record<string, string> = {
    green: "bg-emerald-400",
    yellow: "bg-amber-400",
    red: "bg-red-400",
  };

  const barColor: Record<string, string> = {
    green: "bg-emerald-400",
    yellow: "bg-amber-400",
    red: "bg-red-400",
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-2 w-full h-full">
      <span className="text-[9px] text-cyan-300/50 font-mono uppercase tracking-widest">S.M.A.R.T. Attributes</span>

      <div className="w-full max-w-[220px] flex flex-col gap-2 p-3 rounded-lg border border-cyan-400/20 bg-slate-900/70">
        {attributes.map((attr) => (
          <div key={attr.name} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${statusColor[attr.status]} flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[8px] text-cyan-200/60 truncate">{attr.name}</span>
                <span className="text-[8px] text-cyan-300/80 font-mono ml-1">{attr.value}</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                <div
                  className={`h-full rounded-full ${barColor[attr.status]}`}
                  style={
                    paused
                      ? { width: `${(attr.value / attr.max) * 100}%` }
                      : { animation: `smartBar 4s ease-in-out ${attr.delay} infinite` }
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall status */}
      <div className="flex items-center gap-2 mt-1">
        <div
          className="w-2 h-2 rounded-full bg-emerald-400"
          style={paused ? {} : { animation: "fanIndicatorBlink 2s ease-in-out infinite" }}
        />
        <span className="text-[10px] text-emerald-300/80 font-medium uppercase tracking-wider">SMART Status: PASS</span>
      </div>

      <style>{`
        @keyframes smartBar {
          0%, 100% { width: 15%; }
          50% { width: 65%; }
        }
      `}</style>
    </div>
  );
}

/* ─── Main Export ──────────────────────────────────────────────────── */

export function FeatureHeroAnimation({ slug }: { slug: string }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const paused = prefersReducedMotion;

  const animationMap: Record<string, React.ReactNode> = {
    "/ssd-health-monitor": <SsdHealthViz paused={paused} />,
    "/fan-rpm-monitor": <FanRpmViz paused={paused} />,
    "/gpu-temperature-monitor": <GpuTempViz paused={paused} />,
    "/cpu-temperature-monitor": <CpuTempViz paused={paused} />,
    "/system-diagnostics": <SystemDiagViz paused={paused} />,
    "/hdd-health-monitor": <HddHealthViz paused={paused} />,
    "/ssd-health-check": <SsdHealthCheckViz paused={paused} />,
    "/drive-scan-tool": <DriveScanViz paused={paused} />,
    "/disk-health-checker": <DiskHealthViz paused={paused} />,
    "/smart-drive-monitor": <SmartDriveViz paused={paused} />,
  };

  const animation = animationMap[slug];

  if (!animation) return null;

  return (
    <div className="glass-card neon-outline rounded-2xl p-6 w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] flex items-center justify-center">
      {animation}
    </div>
  );
}
