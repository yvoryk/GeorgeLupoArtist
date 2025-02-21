"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <section className="w-full flex justify-center items-start min-h-screen pt-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="bg-white p-9 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow hover:from-blue-600 hover:to-blue-800 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Demo Credentials: <br />
          <span className="font-bold">login: gergelupo</span> <br />
          <span className="font-bold">password: 1111</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
