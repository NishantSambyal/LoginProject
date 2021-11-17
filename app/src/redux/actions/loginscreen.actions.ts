import {setAsyncStorage, getAsyncStorage} from '../../utils/asyncStorage';
import {LOGGED_IN_USER} from '../../constants/asyncKeys';
import {searchUser} from '../../utils/utilityFunction';
export interface Person {
  username: string;
  password: string;
}

export enum LoginActionType {
  USERNAME_ONTEXT_CHANGE = 'USERNAME_ONTEXT_CHANGE',
  PASSWORD_ONTEXT_CHANGE = 'PASSWORD_ONTEXT_CHANGE',
  RESET_TEXT_FIELDS = 'RESET_TEXT_FIELDS',
  VALID_USER = 'VALID_USER',
  INVALID_USER = 'INVALID_USER',
  LOGIN_CLICKED = 'LOGIN_CLICKED',
}

export class LoginActions {xs
  static setUserName(username: string) {
    return {
      type: LoginActionType.USERNAME_ONTEXT_CHANGE,
      payload: username,
    };
  }
  static setPassword(password: string) {
    return {
      type: LoginActionType.PASSWORD_ONTEXT_CHANGE,
      payload: password,
    };
  }
  static resetTextFields() {
    return {
      type: LoginActionType.RESET_TEXT_FIELDS,
    };
  }
}
const loginClicked = (userInfo: Person) => {
  return (dispatch: any) => {
    getAsyncStorage(LOGGED_IN_USER)
      .then(data => {
        if (data) {
          const user = searchUser(
            JSON.parse(data),
            'username',
            'password',
            userInfo.username,
            userInfo.password,
          );
          if (user) {
            dispatch({
              type: LoginActionType.VALID_USER,
              payload: user,
            });
          } else {
            dispatch({
              type: LoginActionType.INVALID_USER,
            });
          }
        } else {
          dispatch({
            type: LoginActionType.INVALID_USER,
          });
        }
      })
      .catch(err => console.log('Error while get login details', err));
  };
};
export default {loginClicked};
