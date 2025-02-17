import React, { useState } from 'react';
import usePreventZoom from "../Components/PreventZoom";
import { AuthLayout } from '../Components/index';
import mountain_landing from '../assets/mountain_landing.svg'
import arcadia from "../assets/arcadia.svg";

const Login = () => {
  usePreventZoom(); 
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white">
      <img
        src={mountain_landing}
        alt="mountain"
        className="fixed top-0 left-0 w-full h-screen object-cover object-center -z-10"
      />
      <AuthLayout />
      <img
              src={arcadia}
              alt="arcadia"
              className="w-90 h-90 fixed bottom-8 right-2 transform translate-x-15 translate-y-10"
            />
    </div>
  );
};

export default Login;
