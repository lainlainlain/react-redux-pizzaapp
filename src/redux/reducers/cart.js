const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const getSum = (arg) => arg.reduce((sum, cur) => cur.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

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

      // const items = Object.values(newItems).map((obj) => obj.items);

      const totalArray = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      // const totalArray = [].concat.apply([], items);

      // const totalPrice = getSum(totalArray);

      return {
        ...state,
        items: newItems,
        totalCount: totalArray,
        totalPrice,
      };
    }
    case "CLEAR_CART": {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }
    case "DELETE_CART_ITEM": {
      const newItems = { ...state.items };

      const currentTotalCount = newItems[action.payload].items.length;
      const currentTotalPrice = newItems[action.payload].totalPrice;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentTotalCount,
        totalPrice: state.totalPrice - currentTotalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
