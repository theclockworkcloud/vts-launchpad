"use client";

import { Mail, MapPin } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-sky/[0.06] to-primary-light/[0.04]" />

      {/* Geometric accent */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-96 opacity-[0.03]">
        <svg viewBox="0 0 256 384" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="80" width="72" height="280" fill="#1E5A99" />
          <rect x="92" y="0" width="72" height="384" fill="#4A9BD9" />
          <rect x="184" y="120" width="72" height="200" fill="#F5A623" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center fade-in-section">
        <p className="text-primary-light font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
          Let&apos;s build something together
        </h2>
        <p className="text-lg text-navy/60 font-light leading-relaxed mb-10">
          Ready to see what AI-native technology can do for your organisation?
          We&apos;d love to hear from you.
        </p>

        <a
          href="mailto:hello@veritabletechnologysolutions.com.au"
          className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-200 mb-10"
        >
          Start a Conversation
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-navy/50 text-sm font-light">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            <span>hello@veritabletechnologysolutions.com.au</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            <span>Adelaide, South Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
