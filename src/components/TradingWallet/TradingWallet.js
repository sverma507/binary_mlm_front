import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import axios from 'axios';

const TradingWallet = () => {
    const [profile, setProfile] = useState(null); // Initialize profile as null
    const [auth] = useAuth();
    const [transferAmount, setTransferAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for validation message

    // Fetch user profile from backend
    const getProfile = async () => {
        const id = auth?.user?._id;
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/user/profile/${id}`);
            console.log("Profile data fetched: ", result.data);
            setProfile(result.data); // Set the fetched data to state
        } catch (error) {
            console.error("Error fetching profile data: ", error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    // Handle transfer from recharge wallet to trading wallet
    const handleTransfer = async () => {
        const amount = parseFloat(transferAmount);

        if (isNaN(amount) || amount < 100) {
            setErrorMessage('Transfer amount must be at least $100.');
            toast.error('Transfer amount must be at least $100.');
        } else if (amount > profile.rechargeWallet) {
            setErrorMessage('');
            toast.error('Insufficient funds in recharge wallet.');
        } else {
            setErrorMessage('');

            try {
                const userId = auth.user._id
                // Make API request to transfer funds
                 const result = await axios.post(`${process.env.REACT_APP_API_URL}/user/recharge-to-trading/${userId}`, { amount });

                 console.log("recharge to trading wallet ====>",result)

                // Update profile locally after successful transfer
                setProfile(prevProfile => ({
                    ...prevProfile,
                    rechargeWallet: prevProfile.rechargeWallet - amount,
                    tradingWallet: prevProfile.tradingWallet + amount
                }));
                
                toast.success(`Successfully transferred $${amount} to trading wallet.`);
            } catch (error) {
                console.error("Error during transfer: ", error);
                toast.error('Failed to transfer funds. Please try again later.');
            }
        }
    };

    return (
        <Layout>
            <section className="relative pt-28 py-16 bg-gradient-to-r from-green-800 to-black text-gray-100 overflow-hidden">
                {/* Background elements for creativity */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold text-green-400 animate-bounce">Start Trading Today With $100</h2>
                    <p className="mt-6 text-xl text-gray-300">
                        Unlock your potential with our cutting-edge trading platform. Start your journey towards financial independence today!
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-green-900 opacity-30 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-900 opacity-30 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    {/* Wallet Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Recharge Wallet */}
                        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
                            <h3 className="text-3xl font-bold text-green-400">Recharge Wallet</h3>
                            <p className="mt-4 text-gray-300">Balance: 
                                <span className="text-green-400">
                                    ${profile?.rechargeWallet?.toFixed(2) || 0}
                                </span>
                            </p>
                        </div>

                        {/* Trading Wallet */}
                        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
                            <h3 className="text-3xl font-bold text-green-400">Trading Wallet</h3>
                            <p className="mt-4 text-gray-300">Balance: 
                                <span className="text-green-400">
                                    ${profile?.tradingWallet?.toFixed(2) || 0}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Transfer Section */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-12">
                        <h3 className="text-3xl font-bold text-green-400 mb-6">Transfer Funds</h3>
                        <p className="text-gray-300 mb-4">Start trading with a minimum of $100. Transfer funds from your recharge wallet to your trading wallet.</p>
                        <div className="flex flex-col items-start">
                            <div className="flex flex-col justify-center items-center w-full">
                                <div>
                                    <input
                                        type="number"
                                        value={transferAmount}
                                        onChange={(e) => setTransferAmount(e.target.value)}
                                        className="bg-gray-700 text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
                                        placeholder="Enter amount"
                                    />
                                    <button
                                        onClick={handleTransfer}
                                        className="bg-gradient-to-r from-yellow-400 to-green-600 hover:from-yellow-500 hover:to-green-500 text-white px-6 py-2 rounded-r-lg font-bold transition duration-300"
                                    >
                                        Transfer
                                    </button>
                                </div>
                                {/* Validation Message */}
                                {errorMessage && (
                                    <p className="text-red-500 mt-2">{errorMessage}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Trading Income Table */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-8">
                        <h3 className="text-3xl font-bold text-green-400 mb-6">Trading Income</h3>
                        <table className="min-w-full bg-gray-900 text-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 text-left">Date</th>
                                    <th className="py-2 px-4 text-left">Amount Earned</th>
                                    <th className="py-2 px-4 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Dummy Data */}
                                <tr className="bg-gray-700">
                                    <td className="py-2 px-4">2024-09-25</td>
                                    <td className="py-2 px-4">$150.00</td>
                                    <td className="py-2 px-4 text-green-400">Completed</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="py-2 px-4">2024-09-24</td>
                                    <td className="py-2 px-4">$120.00</td>
                                    <td className="py-2 px-4 text-yellow-400">Pending</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="py-2 px-4">2024-09-23</td>
                                    <td className="py-2 px-4">$200.00</td>
                                    <td className="py-2 px-4 text-green-400">Completed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TradingWallet;
