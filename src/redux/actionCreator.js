import { FIND_ADRESS } from "./actionTypes";
import { ADD_COMPANY } from "./actionTypes";

export const featchFindAC = (parametr) => {
  return (dispatch) => {
    fetch("http://192.168.90.134:8080/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parametr),
    })
      .then((res) => res.json())
      .then((res) => dispatch(findAdressAC(res.places)));
  };
};

export const fetchAddCompanyAC = (parametr) => {
  return (dispatch) => {
    fetch("http://192.168.90.134:8080/addplace/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addCompanyAC(data)));
  };
};

export const findAdressAC = (payload) => ({
  type: FIND_ADRESS,
  payload,
});

export const addCompanyAC = (payload) => ({
  type: ADD_COMPANY,
  payload,
});
