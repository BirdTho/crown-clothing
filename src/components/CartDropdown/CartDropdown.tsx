import React from 'react';
import {connect} from 'react-redux';

import { CartDropdownItem, CustomButton } from '..';

import './CartDropdown.scss';
import {CartItem} from '../../types';
import {RootState} from '../../redux';

interface StateProps {
  cartItems: CartItem[]
}

type Props = StateProps

const componentCardDropdown = ({cartItems}: Props) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartDropdownItem key={`cdi${cartItem.id}`} item={cartItem}/>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({cart: {cartItems}}: RootState): StateProps => ({
  cartItems,
});

export const CardDropdown = connect(mapStateToProps)(componentCardDropdown);
