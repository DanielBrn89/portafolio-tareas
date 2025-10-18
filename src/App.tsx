
import Home from "./pages/Home/Home";
import { TasksProvider } from "./features/tasks/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}
