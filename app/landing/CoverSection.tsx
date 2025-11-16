"use client";
import { useEffect, useRef, useState } from "react";

interface CoverSectionProps {
  scrollY: number;
  title: string;
  index: number;
}

export default function CoverSection({ scrollY, title, index }: CoverSectionProps) {
  const descriptions = [
    "Discover a universe of possibilities, instantly accessible.",
    "Experience seamless navigation with our sleek minimalistic UI.",
    "Join a community spanning the entire planet, in real-time.",
    "No matter where you are, Plantilir keeps you instantly connected."
  ];

  const ref = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    // Distance of the section from the top of the page
    const rect = ref.current.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    setOffsetY(top);
  }, []);

  return (
    <section
      ref={ref}
      className={`coverSection cover${index + 1}`}
      style={{
        // background offset relative to section top
        backgroundPosition: `center ${scrollY * 0.2 - offsetY * 0.2}px`,
      }}
    >
      <div className="overlayInfo hoverableCard">
        <h2 className="hoverableText header2">{title}</h2>
        <p className="hoverableText">{descriptions[index]}</p>
      </div>
    </section>
  );
}
