import { Button, Carousel } from "flowbite-react";
import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import "./Banner.css";
import BannerData from "./BannerData";
const Banner = () => {
  return (
    <div className="hidden sm:block">
      <div className="h-60 sm:h-[300px] md:h-[480px] m-8 lg:m-20 lg:h-[600px]">
        <Carousel>
          <div className="flex h-full items-center justify-center  dark:text-white">
            <div className="carousel-image">
              <img
                className=" min-h-[600px] rounded-sm  w-auto"
                src={img1}
                alt=""
              />
            </div>

            <BannerData></BannerData>
          </div>
          <div className="flex h-full items-center justify-center  dark:text-white">
            <div className="carousel-image">
              <img className=" min-h-[600px]  rounded-sm" src={img2} alt="" />
            </div>
            <BannerData></BannerData>
          </div>
          <div className="flex h-full items-center justify-center  dark:text-white">
            <div className="carousel-image">
              <img className=" min-h-[600px]  rounded-sm" src={img3} alt="" />
            </div>
            <BannerData></BannerData>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
