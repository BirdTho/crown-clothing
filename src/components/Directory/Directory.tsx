import React from 'react';

import './Directory.scss';
import {MenuItem} from '..';

interface Props {
  data: any[]
}

export const Directory = ({data}: Props) => {
  return (
    <div className='directory-menu'>
      {data.map((item, i) => <MenuItem key={`menuitem_${item.id || i}`} data={item}/>)}
    </div>
  )
};
