import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {fetchRecipes} from '../Redux/actions/recipeActions';
import {useSelector, useDispatch} from 'react-redux';

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
  return <View testID="recipe-list"></View>;
};

const styles = StyleSheet.create({});

export default RecipeList;
