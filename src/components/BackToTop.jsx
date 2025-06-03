import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="p-3 rounded-full text-neutral-950 bg-white/50 fixed bottom-14 right-14 cursor-pointer hover:bg-white/70 transition-all duration-200"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;
