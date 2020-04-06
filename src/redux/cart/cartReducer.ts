import {CART_ACTIONS, CartAction} from './cartActions';

export interface CartState {
  hidden: boolean,
}

const INITIAL_STATE = {
  hidden: true,
};

export const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case CART_ACTIONS.SHOW_CART_DROPDOWN:
      return {
        ...state,
        hidden: false,
      };
    case CART_ACTIONS.HIDE_CART_DROPDOWN:
      return {
        ...state,
        hidden: true,
      };
    case CART_ACTIONS.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
