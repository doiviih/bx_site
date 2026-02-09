import { useEffect, useState } from "react";
import silverSculpture from "../assets/silver_sculpture.png";
import redSculpture from "../assets/red_sculpture.png";
import paperBg from "../assets/paper_bg.png";

export default function SecondSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress for this section
      // Section starts appearing immediately
      const sectionStart = 0;
      const sectionEnd = windowHeight * 1.5;

      const progress = Math.max(
        0,
        Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)),
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split text into lines and characters for animation
  const renderAnimatedText = (text: string) => {
    // Split by literal newline characters
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="block">
        {line.split("").map((char, charIndex) => {
          // Strict sequential: Finish one line before starting next
          // Multipliers tuned to ensure line N finishes (opacity 1) before line N+1 starts
          // scrollProgress * 12 provides enough range (0-12) to cover all lines
          // Line separation (3.0) > Max char delay (approx 60 chars * 0.03 = 1.8)
          const charProgress = Math.max(
            0.5,
            Math.min(
              1,
              scrollProgress * 14 - (lineIndex * 3 + charIndex * 0.05),
            ),
          );

          return (
            <span
              key={charIndex}
              style={{
                opacity: charProgress,
                transition: "opacity 0.05s ease-out",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    ));
  };

  return (
    <section className="relative w-full z-20">
      {/* Background and Content Container */}
      <div className="relative w-full h-fit">
        {/* Background Image - Dictates Height */}
        <img
          src={paperBg}
          alt="Background Texture"
          className="w-full h-full object-cover block select-none"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 pt-[90px] max-w-[1920px] mx-auto">
          {/* Silver sculpture - Left */}
          <div className="absolute left-[-155px] top-[100px] w-[551px] h-[551px] rotate-[30deg]">
            <img
              src={silverSculpture}
              alt="Silver metallic sculpture"
              className="w-full h-full object-contain"
              style={{
                opacity: scrollProgress,
                transition: "opacity 0.3s ease-out",
              }}
            />
          </div>

          {/* Red sculpture - Right (positioned lower) */}
          <div className="absolute right-[-86px] bottom-[88px] w-[422px] h-[422px]">
            <img
              src={redSculpture}
              alt="Red glossy sculpture"
              className="w-full h-full object-contain"
              style={{
                opacity: scrollProgress,
                transition: "opacity 0.3s ease-out",
              }}
            />
          </div>

          {/* Text content - Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-8">
            {/* Main title */}
            <h1
              className="text-white text-center mb-12"
              style={{
                fontFamily: "'Alumni Sans', sans-serif",
                fontSize: "128px",
                fontWeight: 900,
                letterSpacing: "-3.84px",
                lineHeight: "140%",
              }}
            >
              {renderAnimatedText("Two worlds. One collision")}
            </h1>

            {/* Subtext */}
            <p
              className="text-white text-center"
              style={{
                fontFamily: "'Alumni Sans', sans-serif",
                fontSize: "64px",
                fontWeight: 900,
                letterSpacing: "-1.92px",
                lineHeight: "120%",
              }}
            >
              {renderAnimatedText(
                "When Diesel's fearless edge collides with Melissa's playful\n fluidity, boundaries dissolve and a bold new flow is born.\nA creation that challenges conventions and shapes the\n future of footwear.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
