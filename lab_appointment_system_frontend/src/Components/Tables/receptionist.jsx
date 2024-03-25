import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Receptionist = () => {
  const [receptionistUsers, setReceptionistUsers] = useState([]);

  useEffect(() => {
    loadReceptionistUsers();
  }, []);

  const loadReceptionistUsers = async () => {
    const result = await axios.get("http://localhost:8080/receptionist");
    setReceptionistUsers(result.data);
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
              receptionistUsers.map((receptionistUsers, index) => (
                <tr>
                  <th scope='row' key={index}>{index+1}</th>
                  <td>{receptionistUsers.name}</td>
                  <td>{receptionistUsers.email}</td>
                  <td>{receptionistUsers.m_number}</td>
                  <td><Link class="btn btn-outline-primary m-1" to="/receptionist/updateReceptionist" >Update</Link>
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

export default Receptionist