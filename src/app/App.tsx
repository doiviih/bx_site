import { useRef } from "react";
import Header from "./components/Header";
import LandingPage from "./LandingPage";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EighthSection from "./EighthSection";

export default function App() {
  const sixthRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Header - Always Fixed on Top */}
      <Header />
      <LandingPage />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />

      <div className="relative">
        <SixthSection ref={sixthRef} />
        <div className="absolute inset-0 pointer-events-none">
          <SeventhSection scrollContainerRef={sixthRef} />
        </div>
      </div>

      <EighthSection />
    </>
  );
}
