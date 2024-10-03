import React, { useState } from 'react';
import Layout from '../layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { ethers } from 'ethers';
import { FaMoneyBillWave, FaBullseye, FaChartLine, FaEthereum } from 'react-icons/fa'; // Icons for visual enhancement

const contractABI = [
  // Your ABI details here
];

const contractAddress = '0x5805BDD1D1f1363f4707BE90E31C49Fa10F431bc';
const usdtAddress = '0x55d398326f99059fF775485246999027B3197955'; // USDT contract on BSC

const BullPlan = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);

  const handleBuyBull = async () => {
    setLoading(true);

    try {
      // Detect Web3 provider (MetaMask, Trust Wallet, etc.)
      let provider;
      if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum, 'any'); // Handle all wallets
        await window.ethereum.request({ method: 'eth_requestAccounts' }); // Prompt user to connect account
      } else if (window.web3) {
        provider = new ethers.providers.Web3Provider(window.web3.currentProvider, 'any');
      } else {
        toast.error('Please install MetaMask or Trust Wallet to use this feature.');
        setLoading(false);
        return;
      }

      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      console.log('User Wallet Address:', userAddress);

      // Ensure that the wallet is connected to Binance Smart Chain
      const { chainId } = await provider.getNetwork();
      if (chainId !== 56) { // BSC Mainnet has chainId of 56
        toast.error('Please switch your wallet to Binance Smart Chain (BSC).');
        setLoading(false);
        return;
      }

      // Interact with USDT contract for approval
      const usdtContract = new ethers.Contract(
        usdtAddress,
        ['function approve(address spender, uint256 amount) public returns (bool)'],
        signer
      );

      const bullPrice = ethers.utils.parseUnits('60', 18); // 60 USDT
      const approvalTransaction = await usdtContract.approve(contractAddress, bullPrice);
      await approvalTransaction.wait();

      // Interact with your Bull Plan contract to purchase Bull
      const bullContract = new ethers.Contract(contractAddress, contractABI, signer);
      const purchaseTransaction = await bullContract.purchaseBull();
      await purchaseTransaction.wait();

      // Redirect and show success message
      navigate('/user/pay');
      toast.success('Bull purchased successfully!');

      // Call backend to record the purchase
      const id = auth?.user?._id;
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/purchase-bull/${id}`);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error('An error occurred while processing your request. Please try again.');
      console.error('Transaction Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="relative pt-28 py-16 bg-gradient-to-r from-blue-900 to-black text-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-extrabold text-green-300 animate-pulse">Join the Bull Plan Today</h2>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Your journey to financial independence begins here. Invest $60 and start earning daily profits with our automated platform.
          </p>
        </div>
        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center hover:bg-gray-700 transition duration-300">
            <FaBullseye className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Set Your Target</h3>
            <p className="text-gray-300">
              Start with just $60 and aim for consistent daily profits. Secure your financial future with the Bull Plan!
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center hover:bg-gray-700 transition duration-300">
            <FaChartLine className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Grow Your Income</h3>
            <p className="text-gray-300">
              Enjoy the benefits of automated trading that works around the clock to bring profits directly to you.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center hover:bg-gray-700 transition duration-300">
            <FaMoneyBillWave className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Watch Your Profits Rise</h3>
            <p className="text-gray-300">
              Track your earnings and see your investment grow. Every dollar counts toward your financial freedom.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleBuyBull}
            className={`inline-block ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-500'} text-white text-lg font-bold py-4 px-12 rounded-full transition duration-300 shadow-lg`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Buy Your Bull Now for $60'}
          </button>
        </div>

        {/* Additional Info Section */}
        <div className="mt-24 text-center text-white">
          <h2 className="text-5xl font-extrabold text-blue-400 mb-8">Start Earning Today!</h2>
          <p className="text-xl text-gray-400 mb-12">
            With the Bull Plan, you are just a few clicks away from securing your spot in a world of financial opportunities.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <FaEthereum className="text-5xl text-blue-400 mr-4" />
              <span className="text-2xl font-bold">Powered by Blockchain</span>
            </div>
            <div className="flex items-center">
              <FaChartLine className="text-5xl text-green-400 mr-4" />
              <span className="text-2xl font-bold">Daily Profits Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BullPlan;
