import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [adminUsers, setAdminUsers] = useState([])

  useEffect(() =>{
    loadAdminUsers("test")
  },[])

  const loadAdminUsers = async () => {
    const result = await axios.get("http://localhost:8080/admins");
    setAdminUsers(result.data);
  }
  return (
    <div><div className="container">
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
              adminUsers.map((adminUsers, index) => (
                <tr>
                  <th scope='row' key={index}>{index+1}</th>
                  <td>{adminUsers.name}</td>
                  <td>{adminUsers.email}</td>
                  <td>{adminUsers.m_number}</td>
                  <td>{adminUsers.address_l1}</td>
                  <td>{adminUsers.address_l2}</td>
                  <td>{adminUsers.address_l3}</td>
                  <td>{adminUsers.gender}</td>
                  <td><Link class="btn btn-outline-primary m-1" to="/adminUpdate" >Update</Link>
                <Link class="btn btn-outline-primary" >Delete</Link></td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  </div></div>
  )
}

export default Admin