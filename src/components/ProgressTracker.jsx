import React from 'react';

const ProgressTracker = ({ todos }) => {
  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-4">
      <p className="font-bold text-gray-700">
        Progress: {progress}% ({completed}/{total} completed)
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
