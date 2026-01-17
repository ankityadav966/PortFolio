import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

// REAL Resume Data (UI SAME)
const experiences = [
  {
    period: "2025 - Present",
    title: "Backend Developer (AI Project)",
    company: "CodeAstra",
  },
  {
    period: "2024 - 2025",
    title: "Backend Developer",
    company: "Intellix360",
  },
  {
    period: "2023 - 2024",
    title: "Frontend Developer (Project-Based)",
    company: "Maya & Brain Bucks",
  },
  {
    period: "2023 - Present",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Manipal University",
  },
  {
    period: "Completed",
    title: "Senior Secondary (12th – Agriculture Stream)",
    company: "Akshaya Education Sen. Sec. School",
  },
];

export default function ResumeSection() {
  return (
    <div className="w-full">
      {/* Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          Resume
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
        Education & Experience
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent"></div>

        <div className="space-y-12 pl-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot on line */}
              <div className="absolute -left-[49px] top-2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-[#0a0a0a] group-hover:scale-150 transition-transform"></div>

              <div className="text-sm text-emerald-500 mb-2 font-medium">
                {exp.period}
              </div>

              <h3 className="text-2xl font-bold mb-1 group-hover:text-emerald-500 transition-colors">
                {exp.title}
              </h3>

              <p className="text-gray-400">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
