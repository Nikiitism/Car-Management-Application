import React from 'react';
import Cars from '../components/Cars';
import { useState,useEffect } from 'react';
import axios from 'axios'

const MyProduct = () => {

  const [car,setCar]= useState([]);
  useEffect(()=>{
    const getCar = async()=>{
      try{
       const res = await axios.get("http://localhost:4001/car");
       console.log(res.data)
       setCar(res.data)
      }
      catch(error){
        console.log(error)
      }
    };
    getCar();
  },[]);

  const handleDelete = (id) => {
    setCar(car.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h3 className="mt-4 text-center">Your Cars</h3>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {car.map((item) => (
              <Cars item={item} key={item.id}  onDelete={() => handleDelete(item.id)}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;






