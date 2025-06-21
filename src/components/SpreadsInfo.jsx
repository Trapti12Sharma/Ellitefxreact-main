import React from "react";
import spread from "../assets/icons/spread.png";

const SpreadsInfo = () => {
  const points = [
    "Trade on consistently low spreads from 0.0 pips**",
    "Fast execution from an NY4 server facility",
    "Top-tier liquidity and market leading pricing, 24/5",
    "Access FP Markets Forex Trading Education",
  ];

  return (
    <section className="bg-[#00b5ef] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={spread} alt="Spreads from 0.0" className="w-64 md:w-80" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            <span className="font-bold">Tighter</span> spreads. <br />
            <span className="font-bold">Faster</span> execution.
          </h2>
          <ul className="space-y-4 text-base text-white">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-white text-lg">✅</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpreadsInfo;
