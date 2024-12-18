import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState('⭐');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text, category, priority });
      setText('');
      setCategory('Work');
      setPriority('⭐');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mb-4">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-3 py-2 border rounded focus:outline-none"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 border rounded focus:outline-none"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-3 py-2 border rounded focus:outline-none"
      >
        <option value="⭐">⭐ High</option>
        <option value="✨">✨ Medium</option>
        <option value="⚡">⚡ Low</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
