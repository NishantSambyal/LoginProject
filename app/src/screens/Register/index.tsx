import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import Constants from '../../constants/constants';
import styles from './register.styles';
import {showAlert} from '../../utils/utilityFunction';
import {RootState} from '../../redux/reducers';
import {RegisterActions} from '../../redux/actions/register.actions';
import actionCreaters from '../../redux/actions/register.actions';

const Register = () => {
  const dispatch = useDispatch();
  const {
    username,
    password,
    confirmPassword,
    name,
    designation,
    userRegistered,
    userRegisteredError,
  } = useSelector((state: RootState) => state.registerReducer);
  const {registerClicked, resetTextFields} = bindActionCreators(
    actionCreaters,
    dispatch,
  );

  const onChangeUsername = (usernameTxt: string) => {
    dispatch(RegisterActions.setUserName(usernameTxt));
  };
  const onChangePassword = (passwordTxt: string) => {
    dispatch(RegisterActions.setPassword(passwordTxt));
  };
  const onChangeConfirmPassword = (confirmPasswordTxt: string) => {
    dispatch(RegisterActions.setConfirmPassword(confirmPasswordTxt));
  };
  const onChangeName = (namedTxt: string) => {
    dispatch(RegisterActions.setName(namedTxt));
  };
  const onChangeDesignation = (designationTxt: string) => {
    dispatch(RegisterActions.setDesignation(designationTxt));
  };
  const onRegisterClick = () => {
    const userInfo = {username, password, confirmPassword, name, designation};
    registerClicked(userInfo);
  };

  useEffect(() => {
    if (userRegistered) {
      showAlert(Constants.USER_REGISTER_SUCCESSFULLY, resetTextFields);
    }
  }, [userRegistered]);

  useEffect(() => {
    if (userRegisteredError) {
      showAlert(Constants.USER_ALREADY_REGISTERED, resetTextFields);
    }
  }, [userRegisteredError]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Welcome to Registration Screen</Text>
      <TextInput
        style={styles.textUsername}
        placeholder={'Username'}
        value={username}
        onChangeText={e => onChangeUsername(e)}
      />
      <TextInput
        style={styles.textPassword}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={val => onChangePassword(val)}
      />
      <TextInput
        style={styles.textPassword}
        placeholder={'Confirm Password'}
        secureTextEntry
        value={confirmPassword}
        onChangeText={val => onChangeConfirmPassword(val)}
      />
      <TextInput
        style={styles.textUsername}
        placeholder={'Name'}
        value={name}
        onChangeText={e => onChangeName(e)}
      />
      <TextInput
        style={styles.textUsername}
        placeholder={'Designation'}
        value={designation}
        onChangeText={e => onChangeDesignation(e)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={onRegisterClick}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
