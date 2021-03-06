// actionTypes
import { ADD_ITEM, REMOVE_ITEM, ADD_USER } from "../actions/actionTypes";

// initial state
const initialState = {
  cartItems: [],
  user: "",
};

// get total
export const getTotal = (items) => {
  return items?.reduce((amt, item) => amt + item.price, 0);
};

// reducers
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_ITEM:
      let idx = state.cartItems.findIndex((item) => item.id === action.id);
      let newItems = [...state.cartItems];
      if (idx >= 0) {
        newItems.splice(idx, 1);
      } else {
        console.warn(`No item found of id- ${idx}!`);
      }
      return {
        ...state,
        cartItems: newItems,
      };
    case ADD_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducers;
