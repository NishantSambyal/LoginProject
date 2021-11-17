import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {spacing} from '../../utils/responsive';

const Home = () => {
  const {data} = useSelector(
    (loginState: RootState) => loginState.loginReducer,
  );
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome {data.name}</Text>
      <Text style={{...styles.detailsText, padding: 10, color: 'green'}}>
        Your Details are below
      </Text>
      <Text style={{...styles.detailsText}}>Name: {data.name}</Text>
      <Text style={{...styles.detailsText}}>Username: {data.username}</Text>
      <Text style={styles.detailsText}>Password: {data.password}</Text>
      <Text style={styles.detailsText}>Designation: {data.designation}</Text>

      <Text style={{...styles.detailsText, marginTop: 50, color: 'red'}}>
        To Logout navigate to Logout screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'darkorange',
    textAlign: 'center',
    fontSize: spacing(30),
  },
  detailsText: {
    color: 'black',
    textAlign: 'center',
    fontSize: spacing(16),
  },
});

export default Home;
