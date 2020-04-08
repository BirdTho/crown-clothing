import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { CartDropdownItem, CustomButton } from '..';

import './CartDropdown.scss';
import {CartItem} from '../../types';
import {RootState, selectCartItems, hideCartDropdown} from '../../redux';

interface StateProps {
  cartItems: CartItem[]
}

interface DispatchProps {
  dispatch: Dispatch
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const componentCardDropdown = ({cartItems, history, dispatch}: Props) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ?
        cartItems.map(cartItem => (
          <CartDropdownItem key={`cdi${cartItem.id}`} item={cartItem}/>
        )) : (
          <span className='empty-message'>Your cart is empty</span>
        )
      }
    </div>
    <CustomButton onClick={() => {
      dispatch(hideCartDropdown());
      history.push('/checkout');
    }}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: RootState): StateProps => ({
  cartItems: selectCartItems(state),
});

export const CardDropdown = withRouter(connect(mapStateToProps)(componentCardDropdown));
