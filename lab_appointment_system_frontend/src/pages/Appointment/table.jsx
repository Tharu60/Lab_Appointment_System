import React from 'react'
import { Link } from 'react-router-dom'

const table = () => {
  return (
    <div className="container">
      <h2>Appointments</h2>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Test</th>
              <th scope="col">Date & Time</th>
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
              <td><Link class="btn btn-outline-primary m-1" to="/appointment/rescheduleAppointment" >Rscheduled</Link>
                <Link class="btn btn-outline-primary" >Delete</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default table