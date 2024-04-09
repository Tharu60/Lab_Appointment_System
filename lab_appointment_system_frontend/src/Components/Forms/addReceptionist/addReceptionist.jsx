import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style/style.css"

const AddReceptionist = () => {
  
  let navigate = useNavigate();

  const [receptionist, setReceptionist] = useState({
    name: "",
    email: "",
    password: "",
    m_number: "",
  });

  const { name, email, password, m_number } = receptionist;

  const onInputChange = (e) => {
    setReceptionist({ ...receptionist, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/receptionist/addReceptionist", receptionist);
    navigate("/receptionist");
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Receptionist</h2>
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
            Add Receptionist
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

export default AddReceptionist