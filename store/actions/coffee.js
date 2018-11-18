import * as actionTypes from "./actionTypes";

import axios from "axios";

export const getCoffeeShops = () => {
  return dispatch => {
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(shops => {
        dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: shops });
      })
      .catch(error => console.error(error));
  };
};

export const setCoffeeShopsLoading = () => {
  dispatch({ type: actionTypes.COFFEESHOPS_LOADING });
};
