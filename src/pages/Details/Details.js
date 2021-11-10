import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [products, setProducts] = useState({});
    const refUserName = useRef('')
    const refEmail = useRef('')
    const [singleOrder, setSingleOrder] = useState({});

    // load data from database
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    const handleColor = e => {
        const updateColor = e.target.value;
        const updateOrder = { ...singleOrder };
        updateOrder.color = updateColor;
        setSingleOrder(updateOrder)
    }
    const handlePhoneNumber = e => {
        const updatePhone = e.target.value;
        const updateOrder = { ...singleOrder };
        updateOrder.mobile = updatePhone;
        setSingleOrder(updateOrder)
    }
    const handleAddress = e => {
        const updateAddress = e.target.value;
        const updateOrder = { ...singleOrder };
        updateOrder.address = updateAddress;
        setSingleOrder(updateOrder)
    }

    const handleSubmit = e => {
        singleOrder.name = refUserName.current.value;
        singleOrder.email = refEmail.current.value;
        singleOrder.productName = products?.name;
        singleOrder.status = 'pending';

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Purchase successful");
                    // setProducts({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    };

    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Row style={{ marginTop: '80px' }}>
                    <Col xs={12} md={6}>
                        <div>
                            <img className="img-fluid" src={products.img} alt="" />
                            <h2>{products.name}</h2>
                            <p>Price: {products.price}</p>
                            <p>{products.description}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <h1>Booking Here</h1>

                            <form onSubmit={handleSubmit}>
                                <input className="input-field" ref={refUserName} type="text" placeholder="Name" value={user.displayName || ''} />
                                <input className="input-field" ref={refEmail} type="email" placeholder='Email' value={user.email || ''} />
                                <input className="input-field" onChange={handleColor} type="text" placeholder='Car Color' required />
                                <input className="input-field" onChange={handlePhoneNumber} type="number" placeholder='Phone Number' required />
                                <input className="input-field" onChange={handleAddress} type="text" placeholder='Address' required />
                                <input className="input-field btn-submit" type="submit" value="Purchase" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Details;