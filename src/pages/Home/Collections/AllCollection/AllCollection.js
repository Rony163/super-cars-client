import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCollection = (props) => {
    const { _id, name, img, price, description } = props.product;
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                    <Card.Body>
                        <Card.Title className="text-info text-center">{name}</Card.Title>
                        <Card.Text>Price: {price}</Card.Text>
                        <Card.Text> {description.slice(0, 200)}</Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-center">
                        <Link to={`details/${_id}`}>
                            <Button className="mb-2" variant="outline-info">Buy Now</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div >
    );
};

export default AllCollection;