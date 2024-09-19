// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// const MarketStatus = () => {
//   const [marketData, setMarketData] = useState({});
//   const previousDataRef = useRef({}); // Using ref to keep track of previous data

//   const currencyPairs = ['LINKUSD', 'XBTUSD', 'ETHUSD', 'LTCUSD', 'BCHUSD', 'ADAUSD', 'DOTUSD', 'XLMUSD', 'XRPUSD'];

//   useEffect(() => {
//     // Function to fetch market data
//     const fetchMarketData = async () => {
//       try {
//         // Create an array of promises for each currency pair
//         const requests = currencyPairs.map(pair =>
//           axios.get(`https://api.kraken.com/0/public/Ticker?pair=${pair}`)
//         );

//         // Fetch all data concurrently
//         const responses = await Promise.all(requests);

//         // Combine all responses into a single object
//         const data = responses.reduce((acc, response) => {
//           const pair = Object.keys(response.data.result)[0];
//           acc[pair] = response.data.result[pair];
//           return acc;
//         }, {});

//         // Update state with new data
//         setMarketData(data);
//         // Update the ref with previous data
//         previousDataRef.current = marketData;
//       } catch (error) {
//         console.error('Error fetching market data:', error);
//       }
//     };

//     // Fetch data initially
//     fetchMarketData();

//     // Set up an interval to fetch data every minute
//     const intervalId = setInterval(fetchMarketData, 60000);

//     // Clear the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [marketData]);

//   // Function to determine the price change and style
//   const getPriceChangeClass = (currentPrice, pair) => {
//     const previousData = previousDataRef.current[pair] || {};
//     const previousPrice = previousData.a ? previousData.a[0] : null;

//     if (!previousPrice) return '';

//     const change = parseFloat(currentPrice) - parseFloat(previousPrice);
//     return change > 0 ? 'text-green-500' : 'text-red-500';
//   };

//   // Convert the market data object into an array for easier mapping
//   const marketEntries = Object.entries(marketData);

//   return (
//     <div className="container-fluid mx-auto p-4">
//       <h1 className="text-center text-2xl font-bold mb-4">Market Status</h1>
//       <table className="min-w-full bg-gray-900 text-white">
//         <thead>
//           <tr className="bg-gray-800">
//             <th className="py-2 px-4 text-left">Market</th>
//             <th className="py-2 px-4 text-left">Ask Price</th>
//             <th className="py-2 px-4 text-left">Bid Price</th>
//             <th className="py-2 px-4 text-left">Last Trade Price</th>
//             <th className="py-2 px-4 text-left">24h Volume</th>
//             <th className="py-2 px-4 text-left">24h High</th>
//             <th className="py-2 px-4 text-left">24h Low</th>
//             <th className="py-2 px-4 text-left">Open Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketEntries.length > 0 ? (
//             marketEntries.map(([market, data], index) => (
//               <tr key={index} className="border-b border-gray-700">
//                 <td className="py-2 px-4">{market}</td>
//                 <td className={`py-2 px-4 ${getPriceChangeClass(data.a[0], market)}`}>
//                   {data.a[0]}
//                 </td>
//                 <td className={`py-2 px-4 ${getPriceChangeClass(data.b[0], market)}`}>
//                   {data.b[0]}
//                 </td>
//                 <td className={`py-2 px-4 ${getPriceChangeClass(data.c[0], market)}`}>
//                   {data.c[0]}
//                 </td>
//                 <td className="py-2 px-4">{data.v[0]}</td>
//                 <td className="py-2 px-4">{data.h[0]}</td>
//                 <td className="py-2 px-4">{data.l[0]}</td>
//                 <td className="py-2 px-4">{data.o}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="py-2 px-4 text-center">Loading market data...</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MarketStatus;






import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const MarketStatus = () => {
  const [marketData, setMarketData] = useState({});
  const previousDataRef = useRef({});
  const currencyPairs = ['LINKUSD', 'XBTUSD', 'ETHUSD', 'LTCUSD', 'BCHUSD', 'ADAUSD', 'DOTUSD', 'XLMUSD', 'XRPUSD'];

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const requests = currencyPairs.map(pair =>
          axios.get(`https://api.kraken.com/0/public/Ticker?pair=${pair}`)
        );
        const responses = await Promise.all(requests);

        const data = responses.reduce((acc, response) => {
          const pair = Object.keys(response.data.result)[0];
          acc[pair] = response.data.result[pair];
          return acc;
        }, {});

        setMarketData(data);
        previousDataRef.current = marketData;
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
    const intervalId = setInterval(fetchMarketData, 60000);
    return () => clearInterval(intervalId);
  }, [marketData]);

  const getPriceChangeClass = (currentPrice, pair) => {
    const previousData = previousDataRef.current[pair] || {};
    const previousPrice = previousData.a ? previousData.a[0] : null;

    if (!previousPrice) return '';

    const change = parseFloat(currentPrice) - parseFloat(previousPrice);
    return change > 0 ? 'text-green-500' : 'text-red-500';
  };

  const marketEntries = Object.entries(marketData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-100">Market Status</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {marketEntries.length > 0 ? (
          marketEntries.map(([market, data], index) => (
            <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 text-white">{market}</h2>
              <div className="mb-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-300">Ask Price:</span>
                  <span className={`font-semibold ${getPriceChangeClass(data.a[0], market)}`}>{data.a[0]} USD</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-medium text-gray-300">Bid Price:</span>
                  <span className={`font-semibold ${getPriceChangeClass(data.b[0], market)}`}>{data.b[0]} USD</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-medium text-gray-300">Last Trade Price:</span>
                  <span className={`font-semibold ${getPriceChangeClass(data.c[0], market)}`}>{data.c[0]} USD</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-300">24h Volume:</span>
                <span className="font-semibold">{data.v[0]}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-300">24h High:</span>
                <span className="font-semibold">{data.h[0]}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-300">24h Low:</span>
                <span className="font-semibold">{data.l[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-300">Open Price:</span>
                <span className="font-semibold">{data.o}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">Loading market data...</div>
        )}
      </div>
    </div>
  );
};

export default MarketStatus;
