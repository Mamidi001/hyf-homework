//import "./ItemList.css";

export function ItemList(props) {
  return (
    <li>
      <h3>
        {props.description} , {props.deadline}
      </h3>
    </li>
  );
}
