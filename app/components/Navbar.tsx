"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { featurePages, downloadLinks } from "../lib/seo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const pathname = usePathname();
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change instantly
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 120); // Snappy 120ms buffer to prevent accidental mouse-slip closures
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    // Enable full tap/click support for touch screens
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <Image
                src="/favicon.png"
                alt="DriveWatch logo"
                width={42}
                height={42}
                className="rounded-full bg-white p-0.5 ring-1 ring-cyan-200/45 transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

          {/* Right aligned navigation and CTA group */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Features Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleDropdownClick}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-cyan-500/10 flex items-center gap-1.5 focus:outline-none ${
                  pathname === "/#features" || featurePages.some(p => pathname === p.slug)
                    ? "text-cyan-300"
                    : "text-cyan-100/70 hover:text-white"
                }`}
              >
                <span>Features</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-cyan-300" : "text-cyan-100/50"
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.12, ease: "easeOut" }} // Premium snappy response curve
                    className="absolute right-0 mt-2 w-[480px] rounded-2xl border border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] z-[110]"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {featurePages.map((page) => {
                        const isActive = pathname === page.slug;
                        return (
                          <Link
                            key={page.slug}
                            href={page.slug}
                            className={`flex flex-col p-3 rounded-xl transition-all duration-200 hover:bg-cyan-500/10 ${
                              isActive
                                ? "bg-cyan-500/10 border-l-2 border-cyan-400 pl-2.5"
                                : ""
                            }`}
                          >
                            <span className={`text-sm font-semibold ${isActive ? "text-cyan-300" : "text-cyan-100"}`}>
                              {page.navTitle}
                            </span>
                            <span className="text-[11px] text-cyan-100/50 line-clamp-1 mt-0.5">
                              {page.eyebrow}
                            </span>
                          </Link>
                        );
                      })}

                      {/* Blog link inside Features dropdown */}
                      <Link
                        href="/blog"
                        className={`flex flex-col p-3 rounded-xl transition-all duration-200 hover:bg-cyan-500/10 border border-cyan-500/20 bg-cyan-500/5 ${
                          pathname === "/blog" ? "border-cyan-400/50" : ""
                        }`}
                      >
                        <span className="text-sm font-bold text-cyan-300">
                          DriveWatch Blog
                        </span>
                        <span className="text-[11px] text-cyan-100/60 mt-0.5">
                          Read guides & updates
                        </span>
                      </Link>

                      {/* Download link inside Features dropdown */}
                      <Link
                        href="/download"
                        className={`flex flex-col p-3 rounded-xl transition-all duration-200 hover:bg-cyan-500/10 border border-cyan-500/20 bg-cyan-500/5 ${
                          pathname === "/download" ? "border-cyan-400/50" : ""
                        }`}
                      >
                        <span className="text-sm font-bold text-cyan-300">
                          Download Center
                        </span>
                        <span className="text-[11px] text-cyan-100/60 mt-0.5">
                          Get installer packages
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Pill Download Button */}
            <Link
              href="/download"
              className="neon-outline flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
            >
              <Download size={16} />
              <span>Download</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="flex items-center lg:hidden gap-3">
            <Link
              href="/download"
              className="neon-outline flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-4 py-2 text-xs font-bold text-slate-950 active:scale-95 transition-transform"
            >
              <Download size={14} />
              <span>Download</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-100 hover:text-white hover:bg-cyan-500/20 transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 
        Mobile Menu Overlay - Placed OUTSIDE the <nav> element.
        This prevents the CSS specification rule where "backdrop-filter" (backdrop-blur-xl) 
        on the scrolled <nav> parent acts as a containing block for fixed positioning, 
        which was crushing the height of the mobile drawer menu when scrolled.
      */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] lg:hidden">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
              transition={{ duration: 0.2 }}
            />
            {/* Snappy Hamburger Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }} // Hardware-accelerated cubic-bezier
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-950 border-l border-cyan-500/20 p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col z-[121]"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">Navigation</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-cyan-100/50 hover:text-white active:scale-90 transition-transform"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto flex-grow pr-2">
                {/* Features Collapsible Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                    className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/10 text-cyan-100/70 hover:bg-slate-900 hover:text-white transition-all duration-200"
                  >
                    <span className="text-lg font-medium">Features</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileFeaturesOpen ? "rotate-180 text-cyan-400" : "text-cyan-100/50"
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileFeaturesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                        className="pl-4 pr-1 flex flex-col gap-1.5 border-l border-cyan-500/10 ml-6 mt-1.5"
                      >
                        {featurePages.map((page) => {
                          const isActive = pathname === page.slug;
                          return (
                            <Link
                              key={page.slug}
                              href={page.slug}
                              className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 ${
                                isActive
                                  ? "bg-cyan-500/10 text-cyan-300"
                                  : "text-cyan-100/60 hover:bg-slate-900 hover:text-white"
                              }`}
                            >
                              <span className="text-base font-medium">{page.navTitle}</span>
                              {isActive && <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                            </Link>
                          );
                        })}

                        {/* Blog inside mobile Features accordion */}
                        <Link
                          href="/blog"
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 ${
                            pathname === "/blog"
                              ? "bg-cyan-500/10 text-cyan-300"
                              : "text-cyan-100/60 hover:bg-slate-900 hover:text-white"
                          }`}
                        >
                          <span className="text-base font-bold text-cyan-300">DriveWatch Blog</span>
                          {pathname === "/blog" && <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                        </Link>

                        {/* Download inside mobile Features accordion */}
                        <Link
                          href="/download"
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-150 ${
                            pathname === "/download"
                              ? "bg-cyan-500/10 text-cyan-300"
                              : "text-cyan-100/60 hover:bg-slate-900 hover:text-white"
                          }`}
                        >
                          <span className="text-base font-bold text-cyan-300">Download Center</span>
                          {pathname === "/download" && <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-cyan-500/10 space-y-4">
                <Link
                  href="/download"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-bold text-center active:scale-95 transition-transform"
                >
                  <Download size={20} />
                  Download DriveWatch
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
