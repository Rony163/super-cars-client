import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want delete this Product?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted Successfuly');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    return (
        <div className="mt-3">
            {
                products.length === 0 ?
                    <Spinner className='d-block mx-auto' animation="border" variant="info" />
                    :
                    <div>
                        <h1 className="text-info">All Products</h1>
                        <Row xs={1} md={3} id="Products" className="g-4 m-2 mt-0">
                            {
                                products.map(product => <ManageAllProduct
                                    key={product._id}
                                    product={product}
                                    handleDelete={handleDelete}
                                ></ManageAllProduct>)
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default ManageAllProducts;