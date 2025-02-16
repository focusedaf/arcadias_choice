import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      navigate('/home'); // Navigate to theme selector page
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/mountain_landing.svg')" }}
    >
      <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm w-full max-w-md">
        <h2 className="text-3xl md:text-4xl font-press-start mb-8 text-center">
          Enter Your Name
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-white/50 focus:outline-none focus:border-green-500
                       backdrop-blur-sm font-press-start text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-press-start 
                     py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Begin Adventure
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
