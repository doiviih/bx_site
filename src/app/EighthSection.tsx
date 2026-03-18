import { RefObject, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import neoFormBg from "../assets/neoform_img.png";
import keywordImg from "../assets/keyword1.png";
import keywordImg2 from "../assets/keyword2.png";
import keywordImg3 from "../assets/keyword3.png";

interface EighthSectionProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
  sectionId?: string;
}

export default function EighthSection({
  scrollContainerRef,
  sectionId,
}: EighthSectionProps) {
  const [cardsScale, setCardsScale] = useState(1);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateScale = () => {
      const widthRatio = window.innerWidth / 1920;
      const heightRatio = window.innerHeight / 1080;
      setCardsScale(Math.min(1, widthRatio, heightRatio));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Section 배경이 나타나는 구간
  const sectionOpacity = useTransform(scrollYProgress, [0.52, 0.57], [0, 1]);

  // 배경 심볼 이미지의 opacity (최대 0.5)
  const symbolOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 0.8]);

  // 텍스트의 opacity (최대 1.0)
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  const cardData = [
    {
      id: 1,
      title: "PARAMETRIC FORM",
      desc: "Inspired by futuristic architecture, it embraces fluid and organic patterns. A structure that holds the order and chaos within its form.",
      rotate: -10.623,
      top: 175,
      left: 138,
      range: [0.7, 0.8],
      image: keywordImg,
    },
    {
      id: 2,
      title: "OPTICAL FLOW",
      desc: "Inspired by the visual language of optical art, it explores the beauty of illusion. A form that comes alive only through the perception of movement.",
      rotate: 5.327,
      top: 122,
      left: 656,
      range: [0.71, 0.83],
      image: keywordImg2,
    },
    {
      id: 3,
      title: "FUTURE SILHOUETTE",
      desc: "Defined by experimental sculptural forms and bold outlines. A paradoxical shape where firmness and softness coexist in harmony.",
      rotate: -2.523,
      top: 209,
      left: 1212,
      range: [0.75, 0.85],
      image: keywordImg3,
    },
  ];

  return (
    <motion.section
      id={sectionId}
      style={scrollContainerRef ? { opacity: sectionOpacity } : {}}
      className="sticky top-0 h-screen w-full bg-[#E2001A] overflow-hidden flex flex-col items-center justify-center font-['Switzer_Variable',_sans-serif]"
    >
      {/* Background Symbol */}
      <motion.div
        style={scrollContainerRef ? { opacity: symbolOpacity } : {}}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img
          src={neoFormBg}
          alt="neoform image"
          className="w-auto h-full object-cover"
        />
      </motion.div>

      {/* Background Text Pattern */}
      <motion.div
        style={scrollContainerRef ? { opacity: textOpacity } : {}}
        className="absolute bottom-[114px] pointer-events-none select-none overflow-hidden"
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className={`flex whitespace-nowrap leading-[0.75] ${i === 1 ? "ml-[-240px] mt-[-26px]" : ""}`}
            animate={{ x: i === 0 ? ["0%", "-33.333%"] : ["0%", "33.333%"] }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(3)].map((__, loopIndex) => (
              <div
                key={loopIndex}
                className="flex whitespace-nowrap"
                aria-hidden={loopIndex > 0}
              >
                {[...Array(12)].map((_, j) => (
                  <span
                    key={`${loopIndex}-${j}`}
                    className="font-alumni font-black text-white text-[200px] md:text-[240px] uppercase tracking-tight mr-[40px]"
                  >
                    NEO FORM
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Horizontal Cards Area */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto">
        <div
          className="relative w-[1920px] h-[1080px] shrink-0"
          style={{
            transform: `scale(${cardsScale})`,
            transformOrigin: "center center",
          }}
        >
          {cardData.map((card) => {
            // 개별 카드의 x축 이동 애니메이션
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardX = useTransform(
              scrollYProgress,
              card.range,
              card.id === 1 ? ["140vw", "0vw"] : ["100vw", "0vw"],
            );
            // 개별 카드의 y축 이동 애니메이션
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardY =
              card.id === 2
                ? // 2번째 카드: 183 -> 237 -> 122
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  useTransform(
                    scrollYProgress,
                    [
                      card.range[0],
                      (card.range[0] + card.range[1]) / 2,
                      card.range[1],
                    ],
                    [183 - card.top, 237 - card.top, 122 - card.top],
                  )
                : // eslint-disable-next-line react-hooks/rules-of-hooks
                  useTransform(scrollYProgress, card.range, [-36, 0]);

            return (
              <motion.div
                key={card.id}
                style={{
                  width: 560,
                  height: 680,
                  position: "absolute",
                  top: card.top,
                  left: card.left,
                  rotate: card.rotate,
                  x: cardX,
                  y: cardY,
                  borderRadius: 20,
                }}
                className="group pointer-events-auto bg-white overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] flex flex-col shrink-0"
              >
                {/* Card Image Area */}
                <div className="w-full h-full flex-1 bg-gray-100 relative overflow-hidden">
                  <img
                    src={card.image}
                    alt="keyword card image"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Bottom Content with Gradient Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-10 pt-20 bg-gradient-to-t from-[#4E4E4E] to-transparent text-white">
                  <h3 className="font-switzer text-[32px] font-bold uppercase leading-[1.4] mb-2">
                    {card.title}
                  </h3>
                  <p className="font-switzer text-[20px] font-bold leading-[1.4]">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
