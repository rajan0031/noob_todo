// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./components/AddTodo";
import TodoInput from "./components/TodoInput";
import TodoAnalytics from "./components/TodoAnalytics";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/add" element={<TodoInput />} />
          <Route path="/analytics" element={<TodoAnalytics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
