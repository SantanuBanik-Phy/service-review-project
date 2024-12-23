import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, image, price, description, category } = service;

    return (
        <div className="card card-compact w-full sm:w-96 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure className="overflow-hidden rounded-t-xl">
                        <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-xl transform transition-all duration-300 hover:opacity-80" />
                    </figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body p-4 bg-white rounded-b-xl">
                <h2 className="card-title text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-base">{description.slice(0, 100)}...</p>
                <div className="card-actions justify-between items-center mt-4">
                    <p className="text-xl font-semibold text-gray-800">Price: <span className="text-green-500">${price}</span></p>
                    <p className="text-lg font-medium text-gray-700">Category: <span className="text-blue-500">{category}</span></p>
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 rounded-lg px-6 py-2">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
