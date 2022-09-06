import React, {useState} from 'react'

const Counter = () => {
    // Script part
    const [counter, setCounter] = useState(0) 
    // Increment setter
    const handleIncrement = () => {
        setCounter(counter+1)
    }
    // Decrement Setter
    const handleDecrement = () => {
        setCounter(counter-1)
    }
    // JSX part
    return  (
        <div>
        <h3>Counter : {counter} </h3>
        {/* writing incline css */}
        <button style={{marginRight:'12px'}} onClick={()=> handleIncrement()}>increment</button>
        <button onClick={()=> handleDecrement()}>Decrement</button>
        </div>
    )
};


export default Counter;