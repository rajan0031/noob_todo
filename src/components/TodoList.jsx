import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleSaveClick = (id) => {
    if (editText.trim()) {
      editTodo(id, editText);
    }
    setIsEditing(null);
    setEditText('');
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center p-2 rounded ${
            todo.completed ? 'bg-green-100 line-through' : 'bg-gray-100'
          }`}
        >
          {isEditing === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-grow px-2 py-1 border rounded"
            />
          ) : (
            <span
              onClick={() => toggleTodo(todo.id)}
              className="cursor-pointer flex-grow"
            >
              {todo.text}
            </span>
          )}
          <div className="flex space-x-2">
            {isEditing === todo.id ? (
              <button
                onClick={() => handleSaveClick(todo.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(todo.id, todo.text)}
                className="text-blue-500 hover:text-blue-600"
              >
                <FaEdit />
              </button>
            )}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
