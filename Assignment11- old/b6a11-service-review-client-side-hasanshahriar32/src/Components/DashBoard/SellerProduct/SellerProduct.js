import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Context/UserContext";
import SinglePart from "../../CarParts/SinglePart";

const SellerProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = React.useState();
  useEffect(() => {
    fetch(`https://books-review-mocha.vercel.app/services/seller/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(products);
  return (
    <div className="flex flex-wrap justify-evenly">
      {products?.map((product) => (
        <SinglePart key={product._id} service={product}></SinglePart>
      ))}
    </div>
  );
};

export default SellerProduct;
