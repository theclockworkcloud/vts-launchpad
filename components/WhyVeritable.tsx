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
    <section className="py-24 md:py-32 px-6 bg-light">
      <div ref={ref} className="max-w-5xl mx-auto stagger-children">
        <div className="text-center mb-16">
          <p className="text-primary-light font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Why Veritable
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            A partner, not a vendor
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl mx-auto">
          {props.map((prop) => (
            <div key={prop.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <prop.icon
                  className="w-6 h-6 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-semibold text-navy text-lg mb-1">
                  {prop.title}
                </h3>
                <p className="text-navy/55 font-light">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
