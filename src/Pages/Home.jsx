import React from "react";
import Slider from "../Componets/Slider";
import Deals from "./Deals";
import Transport from "./Transport";
import BadrinathPage from "./BadrinathPage";
import KedarnathPage from "./KedarnathPage";
import DodhamPage from "./DodhamPage";
import ChardhamPage from "./ChardhamPage";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonal";
import FAQPage from "./FAQPage";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
