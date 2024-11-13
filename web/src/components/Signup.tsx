import React, { FormEvent, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/signup.css';


interface SignupProps {
  showAlert: (type: string, message: string) => void;
}

export const Signup = (props: SignupProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Leave buddy - Signup";
  });

  const [body, setBody] = useState({
    empId: '',
    name: '',
    email: '',
    password: '',
    cpassword: '',
    jobTitle: '',
    department: '',
  });

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { empId, name, email, password, cpassword, jobTitle, department } = body;

    if (password !== cpassword) {
      alert('Passwords are not matching!');
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ empId, name, email, password, jobTitle, department })
    });
    
    if (response.ok) {
      const responseJson = await response.json();
      localStorage.setItem('token', responseJson.data.authToken);
      navigate('/');
      alert('Registered successfully!');
    } else {
      const errorData = await response.json();
      alert(errorData.message);
    }
  }

  return (
    <div className='signup-container'>
      <h3 className='my-4'>Please signup to use the application:</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="empId" className="form-label">Employee Id</label>
          <input type="text" className="form-control" id="empId" name="empId" value={body.empId} onChange={(e) => setBody({ ...body, empId: e.target.value })} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={body.name} onChange={(e) => setBody({ ...body, name: e.target.value })} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={body.email} onChange={(e) => setBody({ ...body, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={body.password} onChange={(e) => setBody({ ...body, password: e.target.value })} minLength={6} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' value={body.cpassword} onChange={(e) => setBody({ ...body, cpassword: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label">Designation</label>
          <input type="jobTitle" className="form-control" id="jobTitle" name='jobTitle' value={body.jobTitle} onChange={(e) => setBody({ ...body, jobTitle: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input type="department" className="form-control" id="department" name='department' value={body.department} onChange={(e) => setBody({ ...body, department: e.target.value })} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <NavLink to="/login" className="login-link">Already have an account? Login here</NavLink>
    </div>
  )
}