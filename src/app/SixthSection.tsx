import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FingerImage from "../assets/finger_bg.png";

export default function SixthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation Sequence
  // The user wants a black circle to spawn from the center of the finger image (touch point)
  // and expand to fill the screen.

  // 1. Scale of the black circle. Starts at 0, goes to huge.
  // Adjust timing: start slightly after section begins to settle the view.
  const circleScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 400]);

  // 2. Text Opacity/Transform - simple fade in or static
  // const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <p className="absolute top-[274px] left-[80px] w-fit text-extrabold text-[48px] font-alumni font-black leading-[120%] tracking-[-0.03em]">
          The collection features three standout models, inspired by
          <br /> parametric design, optical art, and futuristic sculptural
          forms.
          <br /> Diesel’s iconic ‘D’ monogram adds a signature touch,
          <br /> reflecting the brand’s identity in every detail.
        </p>

        {/* Finger Image Container */}
        <div className="relative z-10 top-0 w-full h-full">
          <img
            src={FingerImage}
            alt="Finger Touching"
            className="h-full w-full object-contain"
          />

          {/* Black Circle - Positioned absolutely relative to the container */}
          <div className="absolute top-[46.5%] left-1/2 transform">
            <motion.div
              className="w-4 h-4 bg-black rounded-full pointer-events-none"
              style={{
                scale: circleScale,
              }}
            />
          </div>
        </div>

        <p className="absolute bottom-[140px] right-[80px] w-fit text-extrabold text-[48px] font-alumni font-black leading-[120%] tracking-[-0.03em] text-right">
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
