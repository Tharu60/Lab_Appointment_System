import React from 'react'
import { Link } from 'react-router-dom'

const updateTest = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Update Test</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-lable">
              Test Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Test Name"
              name="name"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="Email" className="form-lable">
              Discription
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Discription aboute test"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-lable">
              Price (LKR)
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Price of test"
              name="email"
            />
          </div>

          <div className='text-center'>
          <button type="submit" className="btn btn-primary">
            Update Test
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/adminDashbord">
            Cancel
          </Link>
          </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default updateTest