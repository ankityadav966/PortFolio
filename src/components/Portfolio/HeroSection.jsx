import React from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection({ onContactClick }) {
  return (
    <div className="w-full">
      {/* INTRO BADGE */}
      <div className="inline-block mb-8">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-sm">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-gray-400 uppercase tracking-wider text-xs">
            Introduction
          </span>
        </div>
      </div>

      {/* HEADING */}
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
        Hi, I’m <span className="text-emerald-500">Ankit</span>,<br />
        Full Stack Developer<br />
        (Backend & AI Focused)
      </h1>

      {/* SUB TEXT */}
      <p className="text-xl text-gray-400 mb-16 max-w-2xl">
        I build scalable backend systems, responsive web applications, and
        AI-powered features. Currently working on real-world projects involving
        REST APIs, dashboards, and AI-based chat & code generation.
      </p>

      {/* STATS */}
      <div className="flex flex-wrap gap-16 mb-16">
        <div>
          <div className="text-6xl font-bold text-emerald-500 mb-2">8+</div>
          <div className="text-gray-400 uppercase text-sm tracking-wider">
            month of<br />Experience
          </div>
        </div>

        <div>
          <div className="text-6xl font-bold text-emerald-500 mb-2">5+</div>
          <div className="text-gray-400 uppercase text-sm tracking-wider">
            Live & Real-world<br />Projects
          </div>
        </div>
      </div>

      {/* CIRCLE BUTTON */}
      <div className="relative w-32 h-32">
        {/* Outer spinning circle */}
        <div className="absolute inset-0 border-2 border-emerald-500 rounded-full animate-spin-slow"></div>

        {/* Button in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={onContactClick}
            className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>

        {/* Circular Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] fill-gray-400 uppercase tracking-wider">
              <textPath href="#circlePath">
                VIEW MY WORK • VIEW MY WORK • VIEW MY WORK •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
