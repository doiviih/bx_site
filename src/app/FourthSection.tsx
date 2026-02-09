import melissaLogo from "../assets/melissa_logo.png";
import img1 from "../assets/melissa_img.png";
import img2 from "../assets/melissa_img2.png";
import img3 from "../assets/melissa_img3.png";

export default function FourthSection() {
  return (
    <section className="grid grid-cols-1 w-full z-30">
      {/* Sticky Background */}
      <div className="sticky top-0 h-screen col-start-1 row-start-1 self-start bg-[url('../assets/melissa_bg.png')] bg-cover bg-center z-10 overflow-hidden">
        <div className="pt-[90px] pl-[80px]">
          <img
            className="w-[164px] h-[60px] mb-8"
            src={melissaLogo}
            alt="Melissa Logo"
          />
          <p className="text-[#202020] text-[20px] font-alumni font-extrabold leading-[120%]">
            Playful and fluid, Melissa embraces creativity with every step.
            <br />
            Sustainable at heart, it transforms flexibility into timeless style.
          </p>
        </div>
      </div>

      {/* Scroll Content */}
      <div className="w-full z-20 pointer-events-none pb-[130px]">
        {/* Boldness Section */}
        <div className="max-w-[1920px] mx-auto px-[80px] pt-[260px] pointer-events-auto ">
          <span className="block h-[363px] w-[439px] ml-auto mr-[445px]">
            <img
              alt="melissa image"
              className="size-full object-cover"
              src={img1}
            />
          </span>
          <div className="text-left pl-[462px] pt-8">
            <p className="font-switzer font-extrabold text-[#5f003e] text-[100px] tracking-[-0.04em] leading-[100%]">
              Flexible
            </p>
            <p className="pt-6 font-sentient font-bold text-[#121212] text-[32px] tracking-[-0.04em]">
              Flexibility in Melissa means embracing creativity without limits,
              <br />
              adapting effortlessly to every style and movement
              <br />
              while keeping comfort and individuality at the core.
            </p>
          </div>

          <div className="flex justify-between gap-[150px] mt-[286px] ml-[320px]">
            <span className="block h-[494px] w-[395px]">
              <img
                alt="melissa image2"
                className="size-full object-cover"
                src={img2}
              />
            </span>
            <div className="text-right pt-[286px]">
              <p className=" font-switzer font-extrabold text-[#5f003e] text-[100px] tracking-[-0.04em] leading-[100%]">
                Sustainability
              </p>
              <p className="pt-6 font-sentient font-bold text-[#121212] text-[32px] tracking-[-0.04em]">
                Sustainability means creating with respect—for the planet,
                <br />
                for communities, and for the future — by making choices
                <br />
                that minimize impact and maximize positive change.
              </p>
            </div>
          </div>

          <span className="block h-[321px] w-[642px] mt-[236px] ml-[897px]">
            <img
              alt="melissa image3"
              className="size-full object-cover"
              src={img3}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
