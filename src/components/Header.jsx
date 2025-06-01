import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const navItems = [
  { id: "hero", label: "Главная", path: "/" },
  { id: "about", label: "О Ssmart", path: "/#about" },
  { id: "products", label: "Продукция", path: "/#products" },
  { id: "support", label: "Гарантия и сервис", path: "/#support" },
  { id: "contact", label: "Контакты", path: "/contact" }, // separate route
];

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      // Only track active section if on homepage
      if (location.pathname === "/") {
        let currentSection = "hero"; // default
        for (const { id } of navItems) {
          // Skip contact since it is a separate page
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
        // If on contact page, no active section in header
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollOrNavigate = (item) => {
    if (item.path === "/contact") {
      // Navigate to contact page
      navigate("/contact");
    } else if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      navigate("/", { replace: false });
      // Delay scroll after navigation
      setTimeout(() => {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on homepage, scroll normally
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition shadow-2xl ${
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

          <ul className="hidden md:flex space-x-6 font-bold text-md light-font">
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
        </nav>
      </div>
    </header>
  );
}
