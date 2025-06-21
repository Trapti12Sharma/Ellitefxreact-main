import React from "react";
import servers from '../assets/icons/servers.png';

const HeroSection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${servers})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
      className="relative text-white"
    >
      {/* Optional overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, #000 60%, #0f265c 100%)",
          opacity: 0.85,
          zIndex: 1,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Performance-driven <br />
            <span className="text-cyan-400">technology</span> and <br />
            <span className="font-extrabold">ultra-low</span>{" "}
            <span className="text-cyan-400">spreads</span>
          </h1>
          <p className="text-sm italic mb-4">
            Trade the Global Markets with a Leading Forex Broker
          </p>
          <button className="bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold mb-3">
            START TRADING
          </button>
          <p className="text-sm text-cyan-400">
            Test your knowledge and potential on a Free 30 Day Demo
          </p>
        </div>
        {/* Remove the <img src={servers} ... /> here, since it's now the background */}
      </div>
      <div className="absolute top-20 right-10 bg-[#052844] rounded-xl px-8 py-6 text-center text-white space-y-6 w-60 z-20">
        <div>
          <p className="text-xs">TIGHT RAW SPREADS FROM</p>
          <h2 className="text-3xl font-bold">0.0 pips</h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold">$0</h2>
          <p className="text-xs">FEE-FREE FUNDING OPTIONS</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">500:1</h2>
          <p className="text-xs">MAX LEVERAGE</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;