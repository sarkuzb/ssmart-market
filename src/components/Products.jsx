import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import products from "../data/productsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Icon } from "@iconify/react";
import checkIcon from "@iconify-icons/heroicons-outline/check-circle";
import closeIcon from "@iconify-icons/heroicons-outline/x-circle";
import brightnessIcon from "@iconify-icons/heroicons-outline/sun";
import contrastIcon from "@iconify-icons/heroicons-outline/adjustments-horizontal";
import osIcon from "@iconify-icons/heroicons-outline/device-phone-mobile";
import resolutionIcon from "@iconify-icons/heroicons-outline/computer-desktop";

export default function Products() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("products");
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-neutral-950 py-20">
      <section
        id="products"
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-semibold text-white mb-12 text-center tracking-wide all-texts">
          продукции Ssmart
        </h2>
        <Slider {...settings}>
          {products.map(
            ({
              id,
              size,
              resolution,
              os,
              voiceControl,
              brightness,
              contrast,
              image,
              voiceControlNote,
            }) => (
              <div key={id} className="px-2">
                <div className="bg-neutral-900 flex flex-col h-[34rem] hover:rounded-xl transition-all duration-200 overflow-hidden">
                  <div className="bg-neutral-800 p-2">
                    <img
                      src={image}
                      alt={`Телевизор Ssmart ${size}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-xl font-semibold text-white mb-3 truncate"
                      title={size}
                    >
                      {size}
                    </h3>
                    <ul
                      className="text-neutral-300 flex-grow space-y-2"
                      style={{ minHeight: "140px" }}
                    >
                      <li
                        className="flex items-center gap-2"
                        title={`Разрешение: ${resolution}`}
                      >
                        <Icon
                          icon={resolutionIcon}
                          className="text-xl text-neutral-500"
                        />
                        <span>
                          <span className="font-medium">Разрешение:</span>{" "}
                          <span className="text-sm">{resolution}</span>
                        </span>
                      </li>
                      <li
                        className="flex items-center gap-2"
                        title={`ОС: ${os}`}
                      >
                        <Icon
                          icon={osIcon}
                          className="text-xl text-neutral-500"
                        />
                        <span>
                          <span className="font-medium">ОС:</span> {os}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon
                          icon={voiceControl ? checkIcon : closeIcon}
                          className="text-xl text-neutral-500"
                        />
                        <span>
                          <span className="font-medium">
                            Голосовое управление:
                          </span>{" "}
                          {voiceControl ? "Да" : "Нет"}
                          {voiceControlNote && (
                            <span className="text-sm text-red-400">
                              {" "}
                              ({voiceControlNote})
                            </span>
                          )}
                        </span>
                      </li>
                      <li
                        className="flex items-center gap-2"
                        title={`Яркость: ${brightness}`}
                      >
                        <Icon
                          icon={brightnessIcon}
                          className="text-xl text-neutral-500"
                        />
                        <span>
                          <span className="font-medium">Яркость:</span>{" "}
                          {brightness}
                        </span>
                      </li>
                      <li
                        className="flex items-center gap-2"
                        title={`Контраст: ${contrast}`}
                      >
                        <Icon
                          icon={contrastIcon}
                          className="text-xl text-neutral-500"
                        />
                        <span>
                          <span className="font-medium">Контраст:</span>{" "}
                          {contrast}
                        </span>
                      </li>
                    </ul>
                    <button
                      className="mt-6 bg-neutral-400 text-neutral-950 font-semibold py-2 rounded-lg hover:bg-white transition cursor-pointer"
                      type="button"
                      style={{ flexShrink: 0 }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </section>
    </div>
  );
}
