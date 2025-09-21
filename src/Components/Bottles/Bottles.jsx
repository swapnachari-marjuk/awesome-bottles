import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToSCard, getStoredCart } from "../../Utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ promiseBottle }) => {
  const bottles = use(promiseBottle);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const storedCartIDs = getStoredCart()
    // console.log(storedCartIDs, bottles)
    const storedCart = []
    for(const id of storedCartIDs){
        // console.log(id)
        const cartBottle = bottles.find(bottle => bottle.id === id);
        if (cartBottle) {
            storedCart.push(cartBottle)
        }
    }
    setCart(storedCart)
  },[bottles])
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToSCard(bottle.id);
  };
  return (
    <div>
      <h1>Total Cart Items: {cart.length}</h1>
      <Cart cart={cart}></Cart>
      <div className="bottles-parent">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
