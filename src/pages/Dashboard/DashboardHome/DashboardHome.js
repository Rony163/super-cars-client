import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome <span className="text-info">{user.displayName}</span> !!!</h1>
            <p>This is your personal Dashboard</p>
            <p>In this dashboard you can see few options. First one is my order in my order page you can see your all orders and also cancel your order. In the payment section this payment system comming soon. And last section is review section in this review section you can give feedback about our page and also give rating. You can also back to home page.</p>
        </div>
    );
};

export default DashboardHome;