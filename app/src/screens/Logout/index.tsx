import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoginActions} from '../../redux/actions/loginscreen.actions';

const Logout = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  const onLogoutClick = () => {
    dispatch(LoginActions.logoutClicked());
    // navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <Button
        title={'Logout User'}
        style={styles.loginButton}
        onPress={onLogoutClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 60,
    backgroundColor: 'darkorange',
    padding: 10,
  },
});

export default Logout;
