import React, { useState } from 'react';
import { AuthLayout } from '../Components/index';
const Login = () => {
  
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/mountain_landing.svg')" , backgroundSize: "cover",  backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", top: 0, left: 0, }}>  
      <AuthLayout/>
    </div>
    
  );
};

export default Login;
