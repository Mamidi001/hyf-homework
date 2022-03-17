import { TodoList } from "./TodoList";
import "./App.css";
const TodoArray = [
  { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];

function App() {
  return (
    <div>
      <h1>Todolist</h1>
      <TodoList TodoArray={TodoArray} />
    </div>
  );
}

export default App;
