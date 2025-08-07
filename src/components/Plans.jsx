import { FaCheck, FaTimes } from "react-icons/fa";

const planData = [
  ["Card Limit", "3 cards", "5 cards", "Unlimited cards"],
  ["Custom Alerts & Notifications", false, "Included", "Included + Priority"],
  ["Advanced Cashback Tracking", false, true, true],
  ["Dynamic Offer Matching", true, true, true],
  ["Spend Insights & Savings Analytics", false, false, "Detailed Breakdown"],
  ["Priority Support", false, false, true],
  ["Family/Team Sharing", false, false, "Up to 5 users"],
  ["Early Access to New Features", false, true, "Yes + Beta Features"],
  ["Multi-device Sync", false, "Yes", "Unlimited Sync"],
  ["Smart Alerts for Missed Rewards", false, false, true],
];

const Plans = () => {
  return (
    <section className="relative py-16 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-[80vw] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 pb-1 tracking-tight bg-white bg-clip-text text-transparent">
          Pricing <span>&amp; Plans</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Choose the plan that matches your vibe. Whether you’re just exploring or ready to go all‑in, we’ve got you.
        </p>

        {/* Mobile: Stacked cards */}
        <div className="block sm:hidden mt-10 space-y-6">
          {planData.map(([feature, free, premium, premiumPlus], i) => (
            <div key={i} className="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-md">
              <h3 className="font-semibold text-base mb-2">{feature}</h3>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Free:</strong>{" "}
                  {typeof free === "boolean" ? (
                    free ? (
                      <FaCheck className="inline text-green-400" />
                    ) : (
                      <FaTimes className="inline text-red-400" />
                    )
                  ) : (
                    free
                  )}
                </p>
                <p>
                  <strong>Premium:</strong>{" "}
                  {typeof premium === "boolean" ? (
                    premium ? (
                      <FaCheck className="inline text-green-400" />
                    ) : (
                      <FaTimes className="inline text-red-400" />
                    )
                  ) : (
                    premium
                  )}
                </p>
                <p>
                  <strong>Premium Plus:</strong>{" "}
                  {typeof premiumPlus === "boolean" ? (
                    premiumPlus ? (
                      <FaCheck className="inline text-green-400" />
                    ) : (
                      <FaTimes className="inline text-red-400" />
                    )
                  ) : (
                    premiumPlus
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Full table */}
        <div className="hidden sm:block mt-12 overflow-x-auto w-full">
          <div className="w-full max-w-full overflow-x-auto">

            <table className="min-w-full border-collapse bg-white/5 backdrop-blur-md text-white text-sm sm:text-base md:text-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="text-gray-400 text-sm sm:text-base lg:text-lg">
                  <th className="p-3 sm:p-4 text-left">Feature</th>
                  <th className="p-3 sm:p-4 text-center">Free</th>
                  <th className="p-3 sm:p-4 text-center">Premium</th>
                  <th className="p-3 sm:p-4 text-center">Premium Plus</th>
                </tr>
              </thead>
              <tbody>
                {planData.map(([feature, free, premium, premiumPlus], i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="p-3 sm:p-4 text-left">{feature}</td>
                    {[free, premium, premiumPlus].map((item, j) => (
                      <td key={j} className="p-3 sm:p-4 text-center">
                        {typeof item === "boolean" ? (
                          item ? (
                            <FaCheck className="text-green-400 inline" />
                          ) : (
                            <FaTimes className="text-red-400 inline" />
                          )
                        ) : (
                          item
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Plans;
