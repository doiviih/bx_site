import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import dieselLogo from "../assets/diesel_logo.png";
import img1 from "../assets/diesel_img.png";
import img2 from "../assets/diesel_img2.png";

export default function ThirdSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Brightness effect: Logo darkens as user scrolls down
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.4]); // 100% to 20% brightness

  return (
    <section ref={containerRef} className="relative w-full">
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10 bg-black">
        <motion.div
          style={{
            filter: useTransform(brightness, (value) => `brightness(${value})`),
          }}
          className="absolute top-[-10%] left-0 w-full h-[120%] bg-[url('../assets/diesel_bg.png')] bg-cover bg-center"
        />

        {/* Sticky Content (Logo + Intro Text) */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="pt-[90px] pl-[80px]">
            <motion.img
              className="w-[164px] h-[60px] mb-8"
              src={dieselLogo}
              alt="Diesel Logo"
            />
            <p className="text-white text-[20px] font-alumni font-extrabold leading-[120%]">
              Fearless and bold, Diesel breaks conventions with unapologetic
              energy.
              <br />
              Its rebellious edge turns raw attitude into iconic design.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Content */}
      <div className="relative z-20 mt-[-100vh] pb-[152px] pointer-events-none">
        {/* Boldness Section */}
        <div className="max-w-[1920px] mx-auto px-[80px] pt-[100vh] pointer-events-auto ">
          <div className="flex gap-[62px] w-full justify-end pr-[297px]">
            <div className="text-right pt-[92px]">
              <p className="font-switzer font-extrabold text-[#e2001a] text-[100px] tracking-[-0.04em] leading-[100%]">
                Boldness
              </p>
              <p className="pt-6 font-sentient font-bold text-[#e4e4e4] text-[32px] text-right tracking-[-0.04em]">
                Boldness in Diesel means pushing boundaries
                <br />
                with fearless creativity, breaking conventions to create
                <br />
                statements that are as daring as they are iconic.
              </p>
            </div>
            <span className="block h-[494px] w-[395px]">
              <img
                alt="boldness image"
                className="size-full object-cover"
                src={img1}
              />
            </span>
          </div>

          {/* Innovative Design */}
          <div className="text-right pt-[148px] pr-[148px]">
            <p className=" font-switzer font-extrabold text-[#e2001a] text-[100px] tracking-[-0.04em] leading-[100%]">
              Innovative Design
            </p>
            <p className="pt-6 font-sentient font-bold text-[#e4e4e4] text-[32px] tracking-[-0.04em]">
              Innovative Design is about reimagining form and function <br />
              to create experiences that feel both unexpected and timeless.
            </p>
          </div>

          {/* Intensity */}
          <div className="pt-[156px] flex pl-[297px] gap-[44px]">
            <span className="block h-[274px] w-[275px]">
              <img
                alt="innovative design image"
                className="size-full object-cover"
                src={img2}
              />
            </span>
            <div>
              <p className="font-switzer font-extrabold text-[#e2001a] text-[100px] tracking-[-0.04em] leading-[100%] pt-[165px]">
                Intensity
              </p>
              <p className="pt-6 font-sentient font-bold text-[#e4e4e4] text-[32px] tracking-[-0.04em]">
                Intensity in Diesel is the relentless energy and passion
                <br />
                that drives every design, igniting bold expressions and
                <br />
                unforgettable statements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
