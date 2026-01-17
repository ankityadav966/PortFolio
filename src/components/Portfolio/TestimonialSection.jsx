import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

// REALISTIC Testimonials (UI SAME)
const testimonials = [
  {
    name: "Team Lead",
    role: "Backend Developer, Intellix360",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop",
    content:
      "Ankit worked on multiple backend modules including academics, accounts, and dashboards. He understands business logic well and always delivers clean and scalable APIs.",
  },
  {
    name: "Project Manager",
    role: "Education Platform Project",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop",
    content:
      "Ankit is reliable and quick at solving problems. He handled backend integration smoothly and also supported the frontend team whenever issues came up.",
  },
  {
    name: "Frontend Developer",
    role: "Brain Bucks Platform",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
    content:
      "Working with Ankit was easy. He helped resolve Redux and API-related issues and ensured smooth data flow between frontend and backend.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          Testimonial
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
        What People Say
      </h2>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl mx-auto">
        <Card className="bg-[#1a1a1a] border-gray-800 p-12 relative overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 text-emerald-500/10" />

          {/* Profile */}
          <div className="flex items-start gap-8 mb-8">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div>
              <h3 className="text-2xl font-bold mb-2">
                {testimonials[current].name}
              </h3>
              <p className="text-gray-400">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Content */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            "{testimonials[current].content}"
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-emerald-500 w-8" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-gray-700 hover:border-emerald-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-gray-700 hover:border-emerald-500"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Brand Logos */}
      <div className="mt-16">
        <p className="text-center text-gray-500 mb-8 uppercase tracking-wider text-sm">
          Collaborated on multiple real-world projects
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-24 h-12 bg-gray-700 rounded"></div>
            ))}
        </div>
      </div>
    </div>
  );
}
