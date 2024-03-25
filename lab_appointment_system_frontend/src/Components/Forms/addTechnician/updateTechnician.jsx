import React from 'react'

const updateTechnician = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Update Technician</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-lable">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Name"
              name="name"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="Email" className="form-lable">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter E-mail Address"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-lable">
              Password
            </label>
            <input
              type={"password"}
              className="form-control"
              placeholder="Enter Password"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Mobile Number" className="form-lable">
              Mobile Number
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Contact Number"
              name="mobileNumber"
            />
          </div>

          <div>
              <label class="form-label" for="customFile">Add Profile Photo</label>
              <input type="file" class="form-control" id="customFile" />
            </div>

          <div className='text-center'>
          <button type="submit" className="btn btn-primary">
            Update Technician
          </button>
          <button className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </button>
          </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default updateTechnician