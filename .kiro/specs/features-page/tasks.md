# Implementation Plan: Features Page

## Overview

Build a premium `/features` page for DriveWatch with animated glassmorphism cards, hero section, sector scan/repair visualizations, particle background, cursor glow, SEO metadata, structured data, sitemap integration, and navbar linking. Uses the server/client component split pattern established in the project.

## Tasks

- [x] 1. Create the features page server component and client shell
  - [x] 1.1 Create `app/features/page.tsx` as a server component
    - Export `metadata` using `createMetadata()` with title "DriveWatch Features - SSD Health, SMART Monitor & Sector Repair", description, path "/features", and keywords array
    - Render `JsonLd` component with WebPage + ItemList structured data (12 ListItem entries with position and name)
    - Render `FeaturesPageClient` as the page body
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 12.1, 12.2, 12.3_

  - [x] 1.2 Create `app/features/FeaturesPageClient.tsx` as a "use client" component
    - Add "use client" directive as first line
    - Define the 12-item features data array with title, description, icon (unique Lucide icon per card), href (for cards with individual pages), and id (for sector-scan, sector-repair anchors)
    - Render page structure: ParticleBackground → HeroSection → FeatureGrid sections
    - _Requirements: 1.1, 1.2, 1.3, 5.1–5.12_

- [x] 2. Implement the Hero Section
  - [x] 2.1 Build the Hero Section within FeaturesPageClient
    - Render h1 "Advanced Drive Monitoring & Repair" with responsive font size (text-4xl md:text-5xl lg:text-6xl)
    - Render subtitle paragraph below h1
    - Add two animated background blur orbs (cyan and violet, blur-[120px]+)
    - Add two CTA buttons: "Download DriveWatch" and "Start Free Scan", both linking to `/download`
    - Apply Framer Motion entrance animation (opacity 0→1, y 20-35px→0, duration 500-800ms)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 3. Implement the Feature Grid and Feature Cards
  - [x] 3.1 Build the responsive Feature Grid layout
    - Use CSS grid: 3 columns at lg (1024px+), 2 columns at md (768px+), 1 column below
    - Apply Framer Motion staggerChildren with 30ms delay per card
    - Wrap each card in motion.article with whileInView animation (opacity 0→1, y 20px→0, 350ms, viewport once: true)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.5, 4.6_

  - [x] 3.2 Build the standard FeatureCard component
    - Render as `<article>` with vertical stack: icon (24x24), h3 title (font-semibold, text-white), description (text opacity 65-80%)
    - Apply `glass-card` class for glassmorphism (backdrop-blur-[16px], border cyan/0.25, bg opacity 0.65-0.80)
    - Add hover effect: translateY(-4px), neon-outline box-shadow glow, 300ms transition
    - Add gradient border effect using animated-border or inline gradient
    - Wrap card content in Link if `href` exists, otherwise use anchor with `id` for in-page features
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 11.4, 13.2_

- [x] 4. Implement Sector Surface Scan Visualization
  - [x] 4.1 Build the SectorScanCard with animated progress bar
    - Extend FeatureCard layout with a Scan_Visualization element below description
    - Animate progress bar width from 0% to 100% over 2-4 seconds, looping continuously
    - Add pulsing opacity indicator (40%-100% opacity cycle) adjacent to progress bar
    - Start animation when card enters viewport (whileInView)
    - Respect prefers-reduced-motion: show static filled bar, disable motion
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 5. Implement Sector Repair Animation
  - [x] 5.1 Build the SectorRepairCard with 3-state animation
    - Display 3 status indicators representing: scanning (red), repairing (amber), recovered (green/cyan)
    - Animate color transitions from red/amber → green/cyan over 2-4 seconds per cycle, looping
    - Start animation when 20% of card enters viewport
    - Pause and reset to initial state when card scrolls entirely out of viewport
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 6. Implement Premium Visual Effects
  - [x] 6.1 Build the ParticleBackground component
    - Render 30-80 floating particles (1-4px diameter, opacity 0.1-0.4)
    - Animate with vertical drift ≤30px/sec using CSS keyframes or GSAP
    - Disable when prefers-reduced-motion is enabled
    - _Requirements: 8.1, 8.7_

  - [x] 6.2 Build the CursorGlow component
    - Track mouse position over the Feature_Grid area
    - Render radial gradient glow (150-300px radius, accent color at 0.15-0.25 opacity fading to transparent)
    - Center on cursor position, hide on touch devices
    - Disable when prefers-reduced-motion is enabled
    - _Requirements: 8.3, 8.7_

  - [x] 6.3 Add animated grid background and scroll behavior
    - Render grid pattern at opacity 0.10-0.20, lines spaced 40-50px, with subtle pulse/drift animation (4-10s cycle)
    - Apply scroll-behavior: smooth to page
    - Ensure all sections use Framer Motion whileInView with viewport once: true for scroll-triggered animations
    - _Requirements: 8.2, 8.4, 8.5, 8.6_

