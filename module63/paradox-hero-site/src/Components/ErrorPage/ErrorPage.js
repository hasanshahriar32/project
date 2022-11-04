// import "./styles.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../LottyFie/125702-404-page-not-found.json";
//here set the file path of lottie.json file
export default function ErrorPage() {
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
      <Lottie options={defaultOptions} height={400} width={500} />
    </div>
  );
}
