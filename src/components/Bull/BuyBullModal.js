import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa'; // For copy-to-clipboard icon
import { toast } from 'react-toastify'; // For feedback messages
import 'react-toastify/dist/ReactToastify.css'; // Required for toast

toast.configure();

const BuyBullModal = ({ isOpen, onClose }) => {
  const walletAddress = "0x1234AdminWallet5678"; // Replace with actual admin wallet

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("Wallet address copied!", { position: toast.POSITION.TOP_RIGHT });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Buy Bull - Payment Instructions</h2>
        <p className="text-gray-600 mb-2">Please follow the steps below to make your payment of <strong>60 USDT</strong>:</p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Open your crypto wallet (e.g., Trust Wallet, MetaMask).</li>
          <li>Send exactly <strong>60 USDT</strong> to the following wallet address:</li>
        </ol>
        <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center mb-4">
          <span className="text-gray-800 font-mono">{walletAddress}</span>
          <button onClick={copyToClipboard} className="text-blue-600 hover:text-blue-800 focus:outline-none">
            <FaCopy />
          </button>
        </div>
        <ol className="list-decimal pl-5 mb-4" start="3">
          <li>Once you’ve sent the payment, please wait for the confirmation.</li>
          <li>After confirmation, your Bull will be activated.</li>
        </ol>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default BuyBullModal;
