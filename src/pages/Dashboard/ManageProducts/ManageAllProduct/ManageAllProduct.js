import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageAllProduct = (props) => {
    const { _id, name, img, price, description } = props.product;
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                    <Card.Body>
                        <Card.Title className="text-info text-center">{name.slice(0, 20)}</Card.Title>
                        <Card.Text>Price: {price}</Card.Text>
                        <Card.Text> {description.slice(0, 120)}</Card.Text>
                        <Button className="mb-2" variant="outline-danger" onClick={() => props.handleDelete(_id)}>Delete Product</Button>
                    </Card.Body>

                </Card>
            </div>
        </div >
    );
};

export default ManageAllProduct;