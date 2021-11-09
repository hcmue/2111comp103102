import { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actLoginSuccess } from '../actions/index';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    //đối với API yêu cầu có token
    const myconfig = {
        headers: { Authorization: 'Bearer aaaaaa' }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API + '/authenticate', {
            username: username,
            password: password
        })
            .then(function (response) {
                console.log(response);

                // trigger action để update state
                dispatch(actLoginSuccess(username, username, response.access_token));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <divv>
            <div>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </divv>
    )
};