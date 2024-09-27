import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCodeBranch, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import axios from 'axios';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [formError, setFormError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [referredBy, setReferredCode] = useState('');
    const [walletDetected, setWalletDetected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null); // For storing wallet address
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);

    // Password visibility toggle
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    // Position select handler
    const handlePositionSelect = (position) => {
        setSelectedPosition(position);
    };

    // Detect wallet provider on component mount and fetch wallet address
    useEffect(() => {
        const checkWalletAndNetwork = async () => {
            if (window.ethereum) {
                setWalletDetected(true);
                try {
                    // Request wallet connection
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setWalletAddress(accounts[0]); // Set wallet address

                    // Check if the selected network is Binance Smart Chain (BNB) - Chain ID for BSC is 0x38 (56 in decimal)
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                    if (chainId !== '0x38') {
                        showPopup('Please switch to Binance Smart Chain (BSC) network.', 'error');
                    }
                } catch (err) {
                    if (err.code === 4001) {
                        showPopup('Connection request was rejected. Please connect your wallet.', 'error');
                    } else {
                        showPopup('Error connecting to wallet. Please try again.', 'error');
                    }
                }
            } else {
                setWalletDetected(false); // No wallet detected
            }
        };

        checkWalletAndNetwork();

        // Set up a listener to handle network changes
        window.ethereum?.on('chainChanged', () => {
            window.location.reload();
        });

        // Set up a listener to handle account changes (i.e., when the user switches accounts)
        window.ethereum?.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
            } else {
                setWalletAddress(null); // Wallet disconnected
                showPopup('Wallet disconnected. Please reconnect.', 'error');
            }
        });
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!walletDetected) {
            showPopup('No wallet detected. Please install MetaMask or Trust Wallet.', 'error');
            return;
        }

        if (!walletAddress) {
            showPopup('Wallet address is required.', 'error');
            return;
        }

        const formData = {
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            referredBy: referredBy,
            preferredSide: selectedPosition,
            walletAddress: walletAddress, // Send wallet address to backend
        };

        try {
            const response = await axios.post(${process.env.REACT_APP_API_URL}/auth/signup, formData);

            if (response.status === 200) {
                showPopup('User registered successfully', 'success');
                setSuccessMessage(response.data.message);
            } else {
                showPopup(response.data.message || 'Signup failed', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showPopup(error.response?.data?.message || 'Something went wrong', 'error');
        }
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
            <div className='signUp-container'>
                <div className="signUp-card">
                    <h2>SignUp</h2>

                    {/* Wallet Provider Check */}
                    {!walletDetected && (
                        <p style={{ color: 'red' }}>No wallet detected. Please install MetaMask or Trust Wallet.</p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="email" name="email" required />
                            <label>Email</label>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>

                        <div className="form-group">
                            <input type="phone" name="phone" required />
                            <label>Phone</label>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>

                        <div className="form-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                            />
                            <label>Password</label>
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <div className="form-group">
                            <input type="text" name="referralCode" onChange={(e) => { setReferredCode(e.target.value) }} />
                            <label>Referral Code (Optional)</label>
                            <FontAwesomeIcon icon={faCodeBranch} />
                        </div>

                        <h2 className='choose-position'>Select Position</h2>

                        <div className="position-selector">
                            <div className="position-options">
                                <div
                                    className={position-box ${selectedPosition === 'left' ? 'selected' : ''}}
                                    onClick={() => handlePositionSelect('left')}
                                >
                                    Left
                                </div>
                                <div
                                    className={position-box ${selectedPosition === 'right' ? 'selected' : ''}}
                                    onClick={() => handlePositionSelect('right')}
                                >
                                    Right
                                </div>
                            </div>
                        </div>

                        <p className='mt-10'>
                            <input type="checkbox" /> Remember Me <a className='ml-10' href="#">Forget Password</a>
                        </p>

                        <input id="btn" className='bg bg-gray-500 text-white' type="submit" value="Proceed" />

                        {formError && <p style={{ color: 'red' }}>{formError}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                        <p>Already have an account? <a className='ml-8 text-yellow-500' href="/login">Login</a></p>
                    </form>
                </div>

                {/* Popup Modal */}
                {popupVisible && (
                    <div className={popup ${popupVisible ? 'show' : ''}}>
                        <p>{popupMessage}</p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default SignUp;

