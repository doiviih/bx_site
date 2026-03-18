import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import silverSculpture from "../assets/silver_sculpture.png";
import redSculpture from "../assets/red_sculpture.png";
import paperBg from "../assets/paper_bg.png";

export default function SecondSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [redRevealProgress, setRedRevealProgress] = useState(0);
  const [silverTilt, setSilverTilt] = useState({ rx: 0, ry: 0 });
  const [redTilt, setRedTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Progress based on section position so it animates on scroll up/down.
      const sectionStart = windowHeight * 0.9;
      const sectionEnd = windowHeight * 0.3;

      const progress = Math.max(
        0,
        Math.min(1, (sectionStart - rect.top) / (sectionStart - sectionEnd)),
      );

      setScrollProgress(progress);

      // Red sculpture reveal: starts when section is about halfway entered.
      const redStart = windowHeight - rect.height * 0.5;
      const redEnd = windowHeight - rect.height * 0.8;
      const redProgress = Math.max(
        0,
        Math.min(1, (redStart - rect.top) / (redStart - redEnd)),
      );
      setRedRevealProgress(redProgress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const applyTilt = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setter: (value: { rx: number; ry: number }) => void,
  ) => {
    if (scrollProgress < 0.9) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const maxTilt = 30;
    const rx = (-dy / rect.height) * maxTilt;
    const ry = (dx / rect.width) * maxTilt;
    setter({ rx, ry });
  };

  const resetTilt = (setter: (value: { rx: number; ry: number }) => void) => {
    setter({ rx: 0, ry: 0 });
  };

  const renderRevealTitle = (text: string) => {
    const words = text.split(" ");
    return (
      <motion.h1
        className="text-white text-center"
        style={{
          fontFamily: "'Alumni Sans', sans-serif",
          fontSize: "128px",
          fontWeight: 900,
          letterSpacing: "-3.84px",
          lineHeight: "140%",
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.55 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-baseline pr-[12px]"
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>
    );
  };

  const renderMaskedWords = (text: string) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.04 } },
        }}
      >
        {text.split("\n").map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <span
                key={`${lineIndex}-${wordIndex}`}
                className="inline-block overflow-hidden pr-[10px] leading-[100%]"
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "120%" },
                    show: {
                      y: "0%",
                      transition: {
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  {word === "" ? "\u00A0" : word}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full z-20 overflow-x-hidden"
    >
      {/* Background and Content Container */}
      <div className="relative w-full overflow-x-hidden">
        {/* Background Image - Dictates Height */}
        <img
          src={paperBg}
          alt="Background Texture"
          className="w-full h-full object-cover block select-none"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 pt-[90px] max-w-[1920px] mx-auto">
          {/* Silver sculpture - Left */}
          <div
            className="absolute left-[-155px] top-[280px] w-[551px] h-[551px] rotate-[30deg]"
            onMouseMove={(e) => applyTilt(e, setSilverTilt)}
            onMouseLeave={() => resetTilt(setSilverTilt)}
            style={{ perspective: "900px" }}
          >
            <img
              src={silverSculpture}
              alt="Silver metallic sculpture"
              className="w-full h-full object-contain"
              style={{
                opacity: scrollProgress,
                transform: `translateX(${(1 - scrollProgress) * -140}px) rotateX(${silverTilt.rx}deg) rotateY(${silverTilt.ry}deg)`,
                transition: "opacity 0.1s ease-out, transform 0.15s ease-out",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
          </div>

          {/* Red sculpture - Right (positioned lower) */}
          <div
            className="absolute right-[-86px] bottom-[200px] w-[422px] h-[422px]"
            onMouseMove={(e) => applyTilt(e, setRedTilt)}
            onMouseLeave={() => resetTilt(setRedTilt)}
            style={{ perspective: "900px" }}
          >
            <img
              src={redSculpture}
              alt="Red glossy sculpture"
              className="w-full h-full object-contain"
              style={{
                opacity: redRevealProgress,
                transform: `translateX(${(1 - redRevealProgress) * 140}px) rotateX(${redTilt.rx}deg) rotateY(${redTilt.ry}deg)`,
                transition: "opacity 0.1s ease-out, transform 0.15s ease-out",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
          </div>

          {/* Text content - Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-8">
            {/* Main title */}
            {renderRevealTitle("Two worlds. One collision")}

            {/* Subtext */}
            <p
              className="text-white text-center"
              style={{
                fontFamily: "'Alumni Sans', sans-serif",
                fontSize: "64px",
                fontWeight: 900,
                letterSpacing: "-1.92px",
                lineHeight: "115%",
              }}
            >
              {renderMaskedWords(
                "When Diesel's fearless edge collides with Melissa's playful\n fluidity, boundaries dissolve and a bold new flow is born.\nA creation that challenges conventions and shapes the\n future of footwear.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
