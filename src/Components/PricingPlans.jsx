import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Basic',
        price: 'Free',
        features: [
            'List 1 service', 
            'Basic profile', 
            'Limited exposure', 
            'Community support'
        ],
        description: "Ideal for those just getting started with a simple service review system.",
        color: 'bg-blue-100',
    },
    {
        name: 'Standard',
        price: '$49/month',
        features: [
            'List 5 services', 
            'Enhanced profile', 
            'Increased visibility', 
            'Priority support'
        ],
        description: "Perfect for growing businesses looking for more exposure and support.",
        color: 'bg-yellow-100',
    },
    {
        name: 'Premium',
        price: '$99/month',
        features: [
            'Unlimited services', 
            'Featured profile', 
            'Maximum exposure', 
            'Dedicated support'
        ],
        description: "Best for businesses that need full flexibility and priority customer support.",
        color: 'bg-green-100',
    },
];

const PricingPlans = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-10"
        >
            <h2 className="text-4xl font-extrabold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Pricing Plans for Service Providers
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
                Choose the plan that fits your needs to start managing your service review system with ease.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className={`card ${plan.color} shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                        <div className="card-body text-center py-8">
                            <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
                            <p className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</p>
                            <p className="text-gray-700 mb-4">{plan.description}</p>
                            <ul className="list-disc text-gray-600 ml-6 my-4 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-left text-sm">{feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:bg-gradient-to-l px-6 py-2 rounded-lg transform transition-all duration-300">
                                Choose {plan.name}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PricingPlans;
