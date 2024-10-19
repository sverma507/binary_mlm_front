import React, { useState, useEffect } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [auth, setAuth] = useAuth();
    const [walletDetected, setWalletDetected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isBSC, setIsBSC] = useState(false); // Check if on Binance Smart Chain
    const [isDAppBrowser, setIsDAppBrowser] = useState(true); // Check for DApp browser
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };


    
    // useEffect(() => {
    //     const checkWalletAndNetwork = async () => {
    //         if (window.ethereum) {
    //             setWalletDetected(true);
    //             try {
    //                 // Request wallet connection
    //                 const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //                 setWalletAddress(accounts[0]);

    //                 // Check for the network (Binance Smart Chain)
    //                 const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    //                 if (chainId === '0x38') {
    //                     setIsBSC(true); // User is on Binance Smart Chain
    //                 } else {
    //                     setIsBSC(false); // Not on the correct network
    //                 }
    //             } catch (error) {
    //                 console.error('Error detecting wallet or network:', error);
    //             }
    //         } else {
    //             setWalletDetected(false);
    //             setIsDAppBrowser(false); // No wallet detected, likely a non-DApp browser
    //         }
    //     };

    //     checkWalletAndNetwork();

    //     // Set up listeners for network or account changes
    //     window.ethereum?.on('chainChanged', (chainId) => {
    //         if (chainId === '0x38') {
    //             setIsBSC(true);
    //             toast('Switched to Binance Smart Chain (BSC).', {
    //                 duration: 4000,
    //                 position: 'top-center',
    //                 style: { background: 'gray', color: 'white' },
    //                 icon: '😀',
    //             });
    //         } else {
    //             setIsBSC(false);
    //             toast("Please switch to Binance Smart Chain (BSC) network.", {
    //                 duration: 4000,
    //                 position: 'top-center',
    //                 style: { background: 'red', color: 'white' },
    //                 icon: '🤔',
    //             });
    //         }
    //     });

    //     window.ethereum?.on('accountsChanged', (accounts) => {
    //         if (accounts.length > 0) {
    //             setWalletAddress(accounts[0]);
    //         } else {
    //             setWalletAddress(null);
    //             toast("Wallet disconnected. Please reconnect.", {
    //                 duration: 4000,
    //                 position: 'top-center',
    //                 style: { background: 'red', color: 'white' },
    //                 icon: '🔌',
    //             });
    //         }
    //     });
    // }, []);


    useEffect(() => {
        const checkWalletAndNetwork = async () => {
            if (window.ethereum) {
                setWalletDetected(true);
                try {
                    // Request wallet connection
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setWalletAddress(accounts[0]);
    
                    // Check for the network (Binance Smart Chain)
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                    if (chainId === '0x38') {
                        setIsBSC(true); // User is on Binance Smart Chain
                    } else {
                        setIsBSC(false); // Not on the correct network
                        toast("Please switch to Binance Smart Chain (BSC) network.", {
                            duration: 4000,
                            position: 'top-center',
                            style: { background: 'red', color: 'white' },
                            icon: '🤔',
                        });
                    }
                } catch (error) {
                    console.error('Error detecting wallet or network:', error);
                }
            } else {
                setWalletDetected(false);
                setIsDAppBrowser(false); // No wallet detected, likely a non-DApp browser
            }
        };
    
        checkWalletAndNetwork();
    
        // Set up listeners for network or account changes
        window.ethereum?.on('chainChanged', (chainId) => {
            if (chainId === '0x38') {
                setIsBSC(true);
                toast('Switched to Binance Smart Chain (BSC).', {
                    duration: 4000,
                    position: 'top-center',
                    style: { background: 'gray', color: 'white' },
                    icon: '😀',
                });
            } else {
                setIsBSC(false);
                toast("Please switch to Binance Smart Chain (BSC) network.", {
                    duration: 4000,
                    position: 'top-center',
                    style: { background: 'red', color: 'white' },
                    icon: '🤔',
                });
            }
        });
    
        window.ethereum?.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
            } else {
                setWalletAddress(null);
                toast("Wallet disconnected. Please reconnect.", {
                    duration: 4000,
                    position: 'top-center',
                    style: { background: 'red', color: 'white' },
                    icon: '🔌',
                });
            }
        });
    }, []);
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!walletDetected) {
            setError('No wallet detected. Please install MetaMask or Trust Wallet.');
            toast("No wallet detected.", {
                duration: 4000,
                position: 'top-center',
                style: { background: 'red', color: 'white' },
                icon: '🚫',
            });
            setLoading(false);
            return;
        }

        if (!walletAddress) {
            setError('Please connect your wallet.');
            setLoading(false);
            return;
        }

        if (!isBSC) {
            setError('Please switch to Binance Smart Chain (BSC) network.');
            toast("Please switch to Binance Smart Chain (BSC) network.", {
                duration: 4000,
                position: 'top-center',
                style: { background: 'red', color: 'white' },
                icon: '🤔',
            });
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { walletAddress });
            if (response.status === 200 && response.data.success) {
                setAuth({
                    user: response.data.user,
                    token: response.data.token,
                });
                localStorage.setItem('auth', JSON.stringify({
                    user: response.data.user,
                    token: response.data.token,
                }));
                toast("Login successful!", {
                    duration: 4000,
                    position: 'top-center',
                    style: { background: 'white', color: 'black' },
                    icon: '👏',
                });
                navigate('/user/profile');
            } else {
                setError(response.data.message);
                toast(response.data.message, {
                    duration: 4000,
                    position: 'top-center',
                    style: { background: 'white', color: 'black' },
                    icon: '🤔',
                });
            }
        } catch (err) {
            toast(err.response?.data?.message || 'An error occurred. Please try again.', {
                duration: 4000,
                position: 'top-center',
                style: { background: 'red', color: 'white' },
                icon: '😢',
            });
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className='login-container'>
                <div className="login-card">
                    <h2>Login</h2>
                    {!isDAppBrowser && (
                        <p style={{ color: 'orange' }}>
                            You are using a regular browser. Please install MetaMask or use a DApp browser like Trust Wallet for full functionality.
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={walletAddress || ''}
                                placeholder="Wallet Address"
                                disabled
                            />
                            <FontAwesomeIcon icon={faLock} />
                        </div>

                        <input
                            id="btn"
                            className={`bg-gray-500 text-white ${loading || !walletDetected ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            value={loading ? "Loading..." : "Login"}
                            disabled={loading || !walletDetected}
                        />

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <p>Don't have an account? <a className='ml-8 text-yellow-500' href="/signup">Register</a></p>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
