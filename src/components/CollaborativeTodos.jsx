import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const CollaborativeTodos = ({ todos }) => {
  return (
    <div className="mb-4">
      <h2 className="font-bold flex items-center">
        <FaShareAlt className="mr-2 text-green-500" /> Collaborative Todos
      </h2>
      <p>Share tasks with your team and track their progress collaboratively.</p>
    </div>
  );
};

export default CollaborativeTodos;
