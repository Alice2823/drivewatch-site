import type { Metadata } from "next";

export const siteUrl = "https://www.drivewatch.site";
export const siteName = "DriveWatch";
export const siteDescription =
  "DriveWatch is a professional HDD and SSD health monitoring software for real-time drive scanning, SMART diagnostics, temperature monitoring, and disk health analysis. Includes fan RPM, CPU, and GPU tracking.";

export const downloadLinks = {
  windows:
    "https://github.com/Alice2823/drivewatch-site/releases/latest/download/DriveWatch-Setup.exe",
  mac:
    "https://github.com/Alice2823/drivewatch-site/releases/latest/download/DriveWatch.dmg",
};

export const softwareVersion = "1.2.3";

export const seoKeywords = [
  "SSD health monitoring",
  "SSD health monitor",
  "fan RPM monitor",
  "fan RPM monitoring",
  "CPU temperature monitor",
  "CPU monitoring",
  "GPU monitoring",
  "GPU temperature tracking",
  "disk health checker",
  "disk health analytics",
  "PC monitoring software",
  "hardware monitoring",
  "hardware analytics",
  "system diagnostics",
  "Windows monitoring software",
  "storage utility",
  "HDD health monitor",
  "SSD health check",
  "drive scan tool",
  "disk health software",
  "HDD scan",
  "SSD monitoring",
  "SMART drive monitor",
  "hard drive checker",
  "disk diagnostic tool",
  "drive health monitor",
];

