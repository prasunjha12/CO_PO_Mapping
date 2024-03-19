// login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

import './Login.css';
import aiubLogo from './aiub-logo.jpg';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password);
    // Assuming successful login, navigate to the Users page
    navigate('/options');
  };
  
  return (
    <div className='centered-container'>
      <div className='login-box'>
        <div>
        <img src={aiubLogo} alt="AIUB Logo" />
          <h1>PSG COLLEGE OF TECHNOLOGY</h1>
        </div>
        <div className='heading2'>
          <h2>Welcome to Staff Zone!</h2>
        </div>
        <div className='loginbox'>
          <h5>Staff Login</h5>
          <form>
            <div className='input-container'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='input-container1'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button  className='loginbtn' type='button' onClick={handleLogin}>
              Login
            </button>
          </form>

          <h5>forgot password?</h5>
        </div>

      </div>
    </div>
  );
};

export default Login;
