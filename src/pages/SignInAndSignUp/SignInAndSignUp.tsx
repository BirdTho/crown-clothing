import React from 'react';

import './SignInAndSignUp.scss';
import {SignIn} from '../../components';

interface Props {

}

export const SignInAndSignUp = (props: Props) => (
  <div className='sign-in-and-sign-up'>
    <SignIn/>
  </div>
);
