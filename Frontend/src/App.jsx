import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; 
import Home from './home/Home';
import MyProduct from './myProduct/MyProduct';
import Post from './post/Post';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myProduct" element={authUser ? <MyProduct /> : <Navigate to="/signUp" />} />
        <Route path="/post" element={authUser ? <Post /> : <Navigate to="/signUp" />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
