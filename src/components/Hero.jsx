import { useEffect, useRef, useState } from "react";
import BG from "../assets/FIRSTBG.jpg";
import text from "../assets/TEXT-MAIN.png";

export default function Hero() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
      setOffsetY(window.pageYOffset);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-neutral-800 hero-back">
      <section
        id="hero"
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out h-screen pt-24 px-4 sm:px-6 lg:px-8 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        } flex flex-col lg:flex-row items-center relative`}
        aria-labelledby="hero-title"
        style={{ willChange: "transform, opacity" }}
      >
        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center text-center lg:text-left">
          <div className="text-white">
            <h1
              id="hero-title"
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-300 light-font leading-tight"
            >
              Новая эра умного телевидения
            </h1>
            <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl all-texts tracking-[0.3rem] sm:tracking-[0.6rem] md:tracking-[1.2rem] leading-none mt-2">
              SSmart
            </p>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 light-font mt-4 px-4 lg:px-0 max-w-full lg:max-w-xl mx-auto lg:mx-0">
              <span className="text-red-600">WildRed OS</span>,{" "}
              <span className="text-green-500">Android</span> TV, web{" "}
              <span className="text-rose-500">OS</span> — ваш новый ТВ-формат.
            </p>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative flex items-center justify-center lg:static">
          <img
            className="w-48 sm:w-64 md:w-80 lg:w-[32rem] max-w-full lg:absolute lg:bottom-10 lg:right-0"
            src={text}
            alt="Smart TV Text"
          />
        </div>

        {/* SCROLL INDICATOR */}
        {!visible && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center items-start p-1 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
