import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Patient = () => {
  const [patientUsers, setPatientUsers] = useState([]);

  useEffect(() => {
    loadPatientUsers();
  }, []);

  const loadPatientUsers = async () => {
    const result = await axios.get("http://localhost:8080/patient");
    setPatientUsers(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              patientUsers.map((patientUser, index) => (
                <tr>
                  <th scope='row' key={index}>{index+1}</th>
                  <td>{patientUser.name}</td>
                  <td>{patientUser.email}</td>
                  <td>{patientUser.m_number}</td>
                  <td>{patientUser.address_l1}</td>
                  <td>{patientUser.address_l2}</td>
                  <td>{patientUser.address_l3}</td>
                  <td>{patientUser.gender}</td>
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

export default Patient