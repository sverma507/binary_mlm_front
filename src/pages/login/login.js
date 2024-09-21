import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/layout/layout';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <Layout>
      <div className='login-container'>
        <div className="login-card">
            <h2>Login</h2>
            <form action="">
                <div className="form-group">
                    <input type="email" required />
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} />
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

                <p>
                    <input type="checkbox" /> Remember Me <a className='ml-8' href="#">Forget Password</a>
                </p>

                <input id="btn" className='bg bg-gray-500 text-white' type="submit" value="Login" />
                <p>Don't have an account? <a className='ml-8 text-yellow-500' href="/signup">Register</a></p>
            </form>
        </div>
      </div>
      </Layout>
    );
};

export default Login;
