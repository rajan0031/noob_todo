// src/components/TodoInput.jsx
import React, { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add a New Task</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="What do you want to accomplish? ✨"
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
