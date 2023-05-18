import React from "react";

const Card = ({ card }) => {
  const { name, img, description, bgColor } = card;
  return (
    <div className={`card card-side shadow-xl px-6 py-4 ${bgColor}`}>
      <figure>
        <img
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;
