import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import txtbg from "../assets/dieselxmelissa_txt.png";
import nineSectionData from "../data/nineSectionData.json";
import arrow from "../assets/arrow.png";

/* =========================타입 정의========================= */

interface Variant {
  id: string;
  name: string;
  price: string;
  color: string;
  viewColors?: Partial<Record<ViewType, string>>;
  views: {
    default: string[];
    transparent?: string[];
    black?: string[];
    lightBlue?: string[];
    pink?: string[];
  };
}

type ViewType = keyof Variant["views"];
type CarouselVariant = Variant & { position: number };

interface NineSectionProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
}

/* =========================JSON 타입 고정========================= */

const data = nineSectionData as { variants: Variant[] };
const colorVariants = data.variants;

/* =========================컴포넌트========================= */

export default function NineSection({ scrollContainerRef }: NineSectionProps) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [activeViewType, setActiveViewType] = useState<ViewType>("default");
  const thumbnailTrackRef = useRef<HTMLDivElement>(null);
  const thumbnailButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbnailLoopRef = useRef({
    segmentWidth: 0,
    leftThreshold: 0,
    rightThreshold: 0,
  });

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0.8, 0.85], ["100vh", "0vh"]);

  const currentColor = colorVariants[activeColorIndex];

  /* =========================컬러 이동========================= */

  const nextColor = () => {
    setActiveColorIndex((prev) => (prev + 1) % colorVariants.length);
    setActiveViewIndex(0);
    setActiveViewType("default");
  };

  const prevColor = () => {
    setActiveColorIndex(
      (prev) => (prev - 1 + colorVariants.length) % colorVariants.length,
    );
    setActiveViewIndex(0);
    setActiveViewType("default");
  };

  /* =========================캐러셀 계산========================= */

  const getVisibleColors = (): CarouselVariant[] => {
    const prev =
      (activeColorIndex - 1 + colorVariants.length) % colorVariants.length;
    const next = (activeColorIndex + 1) % colorVariants.length;

    return [
      { ...colorVariants[prev], position: -1 },
      { ...colorVariants[activeColorIndex], position: 0 },
      { ...colorVariants[next], position: 1 },
    ];
  };

  const visibleViews =
    currentColor.views[activeViewType] ?? currentColor.views.default;
  const loopedViews = useMemo(() => {
    if (visibleViews.length === 0) return [];
    return [...visibleViews, ...visibleViews, ...visibleViews];
  }, [visibleViews]);
  const loopedCount = visibleViews.length;
  const safeViewIndex = Math.min(
    activeViewIndex,
    Math.max(visibleViews.length - 1, 0),
  );

  useEffect(() => {
    if (activeViewIndex !== safeViewIndex) {
      setActiveViewIndex(safeViewIndex);
    }
  }, [activeViewIndex, safeViewIndex]);

  useEffect(() => {
    const track = thumbnailTrackRef.current;
    if (!track || loopedCount === 0) return;

    const activeLoopIndex = safeViewIndex + loopedCount;
    const activeButton = thumbnailButtonRefs.current[activeLoopIndex];
    if (!activeButton) return;

    // Keep the active thumbnail centered within the middle loop segment.
    const targetLeft =
      activeButton.offsetLeft -
      track.clientWidth / 2 +
      activeButton.clientWidth / 2;
    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    const clampedLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    track.scrollTo({
      left: clampedLeft,
      behavior: "smooth",
    });
  }, [safeViewIndex, activeColorIndex, activeViewType, loopedCount]);

  useEffect(() => {
    const track = thumbnailTrackRef.current;
    if (!track || loopedCount <= 1) return;

    const firstButton = thumbnailButtonRefs.current[0];
    const secondButton = thumbnailButtonRefs.current[1];
    if (!firstButton || !secondButton) return;

    const step = secondButton.offsetLeft - firstButton.offsetLeft;
    if (step <= 0) return;

    const segmentWidth = step * loopedCount;
    thumbnailLoopRef.current = {
      segmentWidth,
      leftThreshold: segmentWidth * 0.5,
      rightThreshold: segmentWidth * 1.5,
    };

    // Start in the middle loop segment.
    track.scrollLeft = segmentWidth;
  }, [loopedCount, activeColorIndex, activeViewType]);

  const handleThumbnailLoopWrap = () => {
    const track = thumbnailTrackRef.current;
    if (!track) return;

    const { segmentWidth, leftThreshold, rightThreshold } =
      thumbnailLoopRef.current;
    if (segmentWidth <= 0) return;

    if (track.scrollLeft <= leftThreshold) {
      track.scrollLeft += segmentWidth;
    } else if (track.scrollLeft >= rightThreshold) {
      track.scrollLeft -= segmentWidth;
    }
  };

  return (
    <motion.section
      style={{ y }}
      className="sticky top-0 h-screen w-full bg-white z-50 flex flex-col items-center justify-center overflow-hidden font-['Switzer_Variable',_sans-serif]"
    >
      {/* Background Text (Infinite Loop) */}
      <div className="absolute h-[360px] top-[146px] left-0 w-full overflow-hidden pointer-events-none opacity-50">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <img src={txtbg} alt="txtbg" className="h-[360px] max-w-none" />
          <img src={txtbg} alt="txtbg" className="h-[360px] max-w-none" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] flex flex-col items-center">
        {/* ================= Carousel ================= */}
        <div className="relative w-full h-[470px] flex justify-center items-center overflow-visible">
          {getVisibleColors().map((variant) => {
            const imageSource =
              variant.position === 0
                ? (variant.views[activeViewType]?.[safeViewIndex] ??
                  variant.views.default[safeViewIndex])
                : variant.views.default[0];

            return (
              <motion.div
                key={`slot-${variant.position}`}
                animate={{
                  x: variant.position * 822,
                  opacity: variant.position === 0 ? 1 : 0.92,
                  scale: variant.position === 0 ? 1 : 0.96,
                }}
                transition={{
                  duration: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ zIndex: variant.position === 0 ? 30 : 20 }}
                className="absolute w-[800px] h-[470px] flex items-center justify-center"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={`${variant.id}-${imageSource}`}
                    src={`/${imageSource}`}
                    alt={variant.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="max-w-full object-contain pointer-events-none absolute inset-0 m-auto"
                  />
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ================= Controls ================= */}
        <div className="mt-[64px] flex flex-col items-center gap-[73px] w-full">
          <div className="flex flex-col items-center gap-8">
            {/* View Thumbnails (Blurred Edge Carousel) */}
            <div className="relative w-[318px] h-[52px] flex items-center overflow-hidden">
              {/* Blur Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-[53px] bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-[53px] bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

              <div
                ref={thumbnailTrackRef}
                className="flex gap-[20px] px-[112px] w-full items-center overflow-x-auto no-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {loopedViews.map((view, i) => (
                  <button
                    key={i}
                    ref={(el) => {
                      thumbnailButtonRefs.current[i] = el;
                    }}
                    onClick={() => {
                      if (loopedCount === 0) return;
                      setActiveViewIndex(i % loopedCount);
                      handleThumbnailLoopWrap();
                    }}
                    className={`flex-shrink-0 w-[93px] h-[48px] overflow-hidden transition-all pointer-events-auto flex items-center justify-center border ${
                      safeViewIndex === i % Math.max(loopedCount, 1)
                        ? "border-[#454C55]"
                        : "border-[#E4E4E4]"
                    }`}
                  >
                    <img
                      src={`/${view}`}
                      alt={`view-${i}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* View Type Switch */}
            <div className="flex gap-5">
              {(Object.keys(currentColor.views) as ViewType[]).map(
                (viewType) => (
                  <button
                    key={viewType}
                    onClick={() => {
                      setActiveViewType(viewType);
                      setActiveViewIndex(0);
                    }}
                    className={`w-4 h-4 rounded-full transition-all pointer-events-auto`}
                    style={{
                      backgroundColor:
                        currentColor.viewColors?.[viewType] ??
                        currentColor.color,
                    }}
                    title={viewType}
                  />
                ),
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-[48px]">
            <button
              onClick={prevColor}
              className="w-20 h-20 rounded-full bg-white border border-black flex items-center justify-center hover:bg-[#E4E4E4] transition-colors pointer-events-auto"
            >
              <img src={arrow} alt="carousel arrow" className="w-6 h-6" />
            </button>

            <div className="text-center flex flex-col gap-2 min-w-[500px]">
              <h2 className="text-[32px] font-extrabold text-[#121212] tracking-tighter uppercase leading-[1.4]">
                {currentColor.name}
              </h2>
              <p className="text-[20px] font-bold text-[#121212] tracking-tight">
                {currentColor.price}
              </p>
            </div>

            <button
              onClick={nextColor}
              className="w-20 h-20 rounded-full bg-white border border-black flex items-center justify-center hover:bg-[#E4E4E4] transition-colors pointer-events-auto"
            >
              <img
                src={arrow}
                alt="carousel arrow"
                className="w-6 h-6 rotate-180"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
