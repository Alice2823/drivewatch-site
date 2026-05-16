import type { Metadata } from "next";
import { Shield, Lock, Eye, FileText, Globe } from "lucide-react";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | DriveWatch",
  description: "Read the DriveWatch Privacy Policy to understand how we handle your data and protect your privacy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const lastUpdated = "May 16, 2026";

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <header className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-cyan-500/10 p-3 text-cyan-400">
          <Shield size={32} />
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-cyan-100/60 text-sm">Last Updated: {lastUpdated}</p>
      </header>

      <div className="space-y-12 text-cyan-100/80 leading-relaxed">
        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
          </div>
          <p>
            Welcome to DriveWatch. We value your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how DriveWatch ("we", "us", or "our") collects, uses, and safeguards 
            your information when you use our software application and website.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">2. Data We Collect</h2>
          </div>
          <p className="mb-4">
            DriveWatch is designed to be a lightweight monitoring tool. We collect minimal data necessary to provide our services:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Hardware Information:</strong> To provide diagnostics, we process local data about your SSD, CPU, and GPU. This data remains on your device and is not uploaded to our servers unless explicitly shared for diagnostics.</li>
            <li><strong>Usage Data:</strong> We may collect anonymous telemetry data (e.g., application version, feature usage) to improve software performance.</li>
            <li><strong>Contact Information:</strong> If you contact us for support, we collect your email address and any information you provide.</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">3. How We Use Data</h2>
          </div>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide real-time hardware monitoring and diagnostics.</li>
            <li>Send automatic update notifications and security patches.</li>
            <li>Respond to technical support inquiries.</li>
            <li>Analyze application performance to fix bugs and improve user experience.</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
          </div>
          <p>
            We implement industry-standard security measures to protect your data. DriveWatch uses secure 
            installer workflows and encrypted update channels. However, no method of transmission over 
            the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10">
          <h2 className="text-2xl font-bold text-white mb-6">5. Third-Party Services</h2>
          <p>
            We may use third-party analytics services (like Google Analytics) on our website to understand 
            visitor behavior. These services have their own privacy policies. Our software does not sell 
            your data to third-party advertisers.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-cyan-500/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
          <a href="mailto:allipatel33@gmail.com" className="inline-block px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-bold hover:bg-cyan-500/20 transition-all">
            allipatel33@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
