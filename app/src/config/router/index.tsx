// In App.js in a new project

import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../../screens';
import {RootState} from '../../redux/reducers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const AppstackEntry = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isLoggedIn = useSelector(
    (state: RootState) => state.loginReducer.isLoggedIn,
  );

  function AuthStack() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="Register" component={Screens.Register} />
      </Stack.Navigator>
    );
  }
  function HomeStack() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Screens.Home} />
        <Tab.Screen name="Logout" component={Screens.Logout} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default AppstackEntry;
