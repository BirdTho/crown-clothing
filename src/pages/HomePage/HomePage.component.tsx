import React from "react";

import { Directory } from "../../components";

import sectionsModel from '../../model/sectionsModel';

import './HomePage.scss';

export function HomePage() {
  return (
    <div className='homepage'>
      <Directory data={sectionsModel}/>
    </div>
  );
}