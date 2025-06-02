import React from 'react';

const AffiliateHero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#fefcfd] via-white to-[#fefafa]  py-16 px-4 sm:px-6 lg:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-black">
          Boost Your Earnings by
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-black mb-6">
          Empowering Video Creators
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
          Join our affiliate network and earn up to 25% recurring revenue by helping creators
          <br className="hidden sm:block" />
          bring their content to life with AI video tools.
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
