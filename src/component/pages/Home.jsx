import React, { useState, useEffect } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Hero from "../Hero";
import Location from "../Location";
import News from "../News";
import Services from "../Services";

import Slider from "../Slider";
import PromoBanner from "../PromoBanner";

const Home = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };
  return (
    <div>
      <Slider />
      <Hero />
      <Services />
      <Content />
      <News />
      <Location />
      {showBanner && <PromoBanner onClose={handleCloseBanner} />}
    </div>
  );
};

export default Home;
