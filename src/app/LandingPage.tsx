import svgPaths from "@/imports/svg-bj8hp90wui";
import mainImage from "../assets/main_image.png";
import dieselVideo from "../assets/diesel.mp4";
import mellisaVideo from "../assets/melissa.mp4";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 h-screen w-full overflow-hidden">
        <div className="flex h-full w-full">
          {/* Left Video - Diesel */}
          <div className="pointer-events-none w-1/2">
            <video
              className="h-full max-w-none w-full delay-0 animate-fade-in opacity-0 object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={dieselVideo} type="video/mp4" />
            </video>
          </div>
          {/* Right Video - Melissa */}
          <div className="pointer-events-none w-1/2">
            <video
              className="h-full w-full delay-150 animate-fade-in opacity-0 object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={mellisaVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Centered container for logos and images - max width 1920px */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full max-w-[1920px]">
          {/* Diesel Logo - Left */}
          <div className="absolute inset-[12.04%_66.04%_66.57%_4.27%] delay-300 animate-fade-in-down opacity-0">
            <div className="absolute inset-0">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 570 231"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2dfa1640}
                  fill="#D9E8E6"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Melissa Logo - Right */}
          <div className="absolute inset-[70.56%_4.22%_3.7%_58.23%] delay-300 animate-fade-in-up opacity-0">
            <div className="absolute inset-0">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 721 278"
              >
                <path d={svgPaths.p3df35480} fill="#D9E8E6" />
              </svg>
            </div>
          </div>

          {/* Center Red Slash with Shadow */}
          <div className="absolute h-[723px] left-[calc(41.67%+12px)] top-[calc(50%-0.5px)] translate-y-[-50%] w-[295px] delay-500 animate-fade-in opacity-0">
            <div className="absolute inset-[0_-1.36%_-1.11%_-1.36%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 303 731"
              >
                <g filter="url(#filter0_d_1_66)">
                  <path d={svgPaths.p12f88470} fill="#E2001A" />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="731"
                    id="filter0_d_1_66"
                    width="303"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_1_66"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_66"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Center Poster Image */}
          <div className="absolute h-[414px] left-1/2 -translate-x-1/2 top-1/2 translate-y-[-50%] w-[276px]">
            <img
              alt="Diesel x Melissa collaboration poster"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full delay-700 animate-fade-in opacity-0"
              src={mainImage}
            />
          </div>

          <div className="absolute top-[140px] right-[80px] w-[180px] h-[180px] delay-700 animate-fade-in opacity-0">
            {/* Circular Text with Arrow - Top Right */}
            <div className="animate-spin-slow origin-center">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 180 180"
              >
                <g>
                  <path d={svgPaths.pee3b400} fill="white" />
                  <path d={svgPaths.p27bba580} fill="white" />
                  <path d={svgPaths.p1ba7a400} fill="white" />
                  <path d={svgPaths.p2fa54500} fill="white" />
                  <path d={svgPaths.p18012700} fill="white" />
                  <path d={svgPaths.p130f5580} fill="white" />
                  <path d={svgPaths.p3a85eab0} fill="white" />
                  <path d={svgPaths.pcb1300} fill="white" />
                  <path d={svgPaths.p38f41e50} fill="white" />
                  <path d={svgPaths.p36be7af0} fill="white" />
                  <path d={svgPaths.pa2638c0} fill="white" />
                  <path d={svgPaths.p290b100} fill="white" />
                  <path d={svgPaths.p1fdcd5f0} fill="white" />
                  <path d={svgPaths.p1abb4af0} fill="white" />
                  <path d={svgPaths.pdc7ca00} fill="white" />
                  <path d={svgPaths.p3d4a00} fill="white" />
                  <path d={svgPaths.p3c581870} fill="white" />
                  <path d={svgPaths.p3193d000} fill="white" />
                  <path d={svgPaths.paf3d700} fill="white" />
                  <path d={svgPaths.p13a39f00} fill="white" />
                  <path d={svgPaths.p220983c0} fill="white" />
                  <path d={svgPaths.p12a22e80} fill="white" />
                  <path d={svgPaths.p6debb80} fill="white" />
                  <path d={svgPaths.p387f900} fill="white" />
                  <path d={svgPaths.p387fd700} fill="white" />
                  <path d={svgPaths.p2f65dd00} fill="white" />
                  <path d={svgPaths.p3dd040f0} fill="white" />
                  <path d={svgPaths.p47cd780} fill="white" />
                  <path d={svgPaths.p2f7e7880} fill="white" />
                  <path d={svgPaths.p35f8f000} fill="white" />
                  <path d={svgPaths.p2dcfaa30} fill="white" />
                  <path d={svgPaths.p31361640} fill="white" />
                  <path d={svgPaths.p3e868b80} fill="white" />
                  <path d={svgPaths.pb6dbc00} fill="white" />
                  <path d={svgPaths.p3331b680} fill="white" />
                  <path d={svgPaths.p25e9c780} fill="white" />
                  <path d={svgPaths.p151107d0} fill="white" />
                  <path d={svgPaths.p288cab00} fill="white" />
                  <path d={svgPaths.pb0f8f80} fill="white" />
                  <path d={svgPaths.p1e29e300} fill="white" />
                  <path d={svgPaths.p3c52c6f0} fill="white" />
                  <path d={svgPaths.p1433b800} fill="white" />
                  <path d={svgPaths.p2a8d8c00} fill="white" />
                  <path d={svgPaths.p35ecd700} fill="white" />
                  <path d={svgPaths.pabe28f2} fill="white" />
                </g>
              </svg>
            </div>

            {/* Arrow in Center of Circular Text */}
            <div className="w-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex-none rotate-[315deg]">
                <div className="h-[28.474px] relative w-[30.934px]">
                  <div className="absolute inset-0">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 30.9336 28.4745"
                    >
                      <path d={svgPaths.p1ff09300} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
