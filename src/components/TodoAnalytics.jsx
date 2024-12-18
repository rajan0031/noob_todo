// src/components/TodoAnalytics.jsx
import React from "react";
import { FaCheckCircle, FaTasks } from "react-icons/fa";

const TodoAnalytics = ({ analytics }) => {
  const { completed, pending, categories } = analytics;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Analytics 📊</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center p-4 border rounded-lg bg-green-50">
          <FaCheckCircle className="text-green-600 text-2xl mr-3" />
          <span className="text-lg">
            Completed: <strong>{completed}</strong>
          </span>
        </div>
        <div className="flex items-center p-4 border rounded-lg bg-red-50">
          <FaTasks className="text-red-600 text-2xl mr-3" />
          <span className="text-lg">
            Pending: <strong>{pending}</strong>
          </span>
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-700 mt-4">Categories:</h3>
      <ul className="mt-2 text-gray-600">
        {categories.map(([category, count]) => (
          <li key={category}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAnalytics;
