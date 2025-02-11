import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../components/ServiceCard';
import useTitle from '../hook/userTitle.jsx';
import axios from 'axios';

const Services = ({ theme }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useTitle('Services');

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://b10-a11-server.vercel.app/api/allServices?filter=${filter}&search=${search}`
        );
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllServices();
  }, [filter, search]);

  const sortedServices = [...services]; 
  if (sort === 'asc') {
    sortedServices.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    sortedServices.sort((a, b) => b.price - a.price);
  }

  return (
    <div className={`lg:px-12   dark:bg-gray-900 ${theme === 'dark' ? 'dark' : ''}`}>
      <Helmet>
        <title>Services - All Services</title>
      </Helmet>

      <div className="dark:bg-gray-900 dark:text-white min-h-screen p-5">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-10">
          {/* Category Filter */}
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-lg shadow-md w-full md:w-auto focus:ring-2 focus:ring-indigo-500 transition-all duration-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="">Filter By Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="IT">IT</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Finance">Finance</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Travel">Travel</option>
              <option value="Fitness">Fitness</option>
              <option value="Beauty & Wellness">Beauty & Wellness</option>
              <option value="Retail">Retail</option>
              <option value="Legal">Legal</option>
              <option value="Home Services">Home Services</option>
              <option value="Automotive">Automotive</option>
              <option value="Technology">Technology</option>
              <option value="Logistics">Logistics</option>
              <option value="Media & Advertising">Media & Advertising</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Construction">Construction</option>
              <option value="Energy & Utilities">Energy & Utilities</option>
              <option value="Public Services">Public Services</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Sports & Recreation">Sports & Recreation</option>
              <option value="Insurance">Insurance</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Event Management">Event Management</option>
              <option value="Pet Care">Pet Care</option>
              <option value="Luxury Services">Luxury Services</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex p-1 justify-between overflow-hidden border rounded-lg shadow-md focus-within:ring focus-within:ring-opacity-40 focus-within:border-indigo-400 focus-within:ring-indigo-300 w-full md:w-auto dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <input
              className="px-6 py-3 text-gray-700 dark:text-white dark:bg-gray-800 dark:border-gray-600 placeholder-gray-500 outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for a Service"
              aria-label="Enter Service Title"
            />
            <button
              className="px-6 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 rounded-md hover:bg-gradient-to-l focus:outline-none"
            >
              Search
            </button>
          </div>

          {/* Sorting By Price */}
          <div>
            <select
              name="sort"
              id="sort"
              className="border p-4 rounded-lg shadow-md w-full md:w-auto focus:ring-2 focus:ring-indigo-500 transition-all duration-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="">Sort By Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="text-4xl text-center font-bold text-indigo-700 dark:text-white mb-10">
          Our Services ({sortedServices.length})
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-infinity loading-lg dark:text-white"></span>
          </div>
        ) : sortedServices.length === 0 ? (
          <p className="text-center text-xl dark:text-gray-400">No services found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-7">
            {sortedServices.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
