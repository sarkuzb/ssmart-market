import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const navItems = [
  { id: "hero", label: "Главная", path: "/" },
  { id: "about", label: "О Ssmart", path: "/#about" },
  { id: "products", label: "Продукция", path: "/#products" },
  { id: "support", label: "Гарантия и сервис", path: "/#support" },
  { id: "contact", label: "Контакты", path: "/contact" },
];

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const handleMouseEnter = (e) => {
    const li = e.currentTarget;
    const { offsetLeft, offsetWidth } = li;
    setHoverStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      if (location.pathname === "/") {
        let currentSection = "hero";
        for (const { id } of navItems) {
          if (id === "contact") continue;
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = id;
              break;
            }
          }
        }
        setActiveSection(currentSection);
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const scrollOrNavigate = (item) => {
    setMenuOpen(false);

    if (item.id === "products") {
      if (location.pathname === "/contact") {
        navigate("/main-products");
      } else {
        if (location.pathname !== "/") {
          navigate("/", { replace: false });
          setTimeout(() => {
            const section = document.getElementById("products");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          const section = document.getElementById("products");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (item.path === "/contact") {
      navigate("/contact");
    } else {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const section = document.getElementById(item.id);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const section = document.getElementById(item.id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all shadow-2xl ${
        isSticky ? "bg-neutral-950/60 backdrop-blur-sm" : "bg-black/80"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between p-4">
          <div
            className="text-2xl font-bold text-sky-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img className="w-32" src={Logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <ul
            className="relative hidden md:flex font-bold text-md"
            ref={menuRef}
            onMouseLeave={handleMouseLeave}
          >
            {/* Hover Background Effect */}
            <span
              className="absolute top-0 h-full bg-neutral-700/10 rounded-md transition-all duration-300 ease-in-out pointer-events-none"
              style={{
                left: hoverStyle.left,
                width: hoverStyle.width,
                opacity: hoverStyle.opacity,
                zIndex: 0,
              }}
            />

            {navItems.map(({ id, label, path }) => (
              <li
                key={id}
                className={`relative z-10 cursor-pointer px-4 py-1 transition-colors duration-200 ${
                  activeSection === id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                onMouseEnter={handleMouseEnter}
                onClick={() => scrollOrNavigate({ id, path })}
              >
                {label}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div
            className="md:hidden flex items-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-black/90 fixed w-full left-0 top-[82px] py-6 space-y-4 z-40 shadow-lg">
            {navItems.map(({ id, label, path }) => (
              <li
                key={id}
                className="text-white font-semibold text-lg"
                onClick={() => scrollOrNavigate({ id, path })}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
