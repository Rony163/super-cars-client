import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, description, rating } = props.review;
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title className="text-info text-center">{name}</Card.Title>
                    <Card.Text> {description.slice(0, 200)}</Card.Text>
                    <Card.Text className="text-center">
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star text-warning"
                        />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;