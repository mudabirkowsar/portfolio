"use client";
import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Github, Linkedin, Terminal, Smartphone, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    // 1. Mouse Tracking Logic for Bubbles
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the movement using Springs
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">

            {/* 2. Interactive Bubbles (Following Cursor) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-30 dark:opacity-20"
                        style={{
                            x: smoothX,
                            y: smoothY,
                            // Different sizes and colors for each bubble
                            width: i === 0 ? 300 : i === 1 ? 400 : 250,
                            height: i === 0 ? 300 : i === 1 ? 400 : 250,
                            background: i === 0 ? "#2563eb" : i === 1 ? "#06b6d4" : "#4f46e5",
                            // Offset bubbles so they don't sit directly under the cursor
                            left: i === 0 ? -150 : i === 1 ? 100 : -50,
                            top: i === 0 ? -150 : i === 1 ? -50 : 100,
                        }}
                        transition={{
                            type: "spring",
                            damping: 10 + i * 5, // Each bubble follows at a different speed
                            stiffness: 50 + i * 20,
                        }}
                    />
                ))}
            </div>

            {/* 3. Background Grid Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* 4. Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs md:text-sm font-medium text-blue-700 dark:text-blue-300">
                            Available for new projects
                        </span>
                    </motion.div>

                    {/* 5. Mudabir Kowsar Intro Name */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="text-lg md:text-xl font-mono text-blue-600 dark:text-cyan-400 font-bold tracking-widest uppercase">
                            Hello, I'm Mudabir Kowsar
                        </span>
                    </motion.div>

                    {/* 6. Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl"
                    >
                        Building Seamless <span className="text-blue-600">Web</span> & <span className="text-cyan-500">Mobile</span> Experiences.
                    </motion.h1>

                    {/* 7. Sub-headline / Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                    >
                        I'm a Full-Stack Developer specializing in high-performance <span className="font-semibold text-slate-800 dark:text-slate-200">MERN Stack</span> and cross-platform <span className="font-semibold text-slate-800 dark:text-slate-200">React Native</span> applications.
                    </motion.p>

                    {/* 8. Skill Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 mt-8"
                    >
                        {[
                            { icon: <Terminal size={16} />, label: "MERN Stack" },
                            { icon: <Smartphone size={16} />, label: "React Native / Expo" },
                        ].map((badge, i) => (
                            <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700">
                                {badge.icon} {badge.label}
                            </span>
                        ))}
                    </motion.div>

                    {/* 9. Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
                    >
                        <Link href="/projects" className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                            View My Work <ArrowRight size={18} />
                        </Link>

                        <Link href="https://drive.google.com/file/d/1ScSTIFzEEN-Yur81hUWzJxHYuTN--IjB/view?usp=sharing" className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
                            <Download size={18} /> Download CV
                        </Link>
                    </motion.div>

                    {/* 10. Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-6 mt-12"
                    >
                        <Link href="https://github.com/mudabirkowsar" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <Github size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mudabir-kowsar/" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;