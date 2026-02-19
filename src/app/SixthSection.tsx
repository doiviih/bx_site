import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FingerImage from "../assets/finger_bg.png";

export default function SixthSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Outer container controls how long this whole "pinned scene" lasts
  // Increase h-[260vh]/h-[300vh] for longer pin time
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * Timeline (scrollYProgress 0 -> 1)
   * 0.00 ~ 0.15 : section settles (sticky already, but no circle yet)
   * 0.15 ~ 0.85 : circle expands
   * 0.85 ~ 1.00 : hold fully expanded (optional)
   */

  // circle scale: stay 0 for a bit, then explode
  const circleScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 450]);

  // optional: only show the circle after it starts
  const circleOpacity = useTransform(scrollYProgress, [0.14, 0.16], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[260vh] bg-white">
      {/* Sticky viewport */}
      <div className="sticky w-full top-[-150px]">
        <p className="absolute top-[274px] left-[80px] w-fit text-extrabold text-[48px] font-alumni font-black leading-[120%] tracking-[-0.03em]">
          The collection features three standout models, inspired by
          <br /> parametric design, optical art, and futuristic sculptural
          forms.
          <br /> Diesel’s iconic ‘D’ monogram adds a signature touch,
          <br /> reflecting the brand’s identity in every detail.
        </p>

        {/* Finger Image Container */}
        <div className="relative z-10 top-[150px]">
          <img
            src={FingerImage}
            alt="Finger Touching"
            className="h-full w-full object-contain"
          />

          {/* Black Circle: true center positioning */}
          <div className="absolute left-[50.38%] top-[44.5%] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="h-4 w-4 rounded-full bg-black pointer-events-none"
              style={{
                scale: circleScale,
                opacity: circleOpacity,
              }}
            />
          </div>
        </div>

        <p className="z-11 absolute top-[860px] right-[80px] w-fit text-extrabold text-[48px] font-alumni font-black leading-[120%] tracking-[-0.03em] text-right">
          Melissa’s jelly material meets Diesel’s experimental
          <br />
          design, creating a playful and unique look.
          <br /> Vivid colors and three-dimensional shapes capture
          <br /> attention while offering both comfort and style.
        </p>
      </div>
    </div>
  );
}
