import React from 'react'
import backgroundImage from "../assets/BackgroundImg.jpg";

const PricingHero = () => {
  return (
       <div
     className="relative min-h-[30vh] flex items-start justify-center px-4 pt-16 pb-10"
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
        Find the perfect plan that suits your content goals.
       </h1>
       <p className="text-sm sm:text-base md:text-lg text-gray-700 px-2 sm:px-4">
       Choose from a range of video services, whether you're building a faceless YouTube <br /> channel or want studio-quality avatar videos.
       </p>
     </div>
   </div>
  )
}

export default PricingHero