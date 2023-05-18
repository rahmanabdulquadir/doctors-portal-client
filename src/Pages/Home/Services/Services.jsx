import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const cardData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum error, aliquid facere unde hic culpa.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum error, aliquid facere unde hic culpa.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum error, aliquid facere unde hic culpa.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-secondary font-bold text-xl">Our Services</h3>
        <p className="text-4xl font-semibold">Services We Provide</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {cardData.map((card) => (
          <Service key={card.id} card={card}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
