import { Link } from "react-router-dom";
import logo from "../assets/serviceReview.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    <div className="space-y-6 text-center lg:text-left">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="w-16 h-16 rounded-full mx-auto lg:mx-0"
                        />
                        <h1 className="text-3xl font-bold text-yellow-400 dark:text-yellow-300">
                            Service <span className="text-white dark:text-gray-200">Review</span>
                        </h1>
                        <p className="text-sm text-gray-300 dark:text-gray-400">
                            Your go-to platform for honest and reliable reviews across all services.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-6 mt-4">
                            <a href="https://www.facebook.com/santanu.banik.779" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/SantanuBanik-Phy" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold dark:text-gray-200">Useful Links</h2>
                        <ul className="space-y-4 text-sm text-gray-300 dark:text-gray-400">
                            <li><Link to="/" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">Home</Link></li>
                            <li><Link to="/forum" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">Community Forum</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold dark:text-gray-200">Newsletter</h2>
                        <p className="text-sm text-gray-300 dark:text-gray-400">Sign up to get the latest updates and news.</p>
                        <form action="#" method="POST" className="flex space-x-2">
                            <input type="email" placeholder="Enter your email" className="p-3 rounded-md text-black w-full dark:bg-gray-700 dark:text-white" />
                            <button type="submit" className="bg-yellow-400 text-black p-3 rounded-md hover:bg-yellow-500 dark:hover:bg-yellow-300 transition duration-300 w-32">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold dark:text-gray-200">Contact Info</h2>
                        <ul className="text-sm text-gray-300 dark:text-gray-400 space-y-2">
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-map-marker-alt text-yellow-400 dark:text-yellow-300"></i>
                                <span>203/SouthShadebpur, Feni, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-phone-alt text-yellow-400 dark:text-yellow-300"></i>
                                <span>+880192932999</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-envelope text-yellow-400 dark:text-yellow-300"></i>
                                <span>info@servicereview.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-200 dark:text-gray-400">&copy; {currentYear} Service Review. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
