import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const socialIconsMap = {
  ig: FaInstagram,
  fb: FaFacebookF,
  yt: FaYoutube,
  tw: FaTwitter,
  li: FaLinkedinIn,
};

const socialIconColors = {
  ig: "#E4405F", // Instagram pink/red
  fb: "#1877F2", // Facebook blue
  yt: "#FF0000", // YouTube red
  tw: "#1DA1F2", // Twitter blue
  li: "#0A66C2", // LinkedIn blue
};

const plans = [
  {
    title: "Basic",
    price: "15$",
    credits: ["1000 Credits", "2000 Credits"],
    monthlyCredits: "500 Credits / Month",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "1 Voice Clone",
      "Video Editor",
      "Social Media",
      "Schedule 20 posts for up to 2 weeks",
      "Content Calendar",
      "30 days Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
  },
  {
    title: "Standard",
    price: "45$",
    credits: ["3000 Credits", "4000 Credits"],
    monthlyCredits: "1500 Credits / Month",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "3 Voice Clones",
      "Video Editor",
      "Social Media",
      "Schedule 60 posts for up to 4 weeks",
      "Content Calendar",
      "60 days Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
    mostPopular: true,
  },
  {
    title: "Premium",
    price: "75$",
    credits: ["5000 Credits", "6000 Credits"],
    monthlyCredits: "5000 Credits / Month",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "5 Voice Clones",
      "Video Editor",
      "Social Media",
      "Schedule 180 posts for up to 6 weeks",
      "Content Calendar",
      "90 days Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    credits: ["Custom Credits", "None"],
    monthlyCredits: "Custom",
    features: [
      "Generate Ideas, Scripts & Videos",
      "100+ Avatars",
      "Custom Voice Clones",
      "Video Editor",
      "Social Media",
      "Custom Scheduling",
      "Advanced Content Calendar",
      "Custom Based Storage",
    ],
    socialIcons: ["ig", "fb", "yt", "tw", "li"],
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("Annually");

  return (
    <div className="max-w-[90rem] mx-auto py-10 px-6 lg:px-24 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        <span className="text-[#6B4EFF] font-bold">Strikingly Powerful</span>,
        Yet Unbelievably Affordable
      </h2>
      <p className="text-gray-500 mt-2 text-sm sm:text-base">
        Choose the plan that fits your needs and enjoy your work with your right
        plans.
      </p>

      {/* Toggle */}
      <div className="inline-flex rounded-full overflow-hidden border-2 border-purple-300 p-1 mt-4">
        <button
          className={`py-2 px-5 text-sm font-medium transition-all duration-300 rounded-full ${
            billingCycle === "Annually"
              ? "bg-gradient-to-r from-[#413FC2] to-[#C668FD] text-white"
              : "text-[#6B4EFF] bg-transparent"
          }`}
          onClick={() => setBillingCycle("Annually")}
        >
          25% off Annually
        </button>
        <button
          className={`py-2 px-5 text-sm font-medium transition-all duration-300 rounded-full ${
            billingCycle === "Monthly"
              ? "bg-gradient-to-r from-[#413FC2] to-[#C668FD] text-white"
              : "text-[#6B4EFF] bg-transparent"
          }`}
          onClick={() => setBillingCycle("Monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {plans.map((plan, idx) =>
          plan.mostPopular ? (
            <div
              key={idx}
              className="relative rounded-xl p-[3px] bg-gradient-to-r from-[#413FC2] to-[#C668FD] shadow-md"
            >
              <div className="bg-white rounded-xl p-6">
                {plan.mostPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B4EFF] text-white text-xs px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h1 className="text-4xl font-bold mb-2 text-left bg-gradient-to-r from-[#413FC2] to-[#C668FD] bg-clip-text text-transparent">
                  {plan.title}
                </h1>
                <div className="text-left mb-4">
                  <p className="text-2xl font-bold flex items-center gap-1">
                    {plan.price === "Custom"
                      ? "Custom"
                      : billingCycle === "Annually"
                      ? Math.round(
                          parseInt(plan.price.replace("$", "")) * 0.75
                        ) + "$"
                      : plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-base font-medium text-gray-500">
                        /{billingCycle === "Annually" ? "Year" : "Month"}
                      </span>
                    )}
                  </p>
                  <hr className="mt-3 border-t border-gray-200" />
                </div>

                <div className="inline-flex rounded-md overflow-hidden border border-[#D3C5FF] p-1 mt-4 bg-[#F4F0FF]">
                  {plan.credits.map((credit, i) => (
                    <button
                      key={i}
                      className={`px-4 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
                        i === 0
                          ? "bg-gradient-to-r from-[#6B4EFF] to-[#AE66FD] text-white shadow"
                          : "text-[#6B4EFF] hover:bg-white"
                      }`}
                    >
                      {credit}
                    </button>
                  ))}
                </div>

                <p className="text-sm font-semibold text-gray-700 mt-4 mb-1 text-left">
                  Credits per month
                </p>
                <p className="text-sm font-medium mb-4 text-left">
                  ✔️{plan.monthlyCredits}
                </p>

                {/* Features */}
                <p className="text-sm font-semibold text-gray-700 mt-6 mb-1 text-left">
                  Core Features
                </p>
                <ul className="text-sm text-left space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6B4EFF] text-lg">✔️</span>
                      {feature === "Social Media" ? (
                        <div className="flex items-center gap-2">
                          <span>Social Media</span>
                          <div className="flex items-center gap-1">
                            {plan.socialIcons.map((icon) => {
                              const IconComponent = socialIconsMap[icon];
                              const iconColor =
                                socialIconColors[icon] || "#6B4EFF";
                              return IconComponent ? (
                                <IconComponent
                                  key={icon}
                                  style={{
                                    color: iconColor,
                                    transition: "transform 0.2s",
                                  }}
                                  className="text-lg cursor-pointer hover:scale-110"
                                />
                              ) : null;
                            })}
                          </div>
                        </div>
                      ) : (
                        <span>{feature}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-[#6B4EFF] to-[#AE66FD] text-white py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ) : (
            <div
              key={idx}
              className="relative rounded-xl p-6 shadow-md bg-white border border-gray-200"
            >
              <h1 className="text-4xl font-bold mb-2 text-left bg-gradient-to-r from-[#413FC2] to-[#C668FD] bg-clip-text text-transparent">
                {plan.title}
              </h1>
              <div className="text-left mb-4">
                <p className="text-2xl font-bold flex items-center gap-1">
                  {plan.price === "Custom"
                    ? "Custom"
                    : billingCycle === "Annually"
                    ? Math.round(parseInt(plan.price.replace("$", "")) * 0.75) +
                      "$"
                    : plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-base font-medium text-gray-500">
                      /{billingCycle === "Annually" ? "Year" : "Month"}
                    </span>
                  )}
                </p>
                <hr className="mt-3 border-t border-gray-200" />
              </div>

              <div className="inline-flex rounded-md overflow-hidden border border-[#D3C5FF] p-1 mt-4 bg-[#F4F0FF]">
                {plan.credits.map((credit, i) => (
                  <button
                    key={i}
                    className={`px-4 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
                      i === 0
                        ? "bg-gradient-to-r from-[#6B4EFF] to-[#AE66FD] text-white shadow"
                        : "text-[#6B4EFF] hover:bg-white"
                    }`}
                  >
                    {credit}
                  </button>
                ))}
              </div>

              <p className="text-sm font-semibold text-gray-700 mt-4 mb-1 text-left">
                Credits per month
              </p>
              <p className="text-sm font-medium mb-4 text-left">
                ✔️{plan.monthlyCredits}
              </p>

              {/* Features */}
              <p className="text-sm font-semibold text-gray-700 mt-6 mb-1 text-left">
                Core Features
              </p>
              <ul className="text-sm text-left space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#6B4EFF] text-lg">✔️</span>
                    {feature === "Social Media" ? (
                      <div className="flex items-center gap-2">
                        <span>Social Media</span>
                        <div className="flex items-center gap-1">
                          {plan.socialIcons.map((icon) => {
                            const IconComponent = socialIconsMap[icon];
                            const iconColor =
                              socialIconColors[icon] || "#6B4EFF";
                            return IconComponent ? (
                              <IconComponent
                                key={icon}
                                style={{
                                  color: iconColor,
                                  transition: "transform 0.2s",
                                }}
                                className="text-lg cursor-pointer hover:scale-110"
                              />
                            ) : null;
                          })}
                        </div>
                      </div>
                    ) : (
                      <span>{feature}</span>
                    )}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-[#6B4EFF] to-[#AE66FD] text-white py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
                Get Started
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PricingPlans;