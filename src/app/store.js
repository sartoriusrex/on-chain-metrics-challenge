import { combineReducers, configureStore } from '@reduxjs/toolkit';
import difficultyReducer from '../pages/Difficulty/difficultySlice';
import hashRateReducer from '../pages/HashRate/hashRateSlice';

const rootReducer = combineReducers({
  difficulty: difficultyReducer,
  hashRate: hashRateReducer
})

export default configureStore({
  reducer: rootReducer
});
