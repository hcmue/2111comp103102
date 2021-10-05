import React, { useEffect, useState } from 'react';

// Arrow function components
export const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(`Counter is ${counter}`);

        //Clean up function
        return () => {
            console.log('Clean up');
        };
    });//no dependcies

    return (
        <>
            <h2>COUNTER: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </>
    );
};
