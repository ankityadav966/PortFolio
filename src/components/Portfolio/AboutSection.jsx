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
        Turning ideas into scalable systems<br />
        <span className="text-emerald-500">with code & logic</span>
      </h2>

      {/* Description */}
      <div className="text-xl text-gray-400 leading-relaxed space-y-6 max-w-4xl">
        <p>
          I am a Full Stack Developer with over 2+ years of hands-on experience
          working on live production projects. My core strength lies in backend
          development using Node.js, Express.js, and REST APIs, along with
          frontend development using React.js and modern UI frameworks.
        </p>

        <p>
          I have worked on education management systems, admin dashboards, and
          AI-based applications involving chat and code generation features.
          Currently, I am learning and implementing AI integrations while
          focusing on writing clean, scalable, and maintainable code.
        </p>

        <p>
          I enjoy solving real-world problems, debugging complex issues, and
          supporting my teammates by helping them resolve technical doubts.
          I believe strong systems are built through clear logic, teamwork,
          and continuous learning.
        </p>
      </div>
    </div>
  );
}
