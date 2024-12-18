import React from 'react';
import { FaFilter } from 'react-icons/fa';

const PriorityFilter = ({ filterPriority, setFilterPriority }) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-gray-700 flex items-center">
        <FaFilter className="mr-2 text-red-500" />
        Filter by Priority:
      </label>
      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none"
      >
        <option value="All">All</option>
        <option value="⭐">⭐ High</option>
        <option value="✨">✨ Medium</option>
        <option value="⚡">⚡ Low</option>
      </select>
    </div>
  );
};

export default PriorityFilter;
