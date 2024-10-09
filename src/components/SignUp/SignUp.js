import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCodeBranch, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [formError, setFormError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [referredBy, setReferredCode] = useState('');
    const [walletDetected, setWalletDetected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [loading, setLoading] = useState(false); // Track loading state

    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation(); // Get location to parse query params

    // Password visibility toggle
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    // Position select handler
    const handlePositionSelect = (position) => {
        setSelectedPosition(position);
    };

    // Detect wallet provider and fetch wallet address and network
    useEffect(() => {
        const checkWalletAndNetwork = async () => {
            if (window.ethereum) {
                setWalletDetected(true);
                try {
                    // Request wallet connection
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setWalletAddress(accounts[0]);

                    // Check if the selected network is Binance Smart Chain (BSC)
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                    if (chainId !== '0x38') {
                        showPopup('Please switch to Binance Smart Chain (BSC) network.', 'error');
                    } else {
                        showPopup('Connected to Binance Smart Chain (BSC).', 'success');
                    }
                } catch (err) {
                    if (err.code === 4001) {
                        showPopup('Connection request was rejected. Please connect your wallet.', 'error');
                    } else {
                        showPopup('Error connecting to wallet. Please try again.', 'error');
                    }
                }
            } else {
                setWalletDetected(false);
            }
        };

        checkWalletAndNetwork();

        // Set up listeners for account or network changes
        window.ethereum?.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                showPopup('Wallet address changed.', 'success');
            } else {
                setWalletAddress(null);
                showPopup('Wallet disconnected. Please reconnect.', 'error');
            }
        });

        window.ethereum?.on('chainChanged', (chainId) => {
            if (chainId === '0x38') {
                showPopup('Switched to Binance Smart Chain (BSC) network.', 'success');
            } else {
                showPopup('Please switch to Binance Smart Chain (BSC) network.', 'error');
            }
        });
    }, []);

    // Fetch referral code from the URL query parameters
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const referralCodeFromUrl = queryParams.get('referral');

        if (referralCodeFromUrl) {
            setReferredCode(referralCodeFromUrl); // Set the referral code if it's in the URL
        }
    }, [location.search]); // Only run when location.search changes

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        if (!walletDetected) {
            showPopup('No wallet detected. Please install MetaMask or Trust Wallet.', 'error');
            setLoading(false); // Stop loading
            return;
        }

        if (!walletAddress) {
            showPopup('Wallet address is required.', 'error');
            setLoading(false); // Stop loading
            return;
        }

        const formData = {
            referredBy: referredBy,
            preferredSide: selectedPosition,
            walletAddress: walletAddress,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, formData);

            if (response.status === 201) {
                showPopup('User registered successfully', 'success');
                // console.log("response.data.message===>",response.data.message)
                setSuccessMessage(response.data.message);

                navigate('/login');
            } else {
                showPopup(response.data.message || 'Signup failed', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showPopup(error.response?.data?.message || 'Something went wrong', 'error');
        }

        setLoading(false); // Stop loading when done
    };

    // Function to show the popup message
    const showPopup = (message, type) => {
        setPopupMessage(message);
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000); // Auto-hide after 3 seconds
    };

    return (
        <Layout>
            <div className="signUp-container">
                <div className="signUp-card">
                    <h2>Sign Up</h2>

                    {/* Wallet Provider Check */}
                    {!walletDetected && (
                        <p style={{ color: 'red' }}>No wallet detected. Please install MetaMask or Trust Wallet.</p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="referralCode"
                                value={referredBy}
                                onChange={(e) => setReferredCode(e.target.value)}
                            />
                            <label>Referral Code </label>
                            <FontAwesomeIcon icon={faCodeBranch} />
                        </div>

                        <h2 className="choose-position">Select Position</h2>

                        <div className="position-selector">
                            <div className="position-options">
                                <div
                                    className={`position-box text-white ${selectedPosition === 'left' ? 'selected' : ''}`}
                                    onClick={() => handlePositionSelect('left')}
                                >
                                    Left
                                </div>
                                <div
                                    className={`position-box text-white ${selectedPosition === 'right' ? 'selected' : ''}`}
                                    onClick={() => handlePositionSelect('right')}
                                >
                                    Right
                                </div>
                            </div>
                        </div>

                        <p className="mt-10">
                            {/* <input type="checkbox" /> Remember Me{' '} */}
                            <a className="ml-10" href="#">
                                Forget Password
                            </a>
                        </p>

                        <input
                            id="btn"
                            className={`bg bg-gray-500 text-white ${loading ? 'cursor-not-allowed' : ''}`}
                            type="submit"
                            value={loading ? 'Loading...' : 'Proceed'} // Show loading text
                            disabled={loading} // Disable button while loading
                        />

                        {formError && <p style={{ color: 'red' }}>{formError}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                        <p>
                            Already have an account?{' '}
                            <a className="ml-8 text-yellow-500" href="/login">
                                Login
                            </a>
                        </p>
                    </form>
                </div>

                {/* Popup Modal */}
                {popupVisible && (
                    <div className={`popup ${popupVisible ? 'show' : ''}`}>
                        <p>{popupMessage}</p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default SignUp;