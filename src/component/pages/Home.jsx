import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Hero from "../Hero";
import Location from "../Location";
import News from "../News";
import Services from "../Services";

import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Hero />
      <Services />
      <Content />
      <News />
      <Location />
    </div>
  );
};

export default Home;
