import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../context/todoSlice";
import { addTodoApi, updateTodoApi } from "../services/todoService";
import { auth } from "../firebase/firebaseConfig";

function AddTodo({ editTask, setEditTask }) {

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (editTask) {
      setTodoName(editTask.todoName);
      setTodoDate(editTask.todoDate);
      setTodoPriority(editTask.priority);
    }
  }, [editTask]);

  const handleSubmit = async () => {

    if (!todoName || !todoDate) return;
    const userEmail = auth.currentUser?.email;
    
    try {

      if (editTask) {

        const updatedTodo = {
          todoTask: todoName,
          dueDate: todoDate,
          priority: todoPriority,
          userEmail: userEmail
        };

        await updateTodoApi(editTask.id, updatedTodo);

        dispatch(
          updateTodo({
            id: editTask.id,
            todoName,
            todoDate,
            priority: todoPriority,
            isNotified: editTask.isNotified
          })
        );

        setEditTask(null);

      } else {

        const newTodo = {
          todoTask: todoName,
          dueDate: todoDate,
          priority: todoPriority,
          userEmail: userEmail
        };

        const res = await addTodoApi(newTodo);

        dispatch(
          addTodo({
            id: res.data.id,
            todoName,
            todoDate,
            priority: todoPriority,
            isNotified: false
          })
        );

      }

      setTodoName("");
      setTodoDate("");
      setTodoPriority("Medium");

    } catch (error) {
      console.error("API Error:", error);
    }

  };

  return (
    <div className="bg-white shadow-md p-5 rounded-xl mb-6 w-full max-w-6xl mx-auto">

  <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
    {editTask ? "Update Task" : "Add New Task"}
  </h2>

  <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-stretch">

    <input
      type="text"
      placeholder="Task name"
      value={todoName}
      onChange={(e) => setTodoName(e.target.value)}
      className="border p-2 rounded-lg flex-1 w-full lg:w-1/2"
    />

    <input
      type="date"
      value={todoDate}
      onChange={(e) => setTodoDate(e.target.value)}
      className="border p-2 rounded-lg w-full lg:w-1/5"
    />

    <select
      value={todoPriority}
      onChange={(e) => setTodoPriority(e.target.value)}
      className="border p-2 rounded-lg w-full lg:w-1/5"
    >
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>

    <button
      onClick={handleSubmit}
      className="bg-green-500 text-white px-6 py-2 rounded-lg w-full lg:w-auto lg:min-w-[150px]"
    >
      {editTask ? "Update Task" : "Add Task"}
    </button>

  </div>
</div>
  );
}

export default AddTodo;