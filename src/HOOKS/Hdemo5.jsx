import React, { useState } from 'react';
export default function Hdemo5() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            Count={count};<br />
            <button onClick={increment}>Increment</button><br />
            <button onClick={decrement}>Decrement</button><br />
            <button onClick={reset}>Reset</button><br /><br />
        </div>
    );
}