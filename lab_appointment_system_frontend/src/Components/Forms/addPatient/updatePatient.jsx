import React from 'react'

const updatePatient = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update New Patient</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="Name" className="form-lable">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
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
                placeholder="Enter Your E-mail Address"
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
                placeholder="Enter Your Password"
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
                placeholder="Enter Your Contact Number"
                name="mobileNumber"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Username" className="form-lable">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="House/Apartment/Unit"
                name="address1"
              />
              <input
                type={"text"}
                className="form-control"
                placeholder="Street"
                name="street"
              />
              <input
                type={"text"}
                className="form-control"
                placeholder="Ciry"
                name="city"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Gender" className="form-lable">
                Gender
              </label>
              <div className='form-check ml-10 form-check-inline ' >
                <div id='ginput' className='form-check form-check-inline'>
                  <input type='radio' className='form-check-input me-4' name='categoryType' value='Main' style={{ borderColor: '#4955A1' }} />
                  <label className='me-4'>Male</label>
                </div>
                <div id='ginput' className='form-check form-check-inline'>
                  <input type='radio' className='form-check-input me-4' name='categoryType' value='Sub' style={{ borderColor: '#4955A1' }} />
                  <label className='me-4'>Female</label>
                </div>
              </div>
            </div>

            <div>
              <label class="form-label" for="customFile">Add Profile Photo</label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default updatePatient