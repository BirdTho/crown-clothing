import React from 'react';
import {connect} from 'react-redux';

import {removeCartItem, addCartItem, reduceCartItem} from '../../redux';
import {CartItem} from '../../types';

import './CheckoutItem.scss';

interface DispatchProps {
  addCartItem: (item: CartItem) => void,
  removeCartItem: (item: CartItem) => void,
  reduceCartItem: (item: CartItem) => void,
}

interface LocalProps {
  item: CartItem
}

type Props = DispatchProps & LocalProps;

export const componentCheckoutItem = ({item, reduceCartItem, removeCartItem, addCartItem}: Props) => {
  const {
    name,
    price,
    quantity,
    imageUrl,
  } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item'/>
      </div>
      <span className='name'>{name}</span>
      <div className='quantity noselect'>
        <span className='up-arrow noselect' onClick={() => addCartItem(item)}>&#10148;</span>
        <span className='down-arrow noselect' onClick={() => reduceCartItem(item)}>&#10148;</span>
        <span className='number noselect'>{quantity}</span>
      </div>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeCartItem(item)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = {
  addCartItem,
  removeCartItem,
  reduceCartItem,
};

export const CheckoutItem = connect(null, mapDispatchToProps)(componentCheckoutItem);
