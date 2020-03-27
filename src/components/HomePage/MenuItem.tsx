import React from "react";

import './MenuItem.scss';

interface Props {
  title: string,
  subtitle?: string,
}

export function MenuItem({ title, subtitle = 'SHOP NOW' }: Props) {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  );
}
