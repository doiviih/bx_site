import svgPaths from "@/imports/svg-bj8hp90wui";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "./ui/utils";
import closeIcon from "../../assets/close_icon.png";

type HeaderStyle = "landing" | "blur-dark" | "blur-light";

function DieselLogo({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute h-[72px] left-[calc(50%+1px)] top-[9px] translate-x-[-50%] w-[127px]">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={onClick}
        className="block size-full cursor-pointer"
      >
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
      </button>
    </div>
  );
}

function MenuIcon({
  stroke = "white",
  isOpen = false,
}: {
  stroke?: "white" | "black";
  isOpen?: boolean;
}) {
  if (isOpen) {
    return <div className="h-[6px] w-[36px]" />;
  }

  return (
    <div className="h-[6px] w-[36px]">
      <motion.svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 8"
      >
        <g>
          <motion.path
            d="M0 1H36"
            stroke={stroke}
            strokeWidth="2"
            animate={{
              y: isOpen ? 3 : 0,
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <motion.path
            d="M0 7H36"
            stroke={stroke}
            strokeWidth="2"
            animate={{
              y: isOpen ? -3 : 0,
              rotate: isOpen ? -45 : 0,
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </g>
      </motion.svg>
    </div>
  );
}

interface HeaderProps {
  styleVariant?: HeaderStyle;
}

const MENU_ITEMS = [
  { label: "DIESEL’s DNA", targetId: "third-root" },
  { label: "MELISSA’s Spirit", targetId: "fourth-root" },
  { label: "About our creation", targetId: "fifth-root" },
  { label: "Our collection", targetId: "eighth-root" },
];

function Header({ styleVariant = "landing" }: HeaderProps) {
  const isLight = styleVariant === "blur-light";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hasPointer, setHasPointer] = useState(false);

  const containerClass =
    styleVariant === "blur-light"
      ? "bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[6px]"
      : styleVariant === "blur-dark"
        ? "bg-[rgba(255, 255, 255, 0.10)] backdrop-blur-[6px]"
        : "bg-transparent";

  const textClass = isLight ? "text-[#121212]" : "text-white";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setHasPointer(false);
    }
  }, [isMenuOpen]);

  const goToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY + 45;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <section
        id="header"
        data-header-style={styleVariant}
        className={cn(
          "fixed w-full h-[90px] left-0 top-0 z-100 px-20 delay-100 animate-fade-in opacity-0 transition-colors duration-300",
          containerClass,
        )}
      >
        <DieselLogo onClick={scrollToTop} />
        <div className="flex justify-end items-center gap-8 h-full">
          <a
            href="https://kr.diesel.com/en/whats-new/"
            target="_blank"
            rel="what's new link"
            className={cn(
              "font-paperlogy font-black leading-[1.4] not-italic text-[14px] tracking-[-2%]",
              textClass,
            )}
          >
            What's New
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <MenuIcon
              stroke={isLight ? "black" : "white"}
              isOpen={isMenuOpen}
            />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="fixed inset-0 z-[120] cursor-none"
            onMouseMove={(e) => {
              setHasPointer(true);
              setCursor({ x: e.clientX, y: e.clientY });
            }}
          >
            <motion.div
              initial={{
                clipPath: "inset(100% 0 0 0)",
                y: 60,
              }}
              animate={{
                clipPath: "inset(0 0 0 0)",
                y: 0,
              }}
              exit={{
                clipPath: "inset(100% 0 0 0)",
                y: 40,
              }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[#121212]"
            >
              <div className="relative z-10 h-full w-full mx-auto px-[224px]">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="h-auto w-[34.77px] text-white/88 text-[30px] leading-none cursor-none absolute top-[40px] right-[80px]"
                >
                  <img src={closeIcon} alt="close icon image" />
                </button>

                <motion.ul
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {
                      transition: {
                        staggerChildren: 0.04,
                        staggerDirection: -1,
                      },
                    },
                    show: {
                      transition: { delayChildren: 0.1, staggerChildren: 0.06 },
                    },
                  }}
                  className="pt-[204px]"
                >
                  {MENU_ITEMS.map((item, idx) => (
                    <motion.li
                      key={item.targetId}
                      variants={{
                        hidden: { opacity: 0, y: 18 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.36, ease: "easeOut" }}
                    >
                      <button
                        type="button"
                        onClick={() => goToSection(item.targetId)}
                        className="group relative flex w-full items-end justify-between pt-[32px] cursor-none"
                      >
                        <span className="font-alumni font-extrabold text-[48px] tracking-[-2%] text-[#E4E4E4] transition-colors duration-300 group-hover:text-[#E2001A] leading-[120%]">
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        <span className="font-alumni font-black text-[128px] leading-[100%] tracking-[-2%] text-[#E4E4E4] transition-colors duration-300 group-hover:text-[#E2001A]">
                          {item.label}
                        </span>

                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.18 + idx * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#E4E4E4] transition-colors duration-300 group-hover:from-[#E2001A]/25 group-hover:bg-[#E2001A]"
                        />
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {hasPointer && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.16 }}
                className="fixed h-[80px] w-[80px] rounded-full bg-[#E85D12] pointer-events-none z-[140] -translate-x-1/2 -translate-y-1/2"
                style={{ left: cursor.x, top: cursor.y }}
              />
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
