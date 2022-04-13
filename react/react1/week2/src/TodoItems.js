
import React from 'react'
import './TodoItem.css'

function TodoItems({description,deleteItem,id,handleChange,checked}) {
return (
    <div>
    <li>
    <span className={checked ? 'checked' : 'unchecked'}>{description}</span>
            <input type="checkBox" value={checked} onChange={()=>handleChange(id)}></input>
      <button onClick={()=>{deleteItem(id)}} >Delete</button>
    </li>
    </div>
  )
}

export default TodoItems
