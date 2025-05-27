import React from 'react';
import backgroundImage from "../assets/BackgroundImg.jpg";

const AffiliateHero = () => {
  return (
    <div
  className="relative min-h-[60vh] flex items-start justify-center px-4 pt-16 pb-10"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

  {/* Content */}
  <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-black">
      Boost Your Earnings by
    </h1>
    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-black mb-6">
      Empowering Video Creators
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 px-2 sm:px-4">
      Join our affiliate network and earn up to 25% recurring revenue by helping creators bring their content <br /> to life with AI video tools.
    </p>
    <button
      className="px-5 sm:px-6 py-2 sm:py-3 rounded-full text-white font-medium text-sm sm:text-base transition-all duration-300"
      style={{
        background: 'linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)',
      }}
    >
      Join the Creator Partner Program →
    </button>
  </div>
</div>

  );
};

export default AffiliateHero;
