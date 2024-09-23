import React, { useState } from 'react';
import './signUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faShieldAlt, faKey,faCodeBranch,  faPhone, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';

const SignUp = () => {  
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <Layout>
        <div className='signUp-container'>
        <div className="signUp-card">
            <h2>SignUp</h2>
            <form action="">
                <div className="form-group">
                    <input type="email" required />
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="form-group">
                    <input type="phone" required />
                    <label>Phone</label>
                    <FontAwesomeIcon icon={faPhone} />
                </div>

                <div className="form-group">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        required 
                    />
                    <label>Password</label>
                    {/* <FontAwesomeIcon icon={faLock} /> */}
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                </div>
                <div className="form-group">
                    <input type="text" required />
                    <label>Referral Code (Optional)</label>
                    <FontAwesomeIcon icon={faCodeBranch} />
                </div>

                <p className='mt-10'>
                    <input type="checkbox" /> Remember Me <a className='ml-10' href="#">Forget Password</a>
                </p>

                <input id="btn" className='bg bg-gray-500 text-white' type="submit" value="Proceed" />
                <p>Already have an account? <a className='ml-8 text-yellow-500' href="/signup">Login</a></p>
            </form>
        </div>
      </div>
      </Layout>
    );
};

export default SignUp;
