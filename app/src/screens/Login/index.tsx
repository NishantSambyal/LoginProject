import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './login.styles';
import {LoginActions} from '../../redux/actions/loginscreen.actions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ErrorConst from '../../constants/errorConstants';
import Constants from '../../constants/constants';
import {showAlert} from '../../utils/utilityFunction';
import {RootState} from '../../redux/reducers';
import actionCreaters from '../../redux/actions/loginscreen.actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  const {username, password, error} = useSelector(
    (loginState: RootState) => loginState.loginReducer,
  );

  const {loginClicked} = bindActionCreators(actionCreaters, dispatch);

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
    loginClicked(userInfo);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Welcome to Login App</Text>
      <TextInput
        style={styles.textUsername}
        placeholder={'Enter Username'}
        value={username}
        onChangeText={e => onChangeUsername(e)}
      />
      <TextInput
        style={styles.textPassword}
        placeholder={'Enter Password'}
        secureTextEntry
        value={password}
        onChangeText={val => onChangePassword(val)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={onLoginClick}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.accountCreateWrapper}>
        <Text style={styles.greyText}>Dont have an account?</Text>
        <TouchableOpacity onPress={onRegisterClick}>
          <Text> Click to Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
