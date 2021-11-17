// In App.js in a new project

import * as React from 'react';
import { useSelector } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../../screens';
import { RootState } from '../../redux/reducers';


const AppstackEntry: React.FC<any> = props => {
  const isLoggedIn = useSelector((state: RootState) => state.loginReducer.isLoggedIn)

  function AuthStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="Register" component={Screens.Register} />
      </Stack.Navigator>
    );
  }
  function HomeStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screens.Home} />
      </Stack.Navigator>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default AppstackEntry;
