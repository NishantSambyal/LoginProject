import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import LoginReducer from './LoginReducer';

const rootReducer = combineReducers({
  homeReducer: HomeReducer,
  loginReducer: LoginReducer,
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
