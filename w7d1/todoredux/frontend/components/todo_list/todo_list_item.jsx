import React from 'react';

const Item = ({todo, removeTodo}) => (
  <div>
    <li>{todo[1].title}</li>
    <button value="Remove Todo" onClick={removeTodo(todo)}>Remove Todo</button>
  </div>
);

export default Item;
