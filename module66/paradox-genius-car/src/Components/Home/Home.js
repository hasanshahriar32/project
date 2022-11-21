import React from "react";
import HomeAbout from "./About/HomeAbout/HomeAbout";
import Banner from "./Banner/Banner";
import Customers from "./Customers/Customers";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Faq from "./Faq/Faq";
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <div data-aos="fade-left">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up">
        <HomeAbout></HomeAbout>
      </div>
      <div data-aos="fade-up">
        <Testimonial></Testimonial>
      </div>
      <div>
        <Faq></Faq>
      </div>
      <div data-aos="fade-up">
        <Team></Team>
      </div>
      <div data-aos="fade-up">
        <Customers></Customers>
      </div>
    </div>
  );
};

export default Home;
