import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to Formspree, EmailJS, or a custom backend
    console.log("Form submitted:", formData);
  };

  return (
    <section className="pb-20 px-6 bg-[#121212]">
        <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md space-y-6"
        >
        <h2 className="text-3xl font-bold text-center">Or reach out directly...</h2>

        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
        />

        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
        />

        <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
        />

        <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
            Send Message
        </button>
        </form>
    </section>
  );
}
