import React from 'react';

import {ShopData} from '../../types';
import {CollectionItem} from '..';

import './CollectionPreview.scss';

interface StateProps {
  readonly data: ShopData
}

type Props = StateProps;

export const CollectionPreview = ({ data }: Props) => {
  const {
    items,
    id,
    title,
  } = data;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.filter((item, i) => i < 4).map(item => (<CollectionItem key={`shopdata${id}item${item.id}`} data={item}/>))
        }
      </div>
    </div>
  );
};
