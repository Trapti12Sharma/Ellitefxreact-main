import React, { useState, useRef } from "react";
import fplogo from '../assets/icons/fplogo.png';


const DROPDOWN_WIDTH = 1300; // px
const DROPDOWN_LEFT = -430;  // px

const Dropdown = ({ title, items, showLeftContent }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="hover:text-blue-600 cursor-pointer font-medium text-base">{title}</button>
      {open && (
        <div
          style={{
            backgroundColor: "rgba(0, 189, 255, 0.93)",
            marginTop: "22px",
            minWidth: `${DROPDOWN_WIDTH}px`,
            width: `${DROPDOWN_WIDTH}px`,
            left: `${DROPDOWN_LEFT}px`,
            borderRadius: "0 0 30px 30px"
          }}
          className="absolute z-50 shadow-2xl flex flex-row items-stretch p-0"
        >
          {/* Left side: Big text and buttons for QUICK START and TRADING */}
          {showLeftContent && (
            <div className="flex flex-col justify-center px-12 py-16" style={{ minWidth: 500 }}>
              <div>
                <div className="text-white text-3xl font-light leading-tight">
                  Trade with a<br />
                  <span className="font-extrabold">trusted Forex<br />and CFD broker</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="bg-black text-white px-8 py-4 rounded-xl text-small font-bold shadow-lg hover:text-black hover:bg-white">
                    OPEN LIVE
                  </button>
                  <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-xl text-small font-bold shadow-lg hover:text-white hover:bg-black transition">
                    TRY DEMO
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Right side: 3 columns of links */}
          <div className="grid grid-cols-3 gap-20 px-8 py-16 flex-1">
            {Object.entries(items).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="font-extrabold text-black text-1xl mb-4">{heading}</h3>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li
                      key={idx}
                      className="hover:text-white cursor-pointer text-small font-medium text-black"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm text-sm">
      {/* Top Links */}
      <div className="flex justify-between px-10 py-2 border-b text-gray-700">
        <div className="flex gap-6">
          <a href="#" className="hover:text-sky-400">Contact</a>
          <a href="#" className="hover:text-sky-400">Webtrader</a>
          <a href="#" className="hover:text-sky-400">20 Years</a>
          <a href="#" className="hover:text-sky-400">Group</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-sky-400">EN</a>
          <a href="#" className="hover:text-sky-400">MT5 Mobile Trader</a>
          <a href="#" className="text-black  hover:text-sky-400" >Client Portal</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <img src="/fplogo.png" alt="fpmarkets logo" className="h-8" /> */}
          <img src={fplogo} alt="fpmarkets logo" className="h-12 w-auto" />
          {/* <span className="font-semibold text-small">20 Years</span> */}
        </div>

        {/* Menu with Dropdowns */}
        <ul className="flex gap-8 font-medium text-black items-center">
          <Dropdown
            title="QUICK START"
            showLeftContent={true}
            items={{
              Introduction: [
                "Why FP Markets?",
                "What You Can Trade",
                "What is Forex Trading?",
                "What is CFD Trading?",
                "ECN Pricing",
                "DMA Pricing"
              ],
              "Your Account": ["Try A Demo", "Deposit Funds", "Withdraw Funds"],
              "Trading Platforms": [
                "Metatrader 4 (MT4)",
                "Metatrader 5 (MT5)",
                "TradingView",
                "cTrader",
                "WebTrader",
                "MT5 Mobile Trader",
                "Social Trading"
              ]
            }}
          />

          <Dropdown
            title="TRADING"
            showLeftContent={true}
            items={{
              "Trading Accounts": [
                "Forex Account Types",
                "Islamic Trading Accounts",
                "Account Funding",
                "Funds Withdrawal"
              ],
              "Markets": [
                "Forex",
                "Shares",
                "Metals",
                "Commodities",
                "Indices",
                "Digital Currencies",
                "Bonds",
                "ETFs"
              ],
              "Pricing": [
                "Spreads",
                "Swap Rates",
                "Trading Hours",
                "Holiday Trading Hours"
              ]
            }}
          />

          <Dropdown
            title="PLATFORMS"
            showLeftContent={false}
            items={{
              "Platforms": [
                "MetaTrader 4",
                "MetaTrader 5",
                "WebTrader",
                "Mobile Trading",
                "TradingView",
                "cTrader"
              ],
              "Platform Features": [
                "One Click Trading",
                "Automated Trading",
                "Multi-Asset Platforms"
              ],
              "Platform Support": [
                "Platform Comparison",
                "Download Center",
                "Platform Guides"
              ]
            }}
          />

          <Dropdown
            title="PARTNERS"
            showLeftContent={false}
            items={{
              "Partnerships": [
                "Introducing Brokers",
                "White Label",
                "Affiliate Program"
              ],
              "Benefits": [
                "Partner Benefits",
                "Commission Structure"
              ],
              "Support": [
                "Partner Portal",
                "Marketing Tools"
              ]
            }}
          />

          <Dropdown
            title="RESOURCES"
            showLeftContent={false}
            items={{
              "Education": [
                "Trading Courses",
                "Webinars",
                "Ebooks"
              ],
              "Analysis": [
                "Market Analysis",
                "Economic Calendar"
              ],
              "Support": [
                "Help Center",
                "Contact Support"
              ]
            }}
          />
        </ul>

        {/* Open Live Button */}
        <button className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800">
          OPEN LIVE
        </button>
      </nav>
    </header>
  );
};

export default Navbar;