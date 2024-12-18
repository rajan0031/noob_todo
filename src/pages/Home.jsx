import React, { useState } from 'react';
import { FaCheckCircle, FaEdit, FaTrash, FaLightbulb, FaFilter } from 'react-icons/fa';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import CategoryFilter from '../components/CategoryFilter';
import PriorityFilter from '../components/PriorityFilter';
import ProgressTracker from '../components/ProgressTracker';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Date.now(), text: todo.text, completed: false, category: todo.category, priority: todo.priority },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    return (
      (filterCategory === 'All' || todo.category === filterCategory) &&
      (filterPriority === 'All' || todo.priority === filterPriority)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
        <Header />
        <section className="mb-4">
          <ProgressTracker todos={todos} />
          <CategoryFilter
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
          <PriorityFilter
            filterPriority={filterPriority}
            setFilterPriority={setFilterPriority}
          />
        </section>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default Home;
