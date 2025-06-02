import React, { useState } from "react";
import money from "../assets/affiliateimg-logos/money.png";
import graph from "../assets/affiliateimg-logos/graph.png";
import clock from "../assets/affiliateimg-logos/clock.png";

const EarningsEstimator = () => {
  const [referrals, setReferrals] = useState(78);
  const [planValue, setPlanValue] = useState(100);

  const estimatedIncome = referrals * planValue * 0.3;

  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 text-center mx-auto max-w-screen-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Estimate Your Creator Partner Earnings
      </h2>
      <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Use our calculator to see how much you could earn monthly or yearly by
        referring users to our AI video tools.
      </p>

      {/* Estimator + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
        {/* Estimator Box */}
        <div className="md:col-span-2 bg-gray-100 rounded-xl shadow-lg p-4 sm:p-6 text-left">
          {/* Headings Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-6 gap-2">
            <h3 className="text-sm sm:text-base text-gray-600 font-semibold">
              Earnings Estimator
            </h3>
            <h3 className="text-sm sm:text-base text-gray-600 font-semibold sm:text-right">
              Your Estimated Income
            </h3>
          </div>

          {/* Inputs & Income Display */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
            <div className="flex-1 space-y-6">
              {/* Referrals Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How many users can you refer each month?
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-full sm:flex-1">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={referrals}
                      onChange={(e) => setReferrals(Number(e.target.value))}
                      className="w-full"
                      style={{
                        background: `linear-gradient(to right, #413FC2 0%, #C668FD ${referrals}%, white ${referrals}%, white 100%)`,
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                  <div className="w-full sm:w-20">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={referrals}
                      onChange={(e) => setReferrals(Number(e.target.value))}
                      className="w-full border rounded-lg px-2 py-1 text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Plan Value Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average plan value per user
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-full sm:flex-1">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={planValue}
                      onChange={(e) => setPlanValue(Number(e.target.value))}
                      className="w-full"
                      style={{
                        background: `linear-gradient(to right, #413FC2 0%, #C668FD ${planValue}%, white ${planValue}%, white 100%)`,
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                  <div className="w-full sm:w-20">
                    <input
                      type="number"
                      min={0}
                      max={500}
                      value={planValue}
                      onChange={(e) => setPlanValue(Number(e.target.value))}
                      className="w-full border rounded-lg px-2 py-1 text-center"
                    />
                  </div>
                </div>

                {/* Plan Value Checkboxes */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {[15, 30, 45, 60, 75, 90].map((val) => (
                    <label key={val} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={planValue === val}
                        onChange={() => setPlanValue(val)}
                      />
                      <span>${val}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Income Display */}
            <div className="w-full sm:w-40 flex flex-col justify-center self-center items-end">
              <div className="text-3xl sm:text-4xl font-bold text-black">
                ${estimatedIncome.toLocaleString()}
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">
                Based on 30% recurring commission
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div
          className="rounded-xl text-white p-6 flex flex-col justify-between shadow-md"
          style={{
            background:
              "linear-gradient(84.88deg, #413FC2 18.63%, #C668FD 81.37%)",
          }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Ready to Start Earning?
            </h3>
            <p className="text-sm text-white/90">
              Share AI-powered tools creators already love and get paid monthly
              for every referral.
            </p>
          </div>
          <button className="mt-6 bg-white text-purple-700 font-semibold py-2 px-4 rounded-full transition hover:bg-purple-100">
            Start Earning Now
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Predictable Passive Income"
          description="Earn every month automatically from referred users who stay subscribed."
          imageSrc={money}
          imageAlt="Passive Income"
        />
        <FeatureCard
          title="Unlimited Growth Potential"
          description="More referrals = higher earnings. There's no cap."
          imageSrc={graph}
          imageAlt="Growth Potential"
        />
        <FeatureCard
          title="Long-Term Rewards"
          description="Keep earning for as long as your referrals stay with us."
          imageSrc={clock}
          imageAlt="Long Term Rewards"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className="flex-grow">
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default EarningsEstimator;
