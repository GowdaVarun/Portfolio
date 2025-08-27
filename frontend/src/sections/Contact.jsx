import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import socialLinks from "../data/socialLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-gradient-to-b from-black via-slate-900 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl relative z-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Social Links */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl p-5 sm:p-8 border border-cyan-700/20 shadow-xl flex flex-col items-center text-center">
            <h3 className="font-bold mb-4 sm:mb-6 text-cyan-400 text-lg sm:text-xl">
              Social Links
            </h3>

            {/* Email & Mobile */}
            <div className="mb-5 sm:mb-6 w-full">
              <p className="text-gray-300 text-sm sm:text-base mb-2">
                <span className="font-semibold text-cyan-400">Email:</span>{" "}
                varungowdar2004@gmail.com
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="font-semibold text-cyan-400">Mobile:</span>{" "}
                +91 8310049862
              </p>
            </div>

            {/* Social Icons */}
            <ul className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs">
              {socialLinks.map((link, index) => {
                let Icon;
                switch (link.name.toLowerCase()) {
                  case "github":
                    Icon = Github;
                    break;
                  case "linkedin":
                    Icon = Linkedin;
                    break;
                  case "twitter":
                    Icon = Twitter;
                    break;
                  case "email":
                    Icon = Mail;
                    break;
                  default:
                    Icon = null;
                }
                return (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-lg bg-gray-800/40 hover:bg-cyan-600/20 transition-colors duration-200 text-gray-200 hover:text-cyan-400 font-semibold text-sm sm:text-base"
                    >
                      {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl p-5 sm:p-8 border border-cyan-700/20 shadow-xl flex flex-col gap-4 sm:gap-6"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-600 bg-gray-900 text-white p-3 rounded focus:border-cyan-400 outline-none text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-600 bg-gray-900 text-white p-3 rounded focus:border-cyan-400 outline-none text-sm sm:text-base"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="border border-gray-600 bg-gray-900 text-white p-3 rounded focus:border-cyan-400 outline-none text-sm sm:text-base"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded shadow transition-all duration-200 text-sm sm:text-base"
            >
              Send
            </button>
            {status && (
              <p className="text-cyan-400 font-medium mt-1 text-sm sm:text-base">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
