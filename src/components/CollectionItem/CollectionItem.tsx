import React from 'react';

import { ShopItem } from '../../model/shopModel';

import './CollectionItem.scss';

interface Props {
  data: ShopItem,
}

export const CollectionItem = ({data: {imageUrl, name, price, id}}: Props) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};
