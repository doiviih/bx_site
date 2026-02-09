import svgPaths from "@/imports/svg-bj8hp90wui";

function DieselLogo() {
  return (
    <div className="absolute h-[72px] left-[calc(50%+1px)] top-[9px] translate-x-[-50%] w-[127px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 127 72"
      >
        <g clipPath="url(#clip0_1_56)">
          <path
            clipRule="evenodd"
            d="M127 72V0H0V72H127Z"
            fill="#E2001A"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1d9c2e80}
            fill="white"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_56">
            <rect fill="white" height="72" width="127" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="h-[6px] w-[36px]">
      <div className="">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 8"
        >
          <g>
            <path d="M0 1H36" stroke="white" strokeWidth="2" />
            <path d="M0 7H36" stroke="white" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
function Header() {
  return (
    <section
      id="header"
      className="fixed h-[90px] left-0 top-0 w-full z-100 px-20 delay-100 animate-fade-in-up opacity-0"
    >
      <DieselLogo />
      <div className="flex justify-end items-center gap-8 h-full">
        <p className="font-paperlogy leading-[1.4] not-italic text-[14px] text-white tracking-[-0.42px]">
          What's New
        </p>
        <MenuIcon />
      </div>
    </section>
  );
}

export default Header;
