import { Link, BrowserRouter as Router } from 'react-router-dom';

export const MenuNgang = () => {
    return (
        <Router >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/click-me">Click me</Link>
            <Link to="/news">News</Link>
        </Router >
    )
};