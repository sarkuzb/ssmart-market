import { FaYoutube, FaInstagram, FaTelegram } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

import { useEffect } from "react";

const footerNav = [
  { id: "products", label: "Модели", path: "/#products" },
  { id: "support", label: "Поддержка", path: "/#support" },
  { id: "contact", label: "Контакты", path: "/contact" },
  { id: "partners", label: "Партнёрам", path: "/#partners" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    if (item.path === "/contact") {
      navigate("/contact");
    } else {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const section = document.getElementById(item.id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="bg-neutral-100 text-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-base font-normal">
          {footerNav.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
              className="hover:text-neutral-500 transition cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-red-600 transition"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-rose-600 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="hover:text-blue-500 transition"
          >
            <FaTelegram size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-sm text-gray-500 select-none">
        © {new Date().getFullYear()} Ssmart. Все права защищены.
      </div>
    </footer>
  );
}
