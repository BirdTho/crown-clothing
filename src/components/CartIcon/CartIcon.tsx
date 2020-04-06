import React from 'react';

import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';
import {Dispatch} from 'redux';

interface DispatchProps {
  toggleCartDropdown: () => void
}

type Props = DispatchProps;

const componentCartIcon = ({toggleCartDropdown}: Props) => (
  <div className='cart-icon noselect' onClick={toggleCartDropdown}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export const CartIcon = connect(null, mapDispatchToProps)(componentCartIcon) ;
