import React, { useState } from 'react'

function CounterFunction() {
    var [count,setCount]=useState(0)

    var increment = () =>{
        setCount((prev)=>prev+1)
    }
    var decrease = () =>{
        setCount((prev)=>prev-1)
    }
    var reset = () =>{
        setCount(0)
    }
  return (
    <div>
        <p>
            Counter1
        </p>
        <p>{count}</p>
        <button onClick={decrease}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterFunction