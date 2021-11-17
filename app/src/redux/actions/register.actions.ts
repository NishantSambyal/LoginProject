import {setAsyncStorage, getAsyncStorage} from '../../utils/asyncStorage';
import {LOGGED_IN_USER} from '../../constants/asyncKeys';
import {searchUser, includeInArray} from '../../utils/utilityFunction';

export enum RegisterActionType {
  USERNAME_ONTEXT_CHANGE = 'USERNAME_ONTEXT_CHANGE',
  PASSWORD_ONTEXT_CHANGE = 'PASSWORD_ONTEXT_CHANGE',
  CONFIRM_PASSWORD_ONTEXT_CHANGE = 'CONFIRM_PASSWORD_ONTEXT_CHANGE',
  NAME_ONTEXT_CHANGE = 'NAME_ONTEXT_CHANGE',
  DESIGNATION_ONTEXT_CHANGE = 'DESIGNATION_ONTEXT_CHANGE',
  RESET_TEXT_FIELDS = 'RESET_TEXT_FIELDS',
  VALID_USER = 'VALID_USER',
  USER_ALREADY_REGISTERED = 'USER_ALREADY_REGISTERED',
  INVALID_USER = 'INVALID_USER',
  USER_REGISTERED_SUCCESS = 'USER_REGISTERED_SUCCESS',
  USER_REGISTERED_ACKNOWLEDGED = 'USER_REGISTERED_ACKNOWLEDGED',
  LOGIN_CLICKED = 'LOGIN_CLICKED',
}
export interface Person {
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  designation: string;
}

export class RegisterActions {
  static setUserName(username: string) {
    return {
      type: RegisterActionType.USERNAME_ONTEXT_CHANGE,
      payload: username,
    };
  }
  static setPassword(password: string) {
    return {
      type: RegisterActionType.PASSWORD_ONTEXT_CHANGE,
      payload: password,
    };
  }
  static setConfirmPassword(confirmPassword: string) {
    return {
      type: RegisterActionType.CONFIRM_PASSWORD_ONTEXT_CHANGE,
      payload: confirmPassword,
    };
  }
  static setName(name: string) {
    return {
      type: RegisterActionType.NAME_ONTEXT_CHANGE,
      payload: name,
    };
  }
  static setDesignation(designation: string) {
    return {
      type: RegisterActionType.DESIGNATION_ONTEXT_CHANGE,
      payload: designation,
    };
  }
}
const resetTextFields = () => {
  return (dispatch: any) => {
    dispatch({
      type: RegisterActionType.RESET_TEXT_FIELDS,
    });
    dispatch({
      type: RegisterActionType.USER_REGISTERED_ACKNOWLEDGED,
    });
  };
};

const registerClicked = (userInfo: Person) => {
  return (dispatch: any) => {
    getAsyncStorage(LOGGED_IN_USER)
      .then(data => {
        if (data) {
          const userExist = includeInArray(
            JSON.parse(data),
            'username',
            userInfo.username,
          );
          if (!userExist) {
            let users = JSON.parse(data);
            users.push(userInfo);
            setAsyncStorage(LOGGED_IN_USER, JSON.stringify(users));
            dispatch({
              type: RegisterActionType.USER_REGISTERED_SUCCESS,
            });
          } else {
            dispatch({
              type: RegisterActionType.USER_ALREADY_REGISTERED,
              payload: userInfo,
            });
          }
        } else {
          setAsyncStorage(LOGGED_IN_USER, JSON.stringify([userInfo]));
          dispatch({
            type: RegisterActionType.USER_REGISTERED_SUCCESS,
          });
        }
      })
      .catch(err => console.log('Error in registering user function', err));
  };
};
export default {registerClicked, resetTextFields};
