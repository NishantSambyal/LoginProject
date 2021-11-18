import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './login.styles';
import {LoginActions} from '../../redux/actions/loginscreen.actions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ErrorConst from '../../constants/errorConstants';
import Constants from '../../constants/constants';
import {showAlert} from '../../utils/utilityFunction';
import Button from '../../components/Button';
import {RootState} from '../../redux/reducers';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  const {username, password, error} = useSelector(
    (loginState: RootState) => loginState.loginReducer,
  );

  useEffect(() => {
    const resetFields = dispatch(LoginActions.resetTextFields);
    switch (error) {
      case ErrorConst.ERROR_100: {
        showAlert(Constants.ERROR_REGISTER, () => dispatch(resetFields));
        break;
      }
      case ErrorConst.ERROR_101: {
        showAlert(Constants.USER_LOGIN_FAILED, () => dispatch(resetFields));
        break;
      }
    }
  }, [error]);

  const onChangeUsername = (usernameTxt: string) => {
    dispatch(LoginActions.setUserName(usernameTxt));
  };
  const onChangePassword = (passwordTxt: string) => {
    dispatch(LoginActions.setPassword(passwordTxt));
  };
  const onRegisterClick = () => {
    navigation.navigate('Register');
  };
  const onLoginClick = () => {
    const userInfo = {username, password};
    dispatch(LoginActions.loginClicked(userInfo));
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{Constants.WELCOME_TO_LOGIN_APP}</Text>
      <TextInput
        style={styles.textUsername}
        placeholder={Constants.USER_NAME}
        value={username}
        onChangeText={e => onChangeUsername(e)}
      />
      <TextInput
        style={styles.textPassword}
        placeholder={Constants.PASSWORD}
        secureTextEntry
        value={password}
        onChangeText={val => onChangePassword(val)}
      />
      <Button
        style={styles.loginButton}
        title={Constants.LOGIN}
        onPress={onLoginClick}
      />
      <View style={styles.accountCreateWrapper}>
        <Text style={styles.greyText}>Dont have an account?</Text>
        <TouchableOpacity onPress={onRegisterClick}>
          <Text>{Constants.CLICK_TO_REGISTER}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
