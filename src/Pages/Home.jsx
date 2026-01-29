// Home.jsx (Complete Updated Code Without API)

import React, { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react"; 
import HeroSection from "../components/Portfolio/HeroSection";
import AboutSection from "../components/Portfolio/AboutSection";
import ResumeSection from "../components/Portfolio/ResumeSection";
import ServicesSection from "../components/Portfolio/ServicesSection";
import SkillsSection from "../components/Portfolio/SkillsSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import TestimonialSection from "../components/Portfolio/TestimonialSection";
import PricingSection from "../components/Portfolio/PricingSection";
import ContactSection from "../components/Portfolio/ContactSection";

import { Button } from "@/components/ui/button";
import profiledata from "../../Ankit Yadav resuma.pdf.pdf";
import { Linkedin, Github, Phone, FileText } from "lucide-react";

import {
  Compass   ,
  User,
  Briefcase,
  Zap,
  LayoutGrid,
  MessageSquare,
  DollarSign,
  PhoneCall,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const randomUser = {
    name: "Ankit",
    email: "ankityadav941318@gmail.com",
    location: "Los Angeles, CA",
    avatar:
      "https://i.pinimg.com/736x/b7/04/59/b70459d74fffe094a10516712f186400.jpg",
  };

  // const socialLinks = ['twitter', 'linkedin', 'dribbble', 'github'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "resume",
        "services",
        "skills",
        "portfolio",
        "testimonial",
        "pricing",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Sidebar */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 w-80">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold mb-2">
              {randomUser.name}
              <span className="text-emerald-500">.</span>
            </div>
            <p className="text-gray-400 text-sm">Framer Designer & Developer</p>
          </div>

          <div className="mb-6">
            <img
              src={randomUser.avatar}
              alt="Profile"
              className="w-full aspect-square object-cover rounded-2xl mb-6"
            />

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{randomUser.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>jaipur</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mb-6">
            © 2024 Ankit. All Rights Reserved
          </p>

          <div className="flex gap-3 justify-center mb-6">
            {/* Gmail */}
            <a
              href="mailto:ankityadav941318@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ankit-yadav-3335a4300"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ankityadav966"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Phone */}
            <a
              href="tel:+916350650966"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={profiledata}
              download
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          <Button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full py-6"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" /> HIRE ME!
          </Button>
        </div>
      </aside>

      {/* Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
  <div className="flex flex-col gap-4">
    {[
      { id: "home", label: "Home", icon: Compass   }, 
      { id: "about", label: "About", icon: User },
      { id: "resume", label: "Resume", icon: FileText },
      { id: "services", label: "Services", icon: Briefcase },
      { id: "skills", label: "Skills", icon: Zap },
      { id: "portfolio", label: "Portfolio", icon: LayoutGrid },
      { id: "testimonial", label: "Testimonial", icon: MessageSquare },
      { id: "pricing", label: "Pricing", icon: DollarSign },
      { id: "contact", label: "Contact", icon: PhoneCall },
    ].map((item) => {
      const Icon = item.icon;
      const isActive = activeSection === item.id;

      return (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          title={item.label}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all
            ${
              isActive
                ? "bg-emerald-500 text-black border-emerald-500 scale-110"
                : "bg-[#1a1a1a] text-gray-400 border-gray-700 hover:border-emerald-500 hover:text-emerald-500"
            }
          `}
        >
          <Icon className="w-4 h-4" />
        </button>
      );
    })}
  </div>
</nav>


      {/* Main Sections */}
      <main className="lg:ml-[25rem] lg:mr-24 px-6 lg:px-12">
        <section id="home" className="min-h-screen flex items-center py-20">
          <HeroSection onContactClick={() => scrollToSection("contact")} />
        </section>

        <section id="about" className="min-h-screen flex items-center py-20">
          <AboutSection />
        </section>

        <section id="resume" className="min-h-screen flex items-center py-20">
          <ResumeSection />
        </section>

        <section id="services" className="min-h-screen flex items-center py-20">
          <ServicesSection />
        </section>

        <section id="skills" className="min-h-screen flex items-center py-20">
          <SkillsSection />
        </section>

        <section id="portfolio" className="min-h-screen py-20">
          <PortfolioSection />
        </section>

        <section
          id="testimonial"
          className="min-h-screen flex items-center py-20"
        >
          <TestimonialSection />
        </section>

        <section id="pricing" className="min-h-screen flex items-center py-20">
          <PricingSection onContactClick={() => scrollToSection("contact")} />
        </section>

        <section id="contact" className="min-h-screen flex items-center py-20">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
