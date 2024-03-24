import React from 'react'

const addReports = () => {

  const tests =[
    {label: "Choose test", value: 1},
    {label: "Blood Test", value: 2},
    {label: "Suger Test", value: 3},
    {label: "ECG Test", value: 4},
  ]

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Report</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="Name" className="form-lable">
              Select Test
            </label>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              {tests.map(option => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div>
              <label class="form-label" for="customFile">Add Report</label>
              <input type="file" class="form-control" id="customFile" />
            </div>

          <div className='text-center'>
          <button type="submit" className="btn btn-primary">
            Upload Report
          </button>
          <button className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </button>
          </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default addReports