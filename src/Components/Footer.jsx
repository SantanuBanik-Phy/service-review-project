import logo  from "../assets/serviceReview.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* Company Information */}
                    <div className="space-y-6 text-center lg:text-left">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="w-16 h-16 rounded-full mx-auto lg:mx-0"
                        />
                        <h1 className="text-3xl font-bold text-yellow-400">
                            Service <span className="text-white">Review</span>
                        </h1>
                        <p className="text-sm text-gray-300">
                            Your go-to platform for honest and reliable reviews across all services.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center lg:justify-start gap-6 mt-4">
                            <a
                                href="https://www.facebook.com/santanu.banik.779"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-yellow-400 transition duration-300"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://twitter.com/your-twitter-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-yellow-400 transition duration-300"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/your-instagram-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-yellow-400 transition duration-300"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://github.com/SantanuBanik-Phy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-yellow-400 transition duration-300"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Useful Links</h2>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition duration-300">Home</a></li>
                            <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a></li>
                            <li><a href="#services" className="hover:text-yellow-400 transition duration-300">Services</a></li>
                            <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Newsletter</h2>
                        <p className="text-sm">Sign up to get the latest updates and news.</p>
                        <form action="#" method="POST" className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 rounded-md text-black w-full"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black p-3 rounded-md hover:bg-yellow-500 transition duration-300 w-32"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Contact Info</h2>
                        <ul className="text-sm">
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-map-marker-alt text-yellow-400"></i>
                                <span>203/SouthShadebpur, Feni, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-phone-alt text-yellow-400"></i>
                                <span>+880192932999</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-envelope text-yellow-400"></i>
                                <span>info@servicereview.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 pt-8 text-center">
                    <p className="text-sm text-gray-200">
                        &copy; {currentYear} Service Review. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
