import { Button } from "flowbite-react";
import React from "react";

const BannerData = () => {
  return (
    <div>
      {" "}
      <h1 className="lg:text-6xl text-3xl font-semibold left-8 lg:left-20 z-50 absolute text-red-700 top-1/4 lg:font-bold">
        Paradox Car
        <br />
        Sell and Services
      </h1>
      <p className="text-lg absolute top-1/2 max-h-16 md:max-h-20   left-8 text-white overflow-hidden lg:left-20 w-[70vw] text-ellipsis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        doloribus, deserunt magnam eum natus optio harum iusto nesciunt nam
        voluptate. Deserunt sit ducimus magnam cumque dignissimos aperiam rem
        odio harum!
      </p>
      <div className="absolute w-full bottom-6 right-4 justify-end flex">
        <Button className="mr-6" gradientMonochrome="teal">
          Discover More
        </Button>

        <Button outline={true} gradientMonochrome="lime">
          Latest projects
        </Button>
      </div>
    </div>
  );
};

export default BannerData;
