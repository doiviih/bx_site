import { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LeftFinger from "../assets/left_finger.png";
import RightFinger from "../assets/right_finger.png";

const SixthSection = forwardRef<HTMLDivElement>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const resolvedRef = (ref as React.RefObject<HTMLDivElement>) ?? containerRef;

  const { scrollYProgress } = useScroll({
    target: resolvedRef,
    offset: ["start start", "end end"],
  });

  // Fingers slide-in
  const fingerStart = 0.01;
  const fingerEnd = 0.2;
  const leftFingerX = useTransform(
    scrollYProgress,
    [fingerStart, fingerEnd],
    [-300, 0],
  );
  const rightFingerX = useTransform(
    scrollYProgress,
    [fingerStart, fingerEnd],
    [300, 0],
  );
  const fingerOpacity = useTransform(
    scrollYProgress,
    [fingerStart, fingerEnd],
    [0, 1],
  );

  // Text fade-in after fingers meet
  const textStart = 0.2;
  const textEnd = 0.3;
  const textOpacity = useTransform(
    scrollYProgress,
    [textStart, textEnd],
    [0, 1],
  );
  const leftTextY = useTransform(
    scrollYProgress,
    [textStart, textEnd],
    [-20, 0],
  );
  const rightTextY = useTransform(
    scrollYProgress,
    [textStart, textEnd],
    [20, 0],
  );

  // Circle after text
  const circleScale = useTransform(scrollYProgress, [0.32, 0.4], [0, 1000]);
  const circleOpacity = useTransform(scrollYProgress, [0.32, 0.36], [0.8, 1]);

  return (
    <div ref={resolvedRef} className="relative h-[2200vh] bg-white">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Left Text */}
        <motion.p
          className="absolute top-[130px] left-[80px] w-fit text-[48px] font-alumni font-black text-[#202020] leading-[120%] tracking-[-3%] z-15"
          style={{ opacity: textOpacity, y: leftTextY }}
        >
          The collection features three standout models, inspired by
          <br /> parametric design, optical art, and futuristic sculptural
          forms.
          <br /> Diesel’s iconic ‘D’ monogram adds a signature touch,
          <br /> reflecting the brand’s identity in every detail.
        </motion.p>

        {/* Finger Image */}
        <div className="relative z-10 top-1/2 -translate-y-1/2 flex justify-center">
          <motion.img
            src={LeftFinger}
            alt="left finger image"
            className="h-full w-full object-contain"
            style={{ x: leftFingerX, opacity: fingerOpacity }}
          />
          <motion.img
            src={RightFinger}
            alt="right finger image"
            className="h-full w-full object-contain"
            style={{ x: rightFingerX, opacity: fingerOpacity }}
          />
        </div>

        {/* Right Text */}
        <motion.p
          className="absolute bottom-[140px] right-[80px] w-fit text-[48px] font-alumni font-black text-[#202020] leading-[120%] tracking-[-3%] text-right z-15"
          style={{ opacity: textOpacity, y: rightTextY }}
        >
          Melissa’s jelly material meets Diesel’s experimental
          <br />
          design, creating a playful and unique look.
          <br /> Vivid colors and three-dimensional shapes capture
          <br /> attention while offering both comfort and style.
        </motion.p>

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
