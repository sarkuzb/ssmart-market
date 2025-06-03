import React from "react";
import products from "../data/productsData";
import { Icon } from "@iconify/react";
import checkIcon from "@iconify-icons/heroicons-outline/check-circle";
import closeIcon from "@iconify-icons/heroicons-outline/x-circle";
import brightnessIcon from "@iconify-icons/heroicons-outline/sun";
import contrastIcon from "@iconify-icons/heroicons-outline/adjustments-horizontal";
import osIcon from "@iconify-icons/heroicons-outline/device-phone-mobile";
import resolutionIcon from "@iconify-icons/heroicons-outline/computer-desktop";

export default function MainProducts() {
  return (
    <div className="bg-neutral-900 min-h-screen">
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
          description,
        }) => (
          <div
            key={id}
            className="w-screen h-screen flex flex-col md:flex-row bg-gradient-to-r from-gray-900 via-neutral-900 to-black text-white overflow-hidden"
          >
            {/* Left side: Product Image */}
            <div className="md:w-1/2 w-full relative flex items-center justify-center bg-black p-8">
              <img
                src={image}
                alt={`Телевизор Smart ${size}`}
                className="max-w-full max-h-full rounded-3xl shadow-2xl object-contain"
                loading="lazy"
              />
              {voiceControl && (
                <div className="absolute top-10 left-10 bg-green-600 px-4 py-2 rounded-full font-semibold shadow-lg select-none text-lg">
                  Голосовое управление
                </div>
              )}
            </div>

            {/* Right side: Details */}
            <div className="md:w-1/2 w-full p-12 flex flex-col justify-center space-y-8 max-h-full overflow-y-auto">
              <h1 className="text-5xl font-extrabold tracking-wide mb-6">
                Телевизор {size}
              </h1>

              <ul className="space-y-5 text-lg">
                <li className="flex items-center gap-3">
                  <Icon
                    icon={resolutionIcon}
                    className="text-xl text-neutral-400"
                  />
                  <span>
                    <strong>Разрешение:</strong> {resolution} — обеспечивает
                    чёткое и насыщенное изображение.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon={osIcon} className="text-xl text-neutral-400" />
                  <span>
                    <strong>Операционная система:</strong> <span>{os}</span> —
                    удобная платформа с множеством приложений.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon={voiceControl ? checkIcon : closeIcon}
                    className="text-xl text-neutral-400"
                  />
                  <span>
                    <strong>Голосовое управление:</strong>{" "}
                    {voiceControl ? (
                      <>
                        Да{" "}
                        <span className="text-red-400 ml-2">
                          ({voiceControlNote || "Поддерживается"})
                        </span>
                      </>
                    ) : (
                      "Нет"
                    )}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon={brightnessIcon}
                    className="text-xl text-neutral-400"
                  />
                  <span>
                    <strong>Яркость:</strong> {brightness} — яркие и чёткие
                    цвета при любом освещении.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon
                    icon={contrastIcon}
                    className="text-xl text-neutral-400"
                  />
                  <span>
                    <strong>Контрастность:</strong> {contrast} — глубокие чёрные
                    и яркие белые цвета.
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-lg">
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
