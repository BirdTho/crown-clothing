import {CartItem, ShopItem} from '../../types';

export const addItemToCart = (cartItems: CartItem[], item: ShopItem): CartItem[] => {
  const index = cartItems.findIndex((cartItem: CartItem) => cartItem.id === item.id);
  if (index === -1) {
    return [
      ...cartItems,
      {
        ...item,
        quantity: 1,
      }
    ];
  } else {
    const cartItem = cartItems[index];
    const newCartItems = [...cartItems];
    newCartItems[index] = {
      ...cartItem,
      quantity: 1 + cartItem.quantity,
    };
    return newCartItems;
  }
};
