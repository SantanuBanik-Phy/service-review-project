// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, image, price, description ,category } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-between items-center">
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <p className='text-xl font-semibold'>Category: {category}</p>
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;