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

import { useNavigate } from "react-router-dom";

export default function Products() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <style>
        {`
          .slick-slide {
            overflow: visible !important;
          }
        `}
      </style>

      <div className="bg-neutral-950 py-20">
        <section
          id="products"
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12 text-center tracking-wide all-texts">
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
                  <div className="bg-neutral-900 flex flex-col h-[30rem] sm:h-[35rem] sm:w-auto hover:rounded-xl transition-all duration-200 overflow-hidden shadow-lg">
                    <div className="bg-neutral-800 p-2 sm:p-4">
                      <img
                        src={image}
                        alt={`Телевизор Ssmart ${size}`}
                        className="w-full h-40 sm:h-40 md:h-44 lg:h-48 object-cover hover:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                      <h3
                        className="text-lg sm:text-xl font-semibold text-white mb-3 truncate"
                        title={size}
                      >
                        {size}
                      </h3>
                      <ul
                        className="text-neutral-300 space-y-1 sm:space-y-2"
                        style={{ minHeight: "130px" }}
                      >
                        <li
                          className="flex items-center gap-2"
                          title={`Разрешение: ${resolution}`}
                        >
                          <Icon
                            icon={resolutionIcon}
                            className="text-lg sm:text-xl text-neutral-500"
                          />
                          <span>
                            <span className="font-medium">Разрешение:</span>{" "}
                            <span className="text-xs sm:text-sm">
                              {resolution}
                            </span>
                          </span>
                        </li>
                        <li
                          className="flex items-center gap-2"
                          title={`ОС: ${os}`}
                        >
                          <Icon
                            icon={osIcon}
                            className="text-lg sm:text-xl text-neutral-500"
                          />
                          <span>
                            <span className="font-medium">ОС:</span>{" "}
                            <span className="text-xs sm:text-sm">{os}</span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon
                            icon={voiceControl ? checkIcon : closeIcon}
                            className="text-lg sm:text-xl text-neutral-500"
                          />
                          <span className="text-xs sm:text-sm">
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
                            className="text-lg sm:text-xl text-neutral-500"
                          />
                          <span className="text-xs sm:text-sm">
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
                            className="text-lg sm:text-xl text-neutral-500"
                          />
                          <span className="text-xs sm:text-sm">
                            <span className="font-medium">Контраст:</span>{" "}
                            {contrast}
                          </span>
                        </li>
                      </ul>
                      <button
                        className="mt-4 sm:mt-6 bg-neutral-400 text-neutral-950 font-semibold py-2 px-4 rounded-lg hover:bg-white transition text-sm sm:text-base"
                        type="button"
                        style={{ flexShrink: 0 }}
                        onClick={() => navigate("/main-products")}
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
    </>
  );
}
