import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoItemShow from "../components/TodoItemShow";

import { useDispatch, useSelector } from "react-redux";
import { setTodos, clearTodos } from "../context/todoSlice";

import { auth } from "../firebase/firebaseConfig";
import { getTodosByUser } from "../services/todoService";
import { onAuthStateChanged } from "firebase/auth";

function TodoPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      dispatch(clearTodos());

      if (user) {
        try {
          const res = await getTodosByUser(user.email);

          const userTodos = res.data.map((todo) => ({
            id: todo.id,
            todoName: todo.todoTask,
            todoDate: todo.dueDate,
            priority: todo.priority,
            isNotified: false,
          }));

          dispatch(setTodos(userTodos));
        } catch (error) {
          console.error("Error fetching todos:", error);
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full lg:w-4/5 bg-white shadow-lg rounded-lg p-6">
        <Header />

        <AddTodo editTask={editTask} setEditTask={setEditTask} />

        <TodoItemShow
          TodoElements={todos}
          onEdit={(task) => setEditTask(task)}
        />
      </div>
    </div>
  );
}

export default TodoPage;