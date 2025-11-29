import React from "react";

// Dummy skills data (UI same, no API)
const skills = [
  { name: "Figma", percentage: 92, color: "bg-purple-500" },
  { name: "Framer", percentage: 85, color: "bg-pink-500" },
  { name: "Webflow", percentage: 80, color: "bg-blue-500" },
  { name: "React", percentage: 90, color: "bg-cyan-500" },
  { name: "WordPress", percentage: 86, color: "bg-indigo-500" },
  { name: "Laravel/PHP", percentage: 70, color: "bg-red-500" },
];

export default function SkillsSection() {
  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="inline-block mb-8">
        <div className="text-emerald-500 uppercase tracking-wider text-sm font-medium mb-4">
          My Skills
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
        My Advantages
      </h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-emerald-500 transition-all">
              <div className="flex items-center justify-between mb-6">
                
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <div className="text-2xl font-bold text-emerald-500">
                    {skill.name.charAt(0)}
                  </div>
                </div>

                {/* Percentage */}
                <div className="text-4xl font-bold text-emerald-500">
                  {skill.percentage}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
