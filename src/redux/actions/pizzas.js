import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://json-server-pizza.vercel.app/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (item) => ({
  type: 'SET_PIZZAS',
  payload: item,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});
