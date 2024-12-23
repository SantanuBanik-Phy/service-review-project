import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useTitle from '../hook/userTitle';

const ServiceCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Service Categories');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/categories?limit=6'); 
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-16 px-4 md:px-6 lg:px-8"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">
            Service Categories
            </h2>
            <p className="text-center text-gray-600 text-lg mb-10">
                Explore our diverse range of service categories tailored to meet all your needs.
            </p>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                         <span className="loading loading-infinity loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categories.map((category) => (
                        <motion.div
                            key={category._id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <figure>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </figure>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-2xl font-bold">{category.name}</h3>
                                <p className="mt-2 text-sm">{category.description}</p>
                                <Link
                                    to={`/services?category=${category.name}`}
                                    className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default ServiceCategories;
