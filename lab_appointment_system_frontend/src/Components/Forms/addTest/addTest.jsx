import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddTest = () => {

  let navigate = useNavigate();

  const [test, setTest] = useState({
    name: "",
    description: "",
    price: "",
  });

  const { name, description, price } = test;

  const onInputChange = (e) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/test/addTest", test);
    navigate("/test");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Test</h2>
          <form onSubmit={(e) => onSubmit(e)}>

            <div className="mb-3">
              <label htmlFor="Name" className="form-lable">
                Test Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Test Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-lable">
              Discription
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Test Discription"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Price" className="form-lable">
                Price (LKR)
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Test Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
          </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-primary">
                Add Test
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

export default AddTest