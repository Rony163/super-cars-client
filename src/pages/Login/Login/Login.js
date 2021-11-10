import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert('helllo')
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="login-container">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login Here</h1>
                    <input onChange={handleOnChange} className="style" type="email" name="email" id="" placeholder="Email Address" required />
                    <br />
                    <input onChange={handleOnChange} className="style" type="password" name="password" id="" placeholder="Password" required />
                    <br />
                    <button type="submit" className="style register-design">Login</button>
                    <p className=""><small>or login with</small></p>
                    <div className="login-icon">
                        <i style={{ color: '#03C2A1' }} class="fab fa-google"></i>
                    </div>
                    <NavLink className="new-style" to="/register"><p>Create a new account?</p></NavLink>
                </form>
            </div>
        </div>
    );
};

export default Login;