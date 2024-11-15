import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [authUser] = useAuth();

  return (
    <header className="p-3 text-bg-dark sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
            <li><Link to="/myProduct" className="nav-link px-2 text-white">My Product</Link></li>
            <li><Link to="/post" className="nav-link px-2 text-white">Post</Link></li>
          </ul>
          <div className="text-end">
            {authUser ? (
              <Logout />
            ) : (
              <button className="btn btn-outline-light me-2" onClick={() => setShowModal(true)}>Login</button>
            )}
          </div>

          {showModal && <Login onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
