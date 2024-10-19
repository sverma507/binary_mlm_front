import React, { useState } from 'react';
import Layout from '../layout/layout';
import { toast } from 'react-hot-toast';

const AdminWalletAddress = () => {
  const [walletAddress] = useState("0x1234567890abcdef1234567890abcdef12345678"); // Replace with actual wallet address
  const [loading, setLoading] = useState(false); // Loading state
  const [copied, setCopied] = useState(false); // Copied state

  const handleCopy = () => {
    setLoading(true); // Show loading state
    navigator.clipboard.writeText(walletAddress)
      .then(() => {
        setCopied(true); // Set copied state to true
        toast('Wallet Address Copied Successfully', {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: 'white',
            color: 'black',
          },
          icon: '👏', // Add a custom icon
        });
      })
      .catch(() => {
        toast('Something went wrong', {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: 'red',
            color: 'white',
          },
          icon: '😢', // Add a custom icon
        });
      })
      .finally(() => {
        setLoading(false); // Remove loading state
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      });
  };

  return (
    <Layout>
      <section className="relative pt-28 py-16 bg-gradient-to-r from-blue-800 to-black text-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 opacity-30 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-blue-400 animate-bounce">Admin Wallet Address</h2>
            <p className="mt-6 text-xl text-gray-300">
              Use the wallet address below to make your payment of $100 for the Trading Plans.
            </p>
          </div>

          {/* Wallet Address Section */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center mb-8">
            <h4 className="text-2xl font-bold text-blue-400">Wallet Address</h4>
            <p className="mt-4 text-gray-300 break-words">{walletAddress}</p>
            <button
              onClick={handleCopy}
              className={`inline-block ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-500'} text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300 mt-10`}
              disabled={loading} // Disable the button when loading
            >
              {loading ? 'Loading...' : (copied ? 'Copied!' : 'Copy Wallet Address')}
            </button>
          </div>

          {/* Instructions Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-blue-400 mb-6">How to Make Payment with Trust Wallet</h3>
            <ol className="list-decimal text-left mx-auto max-w-lg">
              <li className="text-lg text-gray-300 mb-4">Open Trust Wallet on your mobile device.</li>
              <li className="text-lg text-gray-300 mb-4">Select 'Send' from the wallet menu.</li>
              <li className="text-lg text-gray-300 mb-4">Paste the wallet address provided above in the 'To' field.</li>
              <li className="text-lg text-gray-300 mb-4">Enter the amount: $100.</li>
              <li className="text-lg text-gray-300 mb-4">Confirm the transaction and complete the payment.</li>
            </ol>
            <p className="text-lg text-gray-300">
              After the payment is completed, you will gain access to the Bull Plan. Thank you for your investment!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminWalletAddress;
