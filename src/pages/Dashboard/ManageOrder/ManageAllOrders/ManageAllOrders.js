import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        fetch('https://murmuring-temple-20006.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [status, orders])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want delete this Order?');
        if (proceed) {
            const url = `https://murmuring-temple-20006.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Deleted Successfuly');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleSuccess = id => {
        setStatus(!status);
        const url = `https://murmuring-temple-20006.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Update succesfully.')
                }
                else {
                    alert('Already shipped')
                }
            })
    }

    return (
        <div>
            {orders.length ?
                <div>
                    <h1 className="text-info">Your Orders List</h1>
                    <Row xs={1} md={3} className="g-4 m-2">
                        {
                            orders.map(order => <ManageAllOrder
                                key={order._id}
                                order={order}
                                handleSuccess={handleSuccess}
                                handleDelete={handleDelete}
                            >
                            </ManageAllOrder>)
                        }
                    </Row >
                </div>
                :
                <h5 className="text-danger text-center mt-5 pt-5">There is nothing to show.</h5>
            }
        </div>
    );
};

export default ManageAllOrders;