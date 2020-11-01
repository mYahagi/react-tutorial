import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Clock from './component/clock';
import { createStore } from 'redux'
import todoApp from '../src/redux/reducers'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './redux/actions';
import App from './component/App';

// 第二引数でstateの初期値の指定が可能
const store = createStore(todoApp);
// console.log(store.getState());

// store.dispatch(addTodo('Learn about actions'));
// console.log(store.getState());

// store.dispatch(toggleTodo(0));
// console.log(store.getState());

// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
