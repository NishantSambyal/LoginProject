import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

const rootReducer = combineReducers({
  homeReducer: HomeReducer,
  loginReducer: LoginReducer,
  registerReducer: RegisterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
