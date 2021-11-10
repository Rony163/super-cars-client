import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <div >
                <div>
                    <img className='img-fluid' src='https://www.netclipart.com/pp/m/147-1472342_vivo-error-404-file-not-found.png' alt="" />
                </div>
                <br />

                <div className='d-flex justify-content-center'>
                    <NavLink to='/home'>
                        <button className='mt-4 bg-info rounded fs-4 border border-white text-white'>Back to Home Page</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;