import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../imports/svg-005lw4tp78";
import ProductIntroBg from "../assets/productIntro_bg.png";
import redPd from "../assets/red_pd.png";
import blackPd from "../assets/black_pd.png";
import clearPd from "../assets/clear_pd.png";

export default function FifthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- Phase 1: Intro & Explosion (0 - 0.5) ---

  // Background 1 (Intro Swirl)
  // Visible 0-0.4, zooms and fades
  const introBgScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const introBgOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);

  // "CREATION" Text Animation
  // Letters: C R E A T I O N
  // Sorted by X: C(pbdb1ef0), R(p3efc5c80), E(p268d5570), A(pd236400), T(p2e9d9600), I(p12d4ba00), O(p13e46300), N(p1ec72300)

  // Individual Letter Transforms (Split effect at 0.3)
  const xC = useTransform(scrollYProgress, [0.25, 0.35], [0, -1000]);
  const xR = useTransform(scrollYProgress, [0.25, 0.35], [0, -1000]);
  const xE = useTransform(scrollYProgress, [0.25, 0.35], [0, -1000]);
  const xA = useTransform(scrollYProgress, [0.25, 0.35], [0, -1000]);
  const xT = useTransform(scrollYProgress, [0.25, 0.35], [0, 1000]);
  const xI = useTransform(scrollYProgress, [0.25, 0.35], [0, 1000]);
  const xO = useTransform(scrollYProgress, [0.25, 0.35], [0, 1000]);
  const xN = useTransform(scrollYProgress, [0.25, 0.35], [0, 1000]);

  // Opacity separate for A/T vs others
  const lettersOpacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]); // C, R, E, A T, I, O, N fade out

  // Products Intro (0 - 0.4)
  // Initial: Horizontal (Red, Black, Clear) ? Browser agent: "Red, Black, Clear".
  // Wait, Frame 3 "Explosion".

  // Red Product
  // const redX = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  //   [-300, -350, -600, 0, 0, 0, -300, 0],
  // );
  // Coordinates are roughly relative to center in px.
  // 0: Center-Left (-300? No, let's use flex gap usually, but absolute makes sense for complex motion).
  // Explode (0.3): Top-Left.
  // Stack (0.4): Top.
  // Hero (0.6): Center Scale Up.
  // Final (0.8): Center Middle.

  // Let's use % or specific px.
  // Frame 1: Horizontal. C(Left), B(Center), R(Right).
  // Red: Left. Black: Center. Clear: Right. (Matches browsing: "Products... arranged horizontally")

  // const redPosition = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.6, 0.8], [
  //   { x: -350, y: 100, scale: 0.6, rotate: 0 }, // Initial Left
  //   { x: -600, y: -200, scale: 0.8, rotate: -45 }, // Explode Top-Left
  //   { x: 0, y: -150, scale: 0.5, rotate: 0 }, // Stack Top
  //   { x: 0, y: 0, scale: 1.2, rotate: 0 }, // Hero Center
  //   { x: 0, y: 0, scale: 0.4, rotate: 0 }, // Final Stack Middle
  // ] as any);

  // Need to decompose because object transform isn't direct in Motion v10 sometimes easily.
  // Let's use individual transforms for safety.

  // Red (Left -> TopLeft -> TopStack -> Hero -> MiddleStack)
  const redXVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.7, 0.8],
    [-542, -800, 0, 0, 0, 0], // Starts at -542 (Figma)
  );
  const redYVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.7, 0.8],
    [-14, -300, -120, 0, -200, 0], // Starts at -14 (Staggered)
  );
  const redScaleVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.7, 0.8],
    [0.5, 0.7, 0.4, 1.2, 0.4, 0.4],
  );
  const redRotVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.8],
    [11.41, -30, 0, 0, 0], // Starts at 11.41 deg
  );

  // Black (Center -> Left -> BottomStack -> TopStack -> TopStack)
  const blackXVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.8],
    [0, -200, 0, 0, 0],
  );
  const blackYVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.8],
    [14, 100, 80, -350, -120], // Starts at 14
  );
  const blackScaleVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.8],
    [0.6, 0.4, 0.4, 0.4, 0.4],
  );
  const blackRotVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.8],
    [-16.79, -15, 0, 0, 0], // Starts at -16.79 deg
  );

  // Clear (Right -> BottomRight -> Out -> Hero -> BottomStack)
  const clearXVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.7, 0.8],
    [542, 800, 0, 0, 0, 0], // Starts at 542 (Figma)
  );
  const clearYVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.7, 0.8],
    [-6, 400, 300, 400, 0, 120], // Starts at -6
  );
  const clearScaleVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.7, 0.8],
    [0.5, 0.7, 0, 0.4, 1.2, 0.4],
  );
  const clearRotVal = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.6, 0.8],
    [18.97, 30, 0, 0, 0], // Starts at 18.97 deg
  );
  const clearOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.55, 0.6],
    [1, 0, 0, 1],
  );

  // --- Phase 2: Seascape (0.5 - 1.0) ---
  // Frame 6 (0.75) is Sky, Frame 7 (0.90) is Water.

  // Intro BG (introBgScale, introBgOpacity defined above at line 20)
  // Let's redefine them to match timeline more precisely if needed, or keep as is.
  // IntroFadeOut: Frame 5 (0.6) -> Frame 6 (0.75) ideally.

  // Transition logic:
  // 0 - 0.6: Intro BG Visible
  // 0.6 - 0.75: Fade to Sky? Or straight to Water?
  // Frames 6 is "Sky", Frame 7 is "Water".

  // Let's assume seaOpacity handles the "Post-Creation" phase.
  const seaOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  // Final Text
  const bioOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const bioY = useTransform(scrollYProgress, [0.9, 0.95], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "800vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Intro Background */}
        <motion.div
          className="absolute inset-0 z-0 origin-center"
          style={{ scale: introBgScale, opacity: introBgOpacity }}
        ></motion.div>

        {/* Seascape Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: seaOpacity }}
        >
          <img
            src={ProductIntroBg}
            loading="lazy"
            className="w-full h-full object-cover"
            alt="Product Intro Background"
          />
        </motion.div>

        {/* --- CREATION TEXT --- */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <svg
            className="w-[80%] h-auto max-w-[1500px]"
            viewBox="0 0 1920 652"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <g id="Letters">
              {" "}
              {/* Centered alignment assumption */}
              {/* C */}
              <motion.path
                d={svgPaths.pbdb1ef0}
                fill="#E4E4E4"
                style={{ x: xC, opacity: lettersOpacity }}
              />
              {/* R */}
              <motion.path
                d={svgPaths.p3efc5c80}
                fill="#E4E4E4"
                style={{ x: xR, opacity: lettersOpacity }}
              />
              {/* E */}
              <motion.path
                d={svgPaths.p268d5570}
                fill="#E4E4E4"
                style={{ x: xE, opacity: lettersOpacity }}
              />
              {/* A */}
              <motion.path
                d={svgPaths.pd236400}
                fill="#E4E4E4"
                style={{ x: xA, opacity: lettersOpacity }}
              />
              {/* T */}
              <motion.path
                d={svgPaths.p2e9d9600}
                fill="#E4E4E4"
                style={{ x: xT, opacity: lettersOpacity }}
              />
              {/* I */}
              <motion.path
                d={svgPaths.p12d4ba00}
                fill="#E4E4E4"
                style={{ x: xI, opacity: lettersOpacity }}
              />
              {/* O */}
              <motion.path
                d={svgPaths.p13e46300}
                fill="#E4E4E4"
                style={{ x: xO, opacity: lettersOpacity }}
              />
              {/* N */}
              <motion.path
                d={svgPaths.p1ec72300}
                fill="#E4E4E4"
                style={{ x: xN, opacity: lettersOpacity }}
              />
            </g>
          </svg>
        </div>

        {/* --- PRODUCTS --- */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Black Product (Behind Red initially, then specific stacking) */}
          <motion.img
            src={blackPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: blackXVal,
              y: blackYVal,
              scale: blackScaleVal,
              rotate: blackRotVal,
            }}
          />
          {/* Clear Product */}
          <motion.img
            src={clearPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: clearXVal,
              y: clearYVal,
              scale: clearScaleVal,
              rotate: clearRotVal,
              opacity: clearOpacity,
            }}
          />
          {/* Red Product (Usually hero/front) */}
          <motion.img
            src={redPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: redXVal,
              y: redYVal,
              scale: redScaleVal,
              rotate: redRotVal,
            }}
          />
        </div>

        {/* --- FINAL TEXT CONTENT --- */}
        <motion.div
          className="absolute bottom-20 z-30 text-center max-w-4xl px-4"
          style={{ opacity: bioOpacity, y: bioY }}
        >
          <p className="font-paperlogy text-[24px] leading-[1.4] text-black/80 font-medium">
            The collection features three standout models, inspired by{" "}
            <span className="text-black/60">
              parametric design, optical art, and futuristic sculptural forms.
            </span>
          </p>
          <p className="font-paperlogy text-[24px] leading-[1.4] text-black/40 mt-2">
            Diesel's iconic 'D' monogram adds a signature touch,{" "}
            <span className="text-black/20">
              reflecting the brand's identity in every detail.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
