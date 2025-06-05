import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";

// Pages for navigation
import Home from "./Pages/Home";
import Chardham from "./Pages/Chardham";
import Badrinath from "./Pages/Badrinath";
import KedharNath from "./Pages/Kedarnath";
import Dodham from "./Pages/Dodham";
import Booknow from "./Pages/Booknow";
import Header from "./Componets/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
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
