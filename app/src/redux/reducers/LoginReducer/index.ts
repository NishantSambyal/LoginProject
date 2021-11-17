import {LoginActionType} from '../../actions/loginscreen.actions';

interface State {
  username: string;
  password: string;
  isError?: boolean;
  data: any;
  isLoggedIn: boolean;
  error: number;
}
export const initialState: State = {
  username: '',
  password: '',
  isError: false,
  data: {},
  isLoggedIn: false,
  error: 0,
};

export default (state = initialState, action: any): State => {
  switch (action.type) {
    case LoginActionType.USERNAME_ONTEXT_CHANGE:
      return {...state, username: action.payload};
    case LoginActionType.PASSWORD_ONTEXT_CHANGE:
      return {...state, password: action.payload};
    case LoginActionType.RESET_TEXT_FIELDS:
      return {
        ...state,
        username: initialState.username,
        password: initialState.password,
        error: initialState.error,
      };
    // case SAVE_LOGIN_USER_ERROR: {
    //   return {
    //     ...state,
    //     error: 100,
    //     isError: true,
    //   };
    // }
    case LoginActionType.INVALID_USER: {
      return {
        ...state,
        error: 101,
        isError: true,
      };
    }
    case LoginActionType.VALID_USER: {
      return {
        ...state,
        isError: false,
        data: action.payload,
        isLoggedIn: true,
      };
    }
    case LoginActionType.LOGOUT_USER: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
};
