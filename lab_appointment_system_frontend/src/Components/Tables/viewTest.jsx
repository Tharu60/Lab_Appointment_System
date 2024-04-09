import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewTest = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    loadTest();
  }, []);

  const loadTest = async () => {
    const result = await axios.get("http://localhost:8080/test");
    setTest(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Test Name</th>
            <th scope="col">Discription</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              test.map((test, index) => (
                <tr>
                  <th scope='row' key={index}>{index+1}</th>
                  <td>{test.name}</td>
                  <td>{test.description}</td>
                  <td>{test.price}</td>
                  <td><Link class="btn btn-outline-primary m-1" to="/patient/updatePatient" >Update</Link>
                    <Link class="btn btn-outline-primary" >Delete</Link></td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewTest

