import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppstackEntry from './src/config/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <AppstackEntry />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
