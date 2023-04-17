import axios from 'axios';
export const GET_RECIPES_100 = 'GET_RECIPES_100';
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPES_BY_ID = 'GET_RECIPES_BY_ID';
export const POST_RECIPE = 'POST_RECIPE';
export const GET_DIETS = 'GET_DIETS';
export const FILTERED_BY_DIETS = 'FILTERED_BY_DIETS';
export const FILTERED_BY_ORIGIN = 'FILTERED_BY_ORIGIN';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_SCORE = 'ORDER_BY_SCORE';

export const orderByName = (payload) => {//donde despachas 
  // alert(payload)
  return{
    type: "ORDER_BY_NAME",
    payload
  };
};

export function orderByScore(payload){
  // alert(payload)
  return {
      type: "ORDER_BY_SCORE",
      payload
  }
};

export function filteredByDiet(payload){ 
  // alert(payload) 
  return {
      type: "FILTERED_BY_DIETS",
      payload
  }
};
export function filteredByOrigin(payload){ 
  // alert(payload)
  return {
      type: "FILTERED_BY_ORIGIN",
      payload
  }
};
export const getDiets = () => {
  return function(dispatch) {
    fetch('http://localhost:3001/diets/get')
    .then(response => response.json())  
    .then((data) => dispatch({type: GET_DIETS, payload: data}))    
    .catch(err => console.log(err))
  }
};

export const getRecipes100 = () => {
  return function(dispatch) {
    fetch('http://localhost:3001/recipes/all')
    .then(response => response.json())  
    .then((data) => dispatch({type: GET_RECIPES_100, payload: data}))
    .catch(err => console.log(err))
  }
};

export const getRecipesById = (id) => {
  return function(dispatch) {
    fetch('http://localhost:3001/recipes/' + id)
    .then(response => response.json())  
    .then((data) => dispatch({type: GET_RECIPES_BY_ID, payload: data}))
    .catch(err => console.log(err))
  }
};

    export const getRecipesByName = (name) => {
  
    return function(dispatch) {
      fetch('http://localhost:3001/recipes/?name=' + name)
      .then(response => response.json())  
      .then((data) => dispatch({type: GET_RECIPES_BY_NAME, payload: data}))
      .catch(err => console.log(err))
    }
};

export const postRecipe = ({name, image, recipeSummary, healthScore, stepByStep, diets}) => {

   return async function(dispatch) {
    const {data} = await axios.post('http://localhost:3001/recipes/post', {name, image, recipeSummary, healthScore, stepByStep, diets})
    dispatch({type: POST_RECIPE, payload: data})
    
  } 
};

