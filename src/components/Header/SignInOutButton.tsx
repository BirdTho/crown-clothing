import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

interface Props {
  isLoggedIn: boolean,
}

export const SignInOutButton = React.memo(({isLoggedIn}: Props) => {
  if (isLoggedIn) {
    return <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>;
  } else {
    return <Link className='option' to='/signin'>SIGN IN</Link>;
  }
});
