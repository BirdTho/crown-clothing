import React from "react";

import { MenuItem } from "./MenuItem";

import sectionsModel from '../../model/sectionsModel';

import './HomePage.scss';

export function HomePage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        {sectionsModel.map(({title}) => {
          return <MenuItem title={title.toUpperCase()}/>
        })}
      </div>
    </div>
  );
}