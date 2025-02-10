import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-700">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          Have questions, feedback, or just want to connect with us? Drop us a
          message, and our team will get back to you as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
          {/* Contact Form */}
          <form
            className="bg-white p-8 rounded-2xl shadow-xl w-full lg:w-1/2 border border-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
            {formSubmitted && (
              <p className="mt-4 text-center text-green-600 font-medium">
                Thank you for reaching out! We'll get back to you soon.
              </p>
            )}
          </form>

          {/* Contact Information */}
          <div className="mt-12 lg:mt-0 w-full lg:w-1/3 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Get in Touch</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Reach us at our headquarters or through our social media channels.
            </p>
            <div className="space-y-6">
              <p className="flex items-center space-x-4 text-lg font-medium">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <span>456 Service Avenue, Dhaka,BD</span>
              </p>
              <p className="flex items-center space-x-4 text-lg font-medium">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <span>support@servicereviews.com</span>
              </p>
              <p className="flex items-center space-x-4 text-lg font-medium">
                <FaPhone className="text-blue-600 text-2xl" />
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