import React from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "./Componets/Header";
import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home";
import Chardham from "./Pages/Chardham";
import Badrinath from "./Pages/Badrinath";
import KedharNath from "./Pages/Kedarnath";
import Dodham from "./Pages/Dodham";
import Slider from "./Componets/Slider";
import Transport from "./Pages/Transport";
import Deals from "./Pages/Deals";
import BadrinathPage from "./Pages/BadrinathPage";
import KedarnathPage from "./Pages/KedarnathPage";
import Badrinathpage from "./Pages/BadrinathPage";
import ChardhamPage from "./Pages/ChardhamPage";
import WhyChooseUs from "./Pages/WhyChooseUs";
import FAQPage from "./Pages/FAQPage";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Slider />
      <Deals />
      <Transport />
      <BadrinathPage />
      <KedarnathPage />
      <ChardhamPage />
      <WhyChooseUs />
      <FAQPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="char-dham" element={<Chardham />} />
        <Route path="do-dham" element={<Dodham />} />
        <Route path="badri-nath" element={<Badrinath />} />
        <Route path="kedar-nath" element={<KedharNath />} />
      </Routes>
    </div>
  );
};

export default App;
