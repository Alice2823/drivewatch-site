"use client";

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cyber-grid opacity-[0.15]" />
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute right-[10%] bottom-[20%] h-[500px] w-[500px] bg-violet-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex-grow pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}

