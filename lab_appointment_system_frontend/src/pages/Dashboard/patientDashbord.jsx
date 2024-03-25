import React from 'react'
import { Link } from 'react-router-dom'

const patientDashbord = () => {
  return (
    <div>
      <div class="row m-3">
        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Appointments</h4>
              <p class="card-text">You can Meke Appointments, View Appointments, Cancel And Rscheduled Appointments</p>
              <div>
                <Link class="btn btn-primary m-2" to="/appointment/newAppointment"><i class="bi bi-calendar-week"></i> Meke Appointments</Link>
                <Link class="btn btn-success m-2" to="/appointment"><i class="bi bi-calendar-check"></i> View Appointments</Link>
                <br />
                <Link class="btn btn-info m-2" to="/appointment"><i class="bi bi-calendar-plus"></i> Rscheduled Appointments</Link>
                <Link class="btn btn-outline-danger m-2" to="/appointment"><i class="bi bi-calendar-x"></i> Cancel Appointments</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Patient</h4>
              <p class="card-text">You can Update Patient</p>
              <div>
                <br />
                <Link  to="/patient" class="btn btn-info m-2"><i class="bi bi-person-gear"></i> Update Patient</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row m-3">
        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Test</h4>
              <p class="card-text">You can View Test</p>
              <div>
                <Link  to="/test" class="btn btn-success m-2"><i class="bi bi-ui-checks-grid"></i> View All Test</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Reports</h4>
              <p class="card-text">You can View Reports</p>
              <div>
                <Link  to="/report" class="btn btn-success m-2"><i class="bi bi-file-text"></i> View All Reports</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row m-3">
        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Payments</h4>
              <p class="card-text">You can Make Payments and View Payments</p>
              <div>
                <Link  to="/payment" class="btn btn-primary m-2"><i class="bi bi-wallet2"></i> Make Payments</Link>
                <Link  to="/payment/paymentTable" class="btn btn-success m-2"><i class="bi bi-cash-coin"></i> View All Payments</Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default patientDashbord