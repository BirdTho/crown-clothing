import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { SignInOutButton } from './SignInOutButton';
import { CartIcon, CardDropdown } from '..';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';

import { RootState, selectIsLoggedIn, selectCartHidden } from '../../redux';

import './Header.scss';

interface StateProps {
  isLoggedIn: boolean,
  hidden: boolean
}

type Props = StateProps;

const componentHeader = ({ isLoggedIn, hidden }: Props) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      <SignInOutButton isLoggedIn={isLoggedIn}/>
      <CartIcon/>
    </div>
    {hidden ? null : <CardDropdown/>}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: selectIsLoggedIn(state),
  hidden: selectCartHidden(state),
});

export const Header = connect(mapStateToProps)(componentHeader);
