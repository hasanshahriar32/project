import { Button, Carousel } from "flowbite-react";
import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import "./Banner.css";
import BannerData from "./BannerData";
const Banner = () => {
  return (
    <div>
      <div className="h-60 md:h-80 m-8 lg:m-20 lg:h-[600px]">
        <Carousel>
          <div className="flex h-full items-center justify-center  dark:text-white">
            <div className="carousel-image">
              <img className="rounded-sm" src={img1} alt="" />
            </div>

            <BannerData></BannerData>
          </div>
          <div className="flex h-full items-center justify-center  dark:text-white">
            <div className="carousel-image">
              <img className=" rounded-sm" src={img2} alt="" />
            </div>
            <BannerData></BannerData>
          </div>
          <div className="flex h-full items-center justify-center  dark:text-white">
            <div className="carousel-image">
              <img className="rounded-sm" src={img3} alt="" />
            </div>
            <BannerData></BannerData>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
