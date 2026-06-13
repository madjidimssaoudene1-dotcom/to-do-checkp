import { createSlice } from "@reduxjs/toolkit";

const loadTasks = () => {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};


const initialState = {
  tasks: loadTasks(),
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        description: action.payload,
        isDone: false,
      });
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      task.isDone = !task.isDone;
    },

    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      task.description = description;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;