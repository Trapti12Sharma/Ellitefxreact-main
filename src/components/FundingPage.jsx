import React from "react";
import bankwire from "../assets/icons/bankwire.png";
import creditcard from "../assets/icons/creditcard.png";
import crypto from "../assets/icons/crypto.png";
import wallets from "../assets/icons/wallets.png";

const FundingPage = () => (
  <div className="min-h-screen bg-white flex flex-col items-center py-10">
    {/* Breadcrumb */}
    <div className="w-full flex justify-center mb-6">
      <a href="/" className="text-sky-400 font-bold hover:underline">Home</a>
      <span className="mx-2 text-gray-400">/</span>
      <a href="/funding" className="text-sky-400 font-bold hover:underline">Funding</a>
    </div>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
      Fast & easy deposit methods
    </h1>

    {/* Description */}
    <p className="text-base md:text-lg text-gray-700 text-center max-w-2xl mb-10">
      Depositing funds into your FP Markets’ trading account is simple, secure, and accessible through your personal Client Portal. Choose from a variety of payment methods, including credit cards, e-wallets such as Neteller and Skrill, cryptocurrencies, bank wire transfers, and <a href="#" className="text-sky-400 hover:underline">broker to broker transfers</a>.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
      {/* Bank Wire */}
      <div>
        <div className="flex items-center bg-gray-100 rounded-md px-6 py-3 mb-2">
          <span className="font-bold text-lg mr-4">Bank Wire</span>
          <img src={bankwire} alt="Bank Wire" className="h-12" />
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Wide range of local and international bank wire solutions for swift transfers.
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Deposit funds into your account with just a few clicks.
        </div>
      </div>
      {/* Credit Cards */}
      <div>
        <div className="flex items-center bg-gray-100 rounded-md px-6 py-3 mb-2">
          <span className="font-bold text-lg mr-4">Credit Cards</span>
          <img src={creditcard} alt="Credit Cards" className="h-12" />
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Transfer funds to your trading account using your Mastercard or Visa card.
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Convenient and secure deposits with real-time account funding.
        </div>
      </div>
      {/* Crypto */}
      <div>
        <div className="flex items-center bg-gray-100 rounded-md px-6 py-3 mb-2">
          <span className="font-bold text-lg mr-4">Crypto</span>
          <img src={crypto} alt="Crypto" className="h-12" />
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Avoid intermediary banking fees.
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Deposit time processing up to an hour.
        </div>
      </div>
      {/* Wallets */}
      <div>
        <div className="flex items-center bg-gray-100 rounded-md px-6 py-3 mb-2">
          <span className="font-bold text-lg mr-4">Wallets</span>
          <img src={wallets} alt="Wallets" className="h-12" />
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          Multi-currency support incl. USD, GBP, EUR, AUD etc.
        </div>
        <div className="text-gray-700 text-sm mb-2 border-b pb-2">
          No deposit fees when using Skrill, Neteller.
        </div>
      </div>
    </div>
  </div>
);

export default FundingPage;