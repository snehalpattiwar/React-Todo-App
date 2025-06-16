// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, editInput);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
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
          <span>{todo.text}</span>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
// src/components/TodoItem.js