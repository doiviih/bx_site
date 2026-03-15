import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MotionValue } from "motion";

import bg from "../assets/collection_bg.png";
import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";
import collection4 from "../assets/collection4.png";
import collection5 from "../assets/collection5.png";
import collection6 from "../assets/collection6.png";
import collection7 from "../assets/collection7.png";
import collection8 from "../assets/collection8.png";

interface CardBase {
  id: string;
  src: string;
  left: number;
  width: number;
  height: number;
  speed: number;
  zIndex: number;
}

type Card = CardBase &
  (
    | {
        top: number;
        bottom?: never;
      }
    | {
        top?: never;
        bottom: number;
      }
  );

const cards: Card[] = [
  {
    id: "look-1",
    src: collection1,
    left: 228,
    top: 143,
    width: 286,
    height: 428,
    speed: 1.0,
    zIndex: 34,
  },
  {
    id: "look-2",
    src: collection2,
    left: 770,
    top: 704,
    width: 359,
    height: 225,
    speed: 1.0,
    zIndex: 35,
  },
  {
    id: "look-3",
    src: collection3,
    left: 1415,
    top: 342,
    width: 359,
    height: 538,
    speed: 1.0,
    zIndex: 10,
  },
  {
    id: "look-4",
    src: collection4,
    left: 2031,
    top: 184,
    width: 328,
    height: 279,
    speed: 1.0,
    zIndex: 37,
  },
  {
    id: "look-5",
    src: collection5,
    left: 2488,
    top: 540,
    width: 155,
    height: 232,
    speed: 1.0,
    zIndex: 38,
  },
  {
    id: "look-6",
    src: collection6,
    left: 2804,
    top: 221,
    width: 213,
    height: 319,
    speed: 1.0,
    zIndex: 39,
  },
  {
    id: "look-7",
    src: collection7,
    left: 3322,
    bottom: 63,
    width: 327,
    height: 490,
    speed: 1.0,
    zIndex: 40,
  },
  {
    id: "look-8",
    src: collection8,
    left: 3838,
    top: 285,
    width: 247,
    height: 371,
    speed: 1.0,
    zIndex: 41,
  },
];

function ParallaxCard({
  card,
  trackX,
}: {
  card: Card;
  trackX: MotionValue<number>;
}) {
  const x = useTransform(trackX, (v) => v * card.speed);

  return (
    <motion.div
      style={{
        x,
        left: card.left,
        ...(card.top !== undefined
          ? { top: card.top }
          : { bottom: card.bottom }),
        width: card.width,
        height: card.height,
        zIndex: card.zIndex,
      }}
      className="absolute overflow-hidden"
    >
      <img
        src={card.src}
        alt={card.id}
        className="w-full h-full object-cover pointer-events-none select-none"
      />
    </motion.div>
  );
}

export default function EleventhSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(scrollYProgress, [0, 1], [0, -2268]);
  // const titleX = useTransform(scrollYProgress, [0, 1], [0, -260]);

  return (
    <section ref={sectionRef} className="relative h-[560vh] w-full z-[65]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f5f5f8]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#E2001A] text-[300px] font-alumni font-bold leading-[1.2] tracking-[-4%] whitespace-nowrap z-20 pointer-events-none">
          COLLECTION
        </p>

        <div className="absolute inset-0">
          {cards.map((card) => (
            <ParallaxCard key={card.id} card={card} trackX={trackX} />
          ))}
        </div>
      </div>
    </section>
  );
}
