import React from 'react';
import { motion } from 'framer-motion';

const MeetOurPartners = () => {
    const partners = [
        {
            name: "Google",
            description: "A leading provider of innovative tools and services for web development, empowering users to create and manage seamless service review systems.",
            logo: "https://i.ibb.co.com/SBbbWdb/32704485-m011t0447-b-social-sign-18sep22.jpg"
        },
        {
            name: "Microsoft",
            description: "Experts in providing cutting-edge technologies that power enterprise-level service review systems, ensuring scalability and reliability.",
            logo: "https://i.ibb.co.com/df1Str4/microsoft-logo-microsoft-icon-transparent-free-png.webp"
        },
        {
            name: "Amazon",
            description: "Global leaders in cloud computing, offering robust services for hosting service review systems with secure and efficient data management.",
            logo: "https://i.ibb.co.com/gmvjbBj/amazon-logo-700x394.jpg"
        },
        {
            name: "Salesforce",
            description: "Innovators in customer relationship management, providing solutions that help businesses gather valuable service feedback through integrated review systems.",
            logo: "https://i.ibb.co.com/0Bv9DTc/images.png"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-12 dark:bg-gray-900">
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Meet Our Partners
            </motion.h2>
            <motion.p
                className="text-lg sm:text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                We collaborate with some of the best organizations around the globe. Explore their contributions and innovations!
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        variants={cardVariants}
                    >
                        <motion.figure
                            className="flex justify-center items-center mb-4"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-100 dark:border-gray-700 shadow-lg"
                            />
                        </motion.figure>
                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                                {partner.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                {partner.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MeetOurPartners;
