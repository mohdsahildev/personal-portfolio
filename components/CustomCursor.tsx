"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth lerp coordinates for trailing outer ring
  const followerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .sticker-shadow, .interactive'
      );
      setIsHovered(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth animation loop for the trailing ring
    const animateFollower = () => {
      followerPos.current.x += (mousePosition.x - followerPos.current.x) * 0.18;
      followerPos.current.y += (mousePosition.y - followerPos.current.y) * 0.18;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animateFollower);
    };

    rafId.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [mousePosition.x, mousePosition.y, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-neonOrange -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: isHovered ? "6px" : "8px",
          height: isHovered ? "6px" : "8px",
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.7 : 1})`,
        }}
      />

      {/* Trailing Brutalist Viewfinder Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full transition-[width,height,background-color,border-color] duration-200 flex items-center justify-center ${isHovered
          ? "w-14 h-14 border-2 border-neonOrange bg-neonOrange/15"
          : "w-9 h-9 border-2 border-darkBrutal/80 bg-transparent"
          } ${isClicked ? "scale-90" : "scale-100"}`}
      >
        {/* Subtle Crosshair Ticks when hovering interactive items */}
        {isHovered && (
          <>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-0.5 h-1.5 bg-neonOrange" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-0.5 h-1.5 bg-neonOrange" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-0.5 bg-neonOrange" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-1.5 h-0.5 bg-neonOrange" />
          </>
        )}
      </div>
    </>
  );
}
