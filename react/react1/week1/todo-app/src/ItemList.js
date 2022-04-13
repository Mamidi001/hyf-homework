//import "./ItemList.css";

export function ItemList({ description, deadline }) {
  return (
    <li>
      <h3>
        {description} , {deadline}
      </h3>
    </li>
  );
}
