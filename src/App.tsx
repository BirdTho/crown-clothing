import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { User } from './types';
import {setCurrentUser, clearCurrentUser, RootState} from './redux';

import { HomePage, Page404, SignInAndSignUp } from './pages';
import {CollectionPreview, Header} from './components';
import SHOP_DATA from './model/shopModel';
import {ShopData} from './types';

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

interface StateProps {
  currentUser: User | null,
}

interface DispatchProps {
  setCurrentUser: (user: User) => void,
  clearCurrentUser: () => void,
}

type Props = DispatchProps & StateProps;

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
          <Route exact path='/signin'
            render={() => (this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>)}
          />
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

const mapStateToProps = ({ user: { currentUser }}: RootState): StateProps => ({
  currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
