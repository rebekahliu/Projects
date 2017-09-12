import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import {receiveTodo, removeTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {todos: allTodos(state)};
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoContainer;
