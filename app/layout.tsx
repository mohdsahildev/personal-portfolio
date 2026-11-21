import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Sahil — Frontend Developer & Creative Technologist",
  description:
    "Frontend developer passionate about building modern, interactive, and visually engaging digital experiences with React, Next.js, TypeScript, GSAP, and Three.js.",
  keywords: [
    "Frontend Developer",
    "Mohammed Sahil",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Three.js",
    "React Three Fiber",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#F4F1EA] text-[#16110D] font-sans antialiased selection:bg-[#FF6A13] selection:text-white relative overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
