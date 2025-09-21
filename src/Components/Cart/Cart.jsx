import React from "react";
import './Cart.css'
const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((bottle) => (
        <div className="cart-container" key={bottle.id}>
            <img src={bottle.img} alt="" />
           
        </div>
      ))}
    </div>
  );
};

export default Cart;
