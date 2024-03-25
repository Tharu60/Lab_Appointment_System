import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <h4 className="navbar-brand" to="/">
          ABC Laboratory
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="btn btn-outline-light" to=""><i className='bi bi-speedometer2 '></i> Dashbord</Link>
        <Link className="btn btn-outline-light" to="/appointment/newAppointment"><i className='bi bi-calendar2-date'></i>  Make Appointment</Link>
        <Link className="btn btn-outline-light" to="/test"><i className='bi bi-thermometer-low'></i> Tests</Link>
        <Link className="btn btn-outline-light" to="/"><i className='bi bi-box-arrow-right'></i> Logout</Link>
      </div>
    </nav>
  </div>
  )
}

export default navbar