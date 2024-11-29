'use client'; 
import { useState } from "react";
import './contact.css';
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }

    if (formData.name && formData.email && formData.message) {
      setFormStatus("Thank you for reaching out! I will get back to you soon.");
    } else {
      setFormStatus("Please fill out all fields.");
    }

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      {/* Contact Section */}
      <section className="bg-[#f4e2e2] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            {/* Text Section */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold text-[#171717] mb-4">Contact Me</h1>
              <p className="text-lg font-normal text-[#171717] mb-6">
                Feel free to reach out to me for any queries or project collaborations. I would love to hear from you!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#171717] font-medium text-lg mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#F98585] text-[#171717] text-lg"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#171717] font-medium text-lg mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#F98585] text-[#171717] text-lg"
                  />
                </div>

                {/* Message Textarea */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#171717] font-medium text-lg mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#F98585] text-[#171717] text-lg resize-none h-40"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#F98585] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#F85D5D] transition-colors duration-300">
                  Send Message
                </button>
              </form>
              {formStatus && (
                <p className="mt-4 text-lg font-medium text-[#4CAF50]">{formStatus}</p>
              )}
            </div>
          </div>
        </div>
      </section>

     {/* Social Media Section */}
<section className="bg-[#F98585] py-10">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-6">Connect with Me</h3>
      <div className="flex justify-center gap-8 text-2xl text-white">
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          <i className="bi bi-envelope text-white"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sheikh-atiqa-48682a2b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          <i className="bi bi-linkedin text-white"></i>
        </a>
        <a
          href="https://github.com/Sheikhatiqaofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          <i className="bi bi-github text-white"></i>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
