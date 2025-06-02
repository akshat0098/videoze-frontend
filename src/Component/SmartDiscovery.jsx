import React from "react";
import { Star } from "lucide-react";
import smartDis from "../assets/smartDis.png";
import articleImg from "../assets/smartdis1.png";
import stockMediaImg from "../assets/smartdis2.png";
import facelessImg from "../assets/faceless.png";

const SmartDiscovery = () => {
  const commonButtonClass =
    "inline-flex items-center justify-between gap-2 px-5 py-2 text-sm font-medium text-white rounded-full shadow-md bg-gradient-to-r from-[#3b2ff0] to-[#d66bfc] hover:opacity-90 transition-all w-fit";

  return (
    <section className="bg-white px-4 pt-2 pb-0">
      <div className="max-w-[87rem] mx-auto">
        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            For anyone with a{" "}
            <span className="text-purple-500">Story to tell</span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Uncover the right audience, tools, and trends to turn your story
            into viral videos.
          </p>
        </div>

        {/* Smart Discovery Section */}
        <div className="w-full bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe] rounded-2xl p-8 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image - now on the left side */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative w-full h-0 pb-[66.66%]">
                {/* 3:2 aspect ratio container */}
                <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={smartDis}
                    alt="Smart Discovery Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content - now on the right side */}
            <div className="w-full md:w-3/5">
              <h3 className="text-4xl font-bold mb-6 text-center md:text-left">
                Optimize Your Videos for Search
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Our AI-powered keyword discovery tool helps you find the perfect
                keywords to maximize your video's visibility on search engines
                and social platforms.
              </p>
              <ul className="space-y-4 text-lg text-gray-800">
                {[
                  "Trending topic analysis to find the best keywords",
                  "Competitor keyword research to stay ahead",
                  "SEO-optimized titles and descriptions for better rankings",
                  "Performance tracking to refine your strategy",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star
                      className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#" className={commonButtonClass}>
                  Try it Now
                  <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-lg">
                    ➔
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Two Side-by-Side Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Article to Video */}
          <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-purple-600 mb-6">
                Article to Video
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform any article, blog post or webpage into a professional
                video with just one click. Our AI extracts the key points and
                creates a compelling narrative.
              </p>
              <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden p-0 m-0">
                <img
                  src={articleImg}
                  alt="Preview"
                  className="w-90% h-90% object-cover"
                />
              </div>
            </div>
            <a href="#" className={`${commonButtonClass} mt-8`}>
              Create
              <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-lg">
                ➔
              </span>
            </a>
          </div>

          {/* Stock Media */}
          <div className="w-full bg-gradient-to-br from-[#f3e8ff] to-[#e0f2fe] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                2M+ Stock Media Available
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Access millions of high quality stock images, videos, music
                tracks and sound effects to enhance your videos professionally
                without additional licensing fees.
              </p>
             <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden p-0 m-0">
                <img
                  src={stockMediaImg}
                  alt="Preview"
                  className="w-90% h-90% object-cover"
                />
              </div>
            </div>
            <a href="#" className={`${commonButtonClass} mt-8`}>
              Explore Stock Library
              <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-lg">
                ➔
              </span>
            </a>
          </div>
        </div>

        {/* Go Faceless Section */}
        <div className="w-full bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe] rounded-2xl p-8 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content - now properly aligned with heading */}
            <div className="w-full md:w-3/5">
              <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
                Go Faceless
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Generate entire videos using AI-written or your own scripts,
                with relevant scenes and stock visuals.
              </p>
              <ul className="space-y-4 text-lg text-gray-800">
                {[
                  "Automatically match script scenes with relevant visuals and stock footage",
                  "Add captions and voiceovers with customizable styles",
                  "Apply seamless transitions and dynamic visual effects",
                  "Background music and soundtracks auto-synced with narration",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star
                      className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#" className={commonButtonClass}>
                  Create faceless video
                  <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-lg">
                    ➔
                  </span>
                </a>
              </div>
            </div>

            {/* Image - perfectly placed with consistent spacing */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative w-full h-0 pb-[66.66%]">
                {" "}
                {/* 3:2 aspect ratio container */}
                <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={facelessImg}
                    alt="Go Faceless Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDiscovery;
