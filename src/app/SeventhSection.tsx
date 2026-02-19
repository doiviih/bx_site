import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "motion";

interface ParallaxTextProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you have to replace for wrapping that works for you or dynamically calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamic based on the size of the text and viewport
   */
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

export default function SeventhSection() {
  return (
    <section className="relative w-full bg-black text-[#E2001A66] py-24 overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="flex flex-col gap-0 opacity-80">
        <ParallaxText baseVelocity={-2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          CONTRADICTION becomes Creation
        </ParallaxText>
      </div>
    </section>
  );
}
