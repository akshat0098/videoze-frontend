import React from "react";
import { Star } from "lucide-react";
import adGenerator from "../assets/feature2nd.png";
import aiAvatar from "../assets/feature3rd.png";
import videoEditor from "../assets/feature4th.png";
import Card1 from "./Card1";

const FeatureSection = () => {
  const featuresData = [
    {
      image: adGenerator,
      title: "Video Ad Maker",
      subtitle:
        "Generate professional videos directly from your eCommerce store URL",
      features: [
        "Automatically fetches product details, images and descriptions",
        "AI-powered ad scripts optimized for conversions",
        "Pre-designed templates for different product categories",
        "Custom branding with your logo and color scheme",
      ],
      cta: "Try Smart Editing",
      reverse: true,
    },
    {
      image: aiAvatar,
      title: "AI Avatar Videos",
      subtitle: "Create engaging videos with realistic digital presenters",
      features: [
        "50+ diverse AI avatars with natural expressions",
        "Generate scripts or use your own content",
        "40+ languages with natural-sounding voices",
        "Perfect lip-sync for realistic presentation",
      ],
      cta: "Start Creating",
      extraLinks: ["Explore All Avatars"],
      gradient: true,
    },
    {
      image: videoEditor,
      title: "Advanced Video Editor",
      subtitle: "Professional editing tools for perfect results every time",
      features: [
        "Drag-and-drop interface with multi-track timeline",
        "Auto-captions with perfect timing",
        "100+ transitions and effects",
        "Audio mixing with voice balancing",
      ],
      cta: "Try the Editor",
      reverse: true,
    },
  ];

  return (
    <section className="bg-white pt-0 pb-16 px-2 md:px-4">
      <Card1 />
      <div className="max-w-[90rem] mx-auto px-4 mt-10 space-y-10">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-2xl p-8 shadow-sm ${
              item.gradient
                ? "bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe]"
                : "bg-white border border-gray-200"
            }`}
          >
            <div
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              {/* Image - */}
              <div className="w-full md:w-[500px] flex-shrink-0">
                <div className="relative w-full h-72 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-gray-600 text-lg mb-6">{item.subtitle}</p>
                )}

                <ul className="space-y-4 text-lg text-gray-800">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star
                        className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="#"
                    className="text-white px-6 py-3 rounded-full shadow-md bg-gradient-to-r from-[#6B3EFF] to-[#9B6BFF] hover:opacity-90 transition-all flex items-center gap-2 text-base font-medium"
                  >
                    {item.cta}
                    <span className="w-6 h-6 bg-white text-[#6B3EFF] rounded-full flex items-center justify-center text-lg">
                      ➔
                    </span>
                  </a>
                  {item.extraLinks?.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-purple-700 px-6 py-3 rounded-full border border-purple-300 hover:bg-purple-50 transition-all flex items-center gap-2 text-base font-medium"
                    >
                      {link}
                      <span className="w-6 h-6 bg-[#6B3EFF] text-white rounded-full flex items-center justify-center text-lg">
                      ➔
                    </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
