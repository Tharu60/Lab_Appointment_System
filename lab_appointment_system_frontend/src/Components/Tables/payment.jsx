import React from 'react'
import { Link } from 'react-router-dom'

const payment = () => {
  return (
    <div className="container">
      <h2>Payments</h2>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th scope='row'>1</th>
              <td>Test</td>
              <td>Test</td>
              <td><Link class="btn btn-outline-primary m-1" to="" >Refund</Link>
                <Link class="btn btn-outline-primary" >Delete</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default payment