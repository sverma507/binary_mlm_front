// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import "./market.css"; // External CSS file for styling

// const MarketStatus = () => {
//   const [marketData, setMarketData] = useState({});
//   const previousDataRef = useRef({});
//   const [flipped, setFlipped] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]); // Store flipped state for each card
//   const currencyPairs = [
//     "LINKUSD",
//     "XBTUSD",
//     "ETHUSD",
//     "LTCUSD",
//     "BCHUSD",
//     "ADAUSD",
//   ];

//   useEffect(() => {
//     const fetchMarketData = async () => {
//       try {
//         const requests = currencyPairs.map((pair) =>
//           axios.get(`https://api.kraken.com/0/public/Ticker?pair=${pair}`)
//         );
//         const responses = await Promise.all(requests);

//         const data = responses.reduce((acc, response) => {
//           const pair = Object.keys(response.data.result)[0];
//           acc[pair] = response.data.result[pair];
//           return acc;
//         }, {});

//         setMarketData(data);
//         previousDataRef.current = marketData;
//       } catch (error) {
//         console.error("Error fetching market data:", error);
//       }
//     };

//     fetchMarketData();
//     const intervalId = setInterval(fetchMarketData(),60000);
//     return () => clearInterval(intervalId);
//   }, [marketData]);

//   const getPriceChangeClass = (currentPrice, pair) => {
//     const previousData = previousDataRef.current[pair] || {};
//     const previousPrice = previousData.a ? previousData.a[0] : null;

//     if (!previousPrice) return "";

//     const change = parseFloat(currentPrice) - parseFloat(previousPrice);
//     return change > 0 ? "text-green-500" : "text-red-500";
//   };

//   const toggleCard = (index) => {
//     setFlipped((prev) =>
//       prev.map((item, idx) => (idx === index ? !item : item))
//     );
//   };

//   const marketEntries = Object.entries(marketData);

