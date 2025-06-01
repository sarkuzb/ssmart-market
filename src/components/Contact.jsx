import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("contact");
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-neutral-950">
      <section
        id="contact"
        aria-label="Contact us"
        className={` max-w-7xl mx-auto pt-28 pb-10 rounded transition-opacity duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl all-texts tracking-wider text-white font-bold mb-10 text-center">
          Свяжитесь с нами
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 text-neutral-400 light-font">
          <div>
            <h2 className="font-semibold text-neutral-600">Общие вопросы</h2>
            <a
              href="mailto:info@ssmartelectronics.com"
              className="text-neutral-300 hover:underline hover:text-rose-500 transition-colors text-2xl"
            >
              info@ssmartelectronics.com
            </a>
          </div>

          <div>
            <h2 className="font-semibold text-neutral-600">
              Вопросы сотрудничества в РФ
            </h2>
            <a
              href="mailto:nelin.p@ssmartelectronics.com"
              className="text-neutral-300 hover:underline block hover:text-rose-500 transition-colors text-2xl"
            >
              nelin.p@ssmartelectronics.com
            </a>
          </div>
          <div>
            <h2 className="text-neutral-600">Телефон:</h2>
            <a
              href="tel:+998971063353"
              className="hover:underline block text-neutral-300 hover:text-rose-500 transition-colors text-2xl"
            >
              +998 97 106-33-53
            </a>
            <a
              href="tel:+79936361766"
              className="hover:underline block text-neutral-300 hover:text-rose-500 transition-colors text-2xl"
            >
              +7 (993) 636-17-66
            </a>
          </div>

          <div>
            <h2 className="font-semibold text-neutral-600">
              Техническая поддержка в РФ
            </h2>
            <a
              href="mailto:servis@ssmartelectronics.com"
              className="text-neutral-300 hover:underline hover:text-rose-500 transition-colors text-2xl"
            >
              servis@ssmartelectronics.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto mt-16 space-y-8 text-white text-left"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Ваше имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded px-4 py-3 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Ваше имя"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded px-4 py-3 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded px-4 py-3 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
              placeholder="Ваше сообщение..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-rose-900 text-white px-8 py-4 rounded hover:bg-rose-700 transition disabled:opacity-50 cursor-pointer"
          >
            {status === "loading" ? "Отправка..." : "Отправить"}
          </button>

          {status === "success" && (
            <p className="mt-5 text-green-500 font-semibold">
              Спасибо! Ваше сообщение отправлено.
            </p>
          )}
          {status === "error" && (
            <p className="mt-5 text-red-500 font-semibold">
              Ошибка при отправке. Пожалуйста, попробуйте позже.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
