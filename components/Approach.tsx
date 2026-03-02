"use client";

import { Sparkles, Heart, Handshake } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const cards = [
  {
    icon: Sparkles,
    title: "AI-Native",
    description:
      "Born in the AI era, not adapting to it. We build with AI at the core — thoughtfully and ethically.",
    accent: "from-primary to-primary-light",
    iconBg: "bg-primary",
  },
  {
    icon: Heart,
    title: "Human-Centred",
    description:
      "Technology should serve people, not the other way around. We automate the tedious so you can do the meaningful.",
    accent: "from-sky to-primary-light",
    iconBg: "bg-sky",
  },
  {
    icon: Handshake,
    title: "Purpose-Driven Partners",
    description:
      "We work with collectives, social enterprises, and organisations that care about more than the bottom line.",
    accent: "from-accent to-accent-warm",
    iconBg: "bg-accent",
  },
];

export default function Approach() {
  const ref = useFadeIn();

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto stagger-children">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Built different from day one
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-light overflow-hidden"
            >
              {/* Coloured top edge */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent}`} />

              <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                <card.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {card.title}
              </h3>
              <p className="text-navy/60 font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
