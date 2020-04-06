import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import { CartIcon, CardDropdown } from '..';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';

import './Header.scss';
import {User} from '../../types';
import {RootState} from '../../redux';

interface StateProps {
  currentUser: User | null,
  hidden: boolean
}

type Props = StateProps;

const componentHeader = ({ currentUser, hidden }: Props) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {hidden ? null : <CardDropdown/>}
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}: RootState) => ({
  currentUser,
  hidden,
});

export const Header = connect(mapStateToProps)(componentHeader);
