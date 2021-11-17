import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'darkorange',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  textUsername: {
    alignSelf: 'center',
    width: '80%',
    height: 40,
    marginTop: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
  },
  textPassword: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
    height: 40,
    color: 'black',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
  },
  loginButton: {
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 60,
    backgroundColor: 'darkorange',
    padding: 10,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
  },
  accountCreateWrapper: {
    marginTop: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  greyText: {
    textAlign: 'center',
    color: 'grey',
  },
});

export default styles;
