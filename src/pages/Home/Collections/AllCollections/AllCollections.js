import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import AllCollection from '../AllCollection/AllCollection';

const AllCollections = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-temple-20006.herokuapp.com/allProducts')
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
                        <h1 className="text-info">Our All Collections</h1>
                        <Row xs={1} md={3} id="Products" className="g-4 m-2 mt-0">
                            {
                                products.map(product => <AllCollection
                                    key={product._id}
                                    product={product}
                                ></AllCollection>)
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default AllCollections;