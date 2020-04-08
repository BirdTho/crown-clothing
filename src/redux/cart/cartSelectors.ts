import {RootState} from '../rootReducer';
import {createSelector} from '@reduxjs/toolkit';
import {CartItem} from '../../types';

const selectCartItems = (state: RootState) => state.cart.cartItems;

export const selectTotalItemCount = createSelector(
  selectCartItems,
  (cartItems: CartItem[]) => {
    return cartItems.reduce((total, cartItem: CartItem) => cartItem.quantity + total, 0);
  }
);
