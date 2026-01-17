import React from "react";
import { Badge } from "@/Components/ui/badge";
import { ExternalLink } from "lucide-react";

// REAL Project Data with LIVE LINKS (UI SAME)
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    title: "AI Chat & Code Generation Platform",
    tags: ["AI", "Node.js", "Express", "APIs"],
    link: "https://app.codeastra.ai/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
    title: "Education Management System (Intellix)",
    tags: ["Node.js", "Express", "MongoDB", "Dashboard"],
    link: "https://adminv2-dev.intellix360.in/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    title: "Brain Bucks – Education Platform",
    tags: ["React", "Next.js", "Redux", "Tailwind"],
    link: "http://www.brainbucks.in/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    title: "Admin Panel & Dashboard System",
    tags: ["REST APIs", "Backend", "Role Based Access"],
    link: "https://adminv2-dev.intellix360.in/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    title: "Responsive Web Applications",
    tags: ["HTML", "CSS", "Bootstrap", "React"],
    link: "https://shoping-website-kappa.vercel.app/",
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
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </div>
  );
}
