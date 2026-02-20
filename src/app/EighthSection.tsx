import { RefObject } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface EighthSectionProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}

export default function EighthSection({
  scrollContainerRef,
}: EighthSectionProps) {
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.47, 0.52], [0, 1]);

  return (
    <motion.section
      style={scrollContainerRef ? { opacity } : {}}
      className="sticky top-0 h-screen w-full bg-[#E2001A] flex flex-col items-center justify-center"
    >
      <motion.div>EighthSection</motion.div>
    </motion.section>
  );
}
