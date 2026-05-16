"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { featurePages, downloadLinks } from "../lib/seo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Features", href: "/#features" },
    ...featurePages.map((page) => ({
      name: page.navTitle,
      href: page.slug,
    })),
    { name: "Blog", href: "/blog" },
    { name: "Download", href: "/download" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <Image
              src="/images/drivewatch-logo.png"
              alt="DriveWatch logo"
              width={42}
              height={42}
              className="rounded-full bg-white p-0.5 ring-1 ring-cyan-200/45 transition-transform duration-500 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="hidden sm:block">
            <p className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              DriveWatch
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/70 font-medium">
              Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-cyan-500/10 ${
                  isActive ? "text-cyan-300" : "text-cyan-100/70 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden sm:flex neon-outline items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <Download size={16} />
            <span className="hidden xl:inline">Download</span>
            <span className="xl:hidden text-xs">v1.2.3</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-100 hover:text-white hover:bg-cyan-500/20 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[-1] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-slate-900 border-l border-cyan-500/20 p-8 shadow-2xl z-[101] lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">Navigation</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-cyan-100/50 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto flex-grow pr-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                          : "border-transparent text-cyan-100/70 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span className="text-lg font-medium">{link.name}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-cyan-500/10 space-y-4">
                <Link
                  href="/download"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-bold text-center transition-transform active:scale-95"
                >
                  <Download size={20} />
                  Download DriveWatch
                </Link>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
