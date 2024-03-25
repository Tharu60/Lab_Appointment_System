import React from 'react'
import { Link } from 'react-router-dom'

const receptionist = () => {
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
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
            <tr>
              <th>
                01
              </th>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td><Link class="btn btn-outline-primary m-1" to="/receptionist/updateReceptionist" >Update</Link>
                <Link class="btn btn-outline-primary" >Delete</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default receptionist