import React, { createContext, useState } from 'react';

//In context with default value
export const MyContext = createContext({
    count: 0,
    setCount: () => { }
});

export const MyContextProvider = ({ children }) => {
    const [myCount, setMyCount] = useState(0);

    return (
        <MyContext.Provider value={{
            count: myCount,
            setCount: setMyCount
        }}>
            {children}
        </MyContext.Provider>
    )
};