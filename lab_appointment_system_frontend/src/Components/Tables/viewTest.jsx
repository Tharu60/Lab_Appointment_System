import React from 'react'
import { Link } from 'react-router-dom'

const viewTest = () => {
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
      </tr>
    </thead>
    <tbody>
      <tr>
      <th scope='row'>1</th>
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

export default viewTest

