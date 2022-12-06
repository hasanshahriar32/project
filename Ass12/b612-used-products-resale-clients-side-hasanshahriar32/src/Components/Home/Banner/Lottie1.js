// import "./styles.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Lottie/books/99349-girl-with-books.json";
//here set the file path of lottie.json file
export default function Lottie1() {
  const defaultOptions = {
    loop: false,
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
