// import "./styles.css";
import Footer from "../Footer/Footer";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../Lottie/124616-error-404.json";
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
      <Lottie options={defaultOptions} height={500} width={400} />
      <Footer></Footer>
    </div>
  );
}
