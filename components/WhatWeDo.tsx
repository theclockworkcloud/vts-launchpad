"use client";

import { Building2, Users, ArrowRight } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const focusAreas = [
  {
    icon: Building2,
    title: "Strata Management",
    description: "AI-powered support for body corporates and strata managers",
  },
  {
    icon: Users,
    title: "Collectives & Co-ops",
    description: "Technology infrastructure for member-owned organisations",
  },
  {
    icon: ArrowRight,
    title: "More Sectors Coming",
    description: "We're scaling fast",
  },
];

export default function WhatWeDo() {
  const ref = useFadeIn();

  return (
    <section id="what-we-do" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        <div className="text-center mb-16">
          <p className="text-primary-light font-semibold text-sm tracking-[0.2em] uppercase mb-3">
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
              className="relative flex items-start gap-4 p-6 rounded-xl border border-primary/10 hover:border-primary/25 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-sky/15 flex items-center justify-center shrink-0">
                <area.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">{area.title}</h3>
                <p className="text-sm text-navy/55 font-light">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
