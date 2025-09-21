import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);
  const { img, name, price, stock } = bottle;
  // console.log(img)
  return (
    <div className="bottle-card">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>${price}</h3>
      <b>{stock} pcs available</b>
      <br />
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
