import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/tech"
          class="max-w-sm hidden lg:flex rounded-lg shadow-2xl"
        />
        <div>
          <div class="w-full flex justify-evenly items-center">
            <img
              class="w-24 hidden md:flex h-24"
              src="https://tryhackme-images.s3.amazonaws.com/user-avatars/9a4e6c1fea1059db02bac448c6502afe.png"
              alt=""
            />
            <h1 class="text-5xl font-bold">
              Paradox{" "}
              <span class="text-secondary">Front-end Web Development</span>{" "}
              Learning Center!
            </h1>
          </div>
          <p class="py-6">
            Welcome to the paradox of learning new things. Side by side of
            teaching, Now, we are offering our services to the web development
            sector. Our experienced developers will make your site more SEO
            friendly, less vulnerable to be crawled.. We take pride in helping
            people from all walks cyber solutions.
          </p>
          <Link to="/home">
            <button class="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
