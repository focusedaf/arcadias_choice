import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

const AuthLayout = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      try {
        
        localStorage.setItem('username', username);

        
        const docRef = await addDoc(collection(db, "users"), {
          username: username,
          score: 0, 
        });

        
        localStorage.setItem('userId', docRef.id);

       
        navigate('/home');
      } catch (error) {
        console.error("Error adding user: ", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black bg-opacity-70 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl text-white font-press-start mb-6 text-center">
          Enter Your Name
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none placeholder:text-center"
            placeholder="Your username"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-press-start py-3 rounded transition-colors duration-300"
          >
            Begin Adventure
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthLayout;
