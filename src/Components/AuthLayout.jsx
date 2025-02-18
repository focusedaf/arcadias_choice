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
    <div className="min-h-screen flex items-center justify-center px-4 border-amber-950">
      <div className="nes-container is-rounded with-title bg-orange-200">
        <h2 className="text-amber-950">What's your name?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="nes-input mb-30 text-amber-800"
            placeholder="Your username"
            required
          />
          <button
            type="submit"
            className="nes-btn is-primary mt-20"
          >
            Begin Adventure
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthLayout;
