import React from 'react'
import { Link } from 'react-router-dom'

const adminDashbord = () => {
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
              <p class="card-text">You can Add Patient, View Patient, Remove And Update Patient</p>
              <div>
                <Link  to="/patient/addPatient" class="btn btn-primary m-2"><i class="bi bi-person-add"></i> Add Patient</Link>
                <Link  to="/patient" class="btn btn-success m-2"><i class="bi bi-person-check"></i> View All Patient</Link>
                <br />
                <Link  to="/patient" class="btn btn-info m-2"><i class="bi bi-person-gear"></i> Update Patient</Link>
                <Link  to="/patient" class="btn btn-outline-danger m-2"><i class="bi bi-person-x"></i> Remove Patient</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row m-3">
        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Technician</h4>
              <p class="card-text">You can Add Technician, View Technician, Remove And Update Technician</p>
              <div>
                <Link  to="/technician/addTechnician" class="btn btn-primary m-2"><i class="bi bi-person-add"></i> Add Technician</Link>
                <Link  to="/technician" class="btn btn-success m-2"><i class="bi bi-person-check"></i> View All Technician</Link>
                <br />
                <Link  to="/technician" class="btn btn-info m-2"><i class="bi bi-person-gear"></i> Update Technician</Link>
                <Link  to="/technician" class="btn btn-outline-danger m-2"><i class="bi bi-person-x"></i> Remove Technician</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Receptionist</h4>
              <p class="card-text">You can Add Receptionist, View Receptionist, Remove And Update Receptionist</p>
              <div>
                <Link  to="/receptionist/addReceptionist" class="btn btn-primary m-2"><i class="bi bi-person-add"></i> Add Receptionist</Link>
                <Link  to="/receptionist" class="btn btn-success m-2"><i class="bi bi-person-check"></i> View All Receptionist</Link>
                <br />
                <Link  to="/receptionist" class="btn btn-info m-2"><i class="bi bi-person-gear"></i> Update Receptionist</Link>
                <Link  to="/receptionist" class="btn btn-outline-danger m-2"><i class="bi bi-person-x"></i> Remove Receptionist</Link>
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
              <p class="card-text">You can Add Test, View Test, Remove And Update Test</p>
              <div>
                <Link  to="/test/addTest" class="btn btn-primary m-2"><i class="bi bi-thermometer"></i> Add Test</Link>
                <Link  to="/test" class="btn btn-success m-2"><i class="bi bi-ui-checks-grid"></i> View All Test</Link>
                <br />
                <Link  to="/test" class="btn btn-info m-2"><i class="bi bi-box-arrow-in-up"></i> Update Test</Link>
                <Link  to="/test" class="btn btn-outline-danger m-2"><i class="bi bi-shield-x"></i> Remove Test</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Reports</h4>
              <p class="card-text">You can Add Reports, View Reports, Remove And Update Reports</p>
              <div>
                <Link  to="/report/addReport" class="btn btn-primary m-2"><i class="bi bi-file-ruled"></i> Add Reports</Link>
                <Link  to="/report" class="btn btn-success m-2"><i class="bi bi-file-text"></i> View All Reports</Link>
                <br />
                <Link  to="/report/updateReport" class="btn btn-info m-2"><i class="bi bi-database-up"></i> Update Reports</Link>
                <Link  to="/report" class="btn btn-outline-danger m-2"><i class="bi bi-file-earmark-x"></i> Remove Reports</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row m-3">
        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Admin</h4>
              <p class="card-text">You can Add Admin, View Admin, Remove And Update Admin</p>
              <div>
                <Link  to="/adminRegister" class="btn btn-primary m-2"><i class="bi bi-person-add"></i> Add Admin</Link>
                <Link  to="/admins" class="btn btn-success m-2"><i class="bi bi-person-check"></i> View All Admin</Link>
                <br />
                <Link  to="/adminUpdate" class="btn btn-info m-2"><i class="bi bi-person-gear"></i> Update Admin</Link>
                <Link  to="/admins" class="btn btn-outline-danger m-2"><i class="bi bi-person-x"></i> Remove Admin</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Payments</h4>
              <p class="card-text">You can Make Payments, View Payments, Refund Payments</p>
              <div>
                <Link  to="/payment" class="btn btn-primary m-2"><i class="bi bi-wallet2"></i> Make Payments</Link>
                <Link  to="/payment/paymentTable" class="btn btn-success m-2"><i class="bi bi-cash-coin"></i> View All Payments</Link>
                <br />
                <Link  to="/payment/paymentTable" class="btn btn-outline-danger m-2"><i class="bi bi-send-slash"></i> Refund Payments</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default adminDashbord