import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

const Login = ({ onClose }) => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/users/login", data);
      const user = response.data.user;

      if (user) {
        alert("Logged in Successfully");
        setAuthUser(user);
        localStorage.setItem("Users", JSON.stringify(user));
        onClose();
        navigate('/myProduct');
      }
    } catch (err) {
      console.error(err);
      alert("Error: " + (err.response ? err.response.data.message : err.message));
    }
  };

  const handleSignUp = () => {
    onClose();
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <div
      className="modal show d-flex justify-content-center align-items-center"
      id="myModal"
      style={{
        display: 'block',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      tabIndex="-1"
    >
      <div className="modal-dialog" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="modal-content p-4">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h3 className="modal-title" style={{ color: '#495057' }} id="modalLabel">
              Please Login
            </h3>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label" style={{ color: '#212529' }}>
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                  id="emailInput"
                  placeholder="name@example.com"
                  style={{ color: '#495057' }}
                />
                {errors.email && (
                  <span className="text-sm text-danger">{errors.email.message}</span>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label" style={{ color: '#212529' }}>
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="passwordInput"
                  {...register('password', { required: 'Password is required' })}
                  placeholder="Password"
                  style={{ color: '#495057' }}
                />
                {errors.password && (
                  <span className="text-sm text-danger">{errors.password.message}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>
              <p className="text-center" style={{ color: '#495057' }}>
                Not registered?{' '}
                <span
                  onClick={handleSignUp}
                  className="text-decoration-underline text-primary"
                  style={{ cursor: 'pointer' }}
                >
                  Sign up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
