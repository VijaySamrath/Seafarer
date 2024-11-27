"use client";

import { useState } from "react";

export default function AdminRegistration() {
  const [formData, setFormData] = useState({
    ethereumAddress: "",
    name: "",
    email: "",
    accessLevel: "",
    activityLogs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Registration Data:", formData);
    // Submit data to backend or blockchain
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Admin Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="ethereumAddress" placeholder="Ethereum Address" onChange={handleChange} required />
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="accessLevel" placeholder="Access Level (1, 2, 3)" onChange={handleChange} required />
        <textarea name="activityLogs" placeholder="Activity Logs" onChange={handleChange} />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
