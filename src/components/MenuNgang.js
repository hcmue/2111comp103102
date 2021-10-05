import { Link } from 'react-router-dom';

export const MenuNgang = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/counter">COUNTER</Link>
            <a href="/about">About</a>
            <a href="/click-me">Click me</a>
            <a href="/news">News</a>
            <a href="/thanh-pho">Citys</a>
        </>
    )
};