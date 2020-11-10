import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initicalState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const updatedIngredients = updateObject(state.ingredients, {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  });
  const updatedState = updateObject(state, {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  });
  return updatedState;
};

const removeIngredient = (state, action) => {
  const updatedIngredients = updateObject(state.ingredients, {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  });
  const updatedState = updateObject(state, {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  });
  return updatedState;
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      meat: action.ingredients.meat,
      cheese: action.ingredients.cheese,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const fetchIngredientsFail = (state, action) => {
  return updateObject(state, {
    error: true,
  });
};

const reducer = (state = initicalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENTS:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILD:
      return fetchIngredientsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
