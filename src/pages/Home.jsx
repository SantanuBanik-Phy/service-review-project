import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import FeaturedServices from '../Components/FeaturedServices';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

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

        fetchServices();
    }, []);
    return (
        <div>
            <Banner></Banner>
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
     
      
        </div>
    );
};

export default Home;