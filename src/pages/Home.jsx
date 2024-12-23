import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import FeaturedServices from "../Components/FeaturedServices";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import MeetOurPartners from "../Components/MeetOurPartners";
import ServiceCategories from "../Components/ServiceCategories";
import PricingPlans from "../Components/PricingPlans";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platformStats, setPlatformStats] = useState({
    users: 0,
    reviews: 0,
    servicesCount: 0,
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/services?limit=6"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPlatformStats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/platform-stats"
        );
        const usersCount =
          response.data.users === 1 && services.length === 0
            ? 0
            : response.data.users;

        setPlatformStats({
          users: usersCount,
          reviews: response.data.reviews,
          servicesCount: response.data.servicesCount,
        });
      } catch (error) {
        console.error("Error fetching platform stats:", error);
      }
    };

    fetchServices();
    fetchPlatformStats();
  }, [services]);

  return (
    <div className="bg-gray-50">
      <Banner />

      {/* Featured Services Section */}
      <section className="w-11/12 mx-auto py-8">
        <FeaturedServices services={services} loading={loading} />
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="btn font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            See All Services
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Our Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Users */}
            <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Users</h3>
              <p className="text-4xl font-bold text-purple-600 mt-2">
                <CountUp start={0} end={platformStats.users} duration={2} />
              </p>
            </div>

            {/* Reviews */}
            <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Reviews</h3>
              <p className="text-4xl font-bold text-green-600 mt-2">
                <CountUp start={0} end={platformStats.reviews} duration={2} />
              </p>
            </div>

            {/* Services */}
            <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 h-12 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6h-3.17l-1.84-3.14c-.37-.63-1.03-.86-1.64-.86H10c-.61 0-1.27.23-1.64.86L6.52 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Services</h3>
              <p className="text-4xl font-bold text-blue-600 mt-2">
                <CountUp start={0} end={platformStats.servicesCount} duration={2} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="w-11/12 mx-auto py-8">
        <MeetOurPartners />
      </section>
      <section className="w-11/12 mx-auto py-8">
        <ServiceCategories />
      </section>
      <section className="w-11/12 mx-auto py-8">
        <PricingPlans />
      </section>
    </div>
  );
};

export default Home;
