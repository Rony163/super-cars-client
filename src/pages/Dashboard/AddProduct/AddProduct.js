import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2 className="text-info">Add A Super Car</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Car Name" />
                <input {...register("price", { required: true, maxLength: 20 })} placeholder="Car Price" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image url" />
                <input className="btn-submit" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;