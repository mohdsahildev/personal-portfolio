"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const { brandLogo } = portfolioData.personalInfo;
  const { navLinks } = portfolioData;

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4" data-purpose="global-header">
      <nav className="bg-darkBrutal/90 backdrop-blur-md text-white border border-[#2e2620] px-3.5 sm:px-5 py-2 sm:py-3 rounded-full flex items-center justify-between gap-2.5 sm:gap-4 md:gap-7 shadow-2xl transition-all duration-300 hover:border-neonOrange/50 max-w-[calc(100vw-1.5rem)] md:max-w-max">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => setActiveLink("#hero")}
          className="flex items-center gap-1.5 font-syne font-black tracking-tight text-sm sm:text-base md:text-lg group shrink-0"
        >
          <span className="text-white group-hover:text-neonOrange transition-colors">
            {brandLogo}
          </span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accentLime inline-block animate-ping" />
        </a>

        {/* Desktop Divider */}
        <span className="hidden md:inline-block h-4 w-px bg-white/20" />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium font-sans">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`py-1 transition-colors relative ${isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neonOrange rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Divider */}
        <span className="hidden md:inline-block h-4 w-px bg-white/20" />

        {/* Nav Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Primary Pill Button - Single Line "Let's Talk" */}
          <a
            href="#contact"
            className="whitespace-nowrap shrink-0 bg-neonOrange hover:bg-burntOrange text-white font-semibold text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-flex items-center gap-1.5 sm:gap-2 transition-all transform active:scale-95 shadow-md"
          >
            <span className="whitespace-nowrap">Let&apos;s Talk</span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-darkBrutal flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            ) : (
              <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 sm:top-24 left-4 right-4 bg-darkBrutal/95 backdrop-blur-xl border-2 border-darkBrutal rounded-2xl p-6 shadow-2xl z-50 sticker-shadow">
          <ul className="flex flex-col gap-4 text-base font-syne font-bold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-white hover:text-neonOrange py-1 border-b border-white/10 pb-2 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
