import { Card, Col } from 'react-bootstrap';

const ManageAllOrder = (props) => {
    const { _id, mobile, name, email, address, color, productName, status } = props.order;

    return (
        <div>
            <Col className="shadow">
                <Card>
                    <Card.Body>
                        <Card.Title>Car Name: {productName}</Card.Title>
                        <p>Name:{name}</p>
                        <p>Email:{email}</p>
                        <p>Phone Number: {mobile}</p>
                        <p>Color: {color}</p>
                        <p>Address: {address}</p>
                        <p>Status: {status}</p>
                        <button onClick={() => props.handleSuccess(_id)}>Update</button>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Delete</button>
                </Card>
            </Col>
        </div>
    );
};

export default ManageAllOrder;