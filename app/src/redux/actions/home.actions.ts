export enum LoginActionType {
  USERNAME_ONTEXT_CHANGE = 'Username onText Change',
  LOGIN_CLICKED = 'LOGIN_CLICKED',
}

export class LoginActions {
  static loginClicked(value: string) {
    return {
      type: LoginActionType.LOGIN_CLICKED,
      payload: value,
    };
  }
  static getUserName(username: string) {
    return {
      type: LoginActionType.USERNAME_ONTEXT_CHANGE,
      payload: username,
    };
  }
}
