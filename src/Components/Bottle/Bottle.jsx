import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle }) => {
  console.log(bottle);
  const { img, name,price } = bottle;
  // console.log(img)
  return (
    <div className="bottle-card">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>${price}</h3>
    </div>
  );
};

export default Bottle;
