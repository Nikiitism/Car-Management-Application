import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'

function SignUp({ onClose = () => {} }) { 

  const [navigate, setNavigate] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = async(data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/users/signup", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data) {
        alert("Sigup Successfully")
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    })
    .catch((err) => {
      if (err.response) {
        console.error(err.response.data);
        alert("Error: " + err.response.data.message); 
      } else {
        console.error(err);
        alert("Error: " + err.message);
      }
    });
    
    // setNavigate(true); 
    // onClose();
  };
  if (navigate) { return <Navigate to="/" />;}

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh',backgroundColor: 'grey', }}
      >
        {/* Form container */}
        <main
          className="form-signin w-100 p-4 bg-white rounded shadow modal-class"
          style={{minHeight: '45vh', width: '80%', maxWidth: '600px',borderRadius: '10px', }}
        >
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h3 className="modal-title" style={{ color: '#495057' }} id="modalLabel">
                Sign Up
              </h3>
              <Link className="btn-close" to="/" aria-label="Close" onClick={onClose}></Link>
            </div>

            {/* Full Name input */}
            <div className="form-floating">
              <input
                type="text"
                className={`form-control mt-3 ${errors.fullname ? 'is-invalid' : ''}`}
                id="floatingFullname"
                placeholder="Full name"
                {...register('fullname', { required: 'Full Name is required' })}
              />
              <label htmlFor="floatingFullName">Fullname</label>
              {errors.fullname && (
                <span className="text-sm text-red-500">{errors.fullname.message}</span>
              )}
            </div>

            {/* Email input */}
            <div className="form-floating">
              <input
                type="email"
                className={`form-control mt-3 ${errors.email ? 'is-invalid' : ''}`}
                id="floatingEmail"
                placeholder="name@example.com"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              <label htmlFor="floatingEmail">Email address</label>
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password input */}
            <div className="form-floating">
              <input
                type="password"
                className={`form-control mt-3 ${errors.password ? 'is-invalid' : ''}`}
                id="floatingPassword"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
              <label htmlFor="floatingPassword">Password</label>
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Submit button */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button type="submit" className="btn btn-primary mb-2 mt-3">
                Sign up
              </button>
              <p className="mb-0">
                Have an account?{' '}
                <Link to="/" className="text-decoration-none">
                  Login
                </Link>
              </p>
            </div>
          </form>
          
        </main>
      </div>
    </div>
  );
}

export default SignUp;
