import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="mt-3">
            {
                products.length === 0 ?
                    <Spinner className='d-block mx-auto my-4' animation="border" variant="info" />
                    :
                    <div>
                        <h1 className="text-info">Our Collections</h1>
                        <Row xs={1} md={3} id="Products" className="g-4 m-2 mt-0">
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default Products;