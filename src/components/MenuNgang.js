import { Link, BrowserRouter } from 'react-router-dom';

export const MenuNgang = () => {
    return (
        <BrowserRouter >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/click-me">Click me</Link>
            <Link to="/news">News</Link>
        </BrowserRouter >
    )
};