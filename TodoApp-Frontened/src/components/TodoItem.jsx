import { Trash2, Pencil } from "lucide-react";

function TodoItem({ todoName, todoDate, priority, onDelete, onEdit }) {

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex justify-between items-center bg-white shadow p-4 rounded-xl mb-3">

      <div>
        <h3 className="font-bold">{todoName}</h3>
        <p className="text-gray-500 text-sm">📅 {todoDate}</p>
      </div>

      <span className={`px-3 py-1 rounded ${priorityColors[priority]}`}>
        {priority}
      </span>

      <div className="flex gap-2">

        <button
          onClick={onEdit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}

export default TodoItem;