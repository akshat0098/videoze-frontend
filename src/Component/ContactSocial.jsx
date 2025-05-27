import React from "react";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tictol.png";

const ContactSocial = () => {
  return (
    <div className="bg-gray-50 py-6 sm:py-16 px-4 sm:px-6 md:px-8 max-w-[100rem] mx-auto mb-4">
      {/* Social Section */}
      <div className="text-center py-8 sm:py-10 px-4 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Create Once. Share Everywhere.
        </h1>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[fb, youtube, insta, tiktok, linkedin].map((icon, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:px-6 sm:py-4 rounded-md shadow-md flex items-center"
            >
              <img src={icon} alt="Social media" className="h-5 sm:h-6" />
            </div>
          ))}
        </div>

        <button className="px-4 sm:px-6 py-1.5 sm:py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-100 transition text-xs sm:text-sm font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ContactSocial;
