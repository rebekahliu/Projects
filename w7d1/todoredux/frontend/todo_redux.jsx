import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.removeTodo = removeTodo;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('main')
  );
});
