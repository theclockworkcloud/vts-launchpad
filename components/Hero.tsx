"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-[480px] md:h-[480px] opacity-[0.04]">
        <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="80" width="100" height="320" fill="#1E5A99" />
          <rect x="240" y="160" width="100" height="240" fill="#4A9BD9" />
          <rect x="360" y="40" width="100" height="360" fill="#F5A623" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 opacity-[0.03]">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="100" width="80" height="200" fill="#1E5A99" />
          <rect x="120" y="60" width="80" height="240" fill="#4A9BD9" />
          <rect x="220" y="140" width="80" height="160" fill="#7BC4E8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="mb-10 flex justify-center">
          <Image
            src="/logo.jpeg"
            alt="Veritable Technology Solutions"
            width={200}
            height={200}
            className="w-40 md:w-52"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
          Technology that frees
          <br />
          <span className="text-primary">humans to be human</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-navy/70 font-light leading-relaxed max-w-2xl mx-auto">
          We&apos;re an AI-native technology company built to eliminate grunt work
          — so you can focus on compassion, creativity, and intelligence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-200"
          >
            Work With Us
          </a>
          <a
            href="#what-we-do"
            className="inline-flex items-center px-8 py-3.5 text-primary font-medium hover:text-primary-light transition-colors duration-200"
          >
            See What We&apos;re Building
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/30" />
      </div>
    </section>
  );
}
