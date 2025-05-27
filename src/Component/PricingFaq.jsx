import React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:"You bet your sweet bippy there is. Simply create an account and you can create your first series for free to test a video.No credit card required.Update: We have temporarily suspended the free plan due to abuse from botting spamming.",
  },
  {
    question: "How does the membership work?",
    answer: "Our membership is subscription-based, allowing you to access all features and tools for a monthly or yearly fee.",
  },
  {
    question: "Can I cancel at anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments.",
  },
  {
    question: "Can I get a refund?",
    answer:"Refunds are available within 30 days of purchase. If you encounter any issues, please contact our support team.",
  },
  {
    question: "Can I have multiple plans?",
    answer:"Yes, you can choose from multiple plans based on your needs. Each plan offers different features and benefits.",
  },
  {
    question: "Can I upgrade or downgrade my subscription?",
    answer: "Yes, you can easily upgrade or downgrade your subscription plan at any time through your account settings.",
  },
];

const PricingFaq = () => {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 max-w-[85rem] mx-auto text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        Billing Question
      </h2>
      <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto">
       Everything you need to know to start discovering and creating like a pro.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm sm:shadow-md transition"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex items-start justify-between w-full"
              >
                <span className="font-medium text-gray-900 text-left text-base sm:text-lg md:text-xl">
                  {faq.question}
                </span>
                <span className="ml-3 sm:ml-4 mt-0.5 sm:mt-1">
                  {isOpen ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  )}
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingFaq;
