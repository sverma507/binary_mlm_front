// src/components/TradingSection.js

import React from 'react';

const TradingSection = () => {
  return (
    <div className="bg-slate-700 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10 rounded-lg">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">What is Trading?</h1>
        <p className="text-gray-400 text-base md:text-lg">
          Trading is the act of buying and selling financial instruments, like stocks, currencies, or commodities, with the goal of making a profit from price fluctuations within a specific timeframe. It is the fundamental law of every economic system. Any country's growth capacity depends on the trade taking place in it. All kinds of commercial transactions occur in markets, including the stock exchanges for share trading.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2">
          Discover More
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={require("./images/tradingSection.avif")} alt="Trading Section" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default TradingSection;
