import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import cn from 'classnames';

import './CustomButton.scss';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: any,
  isGoogleSignIn?: boolean,
}

export const CustomButton = React.memo(({ children, isGoogleSignIn = false, ...rest }: Props) => (
  <button className={cn('custom-button', isGoogleSignIn ? 'google-sign-in' : null)} {...rest}>
    {children}
  </button>
));