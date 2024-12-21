import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'animate.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles for the carousel

const Banner = () => {
  const slides =[
    {
        "id": 1,
        "image": "",
        "title": "Interactive Science Programs",
        "description": "Participate in engaging science sessions that highlight cutting-edge innovations and foster meaningful discussions about technology's role in shaping our world."
    },
    {
        "id": 2,
        "image": "",
        "title": "Virtual Space Mission Experiences",
        "description": "Dive into realistic simulations of space missions, emphasizing teamwork, problem-solving, and the challenges of exploring beyond our planet."
    },
    {
        "id": 3,
        "image": "",
        "title": "Collaborative Leadership Workshops",
        "description": "Enhance team dynamics with sessions that encourage collaboration, leadership growth, and effective decision-making in high-pressure scenarios."
    },
    {
        "id": 4,
        "image": "",
        "title": "Premium Event Planning Services",
        "description": "Design bespoke events with luxurious themes, exceptional storytelling elements, and tailored services to create unforgettable memories."
    }
]

  

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
              <h2 className="md:text-5xl text-4xl text-yellow-500  font-bold mb-2 animate__animated animate__slideInDown">{slide.title}</h2>
              <p className="mb-4 animate__animated animate__slideInUp">{slide.description}</p>
             
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
