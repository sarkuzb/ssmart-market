import { useEffect, useState } from "react";
import {
  ShieldCheckIcon,
  BuildingOffice2Icon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export default function Support() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("support");
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
        id="support"
        className={`py-24  px-6 max-w-7xl mx-auto text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-white mb-4 all-texts">
          Сервис и гарантия
        </h2>
        <hr className="w-24 border-t-2 border-neutral-800 mx-auto mb-16" />

        <div className="grid gap-12 md:grid-cols-3 text-left md:divide-x md:divide-neutral-800 ">
          <div className="md:pr-6">
            <ShieldCheckIcon className="w-8 h-8 text-neutral-500 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              3 года поддержки
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              1 год официальной гарантии и до 2 лет сервисного сопровождения для
              всей техники Ssmart.
            </p>
          </div>
          <div className="md:px-6">
            <BuildingOffice2Icon className="w-8 h-8 text-neutral-500 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Федеральная сеть сервисов
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Более 100 центров «Мой Сервис» по всей России — всегда рядом,
              чтобы помочь.
            </p>
          </div>
          <div className="md:pl-6">
            <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-neutral-500 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Поддержка 24/7
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Круглосуточная горячая линия и онлайн-чат — мы всегда на связи.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
