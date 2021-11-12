import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-temple-20006.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="mt-3">
            {
                reviews.length === 0 ?
                    <Spinner className='d-block mx-auto my-4' animation="border" variant="info" />
                    :
                    <div>
                        <h1 className="text-info">Review Section</h1>
                        <Row xs={1} md={3} className="g-4 m-2 mt-0">
                            {
                                reviews.map(review => <Review
                                    key={review._id}
                                    review={review}
                                ></Review>)
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default Reviews;