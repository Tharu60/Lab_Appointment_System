import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/login";
import AdminLogin from "./pages/Login/adminLogin";
import ReceptionistLogin from "./pages/Login/receptionistLogin";
import TechnicianLogin from "./pages/Login/technicianLogin";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import AdminRegister from "./pages/Register/adminRegister"
import AdminTable from "./pages/Admin/table"
import AdminUpdate from "./pages/Admin/updateAdmin"
import MakeAppointment from "./pages/Appointment/addAppointment"
import AppointmentTable from "./pages/Appointment/table"
import UpdateAppointment from "./pages/Appointment/updateAppointment"
import AddPatient from "./pages/Patient/addPatient"
import PatientTable from "./pages/Patient/table"
import UpdatePatient from "./pages/Patient/updatePatient"
import Payment from "./pages/Payment/payment"
import PaymentTable from "./pages/Payment/table"
import AddReceptionist from "./pages/Receptionist/addReceptionist"
import ReceptionistTable from "./pages/Receptionist/table"
import UpdateReceptionist from "./pages/Receptionist/updateReceptionist"
import AddTechnician from "./pages/Technician/addTechnician"
import TechnicianTable from "./pages/Technician/table"
import UpdateTechnician from "./pages/Technician/updateTechnician"
import AddTest from "./pages/Tests/addTest"
import TestTable from "./pages/Tests/table"
import UpdateTest from "./pages/Tests/updateTest"
import AddReports from "./pages/Reports/addReports"
import UpdateReports from "./pages/Reports/reportUpdate"
import ReportTable from "./pages/Reports/table"
import Navbar from './Components/layout/navbar'
import AdminDashbord from './pages/Dashboard/adminDashbord'
import PatientDashbord from './pages/Dashboard/patientDashbord'
import TechnicianDashbord from './pages/Dashboard/technicianDashbord'
import ReceptionistDashbord from './pages/Dashboard/receptionistDashbord'


function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = !(location.pathname === '/' || location.pathname === '/forgotPassword' || location.pathname === '/adminLogin' || location.pathname === '/receptionistLogin' || location.pathname === '/technicianLogin' || location.pathname === '/patient/addPatient')

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/receptionistLogin" element={<ReceptionistLogin />} />
        <Route path="/technicianLogin" element={<TechnicianLogin />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/admins" element={<AdminTable />} />
        <Route path="/adminUpdate/:id" element={<AdminUpdate />} />
        <Route path="/appointment/newAppointment" element={<MakeAppointment />} />
        <Route path="/appointment" element={<AppointmentTable />} />
        <Route path="/appointment/rescheduleAppointment" element={<UpdateAppointment />} />
        <Route path="/patient/addPatient" element={<AddPatient />} />
        <Route path="/patient" element={<PatientTable />} />
        <Route path="/patient/updatePatient/:id" element={<UpdatePatient />} />
        <Route path="/receptionist/addReceptionist" element={<AddReceptionist />} />
        <Route path="/receptionist" element={<ReceptionistTable />} />
        <Route path="/receptionist/updateReceptionist" element={<UpdateReceptionist />} />
        <Route path="/technician/addTechnician" element={<AddTechnician />} />
        <Route path="/technician" element={<TechnicianTable />} />
        <Route path="/technician/updateTechnician" element={<UpdateTechnician />} />
        <Route path="/test/addTest" element={<AddTest />} />
        <Route path="/test" element={<TestTable />} />
        <Route path="/test/updateTest" element={<UpdateTest />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/paymentTable" element={<PaymentTable />} />
        <Route path="/report/addReport" element={<AddReports />} />
        <Route path="/report/updateReport" element={<UpdateReports />} />
        <Route path="/report" element={<ReportTable />} />
        <Route path="/adminDashbord" element={<AdminDashbord />} />
        <Route path="/patientDashbord" element={<PatientDashbord />} />
        <Route path="/technicianDashbord" element={<TechnicianDashbord />} />
        <Route path="/receptionistDashbord" element={<ReceptionistDashbord />} />
      </Routes>
    </>
  );
}

export default App;
