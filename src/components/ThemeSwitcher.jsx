import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="flex items-center space-x-2 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
      <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeSwitcher;
