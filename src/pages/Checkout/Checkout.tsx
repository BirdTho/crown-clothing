import React from 'react';
import {connect} from 'react-redux';

import {RootState, selectCartItems, selectCartTotal} from '../../redux';
import {CartItem} from '../../types';

import './Checkout.scss';
import {CheckoutItem} from '../../components';

interface StateProps {
  cartItems: CartItem[],
  cartTotal: number,
}

type Props = StateProps;

export const componentCheckout = ({cartItems, cartTotal}: Props) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={`ci${cartItem.id}`} item={cartItem}/>)
      }
      <div className='total'>${cartTotal}</div>
    </div>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export const Checkout = connect(mapStateToProps)(componentCheckout);