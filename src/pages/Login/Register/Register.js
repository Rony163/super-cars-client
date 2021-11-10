import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert('hello')
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="d-flex login-container">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Create an account</h1>
                    <input onBlur={handleOnBlur} className="style" type="text" name="name" placeholder="Your Name" required />
                    <br />
                    <input onBlur={handleOnBlur} className="style" type="email" name="email" id="" placeholder="Email Address" required />
                    <br />
                    <input onBlur={handleOnBlur} className="style" type="password" name="password" id="" placeholder="Password" required />
                    <br />
                    <button type="submit" className="style register-design">Register</button>
                    <p className=""><small>or login with</small></p>
                    <div className="login-icon">
                        <i style={{ color: '#03C2A1' }} class="fab fa-google"></i>
                    </div>
                    <NavLink className="new-style" to="/login"><p>Already have an account?</p></NavLink>
                </form>
            </div>
        </div>
    );
};

export default Register;