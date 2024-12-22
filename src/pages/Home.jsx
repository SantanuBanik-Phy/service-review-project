import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import FeaturedServices from '../Components/FeaturedServices';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platformStats, setPlatformStats] = useState({
    users: 0,
    reviews: 0,
    servicesCount: 0
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/services?limit=6');
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch platform statistics (users, reviews, services count)
    const fetchPlatformStats = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/platform-stats');
        // Adjust user count if needed
  
     
        setPlatformStats({ 
            users: response.data.users, 
            reviews: response.data.reviews, 
            servicesCount: response.data.servicesCount 
          });
      } catch (error) {
        console.error("Error fetching platform stats:", error);
      }
    };

    fetchServices();
    fetchPlatformStats();
  }, []);

  return (
    <div>
      <Banner />
      <section className="w-11/12 mx-auto">
        <FeaturedServices services={services} loading={loading} />

        <div className="text-center mt-8">
          <Link
            to="/services"
            className="btn font-semibold text-white bg-gradient-to-r from-[#19284a] to-[#619bca] rounded-xl"
          >
            See All Services
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-3xl">
              <CountUp end={platformStats.users} duration={2} />
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Reviews</h3>
            <p className="text-3xl">
              <CountUp end={platformStats.reviews} duration={2} />
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Services</h3>
            <p className="text-3xl">
              <CountUp end={platformStats.servicesCount} duration={2} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
