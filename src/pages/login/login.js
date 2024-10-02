import React, { useState, useEffect } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [auth, setAuth] = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [walletDetected, setWalletDetected] = useState(false);
    const [isBSC, setIsBSC] = useState(false); // Check if on Binance Smart Chain
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const checkWalletAndNetwork = async () => {
            if (window.ethereum) {
                setWalletDetected(true);
                try {
                    // Check for the network (Binance Smart Chain)
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                    if (chainId === '0x38') {
                        setIsBSC(true); // User is on Binance Smart Chain
                    } else {
                        setIsBSC(false); // Not on the correct network
                    }
                } catch (error) {
                    console.error('Error detecting network:', error);
                }
            } else {
                setWalletDetected(false);
            }
        };

        checkWalletAndNetwork();

        // Set up listeners for network changes
        window.ethereum?.on('chainChanged', (chainId) => {
            if (chainId === '0x38') {
                setIsBSC(true);
                toast.success('Switched to Binance Smart Chain (BSC).');
            } else {
                setIsBSC(false);
                toast.error('Please switch to Binance Smart Chain (BSC) network.');
            }
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        setLoading(true);

        if (!walletDetected) {
            setError('No wallet detected. Please use a crypto wallet browser like MetaMask or Trust Wallet.');
            toast.error('No wallet detected.');
            setLoading(false);
            return;
        }

        if (!isBSC) {
            setError('Please switch to Binance Smart Chain (BSC) network.');
            toast.error('Please switch to Binance Smart Chain (BSC) network.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, formData);
            if (response.status === 200 && response.data.success) {
                setAuth({
                    user: response.data.user,
                    token: response.data.token,
                });
                localStorage.setItem('auth', JSON.stringify({
                    user: response.data.user,
                    token: response.data.token,
                }));
                setSuccessMessage(response.data.message);
                toast.success("Login successfully");
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError(response.data.message);
                toast.error(response.data.message);
            }
        } catch (err) {
            toast.error(err.response?.data?.message || 'An error occurred. Please try again.');
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className='login-container'>
                <ToastContainer/>
                <div className="login-card">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="Email" 
                                required 
                                disabled={loading} 
                            />
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>

                        <div className="form-group">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                value={formData.password} 
                                onChange={handleInputChange} 
                                placeholder="Password" 
                                required 
                                disabled={loading} 
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <input 
                            id="btn" 
                            className={`bg-gray-500 text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                            type="submit" 
                            value={loading ? "Loading..." : "Login"} 
                            disabled={loading} 
                        />

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                        <p>Don't have an account? <a className='ml-8 text-yellow-500' href="/signup">Register</a></p>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
