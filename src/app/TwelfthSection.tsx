import { motion } from "motion/react";
import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";
import collection4 from "../assets/collection4.png";
import collection5 from "../assets/collection5.png";

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
    <div className="relative w-[425px] h-full overflow-hidden rounded-[20px]">
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
  return (
    <section className="relative h-screen w-full bg-[#07090f] overflow-hidden z-[70]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_12%)] pointer-events-none" />

      <div className="relative z-10 h-full w-full grid grid-cols-2">
        <div className="h-full pl-[80px] pt-[122px]">
          <h2 className="font-['Switzer_Variable',_sans-serif] text-[100px] leading-[1.2] tracking-[-4px] text-white font-extrabold whitespace-pre-line">
            {`SHARE\nOUR\nCOLLECTION\nON SOCIAL`}
          </h2>

          <button className="mt-[34px] h-[60px] px-[44px] rounded-[32px] border border-white text-white font-['Switzer_Variable',_sans-serif] text-[20px] font-extrabold tracking-[-0.8px]">
            Share the Boldness
          </button>

          <div className="mt-[120px] font-['Alumni_Sans',_sans-serif] text-[40px] font-bold text-[#E4E4E4] leading-[1.35]">
            <p>#DIESEL X MELISSA</p>
            <p>#JELLY SHOES</p>
            <p>#INNOVATIVE COLLABORATION</p>
          </div>
        </div>

        <div className="relative h-full">
          <div className="absolute inset-0 flex items-start justify-center gap-[20px] pt-0">
            <RollingColumn
              images={[collection1, collection2]}
              direction="down"
              duration={22}
              initialOffset={-37}
            />
            <RollingColumn
              images={[collection3, collection4, collection5]}
              direction="up"
              duration={30}
              initialOffset={-424}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
