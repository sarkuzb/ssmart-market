import { useEffect, useState } from "react";

export default function OS() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("os");
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

  const features = [
    {
      title: "Легкий доступ к каналам",
      description:
        "Интуитивный интерфейс для мгновенного переключения и поиска.",
    },
    {
      title: "Плавная работа",
      description:
        "Оптимизация кеша и ресурсоёмкости для максимальной производительности.",
    },
    {
      title: "Многозадачность",
      description:
        "Одновременное использование приложений без тормозов и задержек.",
    },
    {
      title: "Бесплатный доступ к мультиплексам",
      description:
        "Каналы 1 и 2 мультиплекса, START Air/World, EPIC — всё доступно бесплатно.",
    },
  ];

  return (
    <section
      id="os"
      aria-label="WildRed OS Features"
      className={`max-w-7xl mx-auto px-6 py-20 dark:bg-gray-900 text-white rounded-3xl transition-all duration-1000 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left side text */}
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-5xl font-extrabold tracking-wide leading-tight">
            <span className="text-cyan-400">WildRed OS</span> — Ваш новый
            уровень ТВ
          </h2>
          <p className="text-cyan-200 max-w-lg">
            Разработано совместно с{" "}
            <strong className="text-indigo-300">START</strong>. Наслаждайтесь
            плавной работой, лёгким доступом к каналам и расширенной
            многозадачностью.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {features.map(({ title, description }) => (
              <div
                key={title}
                className="bg-indigo-700 bg-opacity-30 rounded-xl p-6 border border-cyan-400/50 hover:bg-cyan-600/40 transition-colors shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-cyan-100">
                  {title}
                </h3>
                <p className="text-cyan-200">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-cyan-400/50">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
              alt="WildRed OS Interface on TV"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            {/* Optional glowing overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
