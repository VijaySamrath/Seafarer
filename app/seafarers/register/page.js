"use client";

import { useState } from "react";

export default function SeafarerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    ethereumAddress: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seafarer Registration Data:", formData);
    // Submit data to backend or blockchain
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Seafarer Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input name="ethereumAddress" placeholder="Ethereum Address" onChange={handleChange} required />
        <input type="date" name="dateOfBirth" onChange={handleChange} required />
        <input name="nationality" placeholder="Nationality" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
