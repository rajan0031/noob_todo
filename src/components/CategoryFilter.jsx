import React from 'react';
import { FaFilter } from 'react-icons/fa';

const CategoryFilter = ({ filterCategory, setFilterCategory }) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-gray-700 flex items-center">
        <FaFilter className="mr-2 text-blue-500" />
        Filter by Category:
      </label>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none"
      >
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
