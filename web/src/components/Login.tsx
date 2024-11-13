import React, { FormEvent, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/login.css';

interface LoginProps {
  showAlert: (type: string, message: string) => void;
}

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Leave buddy - Login";
  });

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'email': email, 'password': password })
    });

    if(response.ok) {
      const responseJson = await response.json();
      localStorage.setItem('token', responseJson.data.authToken);
      navigate('/');
      props.showAlert('success', 'Logged in successfully!');
    } else {
      const errorData = await response.json();
      props.showAlert('danger', errorData.message);
    }
  }

  return (
    <div>
    <div className="login-container">
      <h2>Please login first</h2>
      <form className="login-form my-4" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <NavLink to="/signup" className="signup-link">Don't have an account? Sign up here</NavLink>
    </div>
  </div>
  )
}