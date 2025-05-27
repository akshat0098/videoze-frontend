import React, { useState, useEffect } from "react";
import ananyaImg from "../assets/profile.png";
import jamesImg from "../assets/pro2nd.png";
import angelicaImg from "../assets/pro3rd.png";
import men from "../assets/manpro.jpg";
import women from "../assets/women.jpg";
import female from "../assets/female.jpg";

const testimonials = [
  {
    text: "Perfect for busy creators like me. The suggestions are always on point and save hours of research.",
    name: "Ananya Singh",
    location: "India",
    image: ananyaImg,
  },
  {
    text: "Their smart discovery tools helped me grow my audience faster than I imagined. Huge time-saver!",
    name: "James Carter",
    location: "USA",
    image: jamesImg,
  },
  {
    text: "The platform made discovering the right content effortless — I found what I needed within minutes!",
    name: "Angelica Singh",
    location: "UK",
    image: angelicaImg,
  },
  {
    text: "Absolutely love the ease of use. It’s transformed how I create videos daily.",
    name: "Sophia Lee",
    location: "Canada",
    image: women,
  },
  {
    text: "Excellent platform with amazing support. Helped me stay consistent and grow steadily.",
    name: "Carlos Ramirez",
    location: "Mexico",
    image: men,
  },
  {
    text: "Highly recommend it for anyone looking to streamline video creation and boost engagement!",
    name: "Fatima Noor",
    location: "UAE",
    image: female,
  },
];

const Testimonials = () => {
  const itemsToShowDesktop = 4;
  const itemsToScroll = 2;

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + itemsToScroll >= testimonials.length
          ? 0
          : prevIndex + itemsToScroll
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get testimonials slice with wrap-around
  const currentTestimonials =
    startIndex + itemsToShowDesktop <= testimonials.length
      ? testimonials.slice(startIndex, startIndex + itemsToShowDesktop)
      : [
          ...testimonials.slice(startIndex),
          ...testimonials.slice(0, startIndex + itemsToShowDesktop - testimonials.length),
        ];

  return (
    <div className="bg-gradient-to-r from-[#f7f5fb] to-[#f5f7fc] py-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">
          Join thousands of creators who’ve transformed their video production
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          transition-all duration-500 ease-in-out
        "
      >
        {currentTestimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            style={{ minHeight: "220px" }} // keep box shape consistent
          >
            <p className="text-gray-700 italic mb-6 flex-grow">“{item.text}”</p>
            <div className="flex items-center space-x-4 mt-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">📍 {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
