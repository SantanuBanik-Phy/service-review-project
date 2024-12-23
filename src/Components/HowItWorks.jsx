import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Find Services',
        description: 'Browse our extensive list of services and filter by category, location, and more.',
        icon: 'search', // Use an icon library like React Icons
    },
    {
        title: 'Read Reviews',
        description: 'See what other users are saying about the services you are interested in.',
        icon: 'comment',
    },
    {
        title: 'Connect with Providers',
        description: 'Contact service providers directly through our platform to discuss your needs.',
        icon: 'mail',
    },
    {
        title: 'Leave Your Review',
        description: 'Share your experiences and help others make informed decisions.',
        icon: 'pencil',
    },
];

const HowItWorks = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-10"
        >
            <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="card bg-base-100 shadow-xl text-center"
                    >
                        <div className="card-body">
                            <div className="text-5xl mb-4">
                                {/* Replace with actual icons */}
                                <ion-icon name={step.icon}></ion-icon> 
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default HowItWorks;