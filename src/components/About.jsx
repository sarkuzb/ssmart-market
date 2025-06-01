import { useEffect, useState } from "react";
import image01 from "../assets/image01.png";
import Logo from "../assets/logo.png";

export default function About() {
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
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-neutral-950">
      <section
        id="about"
        aria-label="About Ssmart"
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text */}
          <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:space-x-6 space-y-4 sm:space-y-0">
              <p className="text-3xl sm:text-4xl md:text-5xl all-texts tracking-wider text-white">
                О компании
              </p>
              <img className="w-40 sm:w-48 md:w-56" src={Logo} alt="Logo" />
            </div>

            <div className="light-font flex flex-col gap-6">
              <p className="text-base sm:text-lg text-neutral-400">
                Основанная в Узбекистане, компания <strong>Ssmart</strong>{" "}
                является ведущим производителем телевизоров, ежегодно
                выпускающим более{" "}
                <span className="all-texts text-white text-xl sm:text-2xl">
                  100 000
                </span>{" "}
                единиц продукции.
              </p>
              <p className="text-base sm:text-lg text-neutral-400">
                Экспортируем{" "}
                <span className="all-texts text-white text-xl sm:text-2xl">
                  50 000
                </span>{" "}
                телевизоров в Россию и другие страны СНГ, сотрудничая с такими
                брендами, как <em>TCL</em> и <em>JVC</em>, обладая богатым
                опытом OEM-производства.
              </p>
              <p className="text-base sm:text-lg italic text-neutral-400">
                Наша миссия — предоставлять высококачественные, инновационные и
                доступные решения для домашнего развлечения, отвечая ожиданиям
                современных пользователей.
              </p>
            </div>

            {/* Highlight stats */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-8 text-center light-font">
              <div>
                <p className="all-texts text-white text-3xl sm:text-4xl">
                  100k+
                </p>
                <p className="text-sm text-neutral-400">Телевизоров в год</p>
              </div>
              <div>
                <p className="all-texts text-white text-3xl sm:text-4xl">
                  50k+
                </p>
                <p className="text-sm text-neutral-400">Экспорт в СНГ</p>
              </div>
              <div>
                <p className="all-texts text-white text-3xl sm:text-4xl">10+</p>
                <p className="text-sm text-neutral-400">Лет опыта</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={image01}
              alt="Современный телевизор в гостиной"
              className="rounded-xl mx-auto max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
