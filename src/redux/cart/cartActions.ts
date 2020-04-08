import {ShopItem} from '../../types';

export enum CART_ACTIONS {
  SHOW_CART_DROPDOWN = 'SHOW_CART_DROPDOWN',
  HIDE_CART_DROPDOWN = 'HIDE_CART_DROPDOWN',
  TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN',
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY',
}

export interface CartActionShowCartDropdown {
  type: CART_ACTIONS.SHOW_CART_DROPDOWN,
}

export interface CartActionHideCartDropdown {
  type: CART_ACTIONS.HIDE_CART_DROPDOWN,
}

export interface CartActionToggleCartDropdown {
  type: CART_ACTIONS.TOGGLE_CART_DROPDOWN,
}

export interface CartActionAddCartItem {
  type: CART_ACTIONS.ADD_CART_ITEM,
  payload: ShopItem,
}

export type CartAction = CartActionShowCartDropdown | CartActionHideCartDropdown | CartActionToggleCartDropdown |
  CartActionAddCartItem;

export const showCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.SHOW_CART_DROPDOWN,
});

export const hideCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.HIDE_CART_DROPDOWN,
});

export const toggleCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.TOGGLE_CART_DROPDOWN,
});

export const addCartItem = (item: ShopItem): CartAction => ({
  type: CART_ACTIONS.ADD_CART_ITEM,
  payload: item,
});
