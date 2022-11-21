import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const BannerData = () => {
  return (
    <div>
      {" "}
      <h1 className="lg:text-5xl text-3xl font-semibold left-8 lg:left-20 z-50 absolute text-orange-500 top-1/3 md:top-1/4 lg:font-bold">
        <span className="lg:text-7xl ">Paradox Car</span>
        <br />
        Sell and Services
      </h1>
      <p className="hidden sm:flex text-lg absolute top-2/3 max-h-16 md:max-h-20   left-8 text-white overflow-hidden lg:left-20 w-[70vw] text-ellipsis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        doloribus, deserunt magnam eum natus optio harum iusto nesciunt nam
        voluptate. Deserunt sit ducimus magnam cumque dignissimos aperiam rem
        odio harum!
      </p>
      <div className="absolute w-full bottom-6 right-0 sm:right-4 justify-center sm:justify-end flex">
        <Link to="/services">
          <Button className="mr-6" gradientMonochrome="teal">
            Discover More
          </Button>
        </Link>

        <Link to="/about">
          <Button gradientMonochrome="lime">Latest projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default BannerData;
