import axios from "axios";

import { GET_INVENTORY, DELETE_ITEM, ADD_ITEM } from "./types";

// GET ITEMS
export const getInventory = () => dispatch => {
  axios
    .get("/api/inventory/")
    .then(res => {
      dispatch({
        type: GET_INVENTORY,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("get items error", err);
    });
};

// DELETE ITEMS
export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/inventory/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_ITEM,
        payload: id
      });
    })
    .catch(err => {
      console.log("get items error", err);
    });
};

// ADD ITEM
export const addItem = item => dispatch => {
  axios
    .post("/api/inventory/", item)
    .then(res => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("get items error", err);
    });
};
