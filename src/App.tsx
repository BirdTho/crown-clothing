import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, Page404, SignInAndSignUp } from './pages';
import {CollectionPreview, Header} from './components';
import SHOP_DATA, {ShopData} from './model/shopModel';

import firebase, { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

interface UserSnapShot {
  displayName: string,
  email: string,
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
}

export interface User {
  id: string,
  displayName: string,
  email: string,
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
}

interface State {
  currentUser: User | null,
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot: firebase.firestore.DocumentSnapshot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() as UserSnapShot,
            },
          });
        });
      } else {
        this.setState({currentUser: null});
      }
    });
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
