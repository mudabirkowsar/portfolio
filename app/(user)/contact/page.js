"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    Mail,
    Linkedin,
    Github,
    MapPin,
    CheckCircle,
    Loader2,
    MessageSquare,
    Globe,
    Smartphone,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
    const [status, setStatus] = useState("idle"); // idle, loading, success
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Web Development",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API Call (Connect this to your Node.js backend or Server Action)
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", projectType: "Web Development", message: "" });
        }, 2000);
    };

    const contactMethods = [
        {
            icon: <Mail className="text-blue-500" />,
            title: "Email Me",
            value: "khandaymudabir@gmail.com",
            link: "mailto:khandaymudabir@gmail.com"
        },
        {
            icon: <Linkedin className="text-cyan-500" />,
            title: "LinkedIn",
            value: "LinkedIn",
            link: "https://www.linkedin.com/in/mudabir-kowsar/"
        },
        {
            icon: <Github className="text-slate-700 dark:text-slate-300" />,
            title: "GitHub",
            value: "github.com/yourusername",
            link: "https://github.com/mudabirkowsar"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-10 pb-12">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT SIDE: Content & Info */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6">
                                Let's <span className="text-blue-600">Talk.</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                                Have a big idea for a <span className="font-bold text-slate-900 dark:text-white">MERN Web App</span> or a
                                high-performance <span className="font-bold text-slate-900 dark:text-white">React Native Mobile App</span>?
                                I'm currently available for new projects and collaborations.
                            </p>

                            <div className="space-y-6">
                                {contactMethods.map((method, i) => (
                                    <a
                                        key={i}
                                        href={method.link}
                                        className="flex items-center gap-5 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{method.title}</p>
                                            <p className="text-slate-900 dark:text-white font-semibold">{method.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-12 p-8 rounded-[2.5rem] bg-blue-600 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest">Current Status</p>
                                    <h4 className="text-2xl font-bold">Open for Freelance & Full-time Roles</h4>
                                </div>
                                <MessageSquare className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: The Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5 relative overflow-hidden"
                        >
                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-30 bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-center p-8"
                                    >
                                        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Message Received!</h3>
                                        <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                                            I usually respond within a few hours. Looking forward to our chat!
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-8 text-blue-600 font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all text-slate-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all text-slate-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">What are we building?</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { label: "Web Development", icon: <Globe size={16} /> },
                                            { label: "Mobile App", icon: <Smartphone size={16} /> },
                                        ].map((type) => (
                                            <button
                                                key={type.label}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, projectType: type.label })}
                                                className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all font-bold ${formData.projectType === type.label
                                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                                                    : "border-slate-100 dark:border-slate-800 text-slate-500 hover:border-slate-200"
                                                    }`}
                                            >
                                                {type.icon} {type.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                                    <textarea
                                        required
                                        rows="5"
                                        placeholder="Tell me about your project goals, timeline, and stack requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all text-slate-900 dark:text-white resize-none"
                                    />
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    className="w-full bg-slate-900 dark:bg-blue-600 text-white font-extrabold py-5 rounded-2xl shadow-xl hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="animate-spin" /> Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} /> Launch Inquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;