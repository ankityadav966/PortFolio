import React from "react";

export default function AboutSection() {
  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          About
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-12">
        Every great design begins with<br />
        <span className="text-emerald-500">an even better story</span>
      </h2>

      {/* Description */}
      <div className="text-xl text-gray-400 leading-relaxed space-y-6 max-w-4xl">
        <p>
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use.
        </p>

        <p>
          I’m quietly confident, naturally curious, and always working to improve
          my skills one design problem at a time. I love building clean, modern,
          and meaningful designs that help brands tell their story.
        </p>
      </div>
    </div>
  );
}
