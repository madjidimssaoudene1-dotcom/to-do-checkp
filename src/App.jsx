import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl text-center p-4">Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;