export const REQUEST_RECIPES: string = 'REQUEST_RECIPES';
export const RECEIVE_RECIPES: string = 'RECEIVE_RECIPES';

export const requestRecipes = () => ({
  type: REQUEST_RECIPES,
});

export const receiveRecipes = <Something>(data: Something[]) => ({
  type: RECEIVE_RECIPES,
  data,
});

export const fetchRecipes = () => (dispatch) => {
  console.log('>>>>> Fetching recipes<<<<<<');
  dispatch(requestRecipes());
  fetch('https://run.mocky.io/v3/3e7e9ac1-7d29-45d5-b45f-c9cdd48a0bc0')
    .then((data) => data.json())
    .then((recipes) => dispatch(receiveRecipes(recipes)));
};
