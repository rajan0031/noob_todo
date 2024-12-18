// src/utils/analyticsUtils.js

export const calculateAnalytics = (todos) => {
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = todos.length - completed;
  
    const categories = todos.reduce((acc, todo) => {
      acc[todo.category] = (acc[todo.category] || 0) + 1;
      return acc;
    }, {});
  
    return {
      completed,
      pending,
      categories: Object.entries(categories), // Converts categories object to an array of [key, value] pairs
    };
  };
  