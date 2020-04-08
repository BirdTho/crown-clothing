import React from 'react';
import {connect} from 'react-redux';

import {ShopItem} from '../../types';
import {CustomButton} from '..';

import './CollectionItem.scss';
import {addCartItem, CartAction} from '../../redux';

interface DispatchProps {
  addCartItem: (item: ShopItem) => CartAction,
}

interface OwnProps {
  data: ShopItem,
}

type Props = OwnProps & DispatchProps;

export const componentCollectionItem = ({data, addCartItem}: Props) => {
  const {imageUrl, name, price} = data;
  return (
    <div className='collection-item noselect'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(data)} inverted>Add to cart</CustomButton>
    </div>
  );
};

export const CollectionItem = connect(null, {addCartItem})(componentCollectionItem);



