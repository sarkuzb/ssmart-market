import { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const location = useLocation();

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

  // Lock scroll on mobile when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const scrollOrNavigate = (item) => {
    setMenuOpen(false);

    if (item.path === "/contact") {
      navigate("/contact");
    } else if (location.pathname !== "/") {
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
          <ul className="hidden md:flex space-x-6 font-bold text-md">
            {navItems.map(({ id, label, path }) => (
              <li
                key={id}
                className={`cursor-pointer transition ${
                  activeSection === id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
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
