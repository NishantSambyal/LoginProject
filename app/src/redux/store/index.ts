import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['loginReducer'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const configuredStore = () =>
  createStore(persistedReducer, applyMiddleware(thunk));

export const store = configuredStore();
export const persistor = persistStore(store);
