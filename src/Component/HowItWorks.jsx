import React from 'react';
import screenshot from '../assets/howItWork.png';

const categories = [
  "AI Image to Video",
  "Stock Footage Video",
  "Blog to Video",
  "Ecom URL to Video",
  "Avatar Video"
];

const steps = [
  {
    number: 1,
    title: "Discover",
    description: "Find trending topics and real questions your audience is asking.",
  },
  {
    number: 2,
    title: "Generate",
    description: "Turn prompts into AI-powered videos with avatars and voiceovers.",
  },
  {
    number: 3,
    title: "Customize",
    description: "Add visuals, music, and branding to make your video stand out and match your style.",
  },
  {
    number: 4,
    title: "Schedule",
    description: "Plan and publish your videos at the best times across all platforms effortlessly.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-0 px-0 sm:px-6 lg:px-20">
      {/* Headings */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 -mb-2">
          How it works?
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Create impactful videos in 4 simple steps — from idea to shareable content using AI.
        </p>
      </div>

      {/* Video Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((item) => (
          // <span
          <a
            key={item}
            className="px-5 py-2 rounded-full text-sm font-medium border"
            style={{
              background:
                "linear-gradient(84.88deg, rgba(65, 63, 194, 0.08) 18.63%, rgba(198, 104, 253, 0.08) 81.37%)",
              color: "#333",
              borderColor: "#ccc",
            }}
          >
            {item}
          {/* </span> */}
          </a>
        ))}
      </div>

      {/* Main Content: Image + Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={screenshot}
            alt="How it works illustration"
            className="rounded-2xl shadow-lg w-full max-w-[100%] max-h-[480px] sm:max-h-[520px] md:max-h-[560px] object-cover"
          />
        </div>

        {/* Right Side Steps */}
        <div className="flex flex-col space-y-8 px-2 sm:px-0">
          {steps.map((step, index) => {
            const isHighlighted = index === 0 || index === 1;
            return (
              <div key={step.number} className="flex items-start space-x-4">
                {/* Step Number and Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-base ${
                      isHighlighted
                        ? "text-white"
                        : "bg-purple-100 text-purple-700"
                    }`}
                    style={
                      isHighlighted
                        ? {
                            background:
                              "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
                          }
                        : {}
                    }
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-12 bg-gray-300 mt-1" />
                  )}
                </div>

                {/* Step Content */}
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isHighlighted ? "text-[#413FC2]" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
