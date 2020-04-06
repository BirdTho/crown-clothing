export enum CART_ACTIONS {
  SHOW_CART_DROPDOWN = 'SHOW_CART_DROPDOWN',
  HIDE_CART_DROPDOWN = 'HIDE_CART_DROPDOWN',
  TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN'
}

interface CartActionShowCartDropdown {
  type: CART_ACTIONS.SHOW_CART_DROPDOWN,
}

interface CartActionHideCartDropdown {
  type: CART_ACTIONS.HIDE_CART_DROPDOWN,
}

interface CartActionToggleCartDropdown {
  type: CART_ACTIONS.TOGGLE_CART_DROPDOWN,
}

export type CartAction = CartActionShowCartDropdown | CartActionHideCartDropdown | CartActionToggleCartDropdown;

export const showCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.SHOW_CART_DROPDOWN,
});

export const hideCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.HIDE_CART_DROPDOWN,
});

export const toggleCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.TOGGLE_CART_DROPDOWN,
});