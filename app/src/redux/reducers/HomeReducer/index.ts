import {LoginActionType} from '../../actions/home.actions';

interface State {
  username: string;
}
export const initialState: State = {
  username: '',
};

export default (state = initialState, action: any): State => {
  switch (action.type) {
    case LoginActionType.USERNAME_ONTEXT_CHANGE:
      return {...state, username: action.payload};
    case LoginActionType.LOGIN_CLICKED:
      return {...state};

    default:
      return state;
  }
};
