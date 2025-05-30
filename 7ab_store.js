npm install react-redux
npm install @reduxjs/toolkit react-redux

import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
