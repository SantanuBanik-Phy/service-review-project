import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
  const { _id, title, image, price, description, category } = service;

  return (
    <div className="card card-compact w-full sm:w-96 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 dark:bg-gray-900 dark:shadow-gray-800">
      <PhotoProvider>
        <PhotoView src={image}>
          <figure className="relative overflow-hidden rounded-t-xl">
            <img
              referrerPolicy="no-referrer"
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-t-xl transform transition-all duration-300 hover:opacity-90"
            />
           
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg uppercase tracking-wide">
              {category}
            </div>
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body p-5 bg-white dark:bg-gray-800 dark:text-gray-300 rounded-b-xl">
        <h2 className="card-title text-2xl font-semibold text-gray-800 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-blue-400 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base mb-5">
          {description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-black dark:text-gray-300">
            Price: <span className="text-gray-600 dark:text-gray-400 font-normal">${price}</span>
          </p>
          <Link to={`/services/${_id}`}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-full hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-gray-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
