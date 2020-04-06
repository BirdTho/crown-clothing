import React from 'react';

import { CustomButton } from '..';

import './CartDropdown.scss';

const componentCardDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>

    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export const CardDropdown = componentCardDropdown;
