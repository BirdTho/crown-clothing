import React from "react";

import './MenuItem.scss';

interface Props {
  data: {
    title: string,
    subtitle?: string,
    imageUrl?: string,
    size?: string
  }
}

export function MenuItem({ data: {title, subtitle = 'SHOP NOW', imageUrl, size = '' }}: Props) {
  return (
    <div className={`${size} menu-item`}>
      { imageUrl ? <div className='bg-image' style={{ backgroundImage: `url(${imageUrl})` }}/> : null}
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  );
}
