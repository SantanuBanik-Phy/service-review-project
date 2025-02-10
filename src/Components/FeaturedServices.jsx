import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedServices = ({ services, loading }) => {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-12">
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Featured Services
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mt-4"
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Discover our top-rated services that cater to your every need.
          Explore the best offerings handpicked just for you!
        </motion.p>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="spinner-border" role="status">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service._id}
              className="card group bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden relative hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <figure className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </figure>

              <div className="card-body p-6">
                <h3 className="card-title text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description.length > 100 ? `${service.description.slice(0, 100)}...` : service.description}
                </p>
                <p className="mt-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Price:</span> ${service.price}
                </p>
                <div className="card-actions flex justify-end">
                  <Link
                    to={`/services/${service._id}`}
                    className="btn bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-400 text-white font-semibold px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-500 transition-transform duration-300 transform hover:scale-105"
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
