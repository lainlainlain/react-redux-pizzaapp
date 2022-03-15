export const addPizzaToCart = (pizzaObj) => {
  return {
    type: "ADD_PIZZA_CART",
    payload: pizzaObj,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const deleteCartItem = (id) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: id,
  };
};

export const plusCartItem = (id) => {
  return {
    type: "PLUS_CART_ITEM",
    payload: id,
  };
};

export const minusCartItem = (id) => {
  return {
    type: "MINUS_CART_ITEM",
    payload: id,
  };
};
