
import Home from "./pages/Home/home";
import { TasksProvider } from "./features/tasks/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}
