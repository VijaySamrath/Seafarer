"use client";

import { useState } from "react";

export default function TrainingAgencyRegistration() {
  const [formData, setFormData] = useState({
    agencyName: "",
    ethereumAddress: "",
    address: "",
    contactPersonName: "",
    contactPersonEmail: "",
    contactPersonPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Training Agency Registration Data:", formData);
    // Submit data to backend or blockchain
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Training Agency Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="agencyName" placeholder="Agency Name" onChange={handleChange} required />
        <input name="ethereumAddress" placeholder="Ethereum Address" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required />
        <input name="contactPersonName" placeholder="Contact Person Name" onChange={handleChange} required />
        <input name="contactPersonEmail" type="email" placeholder="Contact Person Email" onChange={handleChange} required />
        <input name="contactPersonPhone" placeholder="Contact Person Phone" onChange={handleChange} required />
        <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
