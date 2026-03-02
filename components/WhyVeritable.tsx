"use client";

import { Zap, Shield, MapPin, HeartHandshake } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const props = [
  {
    icon: Zap,
    title: "Fast & Scaling",
    description: "We move quickly and grow with you",
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "Thoughtful about data, privacy, and real-world impact",
  },
  {
    icon: MapPin,
    title: "Adelaide-Based",
    description: "Local roots, modern capabilities",
  },
  {
    icon: HeartHandshake,
    title: "Genuine Partnership",
    description: "We care about your outcomes, not just our invoice",
  },
];

export default function WhyVeritable() {
  const ref = useFadeIn();

  return (
    <section className="relative py-24 md:py-32 px-6 bg-navy overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.06]">
        <svg viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="70" height="220" fill="#4A9BD9" />
          <rect x="130" y="80" width="70" height="180" fill="#7BC4E8" />
          <rect x="220" y="20" width="70" height="240" fill="#F5A623" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto stagger-children">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Why Veritable
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A partner, not a vendor
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl mx-auto">
          {props.map((prop) => (
            <div key={prop.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <prop.icon
                  className="w-6 h-6 text-sky"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">
                  {prop.title}
                </h3>
                <p className="text-sky/70 font-light">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
