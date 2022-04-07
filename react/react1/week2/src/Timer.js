import React from 'react'

import{useEffect, useState} from 'react'
function Timer() {
    const [count, setCount]=useState(0)
    useEffect(()=>{
        setTimeout (()=>{
            setCount((prev)=>prev+1)
        },1000)
    })
    return (
     
          <h1>you passed{count}</h1>
    )}
export default Timer
