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

  // "CREATION" Text Animation
  // Letters: C R E A T I O N
  // Sorted by X: C(pbdb1ef0), R(p3efc5c80), E(p268d5570), A(pd236400), T(p2e9d9600), I(p12d4ba00), O(p13e46300), N(p1ec72300)

  // Individual Letter Transforms (Split effect at 0.3)
  const xC = useTransform(scrollYProgress, [0.1, 0.8], [0, -1000]);
  const xR = useTransform(scrollYProgress, [0.1, 0.8], [0, -1000]);
  const xE = useTransform(scrollYProgress, [0.1, 0.8], [0, -1000]);
  const xA = useTransform(scrollYProgress, [0.1, 0.8], [0, -1000]);
  const xT = useTransform(scrollYProgress, [0.1, 0.8], [0, 1000]);
  const xI = useTransform(scrollYProgress, [0.1, 0.8], [0, 1000]);
  const xO = useTransform(scrollYProgress, [0.1, 0.8], [0, 1000]);
  const xN = useTransform(scrollYProgress, [0.1, 0.8], [0, 1000]);

  // Opacity separate for A/T vs others
  const lettersOpacity = useTransform(scrollYProgress, [0.15, 0.9], [1, 0]); // C, R, E, A T, I, O, N fade out

  // --- Product Animation (Horizontal to Vertical Clockwise + Scale) ---
  // Animation active range: 0.2 to 0.8
  const animationStart = 0.2;
  const animationEnd = 0.8;

  // Scale (Common)
  const productScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1.2]);

  // Red (Left -> Top) - Clockwise rotation in position
  const redX = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [-600, 0],
  );
  const redY = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [0, -400],
  );
  const redRotate = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [10, -40],
  );

  // Black (Center -> Center)
  const blackX = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [0, 0],
  );
  const blackY = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [0, 100],
  );
  const blackRotate = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [-20, 45],
  );

  // Clear (Right -> Bottom) - Clockwise rotation in position
  const clearX = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [600, 0],
  );
  const clearY = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [0, 560],
  );
  const clearRotate = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [20, -35],
  );

  // --- Phase 2: Seascape (0.5 - 1.0) ---
  const seaOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const seaY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-33%"]); // Scroll the background up
  // Scroll products with background (match 33% of 150vh approx 50vh)
  const productScrollY = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0vh", "-35vh"],
  );

  return (
    <div
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Seascape Background */}
        <motion.div
          className="absolute inset-x-0 top-0 w-full z-0 origin-top"
          style={{
            opacity: seaOpacity,
            y: seaY,
            height: "150vh", // Ensure height is enough to scroll
          }}
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
            className="h-auto w-full"
            viewBox="0 0 1920 652"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <g id="Letters">
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
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ y: productScrollY }}
        >
          {/* Red Product (Left -> Top) */}
          <motion.img
            src={redPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: redX,
              y: redY,
              scale: productScale,
              rotate: redRotate,
            }}
          />
          {/* Black Product (Center) */}
          <motion.img
            src={blackPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: blackX,
              y: blackY,
              scale: productScale,
              rotate: blackRotate,
            }}
          />
          {/* Clear Product (Right -> Bottom) */}
          <motion.img
            src={clearPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: clearX,
              y: clearY,
              scale: productScale,
              rotate: clearRotate,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
