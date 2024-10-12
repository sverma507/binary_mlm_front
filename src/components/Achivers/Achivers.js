// import React from 'react';

// // Sample data for achievers
// const achieversData = [
//   {
//     name: 'Alice Johnson',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     rating: 4.9,
//     totalBusiness: '$500,000',
//     totalTrades: 150,
//     totalEarnings: '$120,000',
//     referrals: 20,
//   },
//   {
//     name: 'Bob Smith',
//     image: 'https://randomuser.me/api/portraits/men/43.jpg',
//     rating: 4.8,
//     totalBusiness: '$480,000',
//     totalTrades: 145,
//     totalEarnings: '$115,000',
//     referrals: 18,
//   },
//   {
//     name: 'Charlie Brown',
//     image: 'https://randomuser.me/api/portraits/men/41.jpg',
//     rating: 4.7,
//     totalBusiness: '$450,000',
//     totalTrades: 140,
//     totalEarnings: '$110,000',
//     referrals: 15,
//   },
//   {
//     name: 'Diana Prince',
//     image: 'https://randomuser.me/api/portraits/women/43.jpg',
//     rating: 4.6,
//     totalBusiness: '$420,000',
//     totalTrades: 130,
//     totalEarnings: '$105,000',
//     referrals: 10,
//   },
//   {
//     name: 'Eve Adams',
//     image: 'https://randomuser.me/api/portraits/women/42.jpg',
//     rating: 4.5,
//     totalBusiness: '$400,000',
//     totalTrades: 125,
//     totalEarnings: '$100,000',
//     referrals: 8,
//   },
//   {
//     name: 'Frank Castle',
//     image: 'https://randomuser.me/api/portraits/men/40.jpg',
//     rating: 4.4,
//     totalBusiness: '$380,000',
//     totalTrades: 120,
//     totalEarnings: '$95,000',
//     referrals: 5,
//   },
// ];

// function Achievers() {
//   return (
//     <div className="p-8 bg-gradient-to-br from-slate-900  to-blue-600 min-h-screen flex flex-col items-center">
//       <h2 className="text-4xl font-bold text-white mb-8 shadow-md">Top Achievers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {achieversData.map((achiever, index) => (
//           <div key={index} className="card shadow-lg transition-transform duration-300 transform hover:scale-105">
//             <div className="bg-white rounded-lg p-6 flex flex-col items-center">
//               <img
//                 src={achiever.image}
//                 alt={achiever.name}
//                 className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400 shadow-lg"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">{achiever.name}</h3>
//               <p className="text-yellow-500 font-bold">Rating: {achiever.rating} ★</p>
//               <p className="mt-2 text-gray-600">Total Business: <span className="font-semibold">{achiever.totalBusiness}</span></p>
//               <p className="mt-2 text-gray-600">Total Trades: <span className="font-semibold">{achiever.totalTrades}</span></p>
//               <p className="mt-2 text-gray-600">Total Earnings: <span className="font-semibold">{achiever.totalEarnings}</span></p>
//               <p className="mt-2 text-gray-600">Referrals: <span className="font-semibold">{achiever.referrals}</span></p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CSS for Card Animation and Style */}
//       <style jsx>{`
//         .card {
//           width: 250px; /* Adjust as needed */
//           height: auto; /* Allow height to adjust based on content */
//           position: relative;
//           border-radius: 12px; /* Rounded corners for the card */
//           overflow: hidden; /* Ensure no overflow from the card */
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Achievers;


















import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

// Sample data for achievers
const achieversData = [
  {
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.9,
    totalBusiness: '$500,000',
    totalTrades: 150,
    totalEarnings: '$120,000',
    referrals: 20,
  },
  {
    name: 'Bob Smith',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
    rating: 4.8,
    totalBusiness: '$480,000',
    totalTrades: 145,
    totalEarnings: '$115,000',
    referrals: 18,
  },
  {
    name: 'Charlie Brown',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 4.7,
    totalBusiness: '$450,000',
    totalTrades: 140,
    totalEarnings: '$110,000',
    referrals: 15,
  },
  {
    name: 'Diana Prince',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    rating: 4.6,
    totalBusiness: '$420,000',
    totalTrades: 130,
    totalEarnings: '$105,000',
    referrals: 10,
  },
  {
    name: 'Eve Adams',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    rating: 4.5,
    totalBusiness: '$400,000',
    totalTrades: 125,
    totalEarnings: '$100,000',
    referrals: 8,
  },
  {
    name: 'Frank Castle',
    image: 'https://randomuser.me/api/portraits/men/40.jpg',
    rating: 4.4,
    totalBusiness: '$380,000',
    totalTrades: 120,
    totalEarnings: '$95,000',
    referrals: 5,
  },
];

function Achievers() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-900 to-blue-600 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-8 shadow-md">Top Achievers</h2>
      <Slider {...settings} className="w-full sm:w-96" style={{ height: '400px' }}>
        {achieversData.map((achiever, index) => (
          <div key={index} className="bg-white rounded-lg p-6 flex flex-col justify-center items-center">
           <div className='grid place-items-center'>
           <img
              src={achiever.image}
              alt={achiever.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400 shadow-lg"
            />
           </div>
            <h3 className="text-xl font-semibold text-gray-800">{achiever.name}</h3>
            <p className="text-yellow-500 font-bold">Rating: {achiever.rating} ★</p>
            <p className="mt-2 text-gray-600">Total Business: <span className="font-semibold">{achiever.totalBusiness}</span></p>
            <p className="mt-2 text-gray-600">Total Trades: <span className="font-semibold">{achiever.totalTrades}</span></p>
            <p className="mt-2 text-gray-600">Total Earnings: <span className="font-semibold">{achiever.totalEarnings}</span></p>
            <p className="mt-2 text-gray-600">Referrals: <span className="font-semibold">{achiever.referrals}</span></p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Achievers;
