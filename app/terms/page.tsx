import type { Metadata } from "next";
import { Scale, Gavel, CheckCircle, AlertTriangle, UserCheck } from "lucide-react";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service | DriveWatch",
  description: "Read the DriveWatch Terms of Service to understand your rights and responsibilities when using our software and services.",
  path: "/terms",
});

export default function TermsPage() {
  const lastUpdated = "May 16, 2026";

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <header className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-cyan-500/10 p-3 text-cyan-400">
          <Scale size={32} />
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-cyan-100/60 text-sm">Last Updated: {lastUpdated}</p>
      </header>

      <div className="space-y-12 text-cyan-100/80 leading-relaxed">
        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
          </div>
          <p>
            By downloading, installing, or using DriveWatch ("Software"), you agree to be bound by these 
            Terms of Service. If you do not agree to these terms, do not install or use the Software.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">2. License Grant</h2>
          </div>
          <p className="mb-4">
            We grant you a non-exclusive, non-transferable, revocable license to use DriveWatch for 
            personal or professional hardware monitoring purposes. You may not:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Reverse engineer, decompile, or disassemble the Software.</li>
            <li>Modify, adapt, or create derivative works based on the Software.</li>
            <li>Rent, lease, lend, or sublicense the Software to third parties.</li>
            <li>Remove or alter any copyright or trademark notices.</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">3. Disclaimer of Warranty</h2>
          </div>
          <p className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-200/80 italic">
            "DRIVEWATCH IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE THAT THE 
            SOFTWARE WILL PREVENT HARDWARE FAILURE OR PROVIDE 100% ACCURATE DIAGNOSTICS."
          </p>
          <p className="mt-4">
            Use of the Software is at your own risk. We are not responsible for any data loss, hardware 
            damage, or system instability resulting from the use of the Software.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Gavel className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
          </div>
          <p>
            In no event shall DriveWatch or its developers be liable for any indirect, incidental, 
            special, or consequential damages arising out of or in connection with your use of 
            the Software.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <h2 className="text-2xl font-bold text-white mb-6">5. Automatic Updates</h2>
          <p>
            The Software includes an automatic update feature. By using the Software, you consent to 
            the downloading and installation of updates designed to improve performance and security.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Questions?</h2>
          <p className="mb-6">If you have any questions about these Terms, please contact us at:</p>
          <a href="mailto:allipatel33@gmail.com" className="inline-block px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-bold hover:bg-cyan-500/20 transition-all">
            allipatel33@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
