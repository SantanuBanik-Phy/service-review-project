import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedServices = ({ services, loading }) => {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-12">
      {/* Header Section with Infinite Animation */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Featured Services
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mt-4"
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Discover our top-rated services that cater to your every need.
          Explore the best offerings handpicked just for you!
        </motion.p>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service._id}
              className="card group bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-lg overflow-hidden relative hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Image Section */}
              <figure className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </figure>

              {/* Card Content */}
              <div className="card-body p-6">
                <h3 className="card-title text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description.slice(0, 100)}...
                </p>
                <p className="mt-4 text-lg font-semibold text-indigo-600">
                  Price: ${service.price}
                </p>
                <div className="card-actions mt-6 flex justify-end">
                  <Link
                    to={`/services/${service._id}`}
                    className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedServices;
