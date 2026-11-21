"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactFooter() {
  const { personalInfo } = portfolioData;
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      data-purpose="contact-and-footer"
      className="bg-darkBrutal text-white pt-20 md:pt-24 pb-12 border-t-4 border-neonOrange"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Call to Action Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 md:pb-20 border-b border-white/10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase font-bold text-neonOrange tracking-widest block">
              INITIATE COLLABORATION
            </span>
            <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter leading-tight">
              LET&apos;S BUILD SOMETHING <br />
              <span className="font-serif-italic text-neonOrange font-normal text-5xl sm:text-7xl lg:text-8xl lowercase">
                worth shipping.
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/70 max-w-xl">
              Looking for an energetic frontend engineer to craft fast, animated React &amp; Next.js applications? Let&apos;s connect.
            </p>
          </div>

          {/* Big Orange Mailto Email Pill */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-neonOrange hover:bg-burntOrange p-1.5 rounded-full border-2 border-white sticker-shadow-white flex items-center gap-2 group transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              title="Click to send an email"
            >
              <span className="font-mono font-bold text-white text-xs sm:text-sm pl-4 sm:pl-5 pr-2 select-all">
                {personalInfo.email}
              </span>
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-darkBrutal text-white flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-200 group-hover:bg-white group-hover:text-darkBrutal">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] text-white group-hover:transition-all duration-200 group-hover:scale-110" />
              </span>
            </a>

            <span className="text-[10px] font-mono text-white/50 tracking-wider flex items-center gap-1">
              <span>DIRECT EMAIL</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2]" />
            </span>
          </div>
        </div>

        {/* Secondary Contact Details Row */}
        <div className="py-8 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-white/80">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-white/50">DIRECT PHONE:</span>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="text-white hover:text-neonOrange transition-colors font-bold"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-white/50">CHANNELS:</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neonOrange transition-colors underline inline-flex items-center gap-0.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neonOrange transition-colors underline inline-flex items-center gap-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-neonOrange transition-colors underline inline-flex items-center gap-0.5"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
          </div>
        </div>

        {/* Footer Sub-Grid: Links, Clock & Copyright */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center text-xs font-mono text-white/60">
          {/* Left: Logo & Geo Clock */}
          <div className="md:col-span-4 flex items-center gap-4">
            <span className="font-syne font-black text-lg text-white tracking-tight">
              {personalInfo.brandLogo}
            </span>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accentLime animate-ping" />
              <span className="text-white">
                IST (UTC+5:30) — <span suppressHydrationWarning>{timeString || "10:42 AM"} IST</span>
              </span>
            </div>
          </div>

          {/* Center: Location */}
          <div className="md:col-span-4 flex md:justify-center items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-neonOrange stroke-[2.2]" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Right: Legal Copyright */}
          <div className="md:col-span-4 text-left md:text-right">
            Designed &amp; built by {personalInfo.name} © {personalInfo.year}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
