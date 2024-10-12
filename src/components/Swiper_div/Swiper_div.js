// import React from 'react';

// function Swiper_div() {
//   // Sample data for cryptocurrencies (name, logo, price, and change)
//   const cryptoData = [
//     { name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg', price: '$54,300', change: '+2.5%' },
//     { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', price: '$3,400', change: '+1.2%' },
//     { name: 'Ripple', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg', price: '$1.05', change: '-0.3%' },
//     { name: 'Litecoin', logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg', price: '$250', change: '+1.8%' },
//     { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.svg', price: '$30.5', change: '+0.9%' },
//     { name: 'Cardano', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.svg', price: '$2.25', change: '-1.1%' },
//   ];

//   return (
//     <div className='h-32 bg-gradient-to-br from-green-300 to-yellow-400 text-white flex items-center overflow-hidden'>
//       {/* Marquee container */}
//       <div className='marquee whitespace-nowrap flex'>
//         {[...cryptoData, ...cryptoData].map((crypto, index) => (
//           <div key={index} className='inline-flex items-center mx-8'>
//             <img src={crypto.logo} alt={crypto.name} className='w-8 h-8 mr-2' />
//             <span className='font-semibold mr-2'>{crypto.name}</span>
//             <span className='mr-2'>{crypto.price}</span>
//             <span className={`font-semibold ${crypto.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
//               {crypto.change}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* CSS for marquee effect */}
//       <style jsx>{`
//         .marquee {
//           display: flex;
//           animation: marquee 15s linear infinite;
//         }

//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Swiper_div;












import React from 'react';

function Swiper_div() {
  // Sample data for motivational trading/blockchain/finance info with free logos
  const tradingInfo = [
    { 
      name: 'Goldman Sachs', 
      slogan: 'Leading the way in investment banking', 
      logo: 'https://cdn.wamda.com/feature-images/bb840dda0739924.jpg' // Free source
    },
    { 
      name: 'JP Morgan', 
      slogan: 'Trusted financial services for over 200 years', 
      logo: 'https://connect-assets.prosple.com/cdn/ff/iTUu2q80CWHnvjhBaxLmdWt1iMfeweFf8SxKPJFcdf8/1654583945/public/2022-06/banner-jpmorgan-1786x642-2022.png' // Free source
    },
    { 
      name: 'Blockchain.com', 
      slogan: 'Revolutionizing digital currency trading', 
      logo: 'https://img.freepik.com/premium-vector/blockchain-line-icon-logo-concept-dark-background_516670-196.jpg' // Free source
    },
    { 
      name: 'Coinbase', 
      slogan: 'The easiest place to buy and sell cryptocurrency', 
      logo: 'https://images.ctfassets.net/o10es7wu5gm1/6nZH4sYSMbCYXjmwiAn8Mf/92a0121bca95dd003e6625ce5e4f9ea2/CB_one_hero.png' // Free source
    },
    { 
      name: 'Binance', 
      slogan: 'World’s leading blockchain ecosystem', 
      logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' // Free source
    },
    { 
      name: 'Ethereum Foundation', 
      slogan: 'Decentralize everything with smart contracts', 
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' // Free source
    },
    { 
      name: 'NASDAQ', 
      slogan: 'The heartbeat of global markets', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLYged-qlLZ_2-t96DKYF4Z47ZaJt0swnHw&s' // Free source
    },
    { 
      name: 'Morgan Stanley', 
      slogan: 'We help people, businesses, and institutions build', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYr58cjnmYi42wniEfxMrJE1iPbmFpM-yRQ&s' // Free source
    },
  ];

  return (
    <div className='h-32 bg-gradient-to-t from-green-300 to-blue-400 text-white flex items-center overflow-hidden'>
      {/* Marquee container */}
      <div className='marquee whitespace-nowrap flex'>
        {[...tradingInfo, ...tradingInfo].map((info, index) => (
          <div key={index} className='inline-flex items-center mx-8'>
            <img src={info.logo} alt={info.name} className='w-16 h-16 m-2 ml-4' onError={(e) => e.target.src = 'https://via.placeholder.com/100'} />
            <div>
              <span className='font-bold text-lg mr-2'>{info.name}:</span>
              <span className='italic text-sm'>{info.slogan}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for marquee effect */}
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Swiper_div;
