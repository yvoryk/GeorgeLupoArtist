"use client";
import React, { useState } from "react";

const MessageWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Sends message to george.lupo.app@gmail.com via your API endpoint.
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Collapsed Button */}
      {!isOpen && (
        <button
          onClick={toggleWidget}
          className="bg-gradient-to-r from-blue-300 to-blue-700 text-white px-6 py-3 rounded-full shadow-xl hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105"
        >
          Message
        </button>
      )}

      {/* Message Form */}
      {isOpen && (
        <div className="w-80 p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">George Lupo Artist</h2>
            <button
              onClick={toggleWidget}
              className="text-gray-500 hover:text-gray-700 transition-colors text-2xl"
            >
              &times;
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Hi! Let us know how we can help and we’ll respond shortly.
          </p>
          {submitted ? (
            <div className="text-green-600 text-center font-medium">Message sent!</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 resize-none"
                rows={3}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full px-4 py-2 text-sm hover:from-blue-600 hover:to-blue-800 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default MessageWidget;
