import React from 'react'
import { useState } from 'react';



function Counter(){
    
    console.log(useState)


    const [count,setCount] = useState(0)
      
    
    function button(){
        setCount(count+1)
    }
    function button2(){
        setCount(count -1 );
    }

    return (
      <>
        <span>Current Count: {count}</span>
        <section>
          <button onClick={button}>+</button>
          <button onClick={button2}>-</button>
        </section>
      </>
    );
}

export default Counter