import { useEffect, useState } from "react";
import sculpture_vd from "../assets/sample5.mp4";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import tiktok from "../assets/tictok.svg";
import X from "../assets/X.svg";

export default function ThirteenthSection() {
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
    <section className="relative h-screen w-full overflow-hidden bg-[#121212] z-[75]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={sculpture_vd} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />

      {/* Foreground Content Layer (1920x1080 layout scale) */}
      <div className="absolute inset-0 z-20">
        <div
          className="absolute left-1/2 top-1/2 w-[1920px] h-[1080px]"
          style={{
            transform: `translate(-50%, -50%) scale(${layoutScale})`,
            transformOrigin: "center center",
          }}
        >
          <div className="relative h-full w-full flex flex-col items-center pt-[327px]">
            <p className="text-[#E2001A] text-[48px] leading-[1.2] tracking-[-1.92px] font-extrabold font-['Switzer_Variable',_sans-serif]">
              Bold Steps Into the Future
            </p>

            <h2 className="text-[#E2001A] text-[220px] leading-[100%] tracking-[-8.8px] font-extrabold font-['Switzer_Variable',_sans-serif] whitespace-nowrap">
              DIESEL × MELISSA
            </h2>

            <div className="mt-[84px] flex items-center gap-[20px]">
              <button className="h-[60px] w-[224px] rounded-[32px] border border-[#121212] bg-[rgba(228,228,228,0.2)] backdrop-blur-[6px] text-[#121212] text-[16px] font-bold tracking-[-0.64px] font-['Switzer_Variable',_sans-serif] hover:text-[#E2001A] hover:border-[#E2001A]">
                <a
                  href="https://kr.diesel.com/en/unisex/melissa/"
                  target="_blank"
                  rel="collection link"
                  className="inline-block w-full h-full leading-[60px]"
                >
                  Explore the Collection
                </a>
              </button>
              <button className="h-[60px] w-[224px] rounded-[32px] border border-[#121212] bg-[rgba(228,228,228,0.2)] backdrop-blur-[6px] text-[#121212] text-[16px] font-bold tracking-[-0.64px] font-['Switzer_Variable',_sans-serif] leading-[60px] hover:text-[#E2001A] hover:border-[#E2001A]">
                About Our Flagship
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[112px] left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-[32px] text-[#121212]">
            <a
              href="https://www.instagram.com/diesel/"
              target="_blank"
              rel="instagram link"
            >
              <img src={instagram} alt="instagram icon" />
            </a>
            <a
              href="https://www.facebook.com/Diesel/"
              target="_blank"
              rel="facebook link"
            >
              <img src={facebook} alt="facebook icon" />
            </a>
            <a
              href="https://www.youtube.com/@diesel"
              target="_blank"
              rel="youtube link"
            >
              <img src={youtube} alt="youtube icon" />
            </a>
            <a
              href="https://www.tiktok.com/@diesel"
              target="_blank"
              rel="tiktok link"
            >
              <img src={tiktok} alt="tiktok icon"></img>
            </a>
            <a href="https://x.com/DIESEL" target="_blank" rel="X link">
              <img src={X} alt="X icon" />
            </a>
          </div>

          <p className="mt-[20px] text-[#121212] text-[14px] font-bold tracking-[-0.56px] font-['Switzer_Variable',_sans-serif]">
            Copyright © 2025 Diesel SpA - All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
