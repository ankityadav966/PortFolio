import React from "react";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Check } from "lucide-react";

// Dummy Pricing Packages (UI same)
const packages = [
  {
    name: "Standard",
    price: 49,
    features: [
      "Need your wireframe",
      "Design with Figma, Framer",
      "Implement with Webflow, React, WordPress, Laravel/PHP",
      "Remote/Online",
      "Work in business days, no weekend",
      "Support 6 months",
    ],
  },
  {
    name: "Premium",
    price: 99,
    featured: true,
    features: [
      "Don't need wireframe or anything",
      "Design with Figma, Framer from scratch",
      "Implement with Webflow, React, WordPress, Laravel/PHP",
      "Remote/Online",
      "Work with both weekend",
      "Support 12 months",
      "Your project always be priority",
      "Customer care gifts",
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
                <span className="text-2xl font-normal opacity-70"> / hours</span>
              </div>
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
              Pick this package
            </Button>
          </Card>
        ))}
      </div>

      {/* Bottom Message */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-400 text-lg">
          Don't find any package match with your plan? Want to setup a new
          tailor-made package for only you?{" "}
          <button
            onClick={onContactClick}
            className="text-emerald-500 hover:underline font-medium"
          >
            Contact Us
          </button>
        </p>
      </div>
    </div>
  );
}
