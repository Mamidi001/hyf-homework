import { ItemList } from "./ItemList";

function TodoList(props) {
  return (
    <ul>
      {props.TodoArray.map((list) => {
        return (
          <ItemList
            description={list.description}
            deadline={list.deadline}
            key={list.description}
          ></ItemList>
        );
      })}
    </ul>
  );
}
export default TodoList;