//   return (
//     <div className="mx-auto p-4 w-[90%] mt-20">
//       <h1 className="text-center text-3xl font-bold mb-8 text-gray-100">
//         Market Status
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {marketEntries.length > 0 ? (
//           marketEntries.map(([market, data], index) => (
//             <div
//               key={index}
//               className="card-container"
              
//             >
//               <div className={`card ${flipped[index] ? "flipped" : ""}`}>
//                 {/* Front side */}
//                 <div className="card-front shadow-lg shadow-white">
//                   <h2 className="text-2xl font-semibold mb-4 text-white">
//                     {market}
//                   </h2>
//                   <div className="m-auto mb-3 w-[250px] ">
//                     <div className="flex justify-between mt-14">
//                       <span className="font-medium text-gray-300">
//                         Ask Price:
//                       </span>
//                       <span
//                         className={`font-semibold ${getPriceChangeClass(data.a[0], market)}`}
//                       >
//                         {data.a[0]} USD
//                       </span>
//                     </div>
//                     <div className="flex justify-between mt-14">
//                       <span className="font-medium text-gray-300">
//                         Bid Price:
//                       </span>
//                       <span
//                         className={`font-semibold ${getPriceChangeClass(data.b[0], market)}`}
//                       >
//                         {data.b[0]} USD
//                       </span>
//                     </div>
//                   </div>
//                   <button className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" onClick={() => toggleCard(index)}>
//                     View More
//                   </button>
//                 </div>

//                 {/* Back side */}
//                 <div className="card-back  shadow-lg shadow-white">
//                   <h2 className="text-2xl font-semibold mb-4 text-white">
//                     {market}
//                   </h2>
//                   <div className="flex justify-between mt-8">
//                     <span className="font-medium text-gray-300">
//                       Last Trade Price:
//                     </span>
//                     <span
//                       className={`font-semibold ${getPriceChangeClass(data.c[0], market)}`}
//                     >
//                       {data.c[0]} USD
//                     </span>
//                   </div>
//                   <div className="flex justify-between mt-1">
//                     <span className="font-medium text-gray-300">
//                       24h Volume:
//                     </span>
//                     <span className="font-semibold">{data.v[0]}</span>
//                   </div>
//                   <div className="flex justify-between mt-1">
//                     <span className="font-medium text-gray-300">24h High:</span>
//                     <span className="font-semibold">{data.h[0]}</span>
//                   </div>
//                   <div className="flex justify-between mt-1">
//                     <span className="font-medium text-gray-300">24h Low:</span>
//                     <span className="font-semibold">{data.l[0]}</span>
//                   </div>
//                   <div className="flex justify-between mt-1">
//                     <span className="font-medium text-gray-300">
//                       Open Price:
//                     </span>
//                     <span className="font-semibold">{data.o}</span>
//                   </div>
//                   <button onClick={() => toggleCard(index)} className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
//                     View Less
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center text-gray-400">
//             Loading market data...
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MarketStatus;




















import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./market.css"; // External CSS file for styling

const MarketStatus = () => {
  const [marketData, setMarketData] = useState({});
  const previousDataRef = useRef({});
  const [flipped, setFlipped] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]); // Store flipped state for each card
  const currencyPairs = [
    "LINKUSD",
    "XBTUSD",
    "ETHUSD",
    "LTCUSD",
    "BCHUSD",
    "ADAUSD",
  ];

  const fetchMarketData = async () => {
    console.log("called");
    
    try {
      const requests = currencyPairs.map((pair) =>
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
      console.error("Error fetching market data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchMarketData();
    // Set interval to fetch data every 2 seconds
    const intervalId = setInterval(fetchMarketData, 3000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once after initial render

  const getPriceChangeClass = (currentPrice, pair) => {
    const previousData = previousDataRef.current[pair] || {};
    const previousPrice = previousData.a ? previousData.a[0] : null;

    if (!previousPrice) return "";

    const change = parseFloat(currentPrice) - parseFloat(previousPrice);
    return change > 0 ? "text-green-500" : "text-red-500";
  };

  const toggleCard = (index) => {
    setFlipped((prev) =>
      prev.map((item, idx) => (idx === index ? !item : item))
    );
  };

  const marketEntries = Object.entries(marketData);

  return (
    <div className="mx-auto p-4 w-[90%] mt-20">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-100">
        Market Status
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {marketEntries.length > 0 ? (
          marketEntries.map(([market, data], index) => (
            <div key={index} className="card-container">
              <div className={`card ${flipped[index] ? "flipped" : ""}`}>
                {/* Front side */}
                <div className="card-front shadow-lg shadow-white">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {market}
                  </h2>
                  <div className="m-auto mb-3 w-[250px] ">
                    <div className="flex justify-between mt-14">
                      <span className="font-medium text-gray-300">
                        Ask Price:
                      </span>
                      <span
                        className={`font-semibold ${getPriceChangeClass(
                          data.a[0],
                          market
                        )}`}
                      >
                        {data.a[0]} USD
                      </span>
                    </div>
                    <div className="flex justify-between mt-14">
                      <span className="font-medium text-gray-300">
                        Bid Price:
                      </span>
                      <span
                        className={`font-semibold ${getPriceChangeClass(
                          data.b[0],
                          market
                        )}`}
                      >
                        {data.b[0]} USD
                      </span>
                    </div>
                  </div>
                  <button
                    className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                    onClick={() => toggleCard(index)}
                  >
                    View More
                  </button>
                </div>

                {/* Back side */}
                <div className="card-back shadow-lg shadow-white">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {market}
                  </h2>
                  <div className="flex justify-between mt-8">
                    <span className="font-medium text-gray-300">
                      Last Trade Price:
                    </span>
                    <span
                      className={`font-semibold ${getPriceChangeClass(
                        data.c[0],
                        market
                      )}`}
                    >
                      {data.c[0]} USD
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-medium text-gray-300">
                      24h Volume:
                    </span>
                    <span className="font-semibold">{data.v[0]}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-medium text-gray-300">
                      24h High:
                    </span>
                    <span className="font-semibold">{data.h[0]}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-medium text-gray-300">24h Low:</span>
                    <span className="font-semibold">{data.l[0]}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-medium text-gray-300">
                      Open Price:
                    </span>
                    <span className="font-semibold">{data.o}</span>
                  </div>
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    View Less
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">
            Loading market data...
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketStatus;
