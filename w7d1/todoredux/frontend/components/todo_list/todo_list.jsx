import React from 'react';
import Item from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo}) => {
  const listItems = todos.map((todo, idx) => (
    <Item key={idx} todo={todo} removeTodo={removeTodo}/>
  ));

  return(
    <div>
      <TodoForm receiveTodo = {receiveTodo}/>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default TodoList;
