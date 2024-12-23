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
            <h2 className="text-3xl font-bold text-center mb-6">Pricing Plans for Service Providers</h2>
            <p className="text-center text-gray-600 mb-10">
                Choose the plan that best suits your needs and start reaching more customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="card bg-base-100 shadow-xl"
                    >
                        <div className="card-body text-center py-8">
                            <h3 className="text-2xl font-semibold text-primary">{plan.name}</h3>
                            <p className="text-4xl font-bold text-gray-800">{plan.price}</p>
                            <ul className="list-disc text-gray-600 ml-6 my-4 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-left">{feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-primary">Choose {plan.name}</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PricingPlans;