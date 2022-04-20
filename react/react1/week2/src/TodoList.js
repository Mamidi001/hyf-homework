import React, { useState } from 'react'
import TodoItems from './TodoItems';
const todos = [
  {
    id: 1,
    description: "Get out of bed",
    checked:false
  },
  {
    id: 2,
    description: "Brush teeth",
    checked:false
    
  },
  {
    id: 3,
    description: "Eat breakfast",
    checked:false
  },
];


function TodoList() {

  const [todoState, setTodos] = useState(todos);

  let newID;
    if (todoState.length === 0) {
      newID = 1;
    } else {
      newID = todoState[todoState.length - 1].id + 1;
    }
    const addNewTodo =()=>{
    const newTodo = {
      id:newID,
      description:"new task"
    };
    setTodos((todos)=>{
      
     const newList = [...todos, newTodo] 
     console.log(
       newList
     );
     return newList;
     
     
    })

  }
    const deleteItem = (id)=>{
    setTodos((prevTodos) => {
        const ListAfterDelete = prevTodos.filter((todo) => todo.id !== id);
        console.log(ListAfterDelete);
        return ListAfterDelete;
      });
    }
    function handleChange(id) {
      var strikeThroughList = [...todoState];
      strikeThroughList.forEach((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
      });
      setTodos(strikeThroughList);
    }


  const todoItems = todoState.map((todo)=><TodoItems description={todo.description} key={todo.id} id={todo.id}deleteItem={deleteItem} checked={todo.checked} handleChange={handleChange}></TodoItems>)

  
  return (
    <div className='todoItems'>
      <button onClick={addNewTodo}>Add new item</button>
       
       <ul>
       {todoItems}

       </ul>
      
    </div>
  )
}

export default TodoList
