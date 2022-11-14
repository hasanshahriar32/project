// import "./styles.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Lottie/page-not-found.json";
export default function Home() {
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
      <Lottie options={defaultOptions} height={500} width={400} />
    </div>
  );
}
