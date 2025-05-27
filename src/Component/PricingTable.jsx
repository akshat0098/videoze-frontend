import React from "react";
import { Check } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const PricingTable = () => {
  const plans = [
    {
      name: "Basic",
      price: "$25",
      credits: "25",
      features: {
        ideaGeneration: "10",
        avatars: "30+",
        avatarCloning: "1",
        scriptEdits: "7 Credits / 1000 Words",
        voiceClones: "1",
        videoEditor: true,
        socialMedia: [
          <FaFacebookF className="text-[#1877F2]" />,
          <FaTwitter className="text-[#1DA1F2]" />,
          <FaInstagram className="text-[#E1306C]" />,
        ],
        postScheduling: "20 posts for 2 weeks",
        contentCalendar: true,
        storage: "5GB",
      },
    },
    {
      name: "Standard",
      price: "$74",
      credits: "74",
      features: {
        ideaGeneration: "30",
        avatars: "40+",
        avatarCloning: "3",
        scriptEdits: "7 Credits / 1000 Words",
        voiceClones: "3",
        videoEditor: true,
        socialMedia: [
          <FaFacebookF className="text-[#1877F2]" />,
          <FaTwitter className="text-[#1DA1F2]" />,
          <FaInstagram className="text-[#E1306C]" />,
          <FaLinkedinIn className="text-[#0A66C2]" />,
        ],
        postScheduling: "60 posts for 4 weeks",
        contentCalendar: true,
        storage: "10GB",
      },
    },
    {
      name: "Premium",
      price: "$149",
      credits: "149",
      features: {
        ideaGeneration: "50",
        avatars: "60+",
        avatarCloning: "5",
        scriptEdits: "7 Credits / 1000 Words",
        voiceClones: "5",
        videoEditor: true,
        socialMedia: [
          <FaFacebookF className="text-[#1877F2]" />,
          <FaTwitter className="text-[#1DA1F2]" />,
          <FaInstagram className="text-[#E1306C]" />,
          <FaLinkedinIn className="text-[#0A66C2]" />,
          <FaYoutube className="text-[#FF0000]" />,
        ],
        postScheduling: "180 posts for 6 weeks",
        contentCalendar: true,
        storage: "20GB",
      },
    },
    {
      name: "Enterprise",
      price: "Custom",
      credits: "Custom",
      features: {
        ideaGeneration: "Custom",
        avatars: "Custom",
        avatarCloning: "Custom",
        scriptEdits: "7 Credits / 1000 Words",
        voiceClones: "Custom",
        videoEditor: true,
        socialMedia: [
          <FaFacebookF className="text-[#1877F2]" />,
          <FaTwitter className="text-[#1DA1F2]" />,
          <FaInstagram className="text-[#E1306C]" />,
          <FaLinkedinIn className="text-[#0A66C2]" />,
          <FaYoutube className="text-[#FF0000]" />,
        ],
        postScheduling: "Custom Scheduling",
        contentCalendar: true,
        storage: "Custom Based Storage",
      },
    },
  ];

  const gradientBg = {
    background: "linear-gradient( #C668FD 0%, #6E8EFB 100%)",
  };

  const renderCheck = () => (
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center mx-auto"
      style={gradientBg}
    >
      <Check size={16} className="text-white" />
    </div>
  );

  const tableRows = [
    { label: "Price (Monthly)", key: "price" },
    { label: "Credits/Month", key: "credits" },
    { label: "Idea Generation", key: "ideaGeneration" },
    { label: "No. of Avatars", key: "avatars" },
    { label: "Avatar Cloning", key: "avatarCloning" },
    { label: "Script Edits", key: "scriptEdits" },
    { label: "Voice Clones", key: "voiceClones" },
    { label: "Video Editor", key: "videoEditor", isBoolean: true },
    { label: "Social Media Integration", key: "socialMedia", isSocial: true },
    { label: "Post Scheduling", key: "postScheduling" },
    { label: "Content Calendar", key: "contentCalendar", isBoolean: true },
    { label: "Storage", key: "storage" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find the Perfect Plan for Your Creative Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare Features and Choose the Right Plan to Power Your Ideas, Scripts, and Videos
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-md shadow">
            <thead>
              <tr className="border-b border-gray-200">
                <th
                  className="text-left py-4 px-4 font-semibold text-white"
                  style={gradientBg}
                >
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="text-center py-4 px-4 font-semibold text-white"
                    style={gradientBg}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr
                  key={row.key}
                  className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}
                >
                  <td className="py-4 px-4 font-medium text-gray-700">{row.label}</td>
                  {plans.map((plan) => (
                    <td key={`${plan.name}-${row.key}`} className="text-center py-4 px-4">
                      {row.isBoolean ? (
                        plan.features[row.key] ? renderCheck() : <span className="text-red-500 text-lg">✗</span>
                      ) : row.isSocial ? (
                        <div className="flex justify-center gap-2">
                          {plan.features.socialMedia.map((icon, idx) => (
                            <span key={idx} className="text-xl">{icon}</span>
                          ))}
                        </div>
                      ) : (
                        plan[row.key] || plan.features[row.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
