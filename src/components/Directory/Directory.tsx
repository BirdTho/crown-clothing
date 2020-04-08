import React from 'react';

import {MenuItem} from '..';
import sectionsModel from '../../model/sectionsModel';

import './Directory.scss';

export const Directory = React.memo(() => {
  return (
    <div className='directory-menu'>
      {sectionsModel.map((item, i) => <MenuItem key={`menuitem_${item.id || i}`} data={item}/>)}
    </div>
  )
});
