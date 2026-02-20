import { RefObject } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { wrap } from "motion";

interface SeventhSectionProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}

interface ParallaxTextProps {
  children: string;
  /** -1 = slides left, 1 = slides right */
  direction: 1 | -1;
  scrollYProgress: MotionValue<number>;
}

function ParallaxText({
  children,
  direction,
  scrollYProgress,
}: ParallaxTextProps) {
  // Feed scroll progress through wrap() — same seamless loop as time-based,
  // but now driven by scroll position. Multiplier sets how fast rows travel.
  const x = useTransform(
    scrollYProgress,
    (v) => `${wrap(-20, -45, v * direction * 80)}%`,
  );

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-alumni font-black text-[210px] uppercase flex whitespace-nowrap flex-nowrap leading-[100%]"
        style={{ x }}
      >
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
      </motion.div>
    </div>
  );
}

export default function SeventhSection({
  scrollContainerRef,
}: SeventhSectionProps) {
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Section fades in
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // Section background transitions black → red near the very end so it
  // seamlessly connects with EighthSection's red bg
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.85, 1.0],
    ["#000000", "#E2001A"],
  );

  // The text block itself rotates, scales, and drifts — zooming into the red letters
  const rotate = useTransform(scrollYProgress, [0.6, 1.0], [0, -20]);

  return (
    <motion.section
      style={scrollContainerRef ? { opacity, backgroundColor } : {}}
      // No overflow-hidden here — let the scaled text bleed to all edges
      className="sticky top-0 inset-0 w-full text-[#E2001A] py-24 flex flex-col justify-center"
    >
      <motion.div
        style={scrollContainerRef ? { rotate } : {}}
        className="flex flex-col gap-0 origin-center"
      >
        <ParallaxText direction={-1} scrollYProgress={scrollYProgress}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText direction={1} scrollYProgress={scrollYProgress}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText direction={-1} scrollYProgress={scrollYProgress}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText direction={1} scrollYProgress={scrollYProgress}>
          CONTRADICTION becomes Creation
        </ParallaxText>
      </motion.div>
    </motion.section>
  );
}
