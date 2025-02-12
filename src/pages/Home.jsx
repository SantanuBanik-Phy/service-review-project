import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import FeaturedServices from "../Components/FeaturedServices";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import MeetOurPartners from "../Components/MeetOurPartners";
import ServiceCategories from "../Components/ServiceCategories";
import PricingPlans from "../Components/PricingPlans";
import { Helmet } from "react-helmet";
import HowItWorks from "../Components/HowItWorks";

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
          "https://b10-a11-server.vercel.app/api/services?limit=6"
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
          "https://b10-a11-server.vercel.app/api/platform-stats"
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
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>Home | Service Review</title>
      </Helmet>

      <Banner />

      {/* Featured Services Section */}
      <section className="w-11/12 mx-auto py-8">
        <FeaturedServices services={services} loading={loading} />
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="btn font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            See All Services
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Our Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { title: "Users", count: platformStats.users, color: "purple", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
              { title: "Reviews", count: platformStats.reviews, color: "green", icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" },
              { title: "Services", count: platformStats.servicesCount, color: "blue", icon: "M20 6h-3.17l-1.84-3.14c-.37-.63-1.03-.86-1.64-.86H10c-.61 0-1.27.23-1.64.86L6.52 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" },
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`w-12 h-12 text-${stat.color}-500`} viewBox="0 0 24 24">
                    <path d={stat.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{stat.title}</h3>
                <p className={`text-4xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mt-2`}>
                  <CountUp start={0} end={stat.count} duration={2} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Partners Section */}
<div 
  className="w-full mx-auto bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[url('https://i.ibb.co.com/5YxPff1/abstruct.png')] dark:bg-[url('https://i.ibb.co.com/different-bg-for-dark.png')] dark:bg-gray-900 dark:text-white bg-cover bg-center bg-no-repeat"
  
>
  <section className="w-11/12 mx-auto">
    <MeetOurPartners />
  </section>
</div>

{/* Service Categories Section */}
<section className="w-11/12 mx-auto py-8">
  <ServiceCategories />
</section>
<section className="w-11/12 mx-auto py-8">
    <HowItWorks />
  </section>

{/* Pricing Plans Section */}
<div 
  className="w-full mx-auto bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[url('https://i.ibb.co.com/vBNkmK7/rb-66456.png')] dark:bg-[url('https://i.ibb.co.com/different-bg-for-dark.png')] dark:bg-gray-900 dark:text-white bg-cover bg-center bg-no-repeat "

>
  <section className="w-11/12 mx-auto py-8">
    <PricingPlans />
  </section>
</div>

    </div>
  );
};

export default Home;
