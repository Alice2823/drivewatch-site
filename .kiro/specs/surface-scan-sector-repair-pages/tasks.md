# Implementation Plan: Surface Scan & Sector Repair Pages

## Overview

Add two premium SEO-optimized feature pages (`/features/surface-scan` and `/features/sector-repair`) to the DriveWatch site with custom animated client components, full SEO metadata, and integration into the navbar, sitemap, and features overview page. Implementation follows the existing server/client component split pattern using Next.js, React, Tailwind CSS, Framer Motion, and Lucide React.

## Tasks

- [ ] 1. Add featurePages entries to seo.ts
  - [ ] 1.1 Add Surface Scan and Sector Repair entries to the featurePages array in `app/lib/seo.ts`
    - Append the Surface Scan entry with slug `/features/surface-scan`, navTitle, metaTitle, metaDescription, keywords, eyebrow, title, description, stat, statLabel, sections, benefits, faqs, and relatedSlugs as specified in the design
    - Append the Sector Repair entry with slug `/features/sector-repair` and all corresponding fields as specified in the design
    - This enables automatic navbar dropdown links and sitemap inclusion
    - _Requirements: 6.1, 6.2, 6.3, 7.1, 7.2_

- [ ] 2. Create Surface Scan page
  - [ ] 2.1 Create the server component at `app/features/surface-scan/page.tsx`
    - Export metadata using `createMetadata()` with title "DriveWatch Surface Scan - Detect Bad & Weak Disk Sectors", description, path `/features/surface-scan`, and keywords
    - Render `JsonLd` component with SoftwareApplication structured data for Surface Scan
    - Import and render `SurfaceScanClient`
    - _Requirements: 3.1, 3.2, 3.3, 5.1, 5.4_

  - [ ] 2.2 Create the client component at `app/features/surface-scan/SurfaceScanClient.tsx`
    - Mark with `"use client"` directive
    - Implement HeroSection with animated 8×8 sector grid scanning visualization, scan line sweep, progress bar, glowing blue accents, title, subtitle, and two CTA buttons ("Start Surface Scan" and "Download DriveWatch")
    - Implement content sections: "What is Surface Scan", "How DriveWatch Detects Bad Sectors", "SSD vs HDD Sector Analysis", "Real-time Scan Visualization", "Sector Health Monitoring"
    - Implement FAQ section with expandable items using the faqs from the design
    - Implement final CTA section with gradient background
    - Use Framer Motion for section reveal animations (`whileInView`), card stagger, and CTA hover effects
    - Use `useReducedMotion()` to disable animations when OS preference is set
    - Use glassmorphism cards (`glass-card`), neon glow effects, and Lucide React icons
    - Ensure full responsiveness across mobile, tablet, and desktop
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 5.1, 5.3, 9.1, 9.2, 9.3, 9.4, 10.1, 10.2, 10.3_

- [ ] 3. Create Sector Repair page
  - [ ] 3.1 Create the server component at `app/features/sector-repair/page.tsx`
    - Export metadata using `createMetadata()` with title "DriveWatch Sector Repair - Stabilize & Recover Disk Sectors", description, path `/features/sector-repair`, and keywords
    - Render `JsonLd` component with SoftwareApplication structured data for Sector Repair
    - Import and render `SectorRepairClient`
    - _Requirements: 4.1, 4.2, 4.3, 5.2, 5.4_

  - [ ] 3.2 Create the client component at `app/features/sector-repair/SectorRepairClient.tsx`
    - Mark with `"use client"` directive
    - Implement HeroSection with repair pulse animation (concentric expanding rings), status indicators (Scanning/Repairing/Recovered), sector recovery visualization, title, subtitle, and two CTA buttons ("Start Repair" and "Download DriveWatch")
    - Implement content sections: "How Sector Repair Works", "Stabilization Technology", "Recovery Process", "Preventing Data Loss", "SMART Health Integration"
    - Implement FAQ section with expandable items using the faqs from the design
    - Implement final CTA section with gradient background
    - Use Framer Motion for section reveal animations (`whileInView`), card stagger, and CTA hover effects
    - Use `useReducedMotion()` to disable animations when OS preference is set
    - Use glassmorphism cards (`glass-card`), neon glow effects, and Lucide React icons
    - Ensure full responsiveness across mobile, tablet, and desktop
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 5.2, 5.3, 9.1, 9.2, 9.3, 9.4, 10.1, 10.2, 10.3_

- [ ] 4. Checkpoint - Verify pages build correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Update Features Overview Page
  - [ ] 5.1 Update `app/features/FeaturesPageClient.tsx` to link to new pages
    - Change the "Sector Surface Scan" feature entry from `id: "sector-scan"` to `href: "/features/surface-scan"`
    - Change the "Sector Repair / Stabilization" feature entry from `id: "sector-repair"` to `href: "/features/sector-repair"`
    - The existing `FeatureCard` component already handles `href` entries by rendering a `<Link>` overlay, so the cards will automatically become navigable links
    - Remove the now-unused `SectorScanCard` and `SectorRepairCard` components and their associated CSS keyframes since those cards will now use the standard `FeatureCard` with link behavior
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 6. Final checkpoint - Verify full build passes
  - Run `next build` to confirm no TypeScript errors, all routes resolve, metadata exports are valid, sitemap includes both new URLs, and navbar integration works
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP (none in this plan since no PBT applies)
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- The design has no Correctness Properties section — property-based tests do not apply to this UI/SEO feature
- The two page creation tasks (2 and 3) are independent and can be built in parallel
- Task 1 (seo.ts entries) must come first since the server components reference `createMetadata` with paths that should match featurePages slugs
- Task 5 (FeaturesPageClient update) depends on the pages existing so links don't point to 404s during development

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "3.1"] },
    { "id": 2, "tasks": ["2.2", "3.2"] },
    { "id": 3, "tasks": ["5.1"] }
  ]
}
```
