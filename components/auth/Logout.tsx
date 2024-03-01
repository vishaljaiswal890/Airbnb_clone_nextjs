import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/redux/UiSlice';
const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logout());
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
