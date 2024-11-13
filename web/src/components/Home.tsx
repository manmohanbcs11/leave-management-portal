import React from 'react';
import '../css/home.css';

export const Home = () => {
  return (
    <div className='home-container'>
      <h2>Home</h2>
      <div className="row">
        <div className='col-md-4'>
          <div className="card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Annual Leave</h5>
                <p className="card-text">Availed: 10</p>
                <p className="card-text">Balance left: 10</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Sick Leave</h5>
              <p className="card-text">Availed: 5</p>
              <p className="card-text">Balance left: 7</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Casual Leave</h5>
              <p className="card-text">Availed: 3</p>
              <p className="card-text">Balance left: 5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Parental Leave</h5>
              <p className="card-text">Availed: 0</p>
              <p className="card-text">Balance left: 90</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bereavement Leave</h5>
              <p className="card-text">Availed: 1</p>
              <p className="card-text">Balance left: 2</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Compassionate Leave</h5>
              <p className="card-text">Availed: 1</p>
              <p className="card-text">Balance left: 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
