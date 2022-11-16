// import "./styles.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Lottie/74569-two-factor-authentication.json";
//here set the file path of lottie.json file
export default function RegisterLottie() {
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
