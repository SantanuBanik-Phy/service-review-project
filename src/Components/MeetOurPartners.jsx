import React from 'react';
import { motion } from 'framer-motion';

const MeetOurPartners = () => {
    const partners = [
        {
            "name": "Google",
            "description": "A leading provider of innovative tools and services for web development, empowering users to create and manage seamless service review systems.",
            "logo": "https://i.ibb.co.com/SBbbWdb/32704485-m011t0447-b-social-sign-18sep22.jpg"
        },
        {
            "name": "Microsoft",
            "description": "Experts in providing cutting-edge technologies that power enterprise-level service review systems, ensuring scalability and reliability.",
            "logo": "https://i.ibb.co.com/df1Str4/microsoft-logo-microsoft-icon-transparent-free-png.webp"
        },
        {
            "name": "Amazon",
            "description": "Global leaders in cloud computing, offering robust services for hosting service review systems with secure and efficient data management.",
            "logo": "https://i.ibb.co.com/gmvjbBj/amazon-logo-700x394.jpg"
        },
        {
            "name": "Salesforce",
            "description": "Innovators in customer relationship management, providing solutions that help businesses gather valuable service feedback through integrated review systems.",
            "logo": "https://i.ibb.co.com/0Bv9DTc/images.png"
        }
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
        <div className="container mx-auto py-16 px-4 dark:bg-gray-900">
            <motion.h2
                className="text-5xl font-extrabold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Meet Our Partners
            </motion.h2>
            <motion.p
                className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                We collaborate with some of the best organizations around the globe. Explore their contributions and innovations!
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="card w-72 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl"
                        variants={cardVariants}
                    >
                        <motion.figure
                            className="relative p-6"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                className="w-32 h-32 rounded-full mx-auto border-4 border-gray-100 dark:border-gray-700 shadow-lg transform transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-300 opacity-30 dark:opacity-20"></div>
                        </motion.figure>
                        <div className="card-body text-center p-6">
                            <h3 className="card-title text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                                {partner.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-base">{partner.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MeetOurPartners;