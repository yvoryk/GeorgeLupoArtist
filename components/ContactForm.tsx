"use client";
import React, { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("./contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      console.error("Error encountered: ", err);
    }
  };

  return (
    <form 
      onSubmit={onSubmit} 
      className="w-full max-w-md p-9 border border-gray-300 rounded-lg shadow-md"
    >
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          rows={2}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all"
      >
        Submit
      </button>
    </form>
  );
};
