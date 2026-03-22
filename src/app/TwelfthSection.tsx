import { useEffect, useState } from "react";
import { motion } from "motion/react";
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.jpg";
import social3 from "../assets/social3.jpg";
import social4 from "../assets/social4.png";
import social5 from "../assets/social5.png";
import social6 from "../assets/social6.png";

const CARD_WIDTH = 425;
const CARD_HEIGHT = 629;
const CARD_GAP = 20;
const RIGHT_PANE_WIDTH = 870;
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;

function RollingColumn({
  images,
  direction,
  duration,
  initialOffset,
  scale,
}: {
  images: string[];
  direction: "up" | "down";
  duration: number;
  initialOffset: number;
  scale: number;
}) {
  const cardWidth = CARD_WIDTH * scale;
  const cardHeight = CARD_HEIGHT * scale;
  const cardGap = CARD_GAP * scale;
  const cycle = images.length * (cardHeight + cardGap);

  return (
    <div
      className="relative h-full overflow-hidden"
      style={{ width: cardWidth }}
    >
      <motion.div
        style={{ marginTop: initialOffset * scale, gap: cardGap }}
        animate={direction === "up" ? { y: [0, -cycle] } : { y: [-cycle, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="shrink-0 overflow-hidden"
            style={{
              width: cardWidth,
              height: cardHeight,
              borderRadius: 20 * scale,
            }}
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
  const [cardScale, setCardScale] = useState(1);
  const [rightPaneInset, setRightPaneInset] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const widthRatio = window.innerWidth / DESIGN_WIDTH;
      const heightRatio = window.innerHeight / DESIGN_HEIGHT;
      // Keep 1920x1080 ratio and only scale down when viewport is smaller.
      const nextScale = Math.min(1, widthRatio, heightRatio);
      setLayoutScale(nextScale);
      setRightPaneInset((window.innerWidth - DESIGN_WIDTH * nextScale) / 2);

      const paneWidth = RIGHT_PANE_WIDTH * nextScale;
      const paneHeight = window.innerHeight;
      const fitByWidth = paneWidth / (CARD_WIDTH * 2 + CARD_GAP);
      const fitByHeight = paneHeight / (CARD_HEIGHT * 2 + CARD_GAP);
      setCardScale(Math.min(fitByWidth, fitByHeight));
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
          className="absolute left-1/2 top-1/2 w-[1920px] h-screen"
          style={{
            transform: `translate(-50%, -50%) scale(${layoutScale})`,
            transformOrigin: "center center",
          }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-fit pl-[80px] pt-[122px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.14 } },
            }}
          >
            <div className="font-['Switzer_Variable',_sans-serif] text-[100px] leading-[1.2] tracking-[-4px] text-white font-extrabold whitespace-pre-line">
              {`SHARE\nOUR\nCOLLECTION\nON SOCIAL`
                .split("\n")
                .map((line, idx) => (
                  <span key={idx} className="block overflow-hidden">
                    <motion.span
                      className="block"
                      variants={{
                        hidden: { y: "120%" },
                        show: {
                          y: "0%",
                          transition: {
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
            </div>

            <div className="mt-[24px] overflow-hidden">
              <motion.button
                className="h-[60px] px-[44px] rounded-[32px] border border-white text-white font-['Switzer_Variable',_sans-serif] text-[20px] font-extrabold tracking-[-4%] transition-colors duration-300 hover:bg-[#E2001A] hover:border-[#E2001A]"
                variants={{
                  hidden: { y: "120%" },
                  show: {
                    y: "0%",
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                Share the Boldness
              </motion.button>
            </div>

            <div className="mt-[106px] font-alumni text-[40px] font-bold text-[#E4E4E4] leading-[1.35]">
              {[
                "#DIESEL X MELISSA",
                "#JELLY SHOES",
                "#INNOVATIVE COLLABORATION",
              ].map((line, idx) => (
                <span key={idx} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    variants={{
                      hidden: { y: "120%" },
                      show: {
                        y: "0%",
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-0 pr-[80px] h-screen overflow-hidden"
          style={{
            right: rightPaneInset,
          }}
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="flex h-full w-fit items-start"
            style={{ gap: CARD_GAP * cardScale }}
          >
            <RollingColumn
              images={[social1, social2, social3]}
              direction="down"
              duration={22}
              initialOffset={-37}
              scale={cardScale}
            />
            <RollingColumn
              images={[social4, social5, social6]}
              direction="up"
              duration={30}
              initialOffset={-424}
              scale={cardScale}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
