import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer 24/7 support?",
    answer:"Yes, we provide 24/7 support via email and live chat.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, we offer a 30-day money-back guarantee on all plans.",
  },
  {
    question: "How can I contact customer support",
    answer: "You can reach us via email at",
  },
  {
    question: "How do I subscribe/unsubscribe from the newsletter?",
    answer:"You can manage your newsletter preferences in your account settings.",
  },
  {
    question: "Where is your office located?",
    answer:"Our office is located in India,Delhi.",
  },
  {
    question: "Is voice support free to use?",
    answer:"Yes, voice support is free for all users.",
  },
];
const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default
 
   return (
     <section className="py-12 px-4 sm:px-6 md:px-8 max-w-[85rem] mx-auto text-center">
       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
         Frequently Asked Questions
       </h2>
       <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto">
        Find quick answers to commonly asked questions.
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

export default ContactFaq