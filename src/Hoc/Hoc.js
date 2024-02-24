import React from 'react'
import { useState } from "react"
const withCounter = (WrappedComponent) => 
{
    return (props) => {
        const[count,setCount]=useState(0);
        const incrementCount = () => 
        {
            setCount((prevCount) => prevCount+1);
        };
        return (
            <WrappedComponent count={count} 
            incrementCount={incrementCount}
            {...props}//spread operator
            />
        );
    };
};
const Display = ({count,incrementCount}) => 
(
    <div>
        <h1>HOC</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>ADD</button>
    </div>
);
const Hoc=withCounter(Display);

export default Hoc;