import React from 'react';
import {connect} from 'react-redux';

import './CollectionsOverview.scss';
import {RootState, selectDirectoryShop} from '../../redux';
import {ShopData} from '../../types';
import {CollectionPreview} from '..';

interface StateProps {
  readonly shop: {
    [routeName: string]: ShopData
  }
}

type Props = StateProps;

export const componentCollectionsOverview = ({shop}: Props) => (
  <div className='collections-overview'>
    {Object.values(shop).map((data: ShopData) => (
      <CollectionPreview key={`shopdata${data.id}`} data={data}/>
    ))}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  shop: selectDirectoryShop(state)
});

export const CollectionsOverview = connect(mapStateToProps)(componentCollectionsOverview);
