import { Card, Col } from 'react-bootstrap';

const MyOrder = (props) => {
    const { _id, mobile, address, color, productName, status } = props.order;

    return (
        <div>
            <Col className="shadow">
                <Card>
                    <Card.Body>
                        <Card.Title>Car Name: {productName}</Card.Title>
                        <p>Color: {color}</p>
                        <p>Phone Number: {mobile}</p>
                        <p>Address: {address}</p>
                        <p>Status: {status}</p>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Cancel</button>
                </Card>
            </Col>
        </div>
    );
};

export default MyOrder;