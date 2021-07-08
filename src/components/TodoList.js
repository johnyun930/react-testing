import React from 'react';
import TodoItem from './TodoItem';
export default function TodoList({todos, onToggle, onRemove}){
    return(
        <ul data-testid="TodoList">
          {todos.map(todo => (
             <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id}/>
              ))}
        </ul>
    )

};
