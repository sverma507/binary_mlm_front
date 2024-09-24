import React, { useState } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCodeBranch, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';
import axios from 'axios';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null); // To track the 'left' or 'right' selection
    const [formError, setFormError] = useState(''); // Error handling
    const [successMessage, setSuccessMessage] = useState('');
    const [referredBy, setReferredCode] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handlePositionSelect = (position) => {
        setSelectedPosition(position); // Set the selected position
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            referredBy: referredBy, // null if no referral code
            preferredSide: selectedPosition, // 'left' or 'right' side
        };

        try {
            // API call to backend for signup using axios
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, formData);
            
            if (response.status === 200) {
                setSuccessMessage('User registered successfully');
                alert(response.data.message);
            } else {
                setFormError(response.data.message || 'Signup failed');
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setFormError(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <Layout>
            <div className='signUp-container'>
                <div className="signUp-card">
                    <h2>SignUp</h2>
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
                                    className={`position-box ${selectedPosition === 'left' ? 'selected' : ''}`} 
                                    onClick={() => handlePositionSelect('left')}
                                >
                                    Left
                                </div>
                                <div 
                                    className={`position-box ${selectedPosition === 'right' ? 'selected' : ''}`} 
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
            </div>
        </Layout>
    );
};

export default SignUp;
