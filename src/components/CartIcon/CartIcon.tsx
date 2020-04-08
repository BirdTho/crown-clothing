import React from 'react';
import {Dispatch} from 'redux';

import { connect } from 'react-redux';
import {RootState, toggleCartDropdown, selectCartItemCount} from '../../redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

interface StateProps {
  totalItems: number,
}

interface DispatchProps {
  toggleCartDropdown: () => void
}

type Props = DispatchProps & StateProps;

const componentCartIcon = ({toggleCartDropdown, totalItems}: Props) => {
  return (
    <div className='cart-icon noselect' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{totalItems}</span>
    </div>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  totalItems: selectCartItemCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(componentCartIcon) ;
