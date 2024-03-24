import React from 'react'

const payment = () => {
  return (

    <div className="container">
      <div class="card mt-4">
        <div class="card-header text-center mt-2 mb-2">
          <h4>Appoiment Details</h4>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <h5>Test</h5>
            <label>Test name</label>
            <br />
            <br />
            <h5>Date and Time</h5>
            <label> Test Date and time</label>
            <br />
            <br />
            <p className='text-danger'>Please report to the laboratory 10 minutes before the appoiment time</p>
          </blockquote>
        </div>
      </div>
      <div  className='row d-flex justify-content-end'>
            <div className='col-3 text-center mt-2 border border-success  mb-2 border-3 rounded'>
              <span  className='fs-4 fw-semibold'>Total Amount</span>
              <br/>
              <span className='fs-4 fw-semibold'>Rs. 395.00</span>
            </div>
          </div>
          <div className='text-center mt-5'>
          <button type="submit" className="btn btn-primary">
            Pay Now
          </button>
          <button className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </button>
          </div>
    </div>
  )
}

export default payment