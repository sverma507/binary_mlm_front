import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaWallet, FaChartLine, FaUsers } from 'react-icons/fa';
import Layout from '../layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const MyProfile = () => {
    const [auth] = useAuth();
    const [profile, setProfile] = useState(null); // State to hold profile data

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

    if (!profile) return <div>Loading...</div>; // Show loading while fetching data

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-gray-100 p-8 mt-10">
                {/* Outer Container */}
                <div className="mx-auto text-center">
                    {/* Heading Section */}
                    <section className="my-12">
                        <h1 className="text-4xl font-extrabold text-blue-400 mb-20">My Profile</h1>
                        <p className="text-lg min-text-sm text-gray-300 leading-relaxed">
                            Welcome to your profile, <span className="text-blue-500">TradeSmart User</span>. Here, you can view and edit your personal information.
                        </p>
                    </section>

                    {/* Profile Information Section */}
                    <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <FaUser className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-3">Full Name</h3>
                            <p className="text-gray-300">{profile.fullName || 'N/A'}</p> {/* Display full name from profile data */}
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <FaEnvelope className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-3">Email Address</h3>
                            <p className="text-gray-300">{profile.email}</p> {/* Display email from profile data */}
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <FaPhone className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-3">Phone Number</h3>
                            <p className="text-gray-300">{profile.phone}</p> {/* Display phone number from profile data */}
                        </div>
                    </section>

                    {/* Wallet and Earnings Section */}
                    <section className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <FaWallet className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-3">Wallet Balance</h3>
                            <p className="text-gray-300">${profile.earningWallet.toFixed(2)}</p> {/* Display wallet balance */}
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <FaChartLine className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-3">Total Earnings</h3>
                            <p className="text-gray-300">${profile.totalEarnings?.toFixed(2) || 0}</p> {/* Display total earnings */}
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-3">Referrals</h3>
                            <p className="text-gray-300">{profile.referrals || 0} Users</p> {/* Display referral count */}
                        </div>
                    </section>

                    {/* Edit Profile Section */}
                    <section className="my-16">
                        <h2 className="text-3xl font-bold mb-4">Edit Profile</h2>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            <FaEdit className="inline-block mr-2" />
                            Edit Your Information
                        </button>
                    </section>

                    {/* Logout Section */}
                    <section className="my-16 bg-blue-700 py-10 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4 text-white">Need to Logout?</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            If you're finished, feel free to log out of your account.
                        </p>
                        <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Logout
                        </button>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default MyProfile;
