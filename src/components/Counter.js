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
    });//no dependencies

    useEffect(() => {
        console.log(`In load page, Counter is ${counter}`);

        //Clean up function
        return () => {
            console.log('Clean up 2');
        };
    }, []); //dependcies, empty array: once time (load page)

    useEffect(() => {
        console.log('Call when change counter')
    }, [counter]);

    return (
        <>
            <h2>COUNTER: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </>
    );
};
