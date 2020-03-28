import React from 'react';
import {Route} from 'react-router-dom';

import {CollectionPreview} from '../../components';

import SHOP_DATA, { ShopData } from '../../model/shopModel';

import './Shop.scss';

export const Shop = () => {
  return (
    <>
    {SHOP_DATA.map((data: ShopData) => {
      return (
        <Route key={`route${data.id}`} path={`shop/${data.routeName}`} render={(routeProps) => {
          return <CollectionPreview key={`shopdata${data.id}`} data={data} {...routeProps}/>;
        }}/>
      );
    })}
    </>
  );
};