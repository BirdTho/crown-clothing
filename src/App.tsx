import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, Page404 } from './pages';

import './App.scss';
import SHOP_DATA, {ShopData} from './model/shopModel';
import {CollectionPreview} from './components';

function App() {
  return (
    <div className=''>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        {SHOP_DATA.map((data: ShopData) => {
          return (
            <Route key={`route${data.id}`} path={`/shop/${data.routeName}`} render={(routeProps) => {
              return <CollectionPreview key={`shopdata${data.id}`} data={data} {...routeProps}/>;
            }}/>
          );
        })}
        <Route component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
