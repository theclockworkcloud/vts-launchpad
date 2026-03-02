# Veritable Technology Solutions — Brand Page Brief

## Build Instructions for Claude Code

**Stack:** Next.js with Tailwind CSS. Single page, static export. Deploy to Vercel.

**What:** A single-page brand website introducing Veritable Technology Solutions as an AI-native technology partner for purpose-driven organisations.

**Tone:** Confident but human. Forward-thinking without being techno-utopian. We're a for-profit business that genuinely cares about how technology serves people.

**Target Audience:** Purpose-driven organisations, collectives, and businesses looking for a technology partner that understands both modern AI capabilities and the human element. Initial focus on strata management, expanding to other sectors.

---

## Brand Positioning

### Who We Are

Veritable Technology Solutions is a for-profit technology company born in the AI era. We didn't adapt to AI — we were built with it from day one, with an ethical focus at our core.

### What We Believe

AI should eliminate grunt work so humans can focus on what matters: compassion, creativity, and intelligence. We partner with purpose-driven organisations to make that real.

### What Makes Us Different

- **AI-Native:** Built with AI from day one, not bolted on later
- **Ethical Focus:** Thoughtful about how technology serves people
- **Human-Centred:** We automate the tedious so you can focus on the meaningful
- **Scaling Fast:** Nimble, ambitious, and growing

---

## Brand Identity

### Logo

The logo features an abstract building/cityscape silhouette with three ascending structures — two in shades of blue (technology, trust) and one in orange (energy, optimism). The geometric forms suggest growth, structure, and forward momentum.

**Logo file attached:** `veritabletech_logo.jpeg`

### Colours (from logo)

| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#1E5A99` | Headers, primary elements |
| Light Blue | `#4A9BD9` | Secondary elements, accents |
| Sky Blue | `#7BC4E8` | Highlights, gradients |
| Accent Orange | `#F5A623` | CTAs, energy accents |
| Navy Text | `#1A2B4C` | Body text, headings |
| Light Grey | `#F8F9FA` | Section backgrounds |
| White | `#FFFFFF` | Cards, primary background |

### Typography

**Font:** Poppins (Google Fonts)
- Headings: 600–700 weight
- Body: 300–400 weight
- Subheadings: Light weight with generous letter-spacing

---

## Page Structure

### 1. Hero Section

- Logo (top-left or centred)
- Headline: *"Technology that frees humans to be human"*
- Subhead: "We're an AI-native technology company built to eliminate grunt work — so you can focus on compassion, creativity, and intelligence."
- Primary CTA (orange): "Work With Us"
- Secondary CTA (text link): "See What We're Building"
- Clean, confident design — white or light grey background

### 2. Our Approach (3 columns or cards)

**Card 1: AI-Native**
- Icon: Sparkle or circuit
- "Born in the AI era, not adapting to it. We build with AI at the core — thoughtfully and ethically."

**Card 2: Human-Centred**
- Icon: Heart or people
- "Technology should serve people, not the other way around. We automate the tedious so you can do the meaningful."

**Card 3: Purpose-Driven Partners**
- Icon: Handshake or target
- "We work with collectives, social enterprises, and organisations that care about more than the bottom line."

### 3. What We Do

Brief intro paragraph:
> "We build and operate technology solutions for organisations ready to work smarter. Our tools handle the repetitive work — documentation, compliance, communication — so your team can focus on the decisions and relationships that matter."

Current focus areas (can be simple text list or subtle cards):
- **Strata Management** — AI-powered support for body corporates and strata managers
- **Collectives & Co-ops** — Technology infrastructure for member-owned organisations
- **More sectors coming** — We're scaling fast

### 4. Why Veritable

3–4 value props, concise:
- **Fast & Scaling** — We move quickly and grow with you
- **Ethical AI** — Thoughtful about data, privacy, and real-world impact
- **Adelaide-Based** — Local roots, modern capabilities
- **Genuine Partnership** — We care about your outcomes, not just our invoice

### 5. Contact / CTA Section

- Headline: "Let's build something together"
- Simple contact: Email + phone, or basic contact form
- Location: Adelaide, South Australia
- CTA button: "Start a Conversation"
- Background: Light blue gradient or subtle geometric pattern

### 6. Footer

- Logo (small)
- © 2026 Veritable Technology Solutions
- Links: Privacy | Terms (placeholder OK)
- Adelaide, South Australia

---

## Design Direction

### Do
- Keep it clean, confident, and modern
- Use generous whitespace
- Let the geometric/architectural feel from the logo inform subtle design elements
- Use orange for CTAs and key moments — sparingly
- Mobile-first, responsive
- Subtle animations only (fade-in, gentle hover states)

### Don't
- Make it feel like a "startup landing page" with gimmicks
- Use cheesy AI imagery (robots, glowing brains, etc.)
- Overload with gradients or visual noise
- Use stock photos of people pointing at screens

### Icon Style
- Lucide React icons, line style, in Primary Blue

---

## Technical Requirements

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Font:** Poppins via next/font/google
- **Output:** Static export (`output: 'export'` in next.config.js)
- **Deployment:** Vercel
- Single page — all sections in `app/page.tsx`
- Mobile-first responsive
- Contact section: mailto link for v1 (no backend)
- Smooth scroll between sections
- Intersection observer for fade-in animations on scroll

### File Structure
```
app/
  layout.tsx      # Font setup, metadata
  page.tsx        # All sections
  globals.css     # Tailwind imports
components/
  Hero.tsx
  Approach.tsx
  WhatWeDo.tsx
  WhyVeritable.tsx
  Contact.tsx
  Footer.tsx
public/
  logo.png        # Logo file
```

---

## Summary

Veritable Technology Solutions is a confident, fast-growing, AI-native technology company with an ethical backbone. This page should feel modern and human — not slick and soulless. We're serious about what we do, but we're building technology that serves people, not replaces them.

Keep it lightweight. Let the positioning do the heavy lifting.
