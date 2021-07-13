// actionTypes
import { ADD_ITEM, GET_SUBTOTAL } from "../actions/actionTypes";

// initial state
const initialState = {
  cartItems: [],
};

// reducers
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state.cartItems,
        cartItems: [...state.cartItems, action.payload],
        total: 0,
      };
    case GET_SUBTOTAL:
      return {
        ...state.cartItems,
        cartItems: [...state.cartItems],
        total: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
