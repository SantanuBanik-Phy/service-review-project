import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import animationData from '../assets/lottie/Animation.json'; 
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';

const faqs = [
    {
        question: 'How do I find a service provider in my area?',
        answer: 'Use the search filters to narrow down your search by location, category, ratings, and other criteria. Browse our featured providers for top-rated professionals in your area.',
    },
    {
        question: 'How do I leave a review for a service provider?',
        answer: "After using a service, visit the provider's profile page and click the 'Leave a Review' button. You'll rate the service and share a short review of your experience.",
    },
    {
        question: 'What should I do if I have a problem with a service provider?',
        answer: 'You can contact the service provider directly through our platform or report the issue to our support team. We aim to resolve problems as quickly as possible.',
    },
    {
        question: 'How can I trust the reviews I see?',
        answer: 'All reviews are verified based on completed services, ensuring that feedback comes from real users who have experienced the service firsthand.',
    },
];

const CommunityForum = ({ theme }) => {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${theme === 'dark' ? 'dark' : ''} px-12 py-10 dark:bg-gray-900`}
        >
            <Helmet>
                <title>Community Forum | Service Review</title>
            </Helmet>

            <h2 className="text-4xl font-extrabold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text dark:text-white">
                Community Forum: Engage, Share, and Learn
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-300">
                Connect with other users, share experiences, discuss services, and help one another find the best service providers.
            </p>

            {/* Lottie Animation */}
            <div className="flex justify-center mb-10">
                <Lottie animationData={animationData} loop autoplay height={200} width={200} />
            </div>

            {/* Forum Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <AnimatePresence>
                    {['general', 'recommendations', 'issues', 'tips'].map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link
                                to={`/community/${category}`}
                                className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform rounded-lg"
                            >
                                <div className="card-body text-center py-8 px-6">
                                    <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                                        {category === 'general' && 'Discuss anything related to finding and reviewing services in your area.'}
                                        {category === 'recommendations' && 'Share or request recommendations for specific service providers.'}
                                        {category === 'issues' && 'Report problems with services or suggest ways to improve them.'}
                                        {category === 'tips' && 'Offer tips and insights for better service experiences or finding the best deals.'}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* FAQs */}
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
                Frequently Asked Questions
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="card bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden"
                    >
                        <div
                            className="collapse collapse-arrow border border-base-300 dark:border-gray-700"
                            onClick={() => toggleFaq(index)}
                        >
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                                {faq.question}
                            </div>
                            {activeFaq === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="collapse-content text-gray-600 dark:text-gray-300"
                                >
                                    <p>{faq.answer}</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CommunityForum;
