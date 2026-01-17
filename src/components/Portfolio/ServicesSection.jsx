import React from "react";
import { Code, Database, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";

// REAL Services Data (UI SAME)
const services = [
  {
    icon: Database,
    title: "Backend Development",
    description:
      "I build scalable backend systems using Node.js and Express.js, including REST APIs, business logic, authentication, dashboards, and database integrations.",
    projects: 5,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "I develop responsive and user-friendly web applications using HTML, CSS, Bootstrap, Tailwind CSS, React.js, Next.js, and Redux with clean UI/UX.",
    projects: 4,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "I work on AI-based features like chat and code generation by integrating AI models using APIs, handling prompts, responses, and error cases.",
    projects: 2,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function ServicesSection() {
  return (
    <div className="w-full">
      {/* SECTION TITLE */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          Services
        </div>
      </div>

      {/* HEADING */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
        My Specializations
      </h2>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-[#1a1a1a] border-gray-800 p-8 hover:border-emerald-500 transition-all group cursor-pointer"
          >
            {/* Icon Box */}
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <service.icon className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Projects Count */}
            <div className="text-emerald-500 font-medium">
              {service.projects}+ Projects
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
