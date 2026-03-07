import sculpture_vd from "../assets/sample5.mp4";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import tiktok from "../assets/tictok.svg";
import X from "../assets/X.svg";

export default function ThirteenthSection() {
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

      {/* Foreground Content Layer */}
      <div className="relative z-20 h-full w-full flex flex-col items-center">
        <p className="mt-[327px] text-[#E2001A] text-[48px] leading-[1.2] tracking-[-1.92px] font-extrabold font-['Switzer_Variable',_sans-serif]">
          Bold Steps Into the Future
        </p>

        <h2 className="text-[#E2001A] text-[220px] leading-[100%] tracking-[-8.8px] font-extrabold font-['Switzer_Variable',_sans-serif] whitespace-nowrap">
          DIESEL × MELISSA
        </h2>

        <div className="mt-[84px] flex items-center gap-[20px]">
          <button className="h-[60px] w-[224px] rounded-[32px] border border-[#121212] bg-[rgba(228,228,228,0.2)] backdrop-blur-[6px] text-[#121212] text-[16px] font-bold tracking-[-0.64px] font-['Switzer_Variable',_sans-serif]">
            Explore the Collection
          </button>
          <button className="h-[60px] w-[224px] rounded-[32px] border border-[#121212] bg-[rgba(228,228,228,0.2)] backdrop-blur-[6px] text-[#121212] text-[16px] font-bold tracking-[-0.64px] font-['Switzer_Variable',_sans-serif]">
            About Our Flagship
          </button>
        </div>

        <div className="mt-[138px] flex items-center gap-[32px] text-[#121212]">
          <a href="https://www.instagram.com/diesel/">
            <img src={instagram} alt="instagram icon" />
          </a>
          <a href="https://www.facebook.com/Diesel/">
            <img src={facebook} alt="facebook icon"></img>
          </a>
          <a href="https://www.youtube.com/@diesel">
            <img src={youtube} alt="youtube icon"></img>
          </a>
          <a href="https://www.tiktok.com/@diesel">
            <img src={tiktok} alt="tiktok icon"></img>
          </a>
          <a href="https://x.com/DIESEL">
            <img src={X} alt="X icon"></img>
          </a>
        </div>

        <p className="mt-[20px] text-[#121212] text-[14px] font-bold tracking-[-0.56px] font-['Switzer_Variable',_sans-serif]">
          Copyright © 2025 Diesel SpA - All rights reserved
        </p>
      </div>
    </section>
  );
}
