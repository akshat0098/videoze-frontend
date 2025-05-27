import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the commission structure work?",
    answer:
      "You earn a 30% recurring commission on every paid subscription referred through your affiliate link — for as long as the customer stays subscribed.",
  },
  {
    question: "Are there any fees to join the affiliate program?",
    answer: "No, joining the affiliate program is completely free.",
  },
  {
    question: "Is there a minimum payout threshold?",
    answer: "Yes, affiliates must reach a $50 minimum to receive payouts.",
  },
  {
    question: "What kind of support do you offer affiliates?",
    answer:
      "We provide a dedicated team, resources, and 1-on-1 support to help you succeed.",
  },
  {
    question: "Can I promote your tools on social media?",
    answer:
      "Absolutely! Social media is a great way to share your referral link.",
  },
  {
    question: "Can I have multiple plans?",
    answer:
      "Yes, you can promote multiple plans and still earn recurring commissions.",
  },
  {
    question: "Which tools can I promote?",
    answer: "You can promote any tools available in your affiliate dashboard.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 max-w-[85rem] mx-auto text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto">
        Everything you need to know to start discovering and creating like a
        pro.
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
export default FaqSection;
