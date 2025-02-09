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
    <section className="w-full flex-center flex-col mt-8">
      <h1 className="head_text text-center text-black mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-gray-700">
        Demo Credentials: <br />
        <span className="font-bold">login: gergelupo</span> <br />
        <span className="font-bold">password: 1111</span>
      </p>
    </section>
  );
};

export default Login;
