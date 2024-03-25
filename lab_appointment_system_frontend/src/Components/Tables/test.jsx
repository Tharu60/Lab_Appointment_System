import React from 'react'
import { Link } from 'react-router-dom'

const test = () => {
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
            <tr>
            <th scope='row'>1</th>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td><Link class="btn btn-outline-primary m-1" to="/test/updateTest" >Update</Link>
                <Link class="btn btn-outline-primary" >Delete</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default test