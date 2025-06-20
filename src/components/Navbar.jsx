import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm text-sm">
      {/* Top Contact Links */}
      <div className="flex justify-between px-10 py-2 border-b text-gray-700">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Webtrader</a>
          <a href="#" className="hover:underline">20 Years</a>
          <a href="#" className="hover:underline">Group</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">EN</a>
          <a href="#" className="hover:underline">MT5 Mobile Trader</a>
          <a href="#" className="font-bold hover:underline">Client Portal</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="fpmarkets logo" className="h-8" />
          <span className="font-semibold text-lg">20 Years</span>
        </div>

        {/* Menu Items */}
        <ul className="flex gap-8 font-medium text-black">
          <li className="hover:text-blue-600 cursor-pointer">QUICK START</li>
          <li className="hover:text-blue-600 cursor-pointer">TRADING</li>
          <li className="hover:text-blue-600 cursor-pointer">PLATFORMS</li>
          <li className="hover:text-blue-600 cursor-pointer">PARTNERS</li>
          <li className="hover:text-blue-600 cursor-pointer">RESOURCES</li>
        </ul>

        {/* Button */}
        <button className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800">
          OPEN LIVE
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
