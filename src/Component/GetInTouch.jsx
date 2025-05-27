import React from "react";
import Robo from "../assets/supportRobo.png";

const GetInTouch = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Contact Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-7xl mx-auto bg-white shadow-lg overflow-hidden rounded-xl">
        {/* Left Gradient Info */}
        <div className="p-6 sm:p-10 flex items-center justify-center">
          <div
            className="text-white flex flex-col justify-between w-full h-full rounded-xl mx-auto min-h-[400px] sm:min-h-[500px] p-6 sm:p-10"
            style={{
              background:
                "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
            }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Have Questions? <br />
                Let's Talk!
              </h3>
              <p className="text-xs sm:text-sm">
                Whether you're curious about features, need a product tour, or
                just want to say hi — we're here for you.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Get expert answers to your queries",
                  "Explore tailored solutions for your goals",
                  "Book a personalized walkthrough of Syllaby",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 border border-white rounded-full flex items-center justify-center text-xs font-bold text-white bg-transparent mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-center mt-6 sm:mt-8">
              Connect with our team for any assistance
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-6 sm:p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-purple-500">Reach</span> & Get in Touch with
            Us!
          </h2>
          <form className="w-full space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">
                Subject
              </label>
              <input
                type="text"
                className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2"
                placeholder="Subject here"
              />
            </div>

            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows={3}
                className="border-b border-gray-300 focus:outline-none focus:border-purple-500 text-xs sm:text-sm py-1 sm:py-2 resize-none"
                placeholder="Write your message.."
              />
            </div>

            <div className="pt-2 sm:pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:opacity-90 transition text-xs sm:text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Robo Chat */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white to-purple-100 rounded-xl shadow-md p-6 sm:p-8">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="flex-1 pr-0 lg:pr-4 mb-4 lg:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Need to Talk? Let's Chat!
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Don't want to type? We're just a message away.
              </p>
              <ul className="text-sm text-gray-700 space-y-0">
                <li>• Live Chat Support</li>
                <li>• Available Monday to Friday 9:00 AM to 5:00 PM</li>
                <li>• Click below to start chat</li>
              </ul>
              <button
                className="mt-4 w-full sm:w-auto text-white px-6 py-2 rounded-full text-sm font-medium"
                style={{
                  background:
                    "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
                }}
              >
                Start Chat
              </button>
            </div>
            <img src={Robo} alt="Support Bot" className="w-48 h-auto" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Our Newsletters
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to our newsletter and never miss important updates,
            offers, and insights.
          </p>
          <div className="flex flex-col gap-2 w-full">
            <input
              type="email"
              className="w-full rounded-full px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:border-purple-500"
              placeholder="Enter your email address"
            />
            <button
              className="w-full text-white px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background:
                  "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
              }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
