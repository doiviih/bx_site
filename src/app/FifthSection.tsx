import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../imports/svg-005lw4tp78";
import ProductIntroBg from "../assets/productIntro_bg.mp4";
import redPd from "../assets/red_pd.png";
import blackPd from "../assets/black_pd.png";
import clearPd from "../assets/clear_pd.png";

export default function FifthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // "CREATION" Text Fade-in
  const textRevealStart = 0.05;
  const textRevealEnd = 0.2;
  const textOpacity = useTransform(
    scrollYProgress,
    [textRevealStart, textRevealEnd],
    [0, 1],
  );
  const textY = useTransform(
    scrollYProgress,
    [textRevealStart, textRevealEnd],
    [20, 0],
  );

  // Text split after products finish revealing
  const textSplitStart = 0.44;
  const textSplitEnd = 0.8;
  const xC = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, -1000]);
  const xR = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, -1000]);
  const xE = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, -1000]);
  const xA = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, -1000]);
  const xT = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, 1000]);
  const xI = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, 1000]);
  const xO = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, 1000]);
  const xN = useTransform(scrollYProgress, [textSplitStart, textSplitEnd], [0, 1000]);

  // --- Product Animation ---
  // Reveal first on the same line, then move/rotate after reveal completes.
  const animationEnd = 0.8;

  // Scale (Common)
  const productScale = useTransform(scrollYProgress, [0.4, 1], [0.8, 1.2]);

  // Move/rotate only after the final reveal completes
  const moveStart = textSplitStart;

  // Initial aligned positions (same baseline like the design)
  const redInitialX = -485;
  const blackInitialX = 0;
  const clearInitialX = 485;

  // Red (to top of vertical stack)
  const redX = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [redInitialX, 0],
  );
  const redY = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [0, -520],
  );
  const redRotate = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [10, -36.4],
  );

  // Black (to middle of vertical stack)
  const blackX = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [blackInitialX, 0],
  );
  const blackY = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [0, 0],
  );
  const blackRotate = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [-20, 32.92],
  );

  // Clear (to bottom of vertical stack)
  const clearX = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [clearInitialX, 0],
  );
  const clearY = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [0, 520],
  );
  const clearRotate = useTransform(
    scrollYProgress,
    [moveStart, animationEnd],
    [20, -33.22],
  );

  // Products reveal after text is fully visible
  const productRevealStart = 0.22;
  const productRevealDuration = 0.1;
  const productStagger = 0.06;

  const redReveal = useTransform(
    scrollYProgress,
    [productRevealStart, productRevealStart + productRevealDuration],
    [0, 1],
  );
  const blackReveal = useTransform(
    scrollYProgress,
    [
      productRevealStart + productStagger,
      productRevealStart + productStagger + productRevealDuration,
    ],
    [0, 1],
  );
  const clearReveal = useTransform(
    scrollYProgress,
    [
      productRevealStart + productStagger * 2,
      productRevealStart + productStagger * 2 + productRevealDuration,
    ],
    [0, 1],
  );

  const redRevealX = useTransform(
    scrollYProgress,
    [productRevealStart, productRevealStart + productRevealDuration],
    [-140, 0],
  );
  const blackRevealX = useTransform(
    scrollYProgress,
    [
      productRevealStart + productStagger,
      productRevealStart + productStagger + productRevealDuration,
    ],
    [-140, 0],
  );
  const clearRevealX = useTransform(
    scrollYProgress,
    [
      productRevealStart + productStagger * 2,
      productRevealStart + productStagger * 2 + productRevealDuration,
    ],
    [-140, 0],
  );

  const redXCombined = useTransform([redX, redRevealX], (values) => {
    const base = Number(values[0] ?? 0);
    const reveal = Number(values[1] ?? 0);
    return base + reveal;
  });
  const blackXCombined = useTransform([blackX, blackRevealX], (values) => {
    const base = Number(values[0] ?? 0);
    const reveal = Number(values[1] ?? 0);
    return base + reveal;
  });
  const clearXCombined = useTransform([clearX, clearRevealX], (values) => {
    const base = Number(values[0] ?? 0);
    const reveal = Number(values[1] ?? 0);
    return base + reveal;
  });

  // --- Phase 2: Seascape (0.5 - 1.0) ---
  const seaOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const seaY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-33%"]); // Scroll the background up
  // Scroll products with background (match 33% of 150vh approx 50vh)
  const productScrollY = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0vh", "-49vh"],
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
          className="absolute inset-x-0 top-0 w-full z-11 origin-top"
          style={{
            opacity: seaOpacity,
            y: seaY,
            height: "150vh", // Ensure height is enough to scroll
          }}
        >
          {/* <img
            src={ProductIntroBg}
            loading="lazy"
            className="w-full h-full object-cover"
            alt="Product Intro Background"
          /> */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={ProductIntroBg} type="video/mp4" />
          </video>
        </motion.div>

        {/* --- CREATION TEXT --- */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.svg
            className="h-auto w-full"
            viewBox="0 0 1920 652"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: textOpacity, y: textY }}
          >
            <g id="Letters">
              {/* Centered alignment assumption */}
              {/* C */}
              <motion.path
                d={svgPaths.pbdb1ef0}
                fill="#E4E4E4"
                style={{ x: xC, opacity: textOpacity }}
              />
              {/* R */}
              <motion.path
                d={svgPaths.p3efc5c80}
                fill="#E4E4E4"
                style={{ x: xR, opacity: textOpacity }}
              />
              {/* E */}
              <motion.path
                d={svgPaths.p268d5570}
                fill="#E4E4E4"
                style={{ x: xE, opacity: textOpacity }}
              />
              {/* A */}
              <motion.path
                d={svgPaths.pd236400}
                fill="#E4E4E4"
                style={{ x: xA, opacity: textOpacity }}
              />
              {/* T */}
              <motion.path
                d={svgPaths.p2e9d9600}
                fill="#E4E4E4"
                style={{ x: xT, opacity: textOpacity }}
              />
              {/* I */}
              <motion.path
                d={svgPaths.p12d4ba00}
                fill="#E4E4E4"
                style={{ x: xI, opacity: textOpacity }}
              />
              {/* O */}
              <motion.path
                d={svgPaths.p13e46300}
                fill="#E4E4E4"
                style={{ x: xO, opacity: textOpacity }}
              />
              {/* N */}
              <motion.path
                d={svgPaths.p1ec72300}
                fill="#E4E4E4"
                style={{ x: xN, opacity: textOpacity }}
              />
            </g>
          </motion.svg>
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
              x: redXCombined,
              y: redY,
              scale: productScale,
              rotate: redRotate,
              opacity: redReveal,
            }}
          />
          {/* Black Product (Center) */}
          <motion.img
            src={blackPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: blackXCombined,
              y: blackY,
              scale: productScale,
              rotate: blackRotate,
              opacity: blackReveal,
            }}
          />
          {/* Clear Product (Right -> Bottom) */}
          <motion.img
            src={clearPd}
            className="absolute w-[500px] h-auto drop-shadow-2xl origin-center"
            style={{
              x: clearXCombined,
              y: clearY,
              scale: productScale,
              rotate: clearRotate,
              opacity: clearReveal,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
