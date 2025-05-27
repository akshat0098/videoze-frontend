import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How do I get started with creating videos?",
    answer:
      "Getting started is easy! Sign up, pick a template or theme, enter your script or ideas, and let our AI handle the rest. In just a few clicks, your video will be ready to download or share on social media.",
  },
  {
    question: "Is there a free version available?",
    answer:
      "We provide a free trial so you can try out our tool and determine if it meets your needs. You’re free to cancel at any time during the trial with no commitment.",
  },
  {
    question: "What formats can I download my content in?",
    answer:
      "You can download your content in a variety of popular formats, including MP4 for video and MOV for higher-quality exports. Additional format options may be available depending on your project settings and export preferences.",
  },
  {
    question: "Is there a limit to how many videos I can create?",
    answer:
      "That depends on your plan and the available credits. Free and lower-tier plans may have limits, while higher-tier plans often allow more or unlimited video creation.",
  },
  {
    question: "How does your AI generate video content?",
    answer:
      "Our AI uses text prompts or scripts to automatically generate videos, combining voiceovers, stock media, animations, and transitions to produce high-quality content with minimal effort.",
  },
  {
    question: "What makes your discovery feature unique?",
    answer:
      "Our discovery feature uses smart algorithms to suggest trending topics, content ideas, and templates tailored to your niche and audience preferences—helping you stay relevant and boost engagement.",
  },
  {
    question: "Can I use the stock media for commercial projects?",
    answer:
      "Yes, all stock media included in the platform is licensed for commercial use, so you're free to use it in your work and ads to monetize content.",
  },
  {
    question: "Do I need editing skills to create content?",
    answer:
      "Not at all. Our platform is designed for users of all experience levels. The AI handles most of the editing, and our drag-and-drop interface makes customization easy and intuitive.",
  },
  {
    question: "Can I schedule posts directly from the platform?",
    answer:
      "Yes, you can schedule and publish your videos directly to social media platforms from within the dashboard, streamlining your content workflow.",
  },
  {
    question: "Can I create both short and long videos?",
    answer:
      "Absolutely. You can create videos in various lengths—from quick 15-second clips to full-length explainer or promotional videos—depending on your project needs.",
  },
  {
    question: "Is it possible to customize templates?",
    answer:
      "Yes, all templates are fully customizable. You can edit text, swap media, adjust colors, and add branding elements to match your unique style.",
  },
  {
    question: "How Are Credits Charged?",
    answer: {
      credits: "Credits are charged as follows:",
      ideaDiscovery: "15 credits per idea generated.",
      avatarVideo: "33 credits per 1-minute video.",
      facelessImageVideo: "41 credits per 1-minute video.",
      facelessStockFootageVideo: "25 credits per 1-minute video.",
      note: "Charges are based on whole minutes. For example, a Faceless Image video that is 3 minutes and 13 seconds will be charged as 4 minutes (4 x 41 = 164 credits). While we strive for accuracy, there may be slight discrepancies in calculations.",
      imageRegeneration: "1 credit per additional regeneration.",
      thumbnailGeneration: "1 credit for every 1 thumbnail generated.",
      scriptRegeneration: "1 credit for each one-minute AI script.",
      avatarVideoExport: "6 credits for every 1 minute of video.",
      videoExport: "No charge for exporting the video.",
    },
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="pt-8 pb-16 bg-white w-full">
      <div className="max-w-[90rem] mx-auto px-2 sm:px-4 lg:px-8"> 
        {/* Reduced padding here for wider content area */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently asked question
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need to know to start discovering and creating like a pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {faqs.map((item, index) => {
            const faqId = `faq-${index}`;

            return (
              <div
                key={faqId}
                className="bg-white shadow-sm rounded-xl p-5 border border-gray-100 transition-all duration-200 h-full flex flex-col justify-between w-full"
              >
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleFAQ(faqId)}
                >
                  <span className="text-gray-900 font-medium text-sm text-left">
                    {item.question}
                  </span>
                  {activeId === faqId ? (
                    <MinusIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {activeId === faqId && (
                  <div className="mt-4 text-sm text-gray-600">
                    {typeof item.answer === "string" ? (
                      <p>{item.answer}</p>
                    ) : (
                      <div className="space-y-1">
                        {Object.entries(item.answer).map(([key, value]) => (
                          <p key={key}>
                            <strong>
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                              :
                            </strong>{" "}
                            {value}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