const ogImage = {
  url: `${siteUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "DriveWatch PC monitoring dashboard for SSD health, fan RPM, CPU, and GPU diagnostics",
};

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  if (path === "/") {
    return siteUrl;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: Array.from(new Set([...seoKeywords, ...keywords])),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      locale: "en_US",
      images: [ogImage],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [siteName],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export type FeaturePage = {
  slug: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  sections: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
};

export const featurePages: FeaturePage[] = [
  {
    slug: "/ssd-health-monitor",
    navTitle: "SSD Health",
    metaTitle: "SSD Health Monitor for Windows",
    metaDescription:
      "Use DriveWatch as an SSD health monitor and disk health checker for Windows with real-time storage analytics, thermal visibility, and proactive diagnostics.",
    keywords: [
      "SSD health monitor",
      "SSD health monitoring software",
      "disk health checker",
      "disk health analytics",
    ],
    eyebrow: "SSD health monitoring",
    title: "SSD health monitoring for proactive disk protection",
    description:
      "DriveWatch helps you track SSD health, disk temperature, activity spikes, and storage risk signals in one polished Windows monitoring software dashboard.",
    stat: "98%",
    statLabel: "Health visibility",
    sections: [
      {
        title: "Real-time SSD health signals",
        description:
          "Watch disk health, utilization, response behavior, and thermal changes so storage issues are easier to spot before they interrupt work.",
      },
      {
        title: "Disk health analytics",
        description:
          "DriveWatch turns raw storage activity into readable health analytics for internal SSDs, external drives, USB media, and mapped storage.",
      },
      {
        title: "Storage diagnostics for Windows",
        description:
          "Use a focused diagnostics layer to review health trends, temperature movement, and performance symptoms without jumping between tools.",
      },
    ],
    benefits: [
      "Monitor SSD health and disk health from one dashboard",
      "Track storage temperature, activity, and performance behavior",
      "Identify warning patterns with hardware analytics",
      "Keep internal and external drives easier to manage",
    ],
    faqs: [
      {
        question: "Can DriveWatch help check SSD health?",
        answer:
          "Yes. DriveWatch is designed to surface SSD health monitoring signals, disk health trends, temperature context, and storage diagnostics in a clear interface.",
      },
      {
        question: "Does DriveWatch support external drives?",
        answer:
          "DriveWatch includes multi-drive and USB monitoring workflows for internal, external, and removable storage visibility.",
      },
    ],
    relatedSlugs: ["/system-diagnostics", "/cpu-temperature-monitor"],
  },
  {
    slug: "/fan-rpm-monitor",
    navTitle: "Fan RPM",
    metaTitle: "Fan RPM Monitor for Windows PCs",
    metaDescription:
      "DriveWatch provides fan RPM monitoring context alongside CPU, GPU, disk health, and Windows system diagnostics for cleaner PC hardware visibility.",
    keywords: ["fan RPM monitor", "fan RPM monitoring", "PC fan monitor"],
    eyebrow: "Fan RPM monitoring",
    title: "Fan RPM monitoring for quieter, healthier systems",
    description:
      "Use DriveWatch to understand fan behavior alongside temperature, load, storage activity, and system diagnostics so PC cooling decisions are easier to trust.",
    stat: "250ms",
    statLabel: "Alert reaction",
    sections: [
      {
        title: "Cooling visibility in context",
        description:
          "Fan RPM monitoring is most useful when it is connected to CPU temperature, GPU temperature tracking, workload spikes, and disk activity.",
      },
      {
        title: "Hardware monitoring without clutter",
        description:
          "DriveWatch keeps fan, thermal, and performance information readable for users who need fast insight instead of noisy hardware panels.",
      },
      {
        title: "Thermal alert readiness",
        description:
          "Pair fan RPM awareness with smart notifications so overheating patterns, cooling drops, and load changes are easier to respond to.",
      },
    ],
    benefits: [
      "Track fan RPM monitoring context with CPU and GPU thermals",
      "Understand cooling behavior during heavy workloads",
      "Support quieter systems with better thermal awareness",
      "Connect fan behavior to broader Windows monitoring software signals",
    ],
    faqs: [
      {
        question: "Why monitor fan RPM with temperature?",
        answer:
          "Fan speed is easier to interpret when it is paired with CPU, GPU, and storage temperature trends from the same system diagnostics view.",
      },
      {
        question: "Is fan RPM monitoring useful for gaming PCs?",
        answer:
          "Yes. It helps reveal cooling behavior during sustained GPU, CPU, and disk activity, especially when performance changes are hard to diagnose.",
      },
    ],
    relatedSlugs: ["/cpu-temperature-monitor", "/gpu-temperature-monitor"],
  },
  {
    slug: "/gpu-temperature-monitor",
    navTitle: "GPU Temps",
    metaTitle: "GPU Temperature Monitor and Tracking",
    metaDescription:
      "Track GPU temperatures, hardware analytics, system diagnostics, and performance behavior with DriveWatch PC monitoring software.",
    keywords: [
      "GPU temperature monitor",
      "GPU temperature tracking",
      "GPU monitoring",
      "hardware analytics",
    ],
    eyebrow: "GPU temperature tracking",
    title: "GPU temperature tracking for performance stability",
    description:
      "DriveWatch brings GPU temperature tracking into a broader hardware monitoring workspace with storage health, CPU monitoring, alerts, and diagnostics.",
    stat: "20+",
    statLabel: "Telemetry signals",
    sections: [
      {
        title: "GPU thermal trend awareness",
        description:
          "Monitor GPU temperature movement during games, rendering, and heavy desktop workloads so thermal pressure is easier to understand.",
      },
      {
        title: "Performance diagnostics",
        description:
          "Compare GPU temperature tracking with CPU, disk, and fan behavior to investigate slowdowns, spikes, or unstable performance.",
      },
      {
        title: "Smart alert workflow",
        description:
          "Use DriveWatch alerts to stay aware of thermal stress, abnormal activity, and performance events without staring at a dashboard all day.",
      },
    ],
    benefits: [
      "Track GPU temperature patterns during demanding workloads",
      "Connect GPU monitoring with CPU and disk diagnostics",
      "Reduce guesswork when performance drops",
      "Use hardware analytics to spot thermal pressure earlier",
    ],
    faqs: [
      {
        question: "Why does GPU temperature matter?",
        answer:
          "High GPU temperatures can contribute to throttling, unstable performance, and shorter component comfort margins during sustained workloads.",
      },
      {
        question: "Can DriveWatch help with GPU diagnostics?",
        answer:
          "DriveWatch gives GPU temperature tracking a broader diagnostics context by pairing it with CPU, disk, fan, and system activity signals.",
      },
    ],
    relatedSlugs: ["/fan-rpm-monitor", "/cpu-temperature-monitor"],
  },
  {
    slug: "/cpu-temperature-monitor",
    navTitle: "CPU Temps",
    metaTitle: "CPU Temperature Monitor for Windows",
    metaDescription:
      "Monitor CPU temperature, fan RPM context, performance activity, and system diagnostics with DriveWatch Windows monitoring software.",
    keywords: [
      "CPU temperature monitor",
      "CPU monitoring",
      "CPU temperature monitoring",
      "Windows monitoring software",
    ],
    eyebrow: "CPU temperature monitoring",
    title: "CPU temperature monitoring for stable everyday performance",
    description:
      "DriveWatch helps you understand CPU temperature and load behavior alongside fan RPM monitoring, GPU temperature tracking, disk health, and alerts.",
    stat: "<1.5%",
    statLabel: "CPU footprint",
    sections: [
      {
        title: "Temperature and load together",
        description:
          "CPU monitoring is clearer when temperature, system load, cooling behavior, and disk activity are visible in one diagnostics workflow.",
      },
      {
        title: "Lightweight PC monitoring",
        description:
          "DriveWatch is designed for low overhead, making it practical to keep hardware monitoring active during normal work and performance-heavy sessions.",
      },
      {
        title: "Diagnostics for thermal events",
        description:
          "Review CPU temperature movement with alerts and hardware analytics so overheating patterns are easier to investigate.",
      },
    ],
    benefits: [
      "Monitor CPU temperature and system activity together",
      "Pair CPU monitoring with fan RPM and GPU temperature tracking",
      "Keep diagnostics visible without heavy overhead",
      "Use alerts to respond to thermal and performance changes",
    ],
    faqs: [
      {
        question: "What makes a good CPU temperature monitor?",
        answer:
          "A strong CPU temperature monitor shows thermal trends in context with load, fan behavior, GPU temperature, disk activity, and alerts.",
      },
      {
        question: "Does DriveWatch focus only on storage?",
        answer:
          "DriveWatch starts from storage intelligence and expands that view into broader PC monitoring, hardware analytics, and system diagnostics.",
      },
    ],
    relatedSlugs: ["/gpu-temperature-monitor", "/system-diagnostics"],
  },
  {
    slug: "/system-diagnostics",
    navTitle: "Diagnostics",
    metaTitle: "Windows System Diagnostics Software",
    metaDescription:
      "Run clearer Windows system diagnostics with DriveWatch, including disk health analytics, CPU monitoring, GPU monitoring, fan RPM context, and smart alerts.",
    keywords: [
      "system diagnostics",
      "Windows system diagnostics",
      "hardware monitoring",
      "PC monitoring software",
    ],
    eyebrow: "System diagnostics",
    title: "System diagnostics for storage, thermals, and performance",
    description:
      "DriveWatch gives Windows users a focused diagnostics workspace for disk health, SSD monitoring, fan RPM context, CPU monitoring, GPU monitoring, and alerts.",
    stat: "99.98%",
    statLabel: "Monitoring uptime",
    sections: [
      {
        title: "Unified hardware analytics",
        description:
          "View storage, thermal, and performance signals together so system behavior is easier to explain and easier to act on.",
      },
      {
        title: "Event logs and alerts",
        description:
          "Review timestamped device events, smart notifications, and health anomalies to build a stronger diagnostic picture.",
      },
      {
        title: "Built for Windows monitoring",
        description:
          "DriveWatch is tuned for a professional Windows monitoring software workflow with clean visuals, fast scanning, and low overhead.",
      },
    ],
    benefits: [
      "Diagnose disk health, CPU, GPU, and fan behavior in one place",
      "Use event logs to understand historical hardware patterns",
      "Track alerts for thermal stress and activity spikes",
      "Support proactive maintenance for PCs and workstations",
    ],
    faqs: [
      {
        question: "What does DriveWatch diagnose?",
        answer:
          "DriveWatch focuses on disk health, storage activity, thermals, hardware behavior, device events, and smart alerts for Windows systems.",
      },
      {
        question: "Who is DriveWatch built for?",
        answer:
          "It is built for users who want polished PC monitoring software for storage health, hardware analytics, and practical diagnostics.",
      },
    ],
    relatedSlugs: ["/ssd-health-monitor", "/fan-rpm-monitor"],
  },
  {
    slug: "/hdd-health-monitor",
    navTitle: "HDD Monitor",
    metaTitle: "HDD Health Monitor Software | DriveWatch",
    metaDescription:
      "Professional HDD health monitor for real-time hard drive tracking, temperature diagnostics, SMART analysis, and early failure detection.",
    keywords: [
      "HDD health monitor",
      "hard drive monitor",
      "HDD temperature",
      "hard drive health",
    ],
    eyebrow: "HDD health monitor",
    title: "Advanced HDD health monitor for reliable storage",
    description:
      "Use DriveWatch as your primary HDD health monitor to ensure the longevity of your mechanical hard drives through continuous SMART analysis and temperature tracking.",
    stat: "100%",
    statLabel: "Disk Visibility",
    sections: [
      {
        title: "Proactive Features",
        description:
          "Our HDD health monitor comes packed with features designed specifically to monitor spinning disks, tracking read/write performance and sector health.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "Continuous monitoring of your hard drives to catch latency spikes, unusual noises, and activity anomalies before they lead to data loss.",
      },
      {
        title: "Deep Diagnostics",
        description:
          "Run thorough diagnostics on your HDD to identify weak sectors, bad blocks, and mechanical issues using our deep scanning technology.",
      },
      {
        title: "Temperature Tracking",
        description:
          "Mechanical drives are sensitive to heat. Our HDD health monitor provides precise temperature tracking to prevent thermal degradation.",
      },
      {
        title: "SMART Analysis",
        description:
          "Read and interpret raw SMART attributes directly from the drive's firmware to get a true picture of your hard drive's operational status.",
      },
      {
        title: "Failure Detection",
        description:
          "Early failure detection alerts you to critical changes in your HDD's behavior, giving you time to back up data before a crash occurs.",
      },
    ],
    benefits: [
      "Extend the lifespan of your mechanical hard drives",
      "Get alerted to high HDD temperatures instantly",
      "Understand complex SMART data with ease",
      "Prevent catastrophic data loss through early warnings",
    ],
    faqs: [
      {
        question: "Why do I need an HDD health monitor?",
        answer:
          "An HDD health monitor tracks mechanical wear and tear, temperature changes, and SMART errors, allowing you to replace drives before they fail.",
      },
      {
        question: "Does this work with external hard drives?",
        answer:
          "Yes, DriveWatch can monitor external USB HDDs as long as the enclosure passes SMART data through to the operating system.",
      },
    ],
    relatedSlugs: ["/ssd-health-check", "/smart-drive-monitor"],
  },
  {
    slug: "/ssd-health-check",
    navTitle: "SSD Check",
    metaTitle: "SSD Health Check Tool | DriveWatch",
    metaDescription:
      "Run a comprehensive SSD health check to analyze NAND wear, TBW limits, temperature tracking, and SMART attributes with DriveWatch.",
    keywords: [
      "SSD health check",
      "SSD health checker",
      "SSD diagnostics",
      "solid state drive health",
    ],
    eyebrow: "SSD health check",
    title: "Complete SSD health check for optimal performance",
    description:
      "Perform a detailed SSD health check to verify remaining lifespan, total bytes written, thermal trends, and internal wear leveling status.",
    stat: "99%",
    statLabel: "Wear Accuracy",
    sections: [
      {
        title: "Advanced Features",
        description:
          "Our SSD health check utility provides advanced features to monitor flash memory degradation and controller health in real-time.",
      },
      {
        title: "Constant Monitoring",
        description:
          "Background monitoring keeps an eye on your SSD's vital signs without impacting your PC's performance or gaming frame rates.",
      },
      {
        title: "Flash Diagnostics",
        description:
          "Detailed diagnostics test your SSD's read and write speeds, identifying any bottlenecks or degraded memory cells.",
      },
      {
        title: "Temperature Tracking",
        description:
          "NVMe SSDs can run extremely hot under load. Our temperature tracking ensures your drives never reach critical thermal throttling limits.",
      },
      {
        title: "SMART Analysis",
        description:
          "Evaluate SMART attributes specific to solid-state drives, such as available spare blocks and media wearout indicators.",
      },
      {
        title: "Failure Detection",
        description:
          "Predictive failure detection warns you when your SSD is approaching its maximum TBW limit or showing signs of imminent read-only lock.",
      },
    ],
    benefits: [
      "Monitor SSD lifespan and remaining TBW",
      "Prevent NVMe thermal throttling",
      "Identify degraded storage performance",
      "Secure your data before sudden SSD failure",
    ],
    faqs: [
      {
        question: "How often should I run an SSD health check?",
        answer:
          "We recommend running an SSD health check monthly, or keeping DriveWatch running in the background for continuous protection.",
      },
      {
        question: "Does checking SSD health damage the drive?",
        answer:
          "No, an SSD health check reads SMART data passively and does not consume any write cycles (TBW).",
      },
    ],
    relatedSlugs: ["/hdd-health-monitor", "/drive-scan-tool"],
  },
  {
    slug: "/drive-scan-tool",
    navTitle: "Drive Scan",
    metaTitle: "Professional Drive Scan Tool | DriveWatch",
    metaDescription:
      "Utilize our drive scan tool to identify storage errors, monitor disk temperatures, run diagnostics, and detect failures across HDDs and SSDs.",
    keywords: [
      "drive scan tool",
      "drive scanner",
      "disk scanner",
      "hard drive scan",
    ],
    eyebrow: "Drive scan tool",
    title: "Powerful drive scan tool for system stability",
    description:
      "Deploy our drive scan tool to uncover hidden file system errors, hardware faults, and latency issues before they corrupt your operating system.",
    stat: "3x",
    statLabel: "Faster Scanning",
    sections: [
      {
        title: "Scan Features",
        description:
          "This drive scan tool includes fast-pass algorithms, deep sector scanning, and continuous surface analysis to map storage health.",
      },
      {
        title: "Background Monitoring",
        description:
          "Drive scanning can happen silently in the background, offering uninterrupted monitoring while you work or play.",
      },
      {
        title: "System Diagnostics",
        description:
          "Connect drive scan results with broader system diagnostics to understand how storage bottlenecks affect your CPU and RAM.",
      },
      {
        title: "Temperature Tracking",
        description:
          "Intensive scanning can raise disk heat. Our integrated temperature tracking ensures scans pause if hardware gets too hot.",
      },
      {
        title: "SMART Analysis",
        description:
          "Scan results are correlated directly with SMART analysis to confirm if bad sectors are physical hardware defects or software errors.",
      },
      {
        title: "Failure Detection",
        description:
          "The drive scan tool highlights deteriorating sectors, providing early failure detection before the drive mechanism physically breaks.",
      },
    ],
    benefits: [
      "Discover bad sectors before they ruin files",
      "Scan internal, external, and network drives",
      "Map out disk surface integrity visually",
      "Prevent catastrophic OS crashes",
    ],
    faqs: [
      {
        question: "How long does the drive scan tool take?",
        answer:
          "A quick scan takes seconds, while a deep surface scan depends on the size and speed of the drive, often taking a few hours for large HDDs.",
      },
      {
        question: "Can it fix bad sectors?",
        answer:
          "The tool can trigger the drive's firmware to reallocate bad sectors, preventing the OS from writing data to failing areas.",
      },
    ],
    relatedSlugs: ["/disk-health-checker", "/smart-drive-monitor"],
  },
  {
    slug: "/disk-health-checker",
    navTitle: "Disk Checker",
    metaTitle: "Disk Health Checker Software | DriveWatch",
    metaDescription:
      "The ultimate disk health checker to monitor hard drives, solid-state drives, and NVMe storage through diagnostics and SMART tracking.",
    keywords: [
      "disk health checker",
      "check disk health",
      "disk monitoring",
      "hard disk health",
    ],
    eyebrow: "Disk health checker",
    title: "Comprehensive disk health checker for your PC",
    description:
      "A complete disk health checker providing actionable insights into drive status, performance metrics, and SMART warnings.",
    stat: "24/7",
    statLabel: "Disk Protection",
    sections: [
      {
        title: "Checker Features",
        description:
          "A unified disk health checker that brings together multi-drive support, real-time alerts, and historical performance graphing.",
      },
      {
        title: "Active Monitoring",
        description:
          "The checker provides active monitoring of queue depths, IOPS, and throughput to ensure your disks are performing optimally.",
      },
      {
        title: "Holistic Diagnostics",
        description:
          "View comprehensive diagnostics that cover every aspect of disk health, from mechanical spin-up times to electronic wear.",
      },
      {
        title: "Temperature Tracking",
        description:
          "Keep tabs on disk climate with real-time temperature tracking, crucial for maintaining optimal operating conditions.",
      },
      {
        title: "SMART Analysis",
        description:
          "Our disk health checker demystifies SMART analysis, translating technical hex codes into plain English recommendations.",
      },
      {
        title: "Failure Detection",
        description:
          "Stay ahead of data disasters with algorithms trained for failure detection, spotting the subtle signs of a dying disk.",
      },
    ],
    benefits: [
      "Get a clear health percentage for every disk",
      "Understand your PC's storage performance bottlenecks",
      "Receive instant alerts for disk warnings",
      "Works seamlessly across HDD and SSD architectures",
    ],
    faqs: [
      {
        question: "Is this disk health checker compatible with Windows 11?",
        answer:
          "Yes, it is fully optimized for modern Windows environments, including native support for NVMe storage protocols.",
      },
      {
        question: "Can it check RAID arrays?",
        answer:
          "Depending on the RAID controller, DriveWatch can pass through to check the health of individual physical disks within the array.",
      },
    ],
    relatedSlugs: ["/hdd-health-monitor", "/ssd-health-check"],
  },
  {
    slug: "/smart-drive-monitor",
    navTitle: "SMART Monitor",
    metaTitle: "SMART Drive Monitor & Analyzer | DriveWatch",
    metaDescription:
      "Analyze Self-Monitoring, Analysis, and Reporting Technology (S.M.A.R.T.) data with our advanced SMART drive monitor and failure detection system.",
    keywords: [
      "SMART drive monitor",
      "SMART disk monitor",
      "SMART drive analysis",
      "SMART HDD monitor",
    ],
    eyebrow: "SMART drive monitor",
    title: "Advanced SMART drive monitor and data analyzer",
    description:
      "Tap directly into your storage's built-in self-reporting tools with our SMART drive monitor to catch hardware faults before they manifest as data loss.",
    stat: "100+",
    statLabel: "Attributes Tracked",
    sections: [
      {
        title: "SMART Features",
        description:
          "The SMART drive monitor features native support for hundreds of vendor-specific S.M.A.R.T. attributes across Samsung, Western Digital, Seagate, and more.",
      },
      {
        title: "Sensor Monitoring",
        description:
          "Continuous background monitoring polls SMART sensors safely without waking spun-down drives or interrupting workloads.",
      },
      {
        title: "Attribute Diagnostics",
        description:
          "Detailed diagnostics explain exactly what each SMART attribute means, from reallocated sector counts to power-on hours.",
      },
      {
        title: "Temperature Tracking",
        description:
          "SMART temperature tracking pulls data directly from the thermal sensors embedded on the drive's PCB and flash controller.",
      },
      {
        title: "SMART Analysis",
        description:
          "Our proprietary SMART analysis engine looks at attribute degradation over time rather than just static thresholds.",
      },
      {
        title: "Failure Detection",
        description:
          "By analyzing SMART history, our failure detection system can accurately predict when a drive will reach the end of its usable life.",
      },
    ],
    benefits: [
      "Decode cryptic SMART data instantly",
      "Predict hardware failure with high accuracy",
      "Track drive degradation over months or years",
      "Support for all major SSD and HDD manufacturers",
    ],
    faqs: [
      {
        question: "What is SMART data?",
        answer:
          "S.M.A.R.T. stands for Self-Monitoring, Analysis, and Reporting Technology. It is an internal monitoring system included in computer hard disk drives and solid-state drives.",
      },
      {
        question: "Does the SMART drive monitor work via USB?",
        answer:
          "Yes, DriveWatch supports SMART passthrough for the vast majority of USB enclosures and docking stations.",
      },
    ],
    relatedSlugs: ["/drive-scan-tool", "/disk-health-checker"],
  }
];

export function getFeaturePage(slug: string) {
  const page = featurePages.find((featurePage) => featurePage.slug === slug);

  if (!page) {
    throw new Error(`Missing feature page data for ${slug}`);
  }

  return page;
}

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  keywords: string[];
  relatedFeatureSlug: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  takeaway: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-check-ssd-health",
    title: "How to Check SSD Health",
    description:
      "Learn how to check SSD health, read disk health signals, and use DriveWatch for clearer SSD health monitoring on Windows.",
    publishedAt: "2026-05-16",
    readTime: "5 min read",
    category: "Storage Health",
    keywords: ["how to check SSD health", "SSD health monitor", "disk health checker"],
    relatedFeatureSlug: "/ssd-health-monitor",
    sections: [
      {
        title: "Start with disk health and temperature",
        body:
          "A practical SSD health check begins with disk health, temperature, activity, and performance behavior. These signals show whether the drive is operating normally or trending toward stress.",
      },
      {
        title: "Watch performance patterns over time",
        body:
          "Single snapshots can miss important symptoms. DriveWatch helps make SSD health monitoring more useful by keeping storage analytics, activity spikes, and thermal changes visible over time.",
      },
      {
        title: "Use alerts before issues become urgent",
        body:
          "Smart alerts help turn a disk health checker into a proactive workflow. When health anomalies or thermal pressure appear, you can investigate earlier.",
      },
    ],
    takeaway:
      "The best SSD health check combines disk health analytics, temperature visibility, activity trends, and proactive alerts.",
  },
  {
    slug: "best-fan-rpm-monitor-for-windows",
    title: "Best Fan RPM Monitor for Windows",
    description:
      "See what makes a strong fan RPM monitor for Windows and how DriveWatch connects fan behavior with CPU, GPU, and disk diagnostics.",
    publishedAt: "2026-05-16",
    readTime: "4 min read",
    category: "Cooling",
    keywords: ["best fan RPM monitor", "fan RPM monitoring", "Windows fan monitor"],
    relatedFeatureSlug: "/fan-rpm-monitor",
    sections: [
      {
        title: "Fan speed needs thermal context",
        body:
          "Fan RPM by itself is only part of the story. A useful Windows monitoring software workflow also shows CPU temperature, GPU temperature, system load, and disk activity.",
      },
      {
        title: "Look for clean alerts",
        body:
          "The best fan RPM monitor should make abnormal cooling behavior easy to notice without creating distracting noise during normal workload changes.",
      },
      {
        title: "Keep hardware analytics readable",
        body:
          "DriveWatch emphasizes readable hardware analytics so fan RPM monitoring can support real diagnostics instead of becoming another cluttered sensor list.",
      },
    ],
    takeaway:
      "Choose fan RPM monitoring that connects cooling behavior to temperature, workload, and system diagnostics.",
  },
  {
    slug: "safe-cpu-temperature-range",
    title: "Safe CPU Temperature Range",
    description:
      "Understand CPU temperature monitoring basics and how DriveWatch helps place CPU temperatures in context with fan, GPU, and disk activity.",
    publishedAt: "2026-05-16",
    readTime: "5 min read",
    category: "CPU Monitoring",
    keywords: ["safe CPU temperature range", "CPU temperature monitor", "CPU monitoring"],
    relatedFeatureSlug: "/cpu-temperature-monitor",
    sections: [
      {
        title: "Normal ranges depend on workload",
        body:
          "CPU temperature is tied to workload, cooling, room conditions, and device design. The key is watching for unusual jumps, sustained heat, or thermal behavior that does not match the task.",
      },
      {
        title: "Pair CPU temperature with fan RPM",
        body:
          "CPU monitoring becomes more useful when fan RPM monitoring and system activity are visible together. This helps separate normal cooling response from possible thermal issues.",
      },
      {
        title: "Use diagnostics during slowdowns",
        body:
          "If a PC slows down during heavy work, CPU temperature, GPU temperature, disk activity, and alerts can point you toward the likely source faster.",
      },
    ],
    takeaway:
      "A safe CPU temperature workflow is less about one number and more about consistent monitoring, workload context, and alerting.",
  },
  {
    slug: "why-gpu-temperatures-matter",
    title: "Why GPU Temperatures Matter",
    description:
      "Learn why GPU temperature tracking matters for performance stability, thermal diagnostics, and long-running Windows workloads.",
    publishedAt: "2026-05-16",
    readTime: "4 min read",
    category: "GPU Monitoring",
    keywords: ["why GPU temperatures matter", "GPU temperature tracking", "GPU monitoring"],
    relatedFeatureSlug: "/gpu-temperature-monitor",
    sections: [
      {
        title: "GPU heat affects sustained performance",
        body:
          "During games, rendering, AI work, and creative workloads, GPU temperature tracking helps explain performance dips and thermal pressure.",
      },
      {
        title: "Thermals connect across the whole PC",
        body:
          "GPU monitoring is strongest when it sits beside CPU monitoring, fan RPM monitoring, and disk health analytics. System diagnostics work best when signals are connected.",
      },
      {
        title: "Alerts reduce monitoring fatigue",
        body:
          "A polished monitoring workflow should let you focus on work while smart alerts call attention to unusual thermal or hardware behavior.",
      },
    ],
    takeaway:
      "GPU temperatures matter because they help explain stability, performance, cooling behavior, and long-term hardware comfort.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteName,
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Monitoring application, storage utility, system diagnostics",
  operatingSystem: "Windows, macOS",
  softwareVersion,
  description: siteDescription,
  url: siteUrl,
  image: ogImage.url,
  downloadUrl: downloadLinks.windows,
  featureList: [
    "SSD health monitoring",
    "Fan RPM monitoring",
    "CPU temperature monitoring",
    "GPU temperature tracking",
    "Disk health analytics",
    "System diagnostics",
    "Smart alerts",
    "USB and NAS monitoring",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
};
