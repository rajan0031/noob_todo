import React, { useEffect } from 'react';
import { FaRedo } from 'react-icons/fa';
import { scheduleNotifications } from '../utils/notificationUtils';

const RecurringTodos = ({ todos, setTodos }) => {
  useEffect(() => {
    scheduleNotifications(todos);
  }, [todos]);

  return (
    <div className="mb-4">
      <h2 className="font-bold flex items-center">
        <FaRedo className="mr-2 text-blue-500" /> Recurring Tasks
      </h2>
      <p>Manage your recurring tasks with daily, weekly, or monthly reminders.</p>
    </div>
  );
};

export default RecurringTodos;
