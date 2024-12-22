import React from 'react';
import { motion } from 'framer-motion';

const MeetOurPartners = () => {
    const partners = [
        {
            name: "Partner One",
            description: "Leading provider of innovative tech solutions.",
            logo: "https://placehold.co/120x120/png",
        },
        {
            name: "Partner Two",
            description: "Experts in sustainable energy solutions.",
            logo: "https://placehold.co/120x120/png",
        },
        {
            name: "Partner Three",
            description: "Global leaders in financial services.",
            logo: "https://placehold.co/120x120/png",
        },
        {
            name: "Partner Four",
            description: "Innovators in healthcare and wellness.",
            logo: "https://placehold.co/120x120/png",
        },
        {
            name: "Partner Five",
            description: "Pioneers in education technology.",
            logo: "https://placehold.co/120x120/png",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="container mx-auto py-10 px-4">
            {/* Heading Section */}
            <motion.h2
                className="text-4xl font-extrabold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Meet Our Partners
            </motion.h2>
            <motion.p
                className="text-lg text-center mb-12 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                We collaborate with some of the best organizations around the globe. Explore their contributions and innovations!
            </motion.p>

            {/* Partner Cards */}
            <motion.div
                className="flex flex-wrap justify-center gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="card w-72 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <motion.figure
                            className="px-8 pt-8"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                className="rounded-full border-2 border-gray-300"
                            />
                        </motion.figure>
                        <div className="card-body text-center p-6">
                            <h3 className="card-title text-xl font-bold text-gray-800">
                                {partner.name}
                            </h3>
                            <p className="text-gray-600 mt-2">{partner.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MeetOurPartners;
