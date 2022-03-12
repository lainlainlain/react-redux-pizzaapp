const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const getSum = (arg) => arg.reduce((sum, cur) => cur.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getSum(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);

      const totalArray = [].concat.apply([], items);

      const totalPrice = getSum(totalArray);
      return {
        ...state,
        items: newItems,
        totalCount: totalArray.length,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
