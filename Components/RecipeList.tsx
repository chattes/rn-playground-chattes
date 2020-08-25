import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {fetchRecipes} from '../Redux/actions/recipeActions';
import {useSelector, useDispatch} from 'react-redux';

const renderItem = ({item}: Record): JSX.Element => (
  <View style={styles.table}>
    <Text>{item.title}</Text>
    <Text>{item.price}</Text>
  </View>
);

const RecipeList = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const {
    recipes: {loading, collection},
  } = useSelector((state) => state);
  console.log(collection);
  if (loading) {
    return (
      <View testID="recipe-list">
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <SafeAreaView testID="recipe-list" style={{flex: 1}}>
      <FlatList
        data={collection}
        renderItem={renderItem}
        keyExtractor={(item) => Math.floor(Math.random() * 100).toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginHorizontal: 10,
  },
});

export default RecipeList;
