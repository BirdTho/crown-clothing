import {USER_ACTIONS, UserAction} from './userActions';

import { User } from '../../types';

export interface UserState {
  currentUser: User | null,
}

const INITIAL_STATE : UserState = {
  currentUser: null,
};


export const userReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
  switch (action.type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        currentUser: action.payload
      };
    case USER_ACTIONS.CLEAR_CURRENT_USER:
      return {
        currentUser: null,
      };
    default:
      return state;
  }
};