import image30 from "../assets/affiliateimg-logos/30.png";
import sandClock from "../assets/affiliateimg-logos/sandclock.png";
import promotion from "../assets/affiliateimg-logos/promotion.png";
import earth from "../assets/affiliateimg-logos/earth.png";
import wallet from "../assets/affiliateimg-logos/wallet.png";
import support from "../assets/affiliateimg-logos/support.png";

const WhyPartner = () => {
  const features = [
    {
      title: "30% Lifetime Commission",
      description:
        "Earn a generous 30% recurring commission on all paid plans — for as long as your referrals remain subscribed.",
      icon: image30,
    },
    {
      title: "60-Day Cookie Window",
      description:
        "Get credited for referrals even if users sign up within 60 days of clicking your link, maximizing your earning potential.",
      icon: sandClock,
    },
    {
      title: "Exclusive Promotions",
      description:
        "Access special affiliate-only offers to help drive more conversions and increase your commission.",
      icon: promotion,
    },
    {
      title: "Global Reach",
      description:
        "Our platform is used by creators and businesses worldwide — earn commissions from a global audience.",
      icon: earth,
    },
    {
      title: "Dedicated Affiliate Support",
      description:
        "Work with a dedicated team focused on helping you succeed with marketing tips, assets, and 1-on-1 guidance.",
      icon: support,
    },
    {
      title: "Timely & Reliable Payouts",
      description:
        "Receive secure, on-time payments every month for your earnings — no delays, no hassles.",
      icon: wallet,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f4f2ff] to-white py-12 sm:py-20 px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Why Partner{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#413FC2] to-[#C668FD]">
          With Us?
        </span>
      </h2>
      <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto">
        Join a fast-growing creator platform and earn recurring income by
        promoting tools built for the future of content.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-[80rem] mx-auto text-left">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 flex flex-row-reverse gap-3 sm:gap-5 items-start"
          >
            <img
              src={feature.icon}
              alt=""
              className="w-8 h-8 sm:w-11 sm:h-11 mt-0.5 sm:mt-1 flex-shrink-0"
            />
            <div className="flex-grow">
              <h3 className="font-semibold text-base sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartner;
