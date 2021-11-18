import {RegisterActionType} from '../../actions/register.actions';
interface Action {
  type: string;
  payload?: string | object;
}
interface State {
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  designation: string;
  userRegistered: boolean;
  userRegisteredError: boolean;
}
export const initialState: State = {
  username: '',
  password: '',
  confirmPassword: '',
  name: '',
  designation: '',
  userRegistered: false,
  userRegisteredError: false,
};

export default (state = initialState, action: any): State => {
  switch (action.type) {
    case RegisterActionType.USERNAME_ONTEXT_CHANGE:
      return {...state, username: action.payload};

    case RegisterActionType.PASSWORD_ONTEXT_CHANGE:
      return {...state, password: action.payload};

    case RegisterActionType.CONFIRM_PASSWORD_ONTEXT_CHANGE:
      return {...state, confirmPassword: action.payload};

    case RegisterActionType.NAME_ONTEXT_CHANGE:
      return {...state, name: action.payload};

    case RegisterActionType.DESIGNATION_ONTEXT_CHANGE:
      return {...state, designation: action.payload};

    case RegisterActionType.USER_REGISTERED_SUCCESS:
      return {...state, userRegistered: true};

    case RegisterActionType.USER_REGISTERED_ACKNOWLEDGED:
      return {...state, userRegistered: false};

    case RegisterActionType.USER_ALREADY_REGISTERED:
      return {...state, userRegisteredError: true};

    case RegisterActionType.RESET_TEXT_FIELDS:
      return {
        ...state,
        username: initialState.username,
        password: initialState.password,
        confirmPassword: initialState.confirmPassword,
        name: initialState.name,
        designation: initialState.designation,
      };

    case RegisterActionType.LOGIN_CLICKED:
      return {...state};

    default:
      return state;
  }
};
