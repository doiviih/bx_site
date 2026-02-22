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
  // Keep wrap-based loop, but cap the driving value so motion stops growing
  // after the equivalent of +/-1000px travel.
  const x = useTransform(scrollYProgress, (v) => {
    const clamped = Math.max(-577, Math.min(577, v * direction * 2200));
    return `${wrap(-20, -45, clamped * 0.02)}%`;
  });

  return (
    <div className="w-full overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
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

  const opacity = useTransform(
    scrollYProgress,
    [0.12, 0.18, 0.86, 0.96],
    [0, 1, 1, 0],
  );
  const stackRotate = useTransform(scrollYProgress, [0.21, 0.24], [0, -20]);
  const stackScale = useTransform(scrollYProgress, [0.21, 0.45], [1, 78]);
  const y = useTransform(scrollYProgress, [0.21, 0.45], [0, -7000]);

  return (
    <motion.section
      style={scrollContainerRef ? { opacity } : {}}
      className="sticky top-0 h-screen w-full overflow-hidden [contain:paint] text-[#E2001A]"
    >
      <motion.div
        style={
          scrollContainerRef
            ? { rotate: stackRotate, scale: stackScale, y }
            : {}
        }
        className="absolute inset-0 flex flex-col justify-center gap-0 origin-center"
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
