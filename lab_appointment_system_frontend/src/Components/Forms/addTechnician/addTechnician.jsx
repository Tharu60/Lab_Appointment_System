import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddTechnician = () => {
  
  let navigate = useNavigate();

  const [technician, setTechnician] = useState({
    name: "",
    email: "",
    password: "",
    m_number: "",
  });

  const { name, email, password, m_number } = technician;

  const onInputChange = (e) => {
    setTechnician({ ...technician, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/technician/addTechnician", technician);
    navigate("/technician");
  };

  return (
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Technician</h2>
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-lable">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
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
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-lable">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
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
                name="m_number"
                value={m_number}
                onChange={(e) => onInputChange(e)}
              />
          </div>

          <div className='text-center'>
          <button type="submit" className="btn btn-primary">
            Add Technician
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

export default AddTechnician