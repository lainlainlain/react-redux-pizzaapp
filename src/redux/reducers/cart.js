const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  if (action.type === "SET_TOTAL_COUNT") {
    return {
      ...state,
      totalCount: action.payload,
    };
  }
  if (action.type === "SET_TOTAL_PRICE") {
    return {
      ...state,
      totalPrice: action.payload,
    };
  }
  return state;
};

export default cart;
