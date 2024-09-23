import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faShieldAlt, faKey,  faPhone, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {  
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
      <div className='signup-container'>
        <div className="signup-card">
            <h2>SignUp</h2>
            <form action="">
                <div className="form-group">
                    <input type="email" required />
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="form-group">
                    <input type="phone" required />
                    <label>Mobile</label>
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
                    <label>OTP</label>
                    <FontAwesomeIcon icon={faKey} />
                </div>

                <p>
                    <input type="checkbox" /> Remember Me <a href="#">Forget Password</a>
                </p>

                <input id="btn" type="submit" value="Login" />
                <p>Don't have an account? <a href="#">Register</a></p>
            </form>
        </div>
      </div>
    );
};

export default SignUp;
