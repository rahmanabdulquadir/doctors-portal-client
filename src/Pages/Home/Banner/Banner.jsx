import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import Button from "../../../components/Button/Button";

const Banner = () => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundImage: "contain" }}
      className="hero mt-10 py-6"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            neque ea rem inventore voluptatem placeat vel atque incidunt! Quia,
            dolore voluptas. Placeat numquam quisquam asperiores quidem ab,
            suscipit aliquam labore!
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
