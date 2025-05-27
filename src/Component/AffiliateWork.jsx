import React from "react";
import join from "../assets/affiliateimg-logos/join.png";
import social from "../assets/affiliateimg-logos/social.png";
import add from "../assets/affiliateimg-logos/add.png";

const AffiliateWork = () => {
  return (
  <section className="py-12 md:py-20 px-4 max-w-[90rem] mx-auto text-center relative">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 z-10 relative">
    How It Works
  </h2>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 z-10 relative">
    Use our calculator to see how much you could earn monthly or yearly by
    referring users to our AI video tools.
  </p>

  {/* Spacer */}
  <div className="h-10 md:h-16" />

  {/* SVG Wave - visible only on md+ */}
  <svg
    className="absolute left-0 right-0 top-[15rem] md:top-[20rem] mx-auto w-full max-w-[90rem] hidden md:block z-0"
    height="80"
    viewBox="0 0 1000 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 0 40 
      Q 125 0 250 40 
      T 500 40 
      T 750 40 
      T 1000 40"
      stroke="#D1D5DB"
      strokeWidth="2"
      strokeDasharray="6,6"
      fill="none"
    />
  </svg>

  {/* Steps Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 relative z-10 mt-16">
    {/* Step Card - Repeat for 3 Steps */}
    {[ 
      {
        img: join,
        alt: "join",
        title: "Join the Program",
        desc: "Sign up for free and get instant access to your personalized referral dashboard.",
        tag: "No setup fees. Get started in minutes with zero hassle."
      },
      {
        img: social,
        alt: "social",
        title: "Share Your Link",
        desc: "Share your unique referral link with your audience using built-in promo tools.",
        tag: "Get access to banners, templates, and ready-to-use promo assets."
      },
      {
        img: add,
        alt: "add new",
        title: "Get Paid Monthly",
        desc: "Earn recurring income every month from paid users who sign up through your link.",
        tag: "Earn 25% lifetime commissions on all referred subscriptions."
      }
    ].map((step, i) => (
      <div key={i} className="flex flex-col items-center text-center">
        <div className="relative z-10 -mt-12 md:-mt-16">
          <div className="bg-transparent p-4 h-24 w-24 md:h-32 md:w-32 flex items-center justify-center mb-4 md:mb-6">
            <img
              src={step.img}
              alt={step.alt}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
        <div className="bg-transparent p-4 md:p-6 w-full max-w-xs">
          <h3 className="font-semibold text-base md:text-lg mb-2">{step.title}</h3>
          <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{step.desc}</p>
          <div className="bg-purple-100 text-purple-600 text-xs md:text-sm font-medium px-3 md:px-4 py-1 rounded">
            {step.tag}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* CTA Button */}
  <button className="mt-10 md:mt-20 bg-gradient-to-r from-[#413FC2] to-[#C668FD] text-white px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:opacity-90 transition z-10 relative text-sm md:text-base">
    Start Your Earnings Journey →
  </button>
</section>

  );
};

export default AffiliateWork;
