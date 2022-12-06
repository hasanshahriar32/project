// import "./styles.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Lottie/books/98849-book-lover.json";
//here set the file path of lottie.json file
export default function Lottie3() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}
