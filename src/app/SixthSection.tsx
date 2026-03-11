import { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FingerImage from "../assets/finger_bg.png";

const SixthSection = forwardRef<HTMLDivElement>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const resolvedRef = (ref as React.RefObject<HTMLDivElement>) ?? containerRef;

  const { scrollYProgress } = useScroll({
    target: resolvedRef,
    offset: ["start start", "end end"],
  });

  // circle scale
  const circleScale = useTransform(scrollYProgress, [0.05, 0.1], [0, 1000]);

  // opacity
  const circleOpacity = useTransform(scrollYProgress, [0.02, 0.04], [0, 1]);

  return (
    <div ref={resolvedRef} className="relative h-[2200vh] bg-white">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Left Text */}
        <p className="absolute top-[10%] left-[80px] w-fit text-[48px] font-alumni font-black text-[#202020] leading-[120%] tracking-[-0.03em] z-15">
          The collection features three standout models, inspired by
          <br /> parametric design, optical art, and futuristic sculptural
          forms.
          <br /> Diesel’s iconic ‘D’ monogram adds a signature touch,
          <br /> reflecting the brand’s identity in every detail.
        </p>

        {/* Finger Image */}
        <div className="relative z-10 top-1/2 -translate-y-1/2">
          <img
            src={FingerImage}
            alt="Finger Touching"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Right Text */}
        <p className="absolute bottom-[12%] right-[80px] w-fit text-[48px] font-alumni font-black text-[#202020] leading-[120%] tracking-[-0.03em] text-right z-15">
          Melissa’s jelly material meets Diesel’s experimental
          <br />
          design, creating a playful and unique look.
          <br /> Vivid colors and three-dimensional shapes capture
          <br /> attention while offering both comfort and style.
        </p>

        {/* Circle container */}
        <div className="absolute left-[50.38%] top-[44.5%] -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            className="h-1 w-1 rounded-full bg-black pointer-events-none"
            style={{
              scale: circleScale,
              opacity: circleOpacity,
            }}
          />
        </div>
      </div>
    </div>
  );
});

SixthSection.displayName = "SixthSection";
export default SixthSection;
