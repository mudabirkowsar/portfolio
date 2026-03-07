"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, Github, Smartphone, Apple, Play,
    QrCode, Filter, ExternalLink, ChevronRight
} from "lucide-react";
import Link from "next/link";

const allMobileProjects = [
    {
        id: 1,
        title: "Zest",
        category: "Health",
        platform: "iOS & Android",
        description: "E commerce mobile app with custom native modules for advanced camera features, offline support, and seamless animations.",
        image: "/zest1.png", // Using your image1.png
        tech: ["React Native", "Expo", "Reanimated", "Redux"],
        links: { github: "https://github.com/mudabirkowsar/Zest-E-Commerce--React-Native-", demo: "https://www.linkedin.com/posts/mudabir-kowsar_zest-ecommerce-uiuxdesign-activity-7369263013251448832-iBrB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8guGcB-QEfDOgOyOFWVgkM4uRG817uWq4" },
        color: "from-blue-600 to-cyan-500 shadow-blue-500/20"
    },
    {
        id: 2,
        title: "Foody",
        category: "Finance",
        platform: "iOS & Android",
        description: "Recipe finder app with personalized recommendations, real-time grocery list syncing, and interactive cooking guides.",
        image: "/foody.png", // Using your image2.png
        tech: ["Native Modules", "Firebase", "Victory Charts"],
        links: { github: "https://github.com/mudabirkowsar/Foody-Food-Recipe-App-", demo: "https://www.linkedin.com/posts/mudabir-kowsar_firebase-apiintegration-reactnative-activity-7365959207465975809-NJxO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8guGcB-QEfDOgOyOFWVgkM4uRG817uWq4" },
        color: "from-emerald-500 to-teal-400 shadow-emerald-500/20"
    },
    {
        id: 3,
        title: "React Native Portfolio",
        category: "Social",
        platform: "Cross-Platform",
        description: "React native portfolio app showcasing projects with dynamic filtering, 3D phone mockups, and smooth animations ....",
        image: "/port.png",
        tech: ["React Native", "Expo", "Context"],
        links: { github: "https://github.com/mudabirkowsar/PortFolio--React-Native-", demo: "https://www.linkedin.com/posts/mudabir-kowsar_sideproject-codingforfun-reactnative-activity-7370679784852549632-YSdF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8guGcB-QEfDOgOyOFWVgkM4uRG817uWq4" },
        color: "from-purple-600 to-pink-500 shadow-purple-500/20"
    }
];

const MobileProjectsPage = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Health", "Finance", "Social"];

    const filteredProjects = filter === "All"
        ? allMobileProjects
        : allMobileProjects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 selection:bg-blue-500 selection:text-white">

            {/* 1. Dynamic Background Aura */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10 max-w-7xl">

                {/* 2. Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                            Native <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                                Experiences.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex items-center gap-6"
                    >
                        <div className="text-right">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Status</p>
                            <p className="text-slate-900 dark:text-white font-black text-xl">Available for Hire</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
                            <Smartphone size={24} />
                        </div>
                    </motion.div>
                </div>

                {/* 3. Interactive Filter Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`relative px-8 py-3 rounded-2xl text-sm font-bold transition-all overflow-hidden ${filter === cat ? "text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                                }`}
                        >
                            <span className="relative z-10">{cat}</span>
                            {filter === cat && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-blue-600 shadow-xl shadow-blue-600/20"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* 4. Projects Showcase */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-16">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col group"
                            >
                                {/* 3D Phone Mockup */}
                                <div className="relative mb-12 flex justify-center perspective-[1000px]">
                                    <motion.div
                                        whileHover={{ rotateY: -15, rotateX: 5, scale: 1.02 }}
                                        className="relative w-[280px] h-[580px] transition-all duration-500 ease-out"
                                    >
                                        {/* Shadow Glow */}
                                        <div className={`absolute -inset-6 bg-gradient-to-tr ${project.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />

                                        {/* Phone Body */}
                                        <div className="relative w-full h-full bg-slate-950 rounded-[3.5rem] p-[10px] shadow-2xl border-[1px] border-white/10 ring-1 ring-slate-800">
                                            {/* Dynamic Island */}
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-950 rounded-2xl z-20 flex items-center justify-center border border-white/5">
                                                <div className="w-10 h-1 bg-slate-800 rounded-full" />
                                            </div>

                                            {/* Screen Content */}
                                            <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-white">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Info Card */}
                                <div className="px-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} animate-pulse`} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                            {project.platform}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors leading-none">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex gap-4">
                                        <a href={project.links.github} className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                                            <Github size={18} /> Code
                                        </a>
                                        <a href={project.links.demo} className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white text-sm font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-blue-500/25">
                                            <QrCode size={18} /> Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 5. Contact CTA Section */}
                <div className="mt-40 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative bg-slate-900 dark:bg-slate-900 border border-white/5 p-12 md:p-20 rounded-[3.5rem] text-center text-white overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none">
                                Have an app idea <br /> <span className="text-blue-400 italic">for Mudabir?</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium">
                                I specialize in taking React Native concepts from Figma to the App Store with Native performance.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-blue-600 text-white rounded-2xl font-black hover:scale-110 transition-transform shadow-2xl shadow-blue-500/40">
                                LET'S CONNECT <ChevronRight size={20} />
                            </Link>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MobileProjectsPage;