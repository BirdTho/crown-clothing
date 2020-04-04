import React from 'react';

import {SignIn, SignUp} from '../../components';

import './SignInAndSignUp.scss';

interface Props {

}

export const SignInAndSignUp = (props: Props) => (
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
);
