import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import { useSelector } from 'react-redux';
import './App.css';
import { Login } from './pages/Login';

function App() {
  const appState = useSelector((state) => state.User);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          Username: {appState.username}<br />
          Token: {appState.token}
          {/* <Counter /> */}
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
