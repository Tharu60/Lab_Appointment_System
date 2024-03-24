import React from 'react'

const AdminLogin = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='50-w p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Admin Login</h3>
        <div className='md-2'>
          <label htmlFor="email">Email</label>
          <input type='email' placeholder='Enater Email' className='form-control'/>
        </div>
        <div className='mb-2'>
          <label htmlFor='password'>Password</label>
          <input type="password" placeholder='Entert Password' className='form-control' />
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary'>Sign in</button> 
        </div>
        <p>
          Forgot <a href="">Password</a> <a href="">Register</a>
        </p>
        <p>I am <a href="">Admin</a> <a href="">Technician</a> <a href="">Receptionist</a></p>
      </form>
      </div>
    </div>
  )
}

export default AdminLogin