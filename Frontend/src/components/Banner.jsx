import React from 'react';
import photo1 from "../../public/photo1.avif";

export default function Banner() {
  return (
    <>
      <div className='container mx-auto d-flex flex-column flex-md-row mb-5 mt-5'>

        <div className='order-2 w-100 d-flex flex-column justify-content-start mt-4 mt-md-5'>
          <div className='space-y-4'>
            <h1 className='fs-1 fw-bold'>Hello, Welcome to the world's best <span className='text-pink'>Car Management App!!!</span></h1>
            <p className='fs-4'>
            Welcome, your ultimate solution for managing all things related to your car! Whether it's scheduling maintenance, tracking service history, or finding nearby gas stations, we've got you covered. Simplify your car management today and drive with confidence!
            </p>
          </div>
        </div>
        
      </div>

        <div className='order-1 w-100 d-flex justify-content-center align-items-center mt-4 mt-md-5'>
          <img src={photo1} className='w-100 w-md-50 w-lg-45 w-xl-30 mx-auto object-contain' alt="banner" />
        </div>
    </>
  );
}
