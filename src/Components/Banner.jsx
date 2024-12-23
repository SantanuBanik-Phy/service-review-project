import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion"; // Import motion from framer-motion
import 'animate.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles for the carousel

const Banner = () => {
  const slides = [
    {
      id: 6,
      image: "https://i.ibb.co.com/p4RCfzh/Desarrollo-de-Software-a-Medida-vs-Soluciones-Preconstruidas.webp",
      title: "Custom Software Solutions",
      description: "Tailored software development services for businesses, including web apps, mobile apps, and enterprise solutions."
    },
    {
      id: 7,
      image: "https://i.ibb.co.com/164z029/Best-Elearning-Platforms.jpg",
      title: "Online Learning Platforms",
      description: "Explore a wide range of online courses and training programs to enhance your skills and knowledge from industry experts."
    },
    {
      id: 8,
      image: "https://i.ibb.co.com/nDt2NWd/Rocj146-Agk-F70z1f-NO0-GIP2-TZNUf-M1-Xm-KNuph-HQp-published.webp",
      title: "Expert Event Planning",
      description: "Organize flawless events with professional planning services, from weddings to corporate galas, tailored to your needs."
    },
    {
      id: 9,
      image: "https://i.ibb.co.com/HrYV1nC/1721044117486.png",
      title: "Streaming Entertainment Services",
      description: "Enjoy an extensive library of movies, TV shows, and exclusive content on our premium streaming platform."
    },
  ];

  return (
    <div className="bg-neutral text-neutral-content">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={500}
        className="w-full"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[450px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <motion.h2
                className="md:text-5xl text-4xl text-white font-bold mb-2"
                animate={{ x: [0, 10, 0] }} // Continuous horizontal movement
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              >
                {slide.title}
              </motion.h2>
              <motion.p
                className="mb-4"
                animate={{ y: [0, -10, 0] }} // Continuous vertical movement
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              >
                {slide.description}
              </motion.p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
