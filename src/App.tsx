import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, Page404, SignInAndSignUp } from './pages';
import {CollectionPreview, Header} from './components';
import SHOP_DATA, {ShopData} from './model/shopModel';

import firebase, { auth } from './firebase/firebase.utils';

import './App.scss';

interface State {
  currentUser: firebase.User | null,
}

class App extends React.Component<any, State> {
  state: State;
  unsubscribeFromAuth: Function;

  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };

    this.unsubscribeFromAuth = () => {};
  }

  componentDidMount(): void {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount(): void {
    this.unsubscribeFromAuth();
  }

  render() {
    const {
      state: {
        currentUser,
      }
    } = this;
    return (
      <div className=''>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' component={SignInAndSignUp}/>
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
}

export default App;
