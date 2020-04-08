import React from 'react';

import './CartDropdownItem.scss';
import {CartItem} from '../../types';

interface Props {
  item: CartItem
}

export const CartDropdownItem = ({item: { imageUrl, price, name, quantity}}: Props) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item'/>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
);
