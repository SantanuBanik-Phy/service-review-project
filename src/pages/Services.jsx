import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../components/ServiceCard';
import useTitle from '../hook/userTitle.jsx';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useTitle('Services');

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        setLoading(true); 
        const { data } = await axios.get(
          `http://localhost:3000/api/allServices?filter=${filter}&search=${search}`
        );
        setServices(data); 
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchAllServices();
  }, [filter, search]);

  const handleReset = () => {
    setFilter('');
    setSearch('');
  };

  return (
    <div className="py-10 container mx-auto">
      <Helmet>
        <title>Services - All Services</title>
      </Helmet>
  
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-10">
        {/* Category Filter */}
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-lg shadow-md w-full md:w-auto focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">Filter By Category</option>
            <option value="Food">Food</option>
            <option value="IT">IT</option>
            <option value="Transport">Transport</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex p-1 overflow-hidden border rounded-lg shadow-md focus-within:ring focus-within:ring-opacity-40 focus-within:border-indigo-400 focus-within:ring-indigo-300 w-full md:w-auto">
          <input
            className="px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
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

        {/* Reset Button */}
        <button 
          onClick={handleReset} 
          className="bg-gradient-to-r from-gray-500 to-gray-400 text-white py-3 px-6 rounded-md hover:bg-gradient-to-l transition-all duration-300 shadow-lg"
        >
          Reset
        </button>
      </div>

      <h2 className="text-4xl text-center font-semibold mb-10">
        Our Services ({services.length})
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-8 h-8" role="status">

          </div>
        </div>
      ) : services.length === 0 ? (
        <p className="text-center text-xl">No services found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
