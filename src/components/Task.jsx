import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/taskSlice";
import { useState } from "react";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: text }));
    setEditMode(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-3 mb-2 rounded">
      {editMode ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-black p-1"
        />
      ) : (
        <span className={task.isDone ? "line-through" : ""}>
          {task.description}
        </span>
      )}

      <div className="flex gap-2">
        <button onClick={() => dispatch(toggleTask(task.id))}>
          ✔
        </button>

        {editMode ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}