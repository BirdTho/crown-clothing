import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {ShopData} from '../../model/shopModel';
import {CollectionItem} from '..';

import './CollectionPreview.scss';

interface Props {
  data: ShopData
}

export const CollectionPreview = (props: Props & RouteComponentProps) => {
  const {
    data: {
      title,
      id,
      items,
    }
  } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item, i) => i < 4).map(item => {
          return (
            <CollectionItem key={`shopdata${id}item${item.id}`} data={item}/>
          )
        })}
      </div>
    </div>
  );
};
