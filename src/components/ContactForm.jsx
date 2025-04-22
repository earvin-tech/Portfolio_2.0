import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-backend-396f.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
      
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 py-10 bg-[#0c0c0c]">
  <div className="max-w-xl mx-auto space-y-4 border rounded-xl p-6 shadow dark:border-gray-700 dark:bg-gray-900">
    <h2 className="text-2xl font-bold text-center text-black dark:text-white">Reach out directly: </h2>

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full p-3 border rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-gray-300 dark:border-gray-600"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full p-3 border rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-gray-300 dark:border-gray-600"
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full p-3 border rounded bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-gray-300 dark:border-gray-600"
    />

    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
      Send
    </button>

    {status && (
      <p className="text-center text-sm text-gray-700 dark:text-gray-300">{status}</p>
    )}
  </div>
</form>

  );
}