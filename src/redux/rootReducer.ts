import {combineReducers} from 'redux';

import {userReducer, cartReducer} from './';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
