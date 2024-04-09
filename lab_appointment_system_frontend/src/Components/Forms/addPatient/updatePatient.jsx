import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePatient = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    password: "",
    m_number: "",
    address_l1: "",
    address_l2: "",
    address_l3: "",
    gender: "",
    image: ""
  });

  const { name, email, password, m_number, address_l1, address_l2, address_l3, image } = patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPatient();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/patients/${id}`, patient);
    navigate("/patient");
  };

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8080/patients/${id}`, patient);
    setPatient(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Patient</h2>
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

            <div className="mb-3">
              <label htmlFor="Address" className="form-lable">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="House/Apartment/Unit"
                name="address_l1"
                value={address_l1}
                onChange={(e) => onInputChange(e)}
              />
              <input
                type={"text"}
                className="form-control"
                placeholder="Street"
                name="address_l2"
                value={address_l2}
                onChange={(e) => onInputChange(e)}
              />
              <input
                type={"text"}
                className="form-control"
                placeholder="City"
                name="address_l3"
                value={address_l3}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Gender" className="form-lable">
                Gender
              </label>
              <div className='form-check ml-10 form-check-inline '>
                <div id='ginput' className='form-check form-check-inline'>
                  <input type='radio' className='form-check-input me-4' name='gender' value='male' style={{ borderColor: '#4955A1' }} onChange={(e) => onInputChange(e)} />
                  <label className='me-4'>Male</label>
                </div>
                <div id='ginput' className='form-check form-check-inline'>
                  <input type='radio' className='form-check-input me-4' name='gender' value='female' style={{ borderColor: '#4955A1' }} onChange={(e) => onInputChange(e)} />
                  <label className='me-4'>Female</label>
                </div>
              </div>
            </div>

            <div>
              <label className="form-label" htmlFor="customFile">Add Profile Photo</label>
              <input type="file" className="form-control" id="customFile" value={image} onChange={(e) => onInputChange(e)} />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/adminDashbord">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePatient;
