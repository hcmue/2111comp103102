import React, { useState } from 'react';

export const ClickMe = () => {
    //state - dùng React Hooks
    const [times, setTimes] = useState(0);
    const handleClickMe = () => {
        setTimes(times + 1);
    };

    return (
        <>
            <h2>CLICK ME DEMO</h2>
            <h3>Đã click {times} lần</h3>
            <button onClick={handleClickMe}>Click me</button>
            <button onClick={() => {
                console.log('Vừa click đi')
                handleClickMe();
            }}>
                Click đi
            </button>
        </>
    )
};
