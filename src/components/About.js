import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

export const About = () => {
    const { count } = useContext(MyContext);
    return (
        <>
            <h3>Count from MyContext: {count}</h3>
            <h2>About me</h2>
            <h3>Student Name: XYZ</h3>
            <h4>Phone: 0909123456</h4>
        </>
    )
};
