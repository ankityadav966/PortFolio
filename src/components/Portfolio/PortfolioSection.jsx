import React from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Dummy project data (UI same)
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
    title: "Bureau - Architecture Studio Website",
    tags: ["Figma", "Framer", "WordPress"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "Moonex WordPress Theme",
    tags: ["WordPress", "Laravel/PHP"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    title: "Taskly Dashboard",
    tags: ["WordPress", "Laravel/PHP"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    title: "Hinterland - Real Estate Site Redesign",
    tags: ["Figma", "React"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    title: "Lewis Portfolio Framer Template",
    tags: ["Framer"],
  },
];

export default function PortfolioSection() {
  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          Portfolio
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-emerald-500 transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-emerald-500/20 text-emerald-500 border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {/* Icon */}
                <ExternalLink className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
