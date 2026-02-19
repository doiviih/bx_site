import Header from "./components/Header";
import LandingPage from "./LandingPage";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";

export default function App() {
  return (
    <>
      {/* Header - Always Fixed on Top */}
      <Header />
      <LandingPage />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </>
  );
}
