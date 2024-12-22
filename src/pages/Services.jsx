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
        setLoading(true); // Start loading
        const { data } = await axios.get(
          `http://localhost:3000/api/allServices?filter=${filter}&search=${search}`
        );
        setServices(data); // Set services after data is fetched
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]); // In case of an error, set an empty array
      } finally {
        setLoading(false); // Stop loading
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
        <title>Services - Service Review</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-10">
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-lg"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">Filter By Category</option>
            <option value="Food">Food</option>
            <option value="IT">IT</option>
            <option value="Transport">Transport</option>
          </select>
        </div>

        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Service Title"
            aria-label="Enter Service Title"
          />

          <button
            className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"

          >
            Search
          </button>
        </div>

        <button onClick={handleReset} className="btn bg-gray-500 hover:bg-gray-400 text-white">
          Reset
        </button>
      </div>

      <h2 className="text-4xl text-center font-semibold mb-10">
        Our Services ({services.length})
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-8 h-8" role="status">
            <span className="visually-hidden">Loading...</span>
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
