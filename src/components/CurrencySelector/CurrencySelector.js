import React, { useState } from 'react';
import CandlestickChart from '../CandlestickChart/CandlestickChart';
import LineChart from '../LineChart/LineChart';

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('BTCUSDT');
  const currencyPairs = ['BTCUSDT', 'ETHUSDT', 'LTCUSDT', 'BCHUSDT', 'ADAUSDT', 'DOTUSDT', 'XLMUSDT', 'XRPUSDT'];

  return (
    <div className="w-[90%] mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-100 mt-20">Currency Candlestick Chart</h1>
      <div className="flex justify-center flex-wrap mb-8 gap-10">
        {currencyPairs.map((currency) => (
          <button
            key={currency}
            className={`px-4 py-2 mx-2 text-white font-bold rounded-lg transition-transform transform ${
              selectedCurrency === currency ? 'bg-blue-600' : 'bg-gray-800'
            } hover:bg-blue-700`}
            onClick={() => setSelectedCurrency(currency)}
          >
            {currency}
          </button>
        ))}
      </div>
      <CandlestickChart selectedCurrency={selectedCurrency} />
      {/* <CandlestickChart selectedCurrency="XBTUSD" /> */}
      <div className='mt-10'>
      <LineChart selectedCurrency={selectedCurrency} />
      </div>
    </div>
  );
};

export default CurrencySelector;
