import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppstackEntry from './src/config/router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={styles.mainContainer}>
          <AppstackEntry />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
