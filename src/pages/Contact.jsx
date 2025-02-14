import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-200 py-12`}>
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-700 dark:text-blue-400">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Have questions, feedback, or just want to connect with us? Drop us a message, and our team will get back to you as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
          {/* Contact Form */}
          <form
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full lg:w-1/2 border border-gray-200 dark:border-gray-700"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 dark:text-gray-300 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 dark:text-gray-300 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 dark:text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-blue-500 dark:via-purple-400 dark:to-indigo-500 text-white rounded-xl font-semibold text-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
            {formSubmitted && (
              <p className="mt-4 text-center text-green-600 dark:text-green-400 font-medium">
                Thank you for reaching out! We'll get back to you soon.
              </p>
            )}
          </form>

          {/* Contact Information */}
          <div className="mt-12 lg:mt-0 w-full lg:w-1/3 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">
              Get in Touch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Reach us at our headquarters or through our social media channels.
            </p>
            <div className="space-y-6">
              <p className="flex items-center space-x-4 text-lg font-medium">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-2xl" />
                <span>456 Service Avenue, Dhaka, BD</span>
              </p>
              <p className="flex items-center space-x-4 text-lg font-medium">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-2xl" />
                <span>support@servicereviews.com</span>
              </p>
              <p className="flex items-center space-x-4 text-lg font-medium">
                <FaPhone className="text-blue-600 dark:text-blue-400 text-2xl" />
                <span>+8801928392832</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
