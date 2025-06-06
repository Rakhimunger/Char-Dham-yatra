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
import Transport from "./Pages/Transport";
import CharDhamService from "./Pages/CharDhamServices";
import BusDetailPage from "./Pages/BusDetailPage";

//

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char-dham" element={<Chardham />} />
        <Route path="/do-dham" element={<Dodham />} />
        <Route path="/badri-nath" element={<Badrinath />} />
        <Route path="/kedar-nath" element={<KedharNath />} />
        <Route path="/book-now" element={<Booknow />} />
        <Route path="/charDhamService" element={<CharDhamService />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/bus-details" element={<BusDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
