import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const result = await axios.get("http://localhost:8080/appointment");
    setAppointments(result.data);
  }
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
          {
              appointments.map((appointments, index) => (
                <tr>
                  <th scope='row' key={index}>{index+1}</th>
                  <td>{appointments.testName}</td>
                  <td>{appointments.dateTime}</td>
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

export default Table