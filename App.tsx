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
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} testID="title">
                Recipies
              </Text>
              <RecipeList />
            </View>
          </ScrollView>
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
