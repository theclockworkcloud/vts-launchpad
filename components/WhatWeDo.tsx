"use client";

import { Building2, Users, ArrowRight, ExternalLink } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const focusAreas = [
  {
    icon: Building2,
    title: "Strata Management",
    description: "AI-powered support for body corporates and strata managers",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Collectives & Co-ops",
    description: "Technology infrastructure for member-owned organisations",
    color: "bg-sky",
    link: { label: "See Acacia Collective", href: "https://acaciacollective.com.au" },
  },
  {
    icon: ArrowRight,
    title: "More Sectors Coming",
    description: "We're scaling fast",
    color: "bg-accent",
  },
];

export default function WhatWeDo() {
  const ref = useFadeIn();

  return (
    <section id="what-we-do" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-light to-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-sky/[0.06] blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto fade-in-section">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Smarter tools for meaningful work
          </h2>
          <p className="text-lg text-navy/60 font-light leading-relaxed max-w-3xl mx-auto">
            We build and operate technology solutions for organisations ready to
            work smarter. Our tools handle the repetitive work — documentation,
            compliance, communication — so your team can focus on the decisions
            and relationships that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="relative flex items-start gap-4 p-6 rounded-xl bg-white border border-primary/10 hover:border-primary/25 hover:shadow-md transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg ${area.color} flex items-center justify-center shrink-0 shadow-sm`}>
                <area.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">{area.title}</h3>
                <p className="text-sm text-navy/55 font-light">
                  {area.description}
                </p>
                {"link" in area && area.link && (
                  <a
                    href={area.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-primary hover:text-primary-light transition-colors duration-200"
                  >
                    {area.link.label}
                    <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
