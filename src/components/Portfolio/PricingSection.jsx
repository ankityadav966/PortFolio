import React from "react";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Check } from "lucide-react";

// REAL Pricing Packages (UI SAME)
const packages = [
  {
    name: "Backend / API Development",
    price: 20,
    features: [
      "REST API development using Node.js & Express",
      "Database design (MongoDB / PostgreSQL)",
      "Business logic & backend integration",
      "Admin panels & dashboards",
      "Bug fixing & optimization",
      "Remote / Online work",
      "Support for 1 month",
    ],
  },
  {
    name: "Full Stack / AI Project",
    price: 35,
    featured: true,
    features: [
      "Frontend + Backend development",
      "React / Next.js with Redux",
      "Backend APIs & database integration",
      "AI API integration (chat / code generation)",
      "Responsive web application",
      "Real-time debugging & support",
      "Priority project handling",
      "Support for 3 months",
    ],
  },
];

export default function PricingSection({ onContactClick }) {
  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          Pricing
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
        My Pricing
      </h2>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mb-12">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`p-8 ${
              pkg.featured
                ? "bg-emerald-500 text-white border-0 scale-105"
                : "bg-[#1a1a1a] border-gray-800"
            }`}
          >
            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-6xl font-bold mb-2">
                ${pkg.price}
                <span className="text-2xl font-normal opacity-70"> / hour</span>
              </div>
              <p className="uppercase tracking-wider text-sm opacity-80 mt-2">
                {pkg.name}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      pkg.featured ? "text-white" : "text-emerald-500"
                    }`}
                  />
                  <span
                    className={pkg.featured ? "text-white" : "text-gray-300"}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              onClick={onContactClick}
              className={`w-full py-6 text-lg ${
                pkg.featured
                  ? "bg-white text-emerald-500 hover:bg-gray-100"
                  : "bg-emerald-500 text-white hover:bg-emerald-600"
              }`}
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>

      {/* Bottom Message */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-400 text-lg">
          Need a custom solution or project-based pricing?{" "}
          <button
            onClick={onContactClick}
            className="text-emerald-500 hover:underline font-medium"
          >
            Let’s discuss
          </button>
        </p>
      </div>
    </div>
  );
}