- [x] 7. Checkpoint - Verify page renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Integrate with Sitemap, Navbar, and Homepage
  - [x] 8.1 Update `app/sitemap.ts` to include /features
    - Add `/features` to staticRoutes with priority 0.9, changeFrequency "weekly"
    - _Requirements: 11.1_

  - [x] 8.2 Update `app/components/Navbar.tsx` to add Features link
    - Add a top-level "Features" nav link to `/features` in the desktop navigation (visible alongside the existing Features dropdown)
    - Add "Features" as a top-level link in the mobile drawer menu
    - _Requirements: 11.2_

  - [x] 8.3 Add a link to /features from the homepage
    - Add or verify a visible link/button pointing to `/features` from the homepage feature section
    - _Requirements: 11.3_

- [x] 9. Accessibility and reduced motion handling
  - [x] 9.1 Implement prefers-reduced-motion support
    - Use `useReducedMotion()` from Framer Motion or media query hook
    - When reduced motion is preferred: disable particle animation, grid animation, cursor glow, and all scroll-triggered transitions
    - Ensure all content displays at full opacity in static layout
    - _Requirements: 8.7, 13.4_

  - [x] 9.2 Ensure accessibility compliance
    - Verify CTA buttons use `<a>` elements with href and visible focus indicators (ring-2 or outline with 2px offset)
    - Verify color contrast meets WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
    - Ensure heading hierarchy: page h1 → section h2 → card h3 (no skipped levels)
    - Ensure graceful degradation: all content visible without JS animations
    - _Requirements: 13.1, 13.2, 13.3, 13.5_

- [ ]* 9.3 Write unit tests for feature content rendering
  - **Property 1: Feature content rendering completeness**
  - Iterate over all 12 features and verify each card renders with correct title and description
  - **Validates: Requirements 5.1–5.12**

- [ ]* 9.4 Write unit tests for feature card linking
  - **Property 2: Feature card internal linking correctness**
  - Iterate over features with href and verify rendered anchor elements match target URLs
  - **Validates: Requirements 11.4**

- [ ]* 9.5 Write unit tests for semantic card structure
  - **Property 3: Feature card semantic structure**
  - Verify each card uses `<article>` element with exactly one `<h3>` heading
  - **Validates: Requirements 13.2**

- [x] 10. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "tasks": ["1.1", "1.2"],
      "description": "Create page server component and client shell"
    },
    {
      "wave": 2,
      "tasks": ["2.1", "3.1", "3.2"],
      "description": "Implement Hero Section and Feature Grid with cards"
    },
    {
      "wave": 3,
      "tasks": ["4.1", "5.1", "6.1", "6.2", "6.3"],
      "description": "Implement special card animations and visual effects"
    },
    {
      "wave": 4,
      "tasks": ["8.1", "8.2", "8.3", "9.1", "9.2"],
      "description": "Integrate with sitemap, navbar, homepage and add accessibility"
    },
    {
      "wave": 5,
      "tasks": ["9.3", "9.4", "9.5"],
      "description": "Write tests for feature content, linking, and structure"
    }
  ]
}
```

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The server/client component split is required because Next.js 16 does not allow metadata exports from "use client" components
- The features data array is defined in the client component since it's only used for rendering
- Particle animation can use CSS keyframes as a lightweight alternative to GSAP if bundle size is a concern
- The Navbar modification adds a direct "/features" link alongside the existing dropdown (not replacing it)
- All animations respect prefers-reduced-motion for accessibility compliance
