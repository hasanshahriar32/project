import React from "react";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
  return (
    <div>
      <div data-aos="zoom-in">
        <Features></Features>
      </div>
      <div data-aos="zoom-in">
        <Pricing></Pricing>
      </div>
    </div>
  );
};

export default Services;
