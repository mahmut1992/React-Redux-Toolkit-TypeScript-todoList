import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./index.css";

const App = () => {
  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default App;
