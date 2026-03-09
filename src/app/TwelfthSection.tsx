import { useEffect, useState } from "react";
import { motion } from "motion/react";
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.jpg";
import social3 from "../assets/social3.jpg";
import social4 from "../assets/social4.png";
import social5 from "../assets/social5.png";
import social6 from "../assets/social6.png";

const CARD_HEIGHT = 629;
const CARD_GAP = 20;
const PITCH = CARD_HEIGHT + CARD_GAP;

function RollingColumn({
  images,
  direction,
  duration,
  initialOffset,
}: {
  images: string[];
  direction: "up" | "down";
  duration: number;
  initialOffset: number;
}) {
  const cycle = images.length * PITCH;

  return (
    <div className="relative w-[425px] h-full overflow-hidden">
      <motion.div
        style={{ marginTop: initialOffset }}
        animate={direction === "up" ? { y: [0, -cycle] } : { y: [-cycle, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-[20px]"
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="w-[425px] h-[629px] rounded-[20px] overflow-hidden"
          >
            <img
              src={src}
              alt={`social-card-${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TwelfthSection() {
  const [layoutScale, setLayoutScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const widthRatio = window.innerWidth / 1920;
      const heightRatio = window.innerHeight / 1080;
      setLayoutScale(Math.min(1, widthRatio, heightRatio));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#07090f] overflow-hidden z-[70]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_12%)] pointer-events-none" />

      <div className="absolute inset-0 z-10">
        <div
          className="absolute left-1/2 top-1/2 w-[1920px] h-[1080px]"
          style={{
            transform: `translate(-50%, -50%) scale(${layoutScale})`,
            transformOrigin: "center center",
          }}
        >
          <div className="relative h-full w-full grid grid-cols-2">
            <div className="h-full pl-[80px] pt-[122px]">
              <h2 className="font-['Switzer_Variable',_sans-serif] text-[100px] leading-[1.2] tracking-[-4px] text-white font-extrabold whitespace-pre-line">
                {`SHARE\nOUR\nCOLLECTION\nON SOCIAL`}
              </h2>

              <button className="mt-[24px] h-[60px] px-[44px] rounded-[32px] border border-white text-white font-['Switzer_Variable',_sans-serif] text-[20px] font-extrabold tracking-[-0.8px] transition-colors duration-300 hover:text-[#E2001A] hover:border-[#E2001A]">
                Share the Boldness
              </button>

              <div className="mt-[106px] font-alumni text-[40px] font-bold text-[#E4E4E4] leading-[1.35]">
                <p>#DIESEL X MELISSA</p>
                <p>#JELLY SHOES</p>
                <p>#INNOVATIVE COLLABORATION</p>
              </div>
            </div>

            <div className="relative h-full">
              <div className="absolute inset-0 flex items-start justify-center gap-[20px] pt-0">
                <RollingColumn
                  images={[social1, social2, social3]}
                  direction="down"
                  duration={22}
                  initialOffset={-37}
                />
                <RollingColumn
                  images={[social4, social5, social6]}
                  direction="up"
                  duration={30}
                  initialOffset={-424}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
