import { Link, BrowserRouter as Router } from 'react-router-dom';

export const MenuNgang = () => {
    return (
        <Router >
            <Link to="/">Home</Link>
            <a href="/about">About</a>
            <a href="/click-me">Click me</a>
            <a href="/news">News</a>
            <a href="/thanh-pho">Citys</a>
        </Router >
    )
};