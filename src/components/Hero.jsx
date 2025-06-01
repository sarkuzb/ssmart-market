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
    <div
      // style={{
      //   backgroundImage: `url(${BG})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: `center ${offsetY * 0.5}px`,
      //   transition: "background-position 0.2s ease-out",
      // }}
      className="bg-neutral-800 hero-back"
    >
      <section
        id="hero"
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out h-screen pt-24 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
        aria-labelledby="hero-title"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="h-full flex items-center px-6 pb-20">
          <div className="text-white w-full">
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl text-neutral-300 light-font leading-tight"
            >
              Новая эра умного телевидения
              <br />
            </h1>
            <p className="text-white text-9xl all-texts tracking-[1.5rem] leading-none cursor-default">
              SSmart
            </p>
            <p className="text-xl sm:text-xl md:text-xl text-neutral-300 light-font mt-4 max-w-xl">
              <span className="text-red-600">WildRed OS</span>,{" "}
              <span className="text-green-500">Android</span> TV, web{" "}
              <span className="text-rose-500">OS</span> — ваш новый ТВ-формат.
            </p>
          </div>
          <img
            className="w-[32rem] absolute bottom-16 right-0"
            src={text}
            alt=""
          />
        </div>

        {!visible && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
