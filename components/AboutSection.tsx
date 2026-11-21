"use client";

import { useState } from "react";
import { ArrowDown, ChevronRight, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { about, personalInfo } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      data-purpose="about-me-editorial"
      className="relative bg-darkBrutal text-white pt-24 md:pt-28 pb-24 md:pb-28 mt-20 md:mt-24"
    >
      {/* Torn Paper Edge CSS Divider on Top */}
      <div className="absolute -top-12 left-0 right-0 h-14 bg-darkBrutal torn-paper-edge" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 mb-12 md:mb-16 gap-2">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-neonOrange tracking-widest block mb-1">
              {about.sectionTag}
            </span>
            <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
              {about.title}
            </h2>
          </div>
          <div className="font-mono text-xs text-white/50">
            {about.locationSubtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Cutout Portrait in Sticker Framing with Interactive Tilt */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] mx-auto bg-neonOrange rounded-2xl p-4 border-4 border-white sticker-shadow-white rotate-[-1.5deg] transition-transform duration-500 hover:rotate-0 group/frame">
              {/* Inner Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-sandMuted border-2 border-darkBrutal min-h-[400px]">
                {!imageError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    alt={`${personalInfo.name} portrait`}
                    className="w-full h-[420px] sm:h-[470px] object-cover object-top transition-transform duration-500 group-hover/frame:scale-105"
                    src={about.portraitUrl || personalInfo.aboutPortraitUrl || "/images/about-portrait.jpeg"}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-[420px] sm:h-[470px] flex flex-col items-center justify-center p-6 bg-darkBrutal text-white text-center">
                    <span className="text-6xl font-syne font-black text-neonOrange">
                      {personalInfo.shortName.slice(0, 2)}
                    </span>
                    <span className="mt-3 font-mono text-xs font-bold text-white/80">
                      {personalInfo.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Tilted Sticker Badges with Micro Bounce on Hover */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white text-darkBrutal font-mono text-[11px] font-bold px-3 py-1.5 rounded-full border-2 border-darkBrutal sticker-shadow rotate-[-8deg] z-10 transition-transform duration-200 hover:scale-110 cursor-default">
                ✦ REACT
              </div>
              <div className="absolute top-1/3 -right-4 sm:-right-6 bg-darkBrutal text-white font-mono text-[11px] font-bold px-3 py-1.5 rounded-full border-2 border-white sticker-shadow rotate-[6deg] z-10 transition-transform duration-200 hover:scale-110 cursor-default">
                NEXT.JS
              </div>
              <div className="absolute top-2/3 -left-4 sm:-left-6 bg-accentLime text-darkBrutal font-mono text-[11px] font-bold px-3 py-1.5 rounded-full border-2 border-darkBrutal sticker-shadow rotate-[-4deg] z-10 transition-transform duration-200 hover:scale-110 cursor-default">
                TYPESCRIPT
              </div>
              <div className="absolute -bottom-4 right-4 sm:right-8 bg-white text-darkBrutal font-mono text-[11px] font-bold px-4 py-1.5 rounded-full border-2 border-darkBrutal sticker-shadow rotate-[-3deg] z-10 transition-transform duration-200 hover:scale-110 cursor-default">
                GSAP ANIMATIONS
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-syne font-black text-3xl sm:text-4xl text-white leading-snug">
                {about.heading}{" "}
                <span className="text-neonOrange">{about.headingEmphasis}</span>
              </h3>
              <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase font-bold text-neonOrange tracking-wider block">
                  ENGINEERING FOCUS
                </span>
                <ul className="text-xs font-mono space-y-2 text-white/80">
                  {about.engineeringFocus.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 group/item">
                      <ChevronRight className="w-3.5 h-3.5 text-neonOrange stroke-[2.5] shrink-0 transition-transform duration-150 group-hover/item:translate-x-1" />
                      <span className="group-hover/item:text-white transition-colors duration-150">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs uppercase font-bold text-neonOrange tracking-wider block">
                  MOTION &amp; EXPERIENCE
                </span>
                <ul className="text-xs font-mono space-y-2 text-white/80">
                  {about.motionFocus.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 group/item">
                      <Check className="w-3.5 h-3.5 text-accentLime stroke-[2.5] shrink-0 transition-transform duration-150 group-hover/item:scale-125" />
                      <span className="group-hover/item:text-white transition-colors duration-150">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Download CV & Signature */}
            <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/10 gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohammed_Sahil_Frontend_Developer.pdf"
                className="group bg-white hover:bg-neonOrange hover:text-white transition-all duration-200 text-darkBrutal font-syne font-bold text-xs uppercase px-6 py-3 rounded-full border-2 border-white sticker-shadow inline-flex items-center gap-2 hover:-translate-y-1 active:translate-y-0"
              >
                <span>Download CV</span>
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              {/* Stylized SVG Handwritten Signature "Sahil" */}
              <div className="flex flex-col items-end group/sig">
                <svg
                  className="w-32 sm:w-36 h-10 sm:h-12 text-neonOrange transition-transform duration-300 group-hover/sig:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 200 60"
                >
                  <path d="M20 45 Q 40 10 60 25 T 90 20 T 120 40 Q 140 15 170 30" />
                  <path d="M50 35 L 150 35" opacity="0.4" strokeDasharray="4 4" />
                </svg>
                <span className="font-mono text-[10px] text-white/50 tracking-wider">
                  {about.signatureText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
