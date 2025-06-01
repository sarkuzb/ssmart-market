import { useEffect, useState } from "react";
import image01 from "../assets/image01.png";
import Logo from "../assets/logo.png";

export default function About() {
  // Simple fade-in + slide-up animation on scroll
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("about");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Run on mount in case section is already in view

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-neutral-950">
      <section
        id="about"
        aria-label="About Ssmart"
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="flex items-center space-x-8">
              <p className="text-5xl all-texts tracking-wider text-white">
                О компании
              </p>
              <img className="w-56" src={Logo} alt="Logo" />
            </div>
            <div className="light-font space-x-12 gap-6 flex flex-col">
              <p className="text-lg text-neutral-400">
                Основанная в Узбекистане, компания <strong>Ssmart</strong>{" "}
                является ведущим производителем телевизоров, ежегодно
                выпускающим более{" "}
                <span className="all-texts text-white text-2xl">100 000</span>{" "}
                единиц продукции.
              </p>
              <p className="text-lg text-neutral-400">
                Экспортируем{" "}
                <span className="all-texts text-white text-2xl">50 000</span>{" "}
                телевизоров в Россию и другие страны СНГ, сотрудничая с такими
                брендами, как <em>TCL</em> и <em>JVC</em>, обладая богатым
                опытом OEM-производства.
              </p>
              <p className="text-lg italic text-neutral-400 ">
                Наша миссия — предоставлять высококачественные, инновационные и
                доступные решения для домашнего развлечения, отвечая ожиданиям
                современных пользователей.
              </p>
            </div>

            {/* Highlight stats */}
            <div className="mt-8 flex gap-8 light-font">
              <div className="text-center">
                <p className="all-texts text-white text-4xl">100k+</p>
                <p className="text-sm text-neutral-400">Телевизоров в год</p>
              </div>
              <div className="text-center">
                <p className="all-texts text-white text-4xl">50k+</p>
                <p className="text-sm text-neutral-400">Экспорт в СНГ</p>
              </div>
              <div className="text-center">
                <p className="all-texts text-white text-4xl">10+</p>
                <p className="text-sm text-neutral-400">Лет опыта</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2">
            <img
              src={image01}
              alt="Современный телевизор в гостиной"
              className="rounded-xl mx-auto lg:mx-0 max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
