import React from 'react';

import {MenuItem} from '..';

import './Directory.scss';

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
