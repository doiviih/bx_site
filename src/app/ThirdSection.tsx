import dieselLogo from "../assets/diesel_logo.png";
import img1 from "../assets/diesel_img.png";
import img2 from "../assets/diesel_img2.png";

export default function ThirdSection() {
  return (
    <section className="grid grid-cols-1 w-full z-30">
      {/* Sticky Background */}
      <div className="sticky top-0 h-screen col-start-1 row-start-1 self-start bg-[url('../assets/diesel_bg.png')] bg-cover bg-center z-10 overflow-hidden">
        <div className="pt-[90px] pl-[80px]">
          <img
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

      {/* Scroll Content */}
      <div className="w-full z-20 pointer-events-none pb-[152px]">
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
