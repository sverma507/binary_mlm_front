import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [auth, setAuth] = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);  // New loading state
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        setLoading(true);  // Set loading to true when the form is submitted

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
                setSuccessMessage(response.data.message);  // Show success message
                setTimeout(() => {
                    navigate('/');  // Redirect to home after successful login
                }, 2000);
            } else {
                setError(response.data.message);  // Show error message
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');  // Handle error
        } finally {
            setLoading(false);  // Stop loading when the response is received
        }
    };

    return (
        <Layout>
            <div className='login-container'>
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
                                disabled={loading}  // Disable input when loading
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
                                disabled={loading}  // Disable input when loading
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <p>
                            <input type="checkbox" disabled={loading} /> Remember Me <a className='ml-8' href="#">Forget Password</a>
                        </p>

                        <input 
                            id="btn" 
                            className={`bg-gray-500 text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                            type="submit" 
                            value={loading ? "Loading..." : "Login"} 
                            disabled={loading}  // Disable button when loading
                        />

                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Display success message */}

                        <p>Don't have an account? <a className='ml-8 text-yellow-500' href="/signup">Register</a></p>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
