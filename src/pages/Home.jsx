import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import FeaturedServices from "../Components/FeaturedServices";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import MeetOurPartners from "../Components/MeetOurPartners";
import ServiceCategories from "../Components/ServiceCategories";


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

    // Fetch platform statistics (users, reviews, services count)
    const fetchPlatformStats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/platform-stats"
        );
        // Adjust user count if needed
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
        </section>

        {/* Stats Section */}
        <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Stats</h2>
        <div className="stats shadow mt-10">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">
              <CountUp start={0} end={platformStats.users} duration={2} />
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Reviews</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={platformStats.reviews}
                duration={2}
              />
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Services</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={platformStats.servicesCount}
                duration={2}
              />
            </div>
          </div>
        </div>
        </div>
    
     
        <section className="w-11/12 mx-auto">
        <MeetOurPartners />
      </section>
      <section className="w-11/12 mx-auto">
        <ServiceCategories></ServiceCategories>
      </section>
     
    </div>
  );
};

export default Home;