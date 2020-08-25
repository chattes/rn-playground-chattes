import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import configureStore from './Redux/store';
import {Provider} from 'react-redux';
import RecipeList from './Components/RecipeList';

const store = configureStore();

const App = (): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text style={styles.title} testID="title">
            Recipies
          </Text>
          <RecipeList />
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
