import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaWallet,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import Layout from "../layout/layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// Popup Component
function Popup({ onClose }) {
  const navigate=useNavigate()
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center border-2justify-center bg-black bg-opacity-50 z-50">
      <div className="font-extrabold text-4xl m-6"> Buy Bull</div>

      <div style={{ backgroundImage: `url(${require("./Images/trading_bull.jpg")})` }} className="relative h-[299px] bg-cover flex items-end justify-center bg-black border-2 border-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        {/* Close button positioned at the top-right corner of the image */}
        <button
          className="absolute   top-2 right-2 px-2 bg-orange-500 text-white rounded hover:bg-red-700"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="m-6">
            <a
              onClick={() => {
                navigate("/user/buy-bull");
              }}
              className="inline-block animate-bounce cursor-pointer border-2 border-white bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Buy a Trading Bull Now for $60
            </a>
          </div>

        {/* Image */}
        {/* <img
          src={require("./Images/trading_bull.jpg")}
          alt="Trading Bull"
          className="w-full h-[299px] rounded-t-lg object-contain"
        /> */}
      </div>
    </div>
  );
}

const MyProfile = () => {
  const [auth, setAuth] = useAuth();
  const [profile, setProfile] = useState(null); // State to hold profile data
  const [walletBalances, setWalletBalances] = useState([]); // State to hold wallet balances
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Function to log out the user
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  // Function to fetch profile data
  const getProfile = async () => {
    const id = auth?.user?._id;
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/profile/${id}`
      );
      setProfile(result.data);

      // Check the isActive status
      if (result.data?.isActive === false) {
        setShowPopup(true); // Show popup if user is inactive
      }
    } catch (error) {
      console.error("Error fetching profile data: ", error);
    }
  };

  // Function to fetch wallet balances based on the wallet address
  const getWalletBalances = async (walletAddress, chainId = 1) => {
    try {
      const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainId}/address/${walletAddress}/balances_v2/`,
        {
          params: {
            key: process.env.REACT_APP_COVALENT_API_KEY, // Your Covalent API key
          },
        }
      );
      setWalletBalances((prevBalances) => [
        ...prevBalances,
        ...response.data.data.items,
      ]);
    } catch (error) {
      console.error(
        `Error fetching wallet balances for chain ${chainId}: `,
        error
      );
    }
  };

  useEffect(() => {
    getProfile(); // Fetch the profile on component load
  }, []);

  // Fetch wallet balances when profile is loaded and has a wallet address
  useEffect(() => {
    if (profile?.walletAddress) {
      getWalletBalances(profile.walletAddress, 1); // Ethereum Mainnet
      getWalletBalances(profile.walletAddress, 56); // Binance Smart Chain
    }
  }, [profile]);

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!profile) return <div>Loading...</div>; // Show loading while fetching data

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-gray-100 p-8 mt-10">
        <ToastContainer />
        {showPopup && <Popup onClose={handleClosePopup} />} {/* Show Popup if user is inactive */}

        {/* Outer Container */}
        <div className="mx-auto text-center max-w-screen-lg">
          {/* Heading Section */}
          <section className="my-12">
            <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
              My Profile
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to your profile,{" "}
              <span className="text-blue-500">TradeSmart User</span>. Here, you
              can view and manage your personal information.
            </p>
          </section>

          {/* Profile Information Section */}
          <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      icon: FaUser,
      title: "Referral Code",
      value: profile.referralCode || "N/A",
    },
    {
      icon: FaChartLine,
      title: "User Status",
      value: `${profile.isActive ? "Active" : "Purchase Bull"}`,
      isActive: profile.isActive, // adding isActive property for the status
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-800 border-2 border-white p-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-700"
    >
      <item.icon className="text-blue-500 text-4xl mb-4 mx-auto" />
      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
      {/* Conditional text color for User Status */}
      {item.title === "User Status" ? (
        <p
          className={`${
            item.isActive ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {item.value}
        </p>
      ) : (
        <p className="text-gray-300">{item.value}</p>
      )}
    </div>
  ))}
</section>


          {/* Wallet and Earnings Section */}
          <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaWallet,
                title: "Earning Wallet",
                value: `$${profile.earningWallet.toFixed(2)}`,
              },
              {
                icon: FaWallet,
                title: "Recharge Wallet",
                value: `$${profile.rechargeWallet.toFixed(2)}`,
              },
              {
                icon: FaWallet,
                title: "Trading Wallet",
                value: `$${profile.tradingWallet.toFixed(2)}`,
              },
              {
                icon: FaChartLine,
                title: "Total Earnings",
                value: `$${profile.totalEarnings?.toFixed(2) || 0}`,
              },
              // { icon: FaUsers, title: 'Referrals', value: `${profile.referrals || 0} Users` },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 border-2 border-white p-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-700"
              >
                <item.icon className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
            ))}
          </section>

          { showPopup && <div className="mt-6">
            <a
              onClick={() => {
                navigate("/user/buy-bull");
              }}
              className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Buy a Trading Bull Now for $60
            </a>
          </div>}
          {/* Wallet Address and Token Section */}
          <section className="my-16">
            <div className="bg-gray-800 p-6 border-2 border-white rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-700">
              <h4 className="text-2xl font-bold mb-3 text-blue-500">
                Wallet Address
              </h4>
              <p className="text-gray-300">{profile.walletAddress || "N/A"}</p>
              <h4 className="text-2xl font-bold mt-6 mb-3 text-blue-500">
                Token Balances
              </h4>
              {walletBalances.length > 0 ? (
                <ul className="text-left text-gray-300">
                  {walletBalances.map((token, index) => (
                    <li key={index} className="mb-2">
                      {token.contract_ticker_symbol}:{" "}
                      {(
                        token.balance / Math.pow(10, token.contract_decimals)
                      ).toFixed(4)}{" "}
                      {token.contract_ticker_symbol}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">
                  No tokens found for this wallet.
                </p>
              )}
            </div>
          </section>

          {/* Logout Section */}
          <section className="my-16 bg-blue-700 py-10 rounded-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-600">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              Need to Logout?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you're finished, feel free to log out of your account.
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Logout
            </button>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfile;
