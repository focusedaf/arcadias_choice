import React, { useState } from 'react';
import usePreventZoom from "../Components/PreventZoom";
import { AuthLayout } from '../Components/index';
import mountain_landing from '../assets/mountain_landing.svg'
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
    </div>
  );
};

export default Login;
