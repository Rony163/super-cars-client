import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container">
            <div className="login-container">
                {isLoading && <CircularProgress />}
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login Here</h1>
                    <input onChange={handleOnChange} className="style" type="email" name="email" id="" placeholder="Email Address" required />
                    <br />
                    <input onChange={handleOnChange} className="style" type="password" name="password" id="" placeholder="Password" required />
                    <br />
                    <button type="submit" className="style register-design">Login</button>
                    <p className=""><small>or login with</small></p>
                    <div className="login-icon">
                        <i onClick={handleGoogleSignIn} style={{ color: '#03C2A1' }} className="fab fa-google"></i>
                    </div>
                    <NavLink className="new-style" to="/register"><p>Create a new account?</p></NavLink>
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
            </div>
        </div>
    );
};

export default Login;