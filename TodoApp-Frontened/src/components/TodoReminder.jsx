import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../context/todoSlice";

export default function TodoReminder({ todos }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const now = new Date();

      todos.forEach((task) => {
        const due = new Date(task.todoDate);

        if (due <= now && !task.isNotified) {
          if (Notification.permission === "granted") {
            new Notification(`Task Due: ${task.todoName}`);
          } else {
            alert(`Reminder: "${task.todoName}" is due!`);
          }

          dispatch(
            updateTodo({
              ...task,
              isNotified: true,
            })
          );
        }
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, [todos, dispatch]);

  return null;
}
