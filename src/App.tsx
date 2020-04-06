import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { User } from './types';
import { setCurrentUser, clearCurrentUser } from './redux';

import { HomePage, Page404, SignInAndSignUp } from './pages';
import {CollectionPreview, Header} from './components';
import SHOP_DATA, {ShopData} from './model/shopModel';

import firebase, { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';
import {Dispatch} from 'redux';

interface UserSnapShot {
  displayName: string,
  email: string,
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
}

interface DispatchProps {
  setCurrentUser: (user: User) => void,
  clearCurrentUser: () => void
}

type Props = DispatchProps;

class App extends React.Component<Props> {
  unsubscribeFromAuth: Function;

  constructor(props: Props) {
    super(props);

    this.unsubscribeFromAuth = () => {};
  }

  componentDidMount(): void {
    const {
      setCurrentUser,
      clearCurrentUser,
    } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot: firebase.firestore.DocumentSnapshot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() as UserSnapShot,
          });
        });
      } else {
        clearCurrentUser();
      }
    });
  }

  componentWillUnmount(): void {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className=''>
        <Header/>
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
