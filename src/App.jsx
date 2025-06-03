import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainProducts from "./components/MainProducts";
import BackToTop from "./components/BackToTop";
import "./index.css";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Support />
    </>
  );
}

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main-products" element={<MainProducts />} />{" "}
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
