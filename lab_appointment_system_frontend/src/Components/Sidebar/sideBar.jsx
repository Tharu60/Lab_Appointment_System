import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown'
import './sidebar.css'

const sideBar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='bg-dark col-auto col-md-2 min-vh-100 justify-content-between flex-colum'>
          <div>
          <a className='text-decoration-none text-white d-non d-sm-inline d-flex align-itemcenter ms-3 mt-3'>
            <span className='ms-1 fs-4'>ABC Laboratory</span>
          </a>
          <hr className='text-secondary'/>
          <ul
            class="nav nav-pills flex-column"
          >
            <li class="nav-item text-white fs-4s my-2">
              <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-speedometer2'></i>
                <span className='ms-2 d-non d-sm-inline'>Dashbord</span>
                </a>
            </li>
            <li class="nav-item text-white fs-4s my-2">
              <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-table'></i>
                <span className='ms-2 d-non d-sm-inline'>Add Appointment</span>
                </a>
            </li>
            <li class="nav-item text-white fs-4s my-2">
              <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-ticket-detailed'></i>
                <span className='ms-2 d-non d-sm-inline'>Reports</span>
                </a>
            </li>
            <li class="nav-item text-white fs-4s my-2">
              <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-thermometer-low'></i>
                <span className='ms-2 d-non d-sm-inline'>Test</span>
                </a>
            </li>
          </ul>
          </div>
          <div class="dropdown open position-absolute bottom-0">
            <a
              class="text-decoration-non text-white dropdown-toggle p-3"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className='bi bi-person-circle'></i>
              <span className='ms-2 d-non d-sm-inline'>User</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Settings</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default sideBar