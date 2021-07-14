import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

const addItem = (id, item_name, price, img) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: id,
      item_name: item_name,
      price: price,
      img: img,
    },
  };
};

const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
};

export { addItem, removeItem };
