import React from "react";
import feature from "../assets/feature.png";
import { Star } from "lucide-react";

const Card1 = () => {
  return (
    <section className="pt-0 px-2 bg-white">
      <div className="max-w-[90rem] mx-auto px-4">
        {/* Heading & Tagline */}
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-[#A14CF4]">Features</span>
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Explore our powerful suite of AI tools designed for modern creators, marketers, and storytellers.
          </p>
        </div>

        {/* Card */}
        <div className="w-full rounded-2xl p-8 shadow-sm bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe]">
          {/* Top buttons inside the card */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {[
              "Product Demos",
              "Customer Testimonials",
              "Social Media Ads",
              "Online Courses",
              "Influencer Marketing",
            ].map((tab, index) => (
              <button
                key={index}
                className="bg-gradient-to-r from-[#dfc9fd] to-[#f5c9f6] text-gray-800 font-semibold px-4 py-2 rounded-lg text-base hover:shadow-md transition whitespace-nowrap"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image Container */}
            <div className="w-full md:w-[460px] flex-shrink-0">
              <div className="relative w-full h-0 pb-[66.66%] bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={feature}
                  alt="Business meeting"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Create stunning, professional videos
              </h3>
              <ul className="space-y-4 text-lg text-gray-800">
                {[
                  "Professionally designed templates for all business presentations and marketing needs",
                  "Advanced script-to-video feature for rapid content creation",
                  "Comprehensive transition effects library with real-time preview",
                  "Seamless voiceover integration for professional narration",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Star
                      className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 text-white px-6 py-3 rounded-full shadow-md bg-gradient-to-r from-[#6B3EFF] to-[#9B6BFF] hover:opacity-90 transition-all flex items-center gap-2 text-base font-medium">
                Explore all features
                <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-lg">
                  ➔
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;
