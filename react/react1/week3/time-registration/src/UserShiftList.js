import React, { useState } from 'react';
import { ShiftListItem } from './ShiftListItem';


function UserShiftList() { 
  const employeeList = [{
    newId: 1,
    name: "swetha",
    start: "13:13",
    end : "18:18"
    
}] 
  
    const [name, setName]= useState("");
    const [start, setStart]= useState("");
    const [end, setEnd]= useState("");
    const [shifts, setShifts]= useState(employeeList);
   
    
    

    const savedShiftList=()=>{
      const newId = shifts.length+1;
      
    setShifts((prev)=>[...prev,{newId,name,start,end}])
    console.log(shifts);


    }
    
    const display = shifts.map((shift)=>(<ShiftListItem employeeName={shift.name} startTime= {shift.start} endTime={shift.end} key={shift.newId}/>)
  )
     const searchEmployee=(e)=>{
       const value =(e.target.value).toLowerCase();
    
       const searchName= shifts.filter(shift=>shift.name.toLowerCase().includes(value))
       console.log(searchName);
       setShifts(searchName)

     }
    

    return (
    <div className='infoContainer'>
    <label>Employee Name</label>
      <input className='input1' type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <br />
      <label>Start Time</label>
      <input type="time" placeholder='start-Time' value={start}  onChange={(e)=>setStart(e.target.value)}></input>
      <br />
      <label>End Time</label>
      <input type="time" placeholder='End-Time' value={end}  onChange={(e)=>setEnd(e.target.value)}></input>
      <br />
      <button type='submit' onClick={savedShiftList}>Submit</button>
      <br/>
      <input type="text" placeholder='search for employee name' onChange={searchEmployee} />
      {display}

    </div>
  )
  }

export default UserShiftList;
