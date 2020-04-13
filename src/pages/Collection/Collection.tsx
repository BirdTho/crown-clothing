import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';

import {CollectionItem} from '../../components';
import {ShopData} from '../../types';
import {RootState, selectDirectoryShopCategory} from '../../redux';

import './Collection.scss';
import {Page404} from '..';

interface CategoryParams {
  readonly category: string
}

interface LocalProps {
  readonly data: ShopData | undefined
}

type Props = RouteComponentProps & LocalProps & RouteComponentProps;

export const componentCollection = ({data, ...routeComponentProps}: Props) => {
  if (data) {
    const {
      title, items, id,
    } = data;
    return (
      <div className='collection-page'>
        <h2 className='title'>{ title }</h2>
        <div className='items'>
          {
            items.map(item => <CollectionItem key={`cmpColl${id}item${item.id}`} data={item}/>)
          }
        </div>
      </div>
    );
  } else {
    return <Page404 {...routeComponentProps}/>
  }

};

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps) => ({
  data: selectDirectoryShopCategory(state)((ownProps.match.params as CategoryParams).category)
});

export const  Collection = connect(mapStateToProps)(componentCollection);
