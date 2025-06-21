import React from "react";
import forex from '../assets/icons/forex.png';
import shares from '../assets/icons/shares.png';
import indices from '../assets/icons/indices.png';
import commodities from '../assets/icons/commodities.png';
import bonds from '../assets/icons/bonds.png';
import metals from '../assets/icons/metals.png';
import crypto from '../assets/icons/crypto.png';

const tradeOptions = [
  { icon: forex, title: "Forex", description: "70+ Forex Currency Pairs on MT4" },
  { icon: shares, title: "Shares", description: "More than 10,000 stocks on global exchanges" },
  { icon: indices, title: "Indices", description: "19 major global indices" },
  { icon: commodities, title: "Commodities", description: "Coffee, natural gas, corn & more" },
  { icon: bonds, title: "Bonds", description: "US10YR & UK Long Gilt Futures GILT" },
  { icon: metals, title: "Metals", description: "Gold, silver, platinum & more" },
  { icon: crypto, title: "Digital Currencies", description: "Bitcoin, Ethereum, Ripple, Bitcoin Cash, Litecoin & more" },
];


// const tradeOptions = [
//   {
//     icon: "/assets/icons/forex.png",
//     title: "Forex",
//     description: "70+ Forex Currency Pairs on MT4",
//   },
//   {
//     icon: "/assets/icons/shares.png",
//     title: "Shares",
//     description: "More than 10,000 stocks on global exchanges",
//   },
//   {
//     icon: "/assets/icons/indices.png",
//     title: "Indices",
//     description: "19 major global indices",
//   },
//   {
//     icon: "/assets/icons/commodities.png",
//     title: "Commodities",
//     description: "Coffee, natural gas, corn & more",
//   },
//   {
//     icon: "/assets/icons/bonds.png",
//     title: "Bonds",
//     description: "US10YR & UK Long Gilt Futures GILT",
//   },
//   {
//     icon: "/assets/icons/metals.png",
//     title: "Metals",
//     description: "Gold, silver, platinum & more",
//   },
//   {
//     icon: "/assets/icons/crypto.png",
//     title: "Digital Currencies",
//     description: "Bitcoin, Ethereum, Ripple, Bitcoin Cash, Litecoin & more",
//   },
// ];

const TradeOptions = () => {
  return (
    <section className="bg-white text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-light mb-12">
        What can you <span className="font-bold">trade with FP Markets</span> ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {tradeOptions.map((option, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <img src={option.icon} alt={option.title} className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-bold">{option.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradeOptions;
