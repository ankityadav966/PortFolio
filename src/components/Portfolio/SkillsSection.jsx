import React from "react";

// REAL Skills Data (UI SAME)
const skills = [
  { name: "JavaScript", percentage: 85, color: "bg-yellow-500" },
  { name: "React.js", percentage: 88, color: "bg-cyan-500" },
  { name: "Next.js", percentage: 80, color: "bg-gray-500" },
  { name: "Redux", percentage: 78, color: "bg-purple-500" },
  { name: "Node.js", percentage: 86, color: "bg-green-500" },
  { name: "Express.js", percentage: 84, color: "bg-emerald-500" },
  { name: "MongoDB", percentage: 82, color: "bg-green-600" },
  { name: "PostgreSQL", percentage: 75, color: "bg-blue-600" },
  { name: "HTML & CSS", percentage: 90, color: "bg-orange-500" },
  { name: "Tailwind CSS", percentage: 88, color: "bg-sky-500" },
  { name: "REST APIs", percentage: 85, color: "bg-indigo-500" },
  { name: "Git & GitHub", percentage: 80, color: "bg-red-500" },
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
