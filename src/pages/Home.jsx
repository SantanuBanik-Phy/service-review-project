import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import FeaturedServices from '../Components/FeaturedServices';
import axios from 'axios';

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
      </section>
     
      
        </div>
    );
};

export default Home;