import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddAdmin = () => {

  let navigate = useNavigate()

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
    image: ""
  })

  const { name, email, password, image } = admin

  const onInputChange = (e) => {

    setAdmin({...admin,[e.target.name]:e.target.value})
  };

  const onSubmit =async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/adminRegister",admin)
    navigate("/admins")
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Admin</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
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

            <div>
              <label class="form-label" for="customFile">
                Add Profile Photo
              </label>
              <input type="file"
                class="form-control"
                id="customFile"
                value={image}
                onChange={(e) => onInputChange(e)} />
            </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-primary">
                Add Admin
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

export default AddAdmin