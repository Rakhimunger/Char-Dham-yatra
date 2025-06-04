import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";

import Home from "./Pages/Home";
import Chardham from "./Pages/Chardham";
import Badrinath from "./Pages/Badrinath";
import KedharNath from "./Pages/Kedarnath";
import Dodham from "./Pages/Dodham";
import Booknow from "./Pages/Booknow";

import Slider from "./Componets/Slider";
import Transport from "./Pages/Transport";
import Deals from "./Pages/Deals";
import BadrinathPage from "./Pages/BadrinathPage";
import KedarnathPage from "./Pages/KedarnathPage";
import DodhamPage from "./Pages/DodhamPage";
import ChardhamPage from "./Pages/ChardhamPage";
import WhyChooseUs from "./Pages/WhyChooseUs";
import FAQPage from "./Pages/FAQPage";
import Testimonials from "./Pages/Testimonal";
import HeroSection from "./Pages/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Deals />
              <Transport />
              <BadrinathPage />
              <KedarnathPage />
              <DodhamPage />
              <ChardhamPage />
              <WhyChooseUs />
              <Testimonials />
              <FAQPage />
              <HeroSection />
            </>
          }
        />

        <Route path="/char-dham" element={<Chardham />} />
        <Route path="/do-dham" element={<Dodham />} />
        <Route path="/badri-nath" element={<Badrinath />} />
        <Route path="/kedar-nath" element={<KedharNath />} />
        <Route path="/book-now" element={<Booknow />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
