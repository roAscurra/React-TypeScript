import React, { useState } from 'react'

export const ComponentCounter = () => {
    const [counter, setCounter] = useState<number>(0)
    const incrementCounter = () => {
        setCounter((prev) => prev + 1)
    }
    const decrecrementCounter = () => {
        if(counter >= 0){
            setCounter((prev) => prev - 1)
        }
    }

  return (
    <div>
        <h2>valor de counter: {counter}</h2>
        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={decrecrementCounter}>Decrementar</button>

    </div>
  )
}
