// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, editInput);
    setIsEditing(false);
  };


  return (
    <div className="todo-item">
      <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
      {isEditing ? (
        <>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`} >{todo.text}</span>
          <div>
            {!todo.completed && (
            <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button className='todoComplete'>Completed</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
// src/components/TodoItem.js