
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedServices = ({ services, loading }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-10"
        >
            <h2 className="text-3xl font-bold text-center mb-6">Featured Services</h2>
            {loading ? (
                <div className="flex justify-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <div key={service._id} className="card bg-base-100 shadow-xl">
                            <figure><img src={service.image} alt={service.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.description.slice(0, 100)}...</p>
                                <p><span  className=' font-semibold'> Price:</span> ${service.price}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/services/${service._id}`} className="btn btn-primary">See Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default FeaturedServices;