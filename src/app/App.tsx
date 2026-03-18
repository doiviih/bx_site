import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import LandingPage from "./LandingPage";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EighthSection from "./EighthSection";
import NineSection from "./NineSection";
import TenthSection from "./TenthSection";
import EleventhSection from "./EleventhSection";
import TwelfthSection from "./TwelfthSection";
import ThirteenthSection from "./ThirteenthSection";

export default function App() {
  const sixthRef = useRef<HTMLDivElement>(null);
  const sixthStageRef = useRef<HTMLDivElement>(null);
  const [headerStyle, setHeaderStyle] = useState<
    "landing" | "blur-dark" | "blur-light"
  >("landing");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateHeaderStyle = () => {
      ticking = false;
      const probeY = 140;

      // SixthSection staged area:
      // before Seventh appears -> dark, Seven/Eight phase -> dark, Nine phase -> light.
      if (sixthStageRef.current) {
        const sixthRect = sixthStageRef.current.getBoundingClientRect();
        const inSixthStage =
          sixthRect.top <= probeY && sixthRect.bottom > probeY;

        if (inSixthStage) {
          const progress = Math.max(
            0,
            Math.min(
              1,
              (probeY - sixthRect.top) / Math.max(sixthRect.height, 1),
            ),
          );
          if (progress < 0.3) {
            setHeaderStyle("blur-light");
          } else if (progress < 0.9) {
            setHeaderStyle("blur-dark");
          } else {
            setHeaderStyle("blur-dark");
          }
          return;
        }
      }

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-header-style]"),
      );

      if (!sections.length) return;
      let activeSection = sections[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          activeSection = section;
          break;
        }
        if (rect.top <= probeY) {
          activeSection = section;
        }
      }

      const style = activeSection.dataset.headerStyle as
        | "landing"
        | "blur-dark"
        | "blur-light"
        | undefined;

      setHeaderStyle(style ?? "landing");
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeaderStyle);
    };

    updateHeaderStyle();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Header - Always Fixed on Top */}
      <Header styleVariant={headerStyle} />
      <div id="landing-root" data-header-style="landing">
        <LandingPage />
      </div>
      <div id="second-root" data-header-style="blur-dark">
        <SecondSection />
      </div>
      <div id="third-root" data-header-style="blur-dark">
        <ThirdSection />
      </div>
      <div id="fourth-root" data-header-style="blur-dark">
        <FourthSection />
      </div>
      <div id="fifth-root" data-header-style="blur-light">
        <FifthSection />
      </div>

      <div
        ref={sixthStageRef}
        id="sixth-root"
        className="relative"
        data-header-style="blur-light"
      >
        <SixthSection ref={sixthRef} />
        <div className="absolute inset-0 pointer-events-none">
          <SeventhSection scrollContainerRef={sixthRef} />
        </div>
        <div className="absolute inset-0 pointer-events-auto">
          <EighthSection
            sectionId="eighth-root"
            scrollContainerRef={sixthRef}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <NineSection scrollContainerRef={sixthRef} />
        </div>
      </div>
      <div id="tenth-root" data-header-style="blur-dark">
        <TenthSection />
      </div>
      <div id="eleventh-root" data-header-style="blur-light">
        <EleventhSection />
      </div>
      <div id="twelfth-root" data-header-style="blur-light">
        <TwelfthSection />
      </div>
      <div id="thirteenth-root" data-header-style="blur-dark">
        <ThirteenthSection />
      </div>
    </div>
  );
}
