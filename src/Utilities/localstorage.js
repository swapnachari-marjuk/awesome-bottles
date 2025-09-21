const getCartFromLS = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLS = cart => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemsToCartLS = id => {
    // console.log(id)
  const cart = getCartFromLS();
  const newCart = [...cart,id];
//   console.log(newCart)
  // save new items to localStorage
  saveCartToLS(newCart);
};

export { getCartFromLS as getStoredCart, addItemsToCartLS as addToSCard };
