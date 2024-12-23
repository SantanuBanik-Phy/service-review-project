import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Basic',
        price: 'Free',
        features: ['List 1 service', 'Basic profile', 'Limited exposure'],
    },
    {
        name: 'Standard',
        price: '$49/month',
        features: ['List 5 services', 'Enhanced profile', 'Increased visibility'],
    },
    {
        name: 'Premium',
        price: '$99/month',
        features: ['Unlimited services', 'Featured profile', 'Maximum exposure'],
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
            <h2 className="text-3xl font-bold text-center mb-6">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="card bg-base-100 shadow-xl"
                    >
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-semibold">{plan.name}</h3>
                            <p className="text-4xl font-bold">{plan.price}</p>
                            <ul className="list-disc ml-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-primary mt-4">Choose Plan</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PricingPlans;