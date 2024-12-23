import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'How do I find a service provider in my area?',
        answer: 'You can use our search filters to narrow down your search by location, category, and other criteria. You can also browse our featured providers section for top-rated professionals in your area.',
    },
    {
        question: 'How do I leave a review for a service provider?',
        answer: "After using a service, you can visit the provider's profile page and click on the 'Leave a Review' button. You'll be asked to provide a rating and write a short review about your experience.",
    },
    {
        question: 'What if I have a problem with a service provider?',
        answer: 'You can contact the service provider directly through our platform or report the issue to our support team. We will do our best to help resolve the problem.',
    },
    // Add more FAQs as needed
];

const CommunityForum = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-10"
        >
            <h2 className="text-3xl font-bold text-center mb-6">Community Forum</h2>
            <p className="text-center mb-8">
                Connect with other users, discuss services, ask questions, share your experiences, and help each other find the best services.
            </p>

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
                            <Link to={`/community/${category}`} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="card-body text-center">
                                    <h3 className="text-xl font-semibold">
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </h3>
                                    <p>
                                        {category === 'general' && 'Discuss anything related to finding and reviewing services.'}
                                        {category === 'recommendations' && 'Ask for or provide recommendations for specific services.'}
                                        {category === 'issues' && 'Report problems with services or suggest improvements.'}
                                        {category === 'tips' && 'Share tips and tricks for finding the best services and deals.'}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* FAQs */}
            <h3 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="card bg-base-100 shadow-xl rounded-box"
                    >
                        <div
                            className="collapse collapse-arrow border border-base-300"
                            onClick={() => toggleFaq(index)}
                        >
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                {faq.question}
                            </div>
                            {activeFaq === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="collapse-content"
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