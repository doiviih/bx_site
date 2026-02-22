import { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FingerImage from "../assets/finger_bg.png";

const SixthSection = forwardRef<HTMLDivElement>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Use the forwarded ref for the outer container so parent can observe scroll
  const resolvedRef = (ref as React.RefObject<HTMLDivElement>) ?? containerRef;

  // Outer container controls how long this whole "pinned scene" lasts
  // Increase h-[260vh]/h-[300vh] for longer pin time
  const { scrollYProgress } = useScroll({
    target: resolvedRef,
    offset: ["start start", "end end"],
  });

  // circle scale: stay 0 for a bit, then explode
  const circleScale = useTransform(scrollYProgress, [0.05, 0.1], [0, 754]);

  // optional: only show the circle after it starts
  const circleOpacity = useTransform(scrollYProgress, [0.02, 0.04], [0, 1]);

  return (
    <div ref={resolvedRef} className="relative h-[3000vh] bg-white">
      {/* Sticky viewport */}
      <div className="sticky w-full top-0 overflow-hidden">
        <p className="absolute top-[10%] left-[80px] w-fit text-extrabold text-[48px] font-alumni text-black leading-[120%] tracking-[-0.03em]">
          The collection features three standout models, inspired by
          <br /> parametric design, optical art, and futuristic sculptural
          forms.
          <br /> Diesel’s iconic ‘D’ monogram adds a signature touch,
          <br /> reflecting the brand’s identity in every detail.
        </p>

        {/* Finger Image Container */}
        <div className="relative z-10 top-0">
          <img
            src={FingerImage}
            alt="Finger Touching"
            className="h-full w-full object-contain"
          />

          {/* Black Circle: true center positioning */}
          <div className="absolute left-[50.38%] top-[44.5%] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="z-12 h-1 w-1 rounded-full bg-black pointer-events-none"
              style={{
                scale: circleScale,
                opacity: circleOpacity,
              }}
            />
          </div>
        </div>

        <p className="z-11 absolute bottom-[12%] right-[80px] w-fit text-extrabold text-[48px] font-alumni text-black leading-[120%] tracking-[-0.03em] text-right">
          Melissa’s jelly material meets Diesel’s experimental
          <br />
          design, creating a playful and unique look.
          <br /> Vivid colors and three-dimensional shapes capture
          <br /> attention while offering both comfort and style.
        </p>
      </div>
    </div>
  );
});

SixthSection.displayName = "SixthSection";
export default SixthSection;
