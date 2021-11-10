import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [matchOrders, setMatchOrders] = useState([]);

    // This is for load the data
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // This is for match the data
    useEffect(() => {
        setMatchOrders(orders.filter(order => order.email === user?.email))
    }, [orders, user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want cancle your Order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Canceled Successfuly');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {matchOrders.length ?
                <div className="mt-5 pt-2">
                    <h1 className="text-info">Your Orders List</h1>
                    <Row xs={1} md={3} className="g-4 m-2">
                        {
                            matchOrders.map(order => <MyOrder
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            >
                            </MyOrder>)
                        }
                    </Row >
                </div>
                :
                <h5 className="text-danger text-center mt-5 pt-5">There is nothing to show, please add a order first</h5>
            }
        </div>
    );
};

export default MyOrders;