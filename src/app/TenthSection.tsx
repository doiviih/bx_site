import { useRef, useState } from "react";
import {
  MotionValue,
  motion,
  useScroll,
  useTime,
  useTransform,
} from "motion/react";
import paperBg from "../assets/tenth_bg.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import review5 from "../assets/review5.png";
import review6 from "../assets/review6.png";
import review1Video from "../assets/review1_vd.mp4";
import review2Video from "../assets/review2_vd.mp4";
import review3Video from "../assets/review3_vd.mp4";
import review4Video from "../assets/review4_vd.mp4";
import review5Video from "../assets/review5_vd.mp4";
import review6Video from "../assets/review6_vd.mp4";

interface CardItem {
  id: string;
  thumbnail: string;
  video: string;
  left: number;
  top: number;
  zIndex: number;
}

interface OrbitCardItem extends CardItem {
  radius: number;
  baseAngleDeg: number;
}

const CARD_WIDTH = 280;
const CARD_HEIGHT = 392;
const DESIGN_CENTER_X = 960;
const DESIGN_CENTER_Y = 540;

const cards: CardItem[] = [
  {
    id: "review1",
    thumbnail: review1,
    video: review1Video,
    left: 1036,
    top: 130,
    zIndex: 45,
  },
  {
    id: "review2",
    thumbnail: review2,
    video: review2Video,
    left: 1148,
    top: 434,
    zIndex: 40,
  },
  {
    id: "review3",
    thumbnail: review3,
    video: review3Video,
    left: 940,
    top: 688,
    zIndex: 36,
  },
  {
    id: "review4",
    thumbnail: review4,
    video: review4Video,
    left: 617,
    top: 630,
    zIndex: 34,
  },
  {
    id: "review5",
    thumbnail: review5,
    video: review5Video,
    left: 505,
    top: 326,
    zIndex: 42,
  },
  {
    id: "review6",
    thumbnail: review6,
    video: review6Video,
    left: 717,
    top: 81,
    zIndex: 38,
  },
];

const orbitCards: OrbitCardItem[] = cards.map((card) => {
  const cardCenterX = card.left + CARD_WIDTH / 2;
  const cardCenterY = card.top + CARD_HEIGHT / 2;
  const dx = cardCenterX - DESIGN_CENTER_X;
  const dy = cardCenterY - DESIGN_CENTER_Y;

  return {
    ...card,
    radius: Math.hypot(dx, dy),
    baseAngleDeg: (Math.atan2(dy, dx) * 180) / Math.PI,
  };
});

interface OrbitCardProps {
  card: OrbitCardItem;
  orbitRotate: MotionValue<number>;
}

function OrbitCard({ card, orbitRotate }: OrbitCardProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const x = useTransform(orbitRotate, (v) => {
    const rad = ((card.baseAngleDeg + v) * Math.PI) / 180;
    return Math.cos(rad) * card.radius - CARD_WIDTH / 2;
  });
  const y = useTransform(orbitRotate, (v) => {
    const rad = ((card.baseAngleDeg + v) * Math.PI) / 180;
    return Math.sin(rad) * card.radius - CARD_HEIGHT / 2;
  });

  return (
    <motion.div
      className="absolute w-[280px] h-[392px] overflow-hidden"
      style={{
        left: "50%",
        top: "50%",
        x,
        y,
        zIndex: card.zIndex,
      }}
    >
      <img
        src={card.thumbnail}
        alt={`${card.id} thumbnail`}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-300 ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={card.video}
        poster={card.thumbnail}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setIsVideoReady(true)}
      />
    </motion.div>
  );
}

export default function TenthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const time = useTime();
  const orbitRotate = useTransform(
    time,
    (t) => -((t / 1000) * (360 / 34)) % 360,
  );
  const headingY = useTransform(scrollYProgress, [0.06, 0.32], [0, -270]);
  const headingOpacity = useTransform(scrollYProgress, [0.18, 0.36], [1, 0]);
  const cardsY = useTransform(scrollYProgress, [0.12, 0.46], [600, 0]);

  return (
    <section ref={sectionRef} className="relative h-[220vh] w-full z-[60]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${paperBg})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.34),transparent_38%),radial-gradient(circle_at_76%_72%,rgba(255,255,255,0.24),transparent_42%),radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.52),transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[#121212]/28 pointer-events-none" />

        <motion.p
          style={{ y: headingY, opacity: headingOpacity }}
          className="absolute left-1/2 -translate-x-1/2 top-[270px] w-[1320px] text-center text-white text-[64px] md:text-[88px] lg:text-[120px] leading-[1.04] tracking-[-0.04em] font-alumni font-extrabold pointer-events-none z-40"
        >
          Discover what our users are
          <br />
          saying about their experience.
        </motion.p>

        <motion.div
          style={{ y: cardsY }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[1920px] h-[1080px] origin-center scale-[0.5] sm:scale-[0.62] md:scale-[0.74] lg:scale-[0.86] xl:scale-100">
            {orbitCards.map((card) => (
              <OrbitCard key={card.id} card={card} orbitRotate={orbitRotate} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
