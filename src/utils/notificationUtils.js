// src/utils/notificationUtils.js

export const scheduleNotifications = (todos) => {
    if (!("Notification" in window)) {
      console.warn("This browser does not support notifications.");
      return;
    }
  
    // Request permission for notifications
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  
    // Loop through todos to find recurring tasks
    todos.forEach((todo) => {
      if (todo.recurring) {
        const notificationText = `Reminder: ${todo.text}`;
        const notificationTime = new Date();
        notificationTime.setSeconds(notificationTime.getSeconds() + 5); // Test delay of 5 seconds
        
        setTimeout(() => {
          if (Notification.permission === "granted") {
            new Notification(notificationText, {
              body: `This is your recurring reminder for the task: "${todo.text}".`,
              icon: "/path/to/notification-icon.png", // Optional: add a relevant icon
            });
          }
        }, notificationTime - new Date());
      }
    });
  };
  