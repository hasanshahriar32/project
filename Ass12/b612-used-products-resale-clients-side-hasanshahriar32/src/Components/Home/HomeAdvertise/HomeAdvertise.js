import React, { useEffect } from "react";
import SinglePart from "../../CarParts/SinglePart";

const HomeAdvertise = () => {
  const [products, setProducts] = React.useState();
  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/services/advertised"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-6 ">
      {/* <h1 className="text-4xl text-center font-bold">Advertisements </h1> */}
      <div className="flex flex-wrap justify-evenly items-center">
        {products?.map((product) => (
          <SinglePart key={product?._id} service={product}></SinglePart>
        ))}
      </div>
    </div>
  );
};
// advertise added
export default HomeAdvertise;
