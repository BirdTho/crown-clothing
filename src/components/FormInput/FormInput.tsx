import React, {ChangeEvent} from 'react';
import cn from 'classnames';

import './FormInput.scss';

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  label?: string | null,
  name: string,
  value: string,
  type: string,
  required?: boolean
}

export const FormInput = ({ handleChange, label = null, ...otherProps }: Props) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps}/>
    { label ? (<label className={cn('form-input-label', otherProps.value.length ? 'shrink' : null)}
       htmlFor={otherProps.name}>{label}</label>) : null }
  </div>
);