"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call (In MERN, you'd call your Next.js API route or Server Action here)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "khandaymudabir@gmail.com",
      href: "mailto:khandaymudabir@gmail.com"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Mudabir Kowsar",
      href: "https://www.linkedin.com/in/mudabir-kowsar/"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Kashmir India",
      href: null
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Build <span className="text-blue-600">Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project in mind? Whether it's a MERN web platform or a React Native app, I'm ready to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* 1. CONTACT INFO - Left Side (2 cols on large) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-slate-700 dark:text-slate-200 font-medium hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-700 dark:text-slate-200 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-widest">Follow Me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/mudabirkowsar" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/mudabir-kowsar/" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CONTACT FORM - Right Side (3 cols on large) */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-blue-500/5 relative overflow-hidden">

              <AnimatePresence>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-blue-600 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;