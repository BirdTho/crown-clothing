import React from "react";
import {withRouter} from 'react-router-dom';
import './MenuItem.scss';

interface Props {
  data: {
    title: string,
    subtitle?: string,
    imageUrl?: string,
    size?: string,
    linkUrl: string,
  }
}

export const MenuItem = withRouter(({
  data: {title, linkUrl, subtitle = 'SHOP NOW', imageUrl, size = '' }, history, match}: Props | any) => {
    return (
      <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        { imageUrl ? <div className='bg-image' style={{ backgroundImage: `url(${imageUrl})` }}/> : null}
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>{subtitle}</span>
        </div>
      </div>
    );
  }
);
