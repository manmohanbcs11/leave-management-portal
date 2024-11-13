import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className='home-container my-3'>
      <h2>Leave balance sheet</h2>
      <div className="row mb-4">
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Annual Leave</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 26</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Sick Leave</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 10</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Casual Leave</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 14</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Parental Leave</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 90</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Bereavement Leave</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 2</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Compassionate Leave</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className='col-md-4'>
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="card-title">Work From Home</h4>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
