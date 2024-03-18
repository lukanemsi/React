import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card-bg width-100-p text-center p-20">
      <h3>{card.amount}</h3>
      <p>{card.title}</p>
    </div>
  );
};

export default Card;
