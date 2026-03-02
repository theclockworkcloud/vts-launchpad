"use client";

import { User } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

const team = [
  {
    name: "Alex Hender",
    role: "Executive General Manager",
  },
];

export default function Team() {
  const ref = useFadeIn();

  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto fade-in-section">
        <div className="text-center mb-16">
          <p className="text-primary-light font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            The people behind the platform
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center w-56"
            >
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/10 to-sky/15 flex items-center justify-center mb-5 group-hover:from-primary/15 group-hover:to-sky/20 transition-all duration-300">
                <User
                  className="w-12 h-12 text-primary/50"
                  strokeWidth={1}
                />
              </div>
              <h3 className="font-semibold text-navy text-lg">
                {member.name}
              </h3>
              <p className="text-sm text-navy/50 font-light mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
