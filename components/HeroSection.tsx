"use client";

import { useState } from "react";
import {
  MapPin,
  Zap,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export default function HeroSection() {
  const { personalInfo, hero } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      data-purpose="hero-section"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 max-w-[1440px] mx-auto bg-grid-pattern overflow-visible min-h-[850px] md:min-h-[920px] flex flex-col justify-between"
    >
      {/* Top Meta Row: Status Badge & Subline */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border-2 border-darkBrutal px-4 py-1.5 rounded-full text-xs font-mono font-bold sticker-shadow uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5 cursor-default">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentLime opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accentLime" />
          </span>
          <span className="text-darkBrutal">{personalInfo.status}</span>
        </div>

        {/* Mono Tag */}
        <div className="text-xs font-mono text-darkBrutal/80 flex items-center gap-3 font-semibold">
          <span>{hero.metaSubline}</span>
        </div>
      </div>

      {/* Massive Hero Title Backplane */}
      <div className="relative w-full text-center mt-4">
        <h1 className="font-syne font-black text-7xl sm:text-9xl md:text-[130px] lg:text-[148px] leading-[0.88] tracking-tighter text-darkBrutal uppercase select-none relative z-10 transition-transform duration-500 hover:tracking-normal">
          {personalInfo.shortName}
        </h1>
      </div>

      {/* Center Hero Creative Stage */}
      <div className="relative mx-auto w-full max-w-4xl h-[440px] md:h-[490px] mt-[-20px] md:mt-[-30px] flex items-center justify-center z-20">
        {/* Radiant Backdrop Geometric Block */}
        <div className="absolute w-[300px] sm:w-[380px] md:w-[440px] h-[380px] sm:h-[420px] md:h-[450px] bg-gradient-to-tr from-burntOrange via-neonOrange to-[#FF8C42] rounded-3xl transform -rotate-1 border-4 border-darkBrutal sticker-shadow transition-transform duration-300 hover:rotate-0" />

        {/* Secondary Diagonal Background Shape */}
        <div className="absolute w-[320px] sm:w-[400px] md:w-[460px] h-[370px] sm:h-[410px] md:h-[440px] border-2 border-dashed border-darkBrutal/40 rounded-3xl transform rotate-2 pointer-events-none" />

        {/* Developer Portrait Frame with Design-Tool Bounding Box Handles */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[430px] md:h-[460px] rounded-2xl overflow-visible border-2 border-dashed border-neonOrange bg-darkBrutal/5 flex items-end justify-center group/stage">
          {/* 8 Figma/Illustrator Bounding Handles */}
          <span className="handle-dot handle-tl" />
          <span className="handle-dot handle-tm" />
          <span className="handle-dot handle-tr" />
          <span className="handle-dot handle-ml" />
          <span className="handle-dot handle-mr" />
          <span className="handle-dot handle-bl" />
          <span className="handle-dot handle-bm" />
          <span className="handle-dot handle-br" />

          {/* Cutout Developer Image */}
          {!imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={`Studio photographic cutout portrait of creative frontend developer ${personalInfo.name}`}
              className="relative z-20 w-full h-[430px] sm:h-[450px] md:h-[480px] object-cover object-top drop-shadow-2xl select-none pointer-events-none transform translate-y-3 transition-transform duration-500 group-hover/stage:scale-[1.02]"
              src={personalInfo.heroPortraitUrl || personalInfo.portraitUrl || "/images/hero-portrait.png"}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-darkBrutal text-white flex items-center justify-center text-5xl font-syne font-black border-4 border-white sticker-shadow">
                {personalInfo.shortName.slice(0, 2)}
              </div>
              <span className="mt-4 font-mono text-xs font-bold bg-white text-darkBrutal px-3 py-1 rounded-full border border-darkBrutal sticker-shadow">
                {personalInfo.name}
              </span>
            </div>
          )}

          {/* Live Selection Label Pill on Frame Top */}
          <div className="absolute -top-3.5 left-4 bg-neonOrange text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase z-30 sticker-shadow-sm transition-transform duration-200 hover:scale-105">
            {hero.componentPillText}
          </div>
        </div>

        {/* Rotating Circular Stamp Badge with interactive scale */}
        <a
          href="#contact"
          className="absolute -top-6 -right-2 sm:-top-8 sm:-right-8 z-30 group cursor-pointer"
          title="Hire Me"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg
              className="w-full h-full animate-spin-slow text-darkBrutal"
              viewBox="0 0 100 100"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text className="text-[9.5px] font-mono font-bold uppercase tracking-[2.5px] fill-darkBrutal">
                <textPath href="#circlePath">{hero.stampText}</textPath>
              </text>
            </svg>
            <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neonOrange text-white flex items-center justify-center border-2 border-darkBrutal sticker-shadow transform group-hover:rotate-45 transition-transform duration-300 shadow-lg">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </div>
          </div>
        </a>

        {/* Floating Animated Tech Pills Around Portrait (Desktop) */}
        <div className="hidden lg:block absolute -left-12 top-10 bg-darkBrutal text-white text-xs font-mono font-bold px-4 py-2 rounded-full border border-white/20 sticker-shadow z-30 animate-float-1 transition-transform hover:scale-110 cursor-default">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            React
          </span>
        </div>

        <div className="hidden lg:block absolute -left-14 top-36 bg-neonOrange text-white text-xs font-mono font-bold px-4 py-2 rounded-full border-2 border-darkBrutal sticker-shadow z-30 animate-float-2 transition-transform hover:scale-110 cursor-default">
          <span className="inline-flex items-center gap-1.5">
            <span>▲</span>
            Next.js
          </span>
        </div>

        <div className="hidden lg:block absolute -left-8 bottom-12 bg-darkBrutal text-white text-xs font-mono font-bold px-4 py-2 rounded-full border-2 border-darkBrutal sticker-shadow z-30 animate-float-4 transition-transform hover:scale-110 cursor-default">
          TS TypeScript
        </div>

        <div className="hidden lg:block absolute -right-12 top-28 bg-neonOrange text-white text-xs font-mono font-bold px-4 py-2 rounded-full border-2 border-darkBrutal sticker-shadow z-30 animate-float-3 transition-transform hover:scale-110 cursor-default">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Tailwind
          </span>
        </div>

        <div className="hidden lg:block absolute -right-10 bottom-16 bg-darkBrutal text-accentLime text-xs font-mono font-bold px-4 py-2 rounded-full border border-accentLime/40 sticker-shadow z-30 animate-float-5 transition-transform hover:scale-110 cursor-default">
          <span className="inline-flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 fill-current text-accentLime animate-pulse" />
            GSAP &amp; Three.js
          </span>
        </div>

        {/* Left Vertical Social Icons Floating Strip */}
        <div className="hidden xl:flex absolute -left-36 top-1/2 -translate-y-1/2 flex-col gap-3 z-30">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-xl bg-white border-2 border-darkBrutal flex items-center justify-center text-darkBrutal hover:bg-neonOrange hover:text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 sticker-shadow"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-xl bg-white border-2 border-darkBrutal flex items-center justify-center text-darkBrutal hover:bg-neonOrange hover:text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 sticker-shadow"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            title="Email"
            className="w-10 h-10 rounded-xl bg-white border-2 border-darkBrutal flex items-center justify-center text-darkBrutal hover:bg-neonOrange hover:text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 sticker-shadow"
          >
            <Mail className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>

        {/* Right Floating Currently Building Card with breathing float */}
        <div className="hidden xl:block absolute -right-44 top-1/3 z-30 max-w-[240px] bg-white border-2 border-darkBrutal p-3.5 rounded-xl sticker-shadow animate-float-card transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-neonOrange animate-ping" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neonOrange">
              {hero.currentlyBuilding.badge}
            </span>
          </div>
          <p className="text-xs text-darkBrutal font-bold leading-snug">
            {hero.currentlyBuilding.title}
          </p>
          <div className="mt-2.5 pt-2 border-t border-darkBrutal/10 flex items-center justify-between text-[10px] font-mono text-darkBrutal/70">
            <span className="font-bold text-darkBrutal">
              {hero.currentlyBuilding.status}
            </span>
            <span className="bg-neonOrange/10 text-neonOrange px-1.5 py-0.5 rounded font-bold">
              {hero.currentlyBuilding.version}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Floating Badges Row */}
      <div className="flex lg:hidden flex-wrap justify-center gap-2 mt-4 z-20">
        <span className="bg-darkBrutal text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/20 sticker-shadow">
          React
        </span>
        <span className="bg-neonOrange text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-darkBrutal sticker-shadow">
          Next.js
        </span>
        <span className="bg-darkBrutal text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-darkBrutal sticker-shadow">
          TypeScript
        </span>
        <span className="bg-neonOrange text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-darkBrutal sticker-shadow">
          Tailwind
        </span>
        <span className="bg-darkBrutal text-accentLime text-xs font-mono font-bold px-3 py-1 rounded-full border border-accentLime/40 sticker-shadow inline-flex items-center gap-1">
          <Zap className="w-3 h-3 fill-current text-accentLime" />
          GSAP &amp; Three.js
        </span>
      </div>

      {/* Mobile & Tablet Social Icons Strip */}
      <div className="flex xl:hidden justify-center items-center gap-3 mt-4 z-20">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className="w-10 h-10 rounded-xl bg-white border-2 border-darkBrutal flex items-center justify-center text-darkBrutal hover:bg-neonOrange hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 sticker-shadow"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="w-10 h-10 rounded-xl bg-white border-2 border-darkBrutal flex items-center justify-center text-darkBrutal hover:bg-neonOrange hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 sticker-shadow"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          title="Email"
          className="w-10 h-10 rounded-xl bg-white border-2 border-darkBrutal flex items-center justify-center text-darkBrutal hover:bg-neonOrange hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 sticker-shadow"
        >
          <Mail className="w-4 h-4 stroke-[2.2]" />
        </a>
      </div>

      {/* Bottom Hero Sub-Bar: Headline & CTAs */}
      <div className="relative z-20 mt-8 grid grid-cols-1 md:grid-cols-12 items-center md:items-end gap-6 pt-6 border-t-2 border-darkBrutal/15">
        {/* Left: Location Tag */}
        <div className="col-span-1 md:col-span-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-darkBrutal px-3.5 py-2 rounded-xl sticker-shadow transition-transform hover:-translate-y-0.5">
            <MapPin className="w-4 h-4 text-neonOrange stroke-[2.2]" />
            <span className="text-xs font-mono font-bold text-darkBrutal">
              {hero.locationTag}
            </span>
          </div>
          <p className="text-xs font-mono text-darkBrutal/70 mt-2 leading-tight">
            {hero.locationDescription}
          </p>
        </div>

        {/* Center: Headline & Intro */}
        <div className="col-span-1 md:col-span-6 text-center">
          <h2 className="font-syne font-extrabold text-xl sm:text-2xl text-darkBrutal leading-tight">
            {hero.headline} <br />
            <span className="font-serif-italic font-normal text-2xl sm:text-3xl text-neonOrange tracking-wide underline decoration-neonOrange/40 hover:text-burntOrange transition-colors">
              {hero.headlineEmphasis}
            </span>{" "}
            {hero.headlineEnd}
          </h2>
          <p className="text-xs font-sans text-darkBrutal/75 max-w-md mx-auto mt-2 leading-relaxed">
            {hero.bio}
          </p>
        </div>

        {/* Right: Action CTA Buttons */}
        <div className="col-span-1 md:col-span-3 flex items-center justify-center md:justify-end gap-3">
          <a
            href="#projects"
            className="group bg-neonOrange hover:bg-burntOrange text-white font-syne font-bold text-xs uppercase px-5 py-3 rounded-full border-2 border-darkBrutal sticker-shadow inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Mohammed_Sahil_Frontend_Developer.pdf"
            className="group bg-white hover:bg-sandMuted text-darkBrutal font-syne font-bold text-xs uppercase px-5 py-3 rounded-full border-2 border-darkBrutal sticker-shadow transition-all duration-200 hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-1.5 shadow-md"
          >
            <span>Download Resume</span>
            <ArrowDown className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
