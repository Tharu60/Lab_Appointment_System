import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UpdateAppointment = () => {
  const [selectDate, setSelectedDate] = useState(null);
  const tests = [
    { label: "Blood Test", value: 1 },
    { label: "Suger Test", value: 2 },
    { label: "ECG Test", value: 3 },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Make New Appointment</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="Name" className="form-lable">
                Select Test
              </label>
              <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                {tests.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-lable">
                Date & Time
              </label>
              <DatePicker
                id='selectDate'
                selected={selectDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy h:mm aa" // Format including time
                showTimeSelect // Enable time selection
                timeFormat="hh:mm aa" // 24-hour format for time
                className="form-select"
              />
            </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-primary">
                Confirm Booking
              </button>
              <button className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAppointment;
