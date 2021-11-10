import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="d-flex login-container">
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <h1>Create an account</h1>
                    <input onBlur={handleOnBlur} className="style" type="text" name="name" placeholder="Your Name" required />
                    <br />
                    <input onBlur={handleOnBlur} className="style" type="email" name="email" id="" placeholder="Email Address" required />
                    <br />
                    <input onBlur={handleOnBlur} className="style" type="password" name="password" id="" placeholder="Password" required />
                    <br />
                    <button type="submit" className="style register-design">Register</button>
                    <NavLink className="new-style" to="/login"><p>Already have an account?</p></NavLink>
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>}
                {isLoading && <CircularProgress />}

            </div>
        </div>
    );
};

export default Register;