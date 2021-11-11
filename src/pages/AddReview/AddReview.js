import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { user } = useAuth();
    const refUserName = useRef('')
    const [review, setReview] = useState({});

    const handleDescription = e => {
        const userDescription = e.target.value;
        const updateDescription = { ...review };
        updateDescription.description = userDescription;
        setReview(updateDescription);
    }
    const handleRating = e => {
        const userRating = e.target.value;
        const updateRating = { ...review };
        updateRating.rating = userRating;
        setReview(updateRating);
    }

    const handleReview = e => {
        review.name = refUserName.current.value;

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Successfuly post the review!!");
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h1 className="text-info">Give Review</h1>
            <form onSubmit={handleReview}>
                <input className="input-style" type="text" ref={refUserName} value={user.displayName || ''} readOnly />
                <br />
                <textarea className="input-style" cols="10" rows="2" placeholder="What's your feedback?" onChange={handleDescription} required></textarea>
                <br />
                <p>Give Rating Bellow</p>
                <Form.Select className="form-style" onChange={handleRating}>
                    <option value="1">poor</option>
                    <option value="2">Below Avarage</option>
                    <option value="3">Avarage</option>
                    <option value="4">Good</option>
                    <option value="5">Exicelent</option>
                </Form.Select>
                <br />
                <input className="input-field btn-submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddReview;