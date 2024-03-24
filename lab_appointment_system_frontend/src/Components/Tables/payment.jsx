import React from 'react'

const payment = () => {
  return (
    <div className="container">
      <h2>Payments</h2>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Test Name</th>
              <th scope="col">Appoiment</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default payment