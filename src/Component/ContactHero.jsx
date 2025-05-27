import React from "react";
import backgroundImage from "../assets/BackgroundImg.jpg";
import { FaRobot } from "react-icons/fa";

const cards = [
  {
    title: "FAQ Assistance",
    subtitle: "Frequently Asked Questions",
    description:
      "Browse queries related to our platform, pricing, or affiliate program.",
  },
  {
    title: "Email Support",
    subtitle: "Write to Us",
    description: "support@videoze.com",
  },
  {
    title: "Learn with Videos",
    subtitle: "Tutorial Library",
    description:
      "Watch quick tutorials from dashboard to learn our platform easily.",
  },
];

const ContactHero = () => {
  return (
    <div
      className="relative min-h-[60vh] flex flex-col items-center justify-start px-4 pt-16 pb-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-black mb-2">
          <span className="text-purple-500">Reach Out</span> to Join Our Journey
          of Empowerment
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 px-2 sm:px-4">
          Choose from a range of video services — whether you're building a
          faceless YouTube channel,
          <br />
          creating high-converting video ads, or producing studio-quality avatar
          videos.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md w-full max-w-xs flex justify-between items-start hover:shadow-lg transition-shadow duration-300 min-h-[160px]"
          >
            {/* Text Content */}
            <div className="text-left">
              <p className="text-xs font-medium text-purple-500 mb-1">
                {card.subtitle}
              </p>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>

            {/* Icon on Right */}
            <div className="ml-3 mt-1">
              <div className="bg-green-100 p-2 rounded-full">
                <FaRobot className="text-green-500 text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHero;
