"use client";

import { useState } from "react";
import { ContactForm } from "@/types";

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Form submitted!");
  };

  return (
    <div className="container mt-5">
      <h1 className="display-5 fw-bold mb-4 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="form-control"
            rows={6}
            required
          />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
