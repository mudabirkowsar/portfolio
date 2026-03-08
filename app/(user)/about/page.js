"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  Smartphone,
  Rocket,
  Download,
  ArrowRight,
  Github,
  Linkedin
} from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  // 1. JSON-LD Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mudabir Kowsar Khanday",
    "jobTitle": "Full-Stack MERN & React Native Developer",
    "url": "https://mudabir-khanday.vercel.app/",
    "sameAs": [
      "https://github.com/mudabirkowsar",
      "https://www.linkedin.com/in/mudabir-kowsar/"
    ],
    "knowsAbout": ["React.js", "React Native", "Node.js", "MongoDB", "Next.js", "JavaScript"]
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-10 overflow-hidden bg-white dark:bg-slate-950 px-4 md:px-20">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-cyan-50 dark:bg-cyan-900/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 1. VISUAL SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

            <div className="relative bg-slate-100 dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              {/* SEO TIP: Alt text must contain your full name and job title */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Mudabir Kowsar Khanday - Senior React and React Native Developer"
                className="w-full h-[400px] md:h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Mudabir Kowsar Khanday</h4>
                    <p className="text-sm text-slate-500">MERN & React Native Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-10 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Full-Stack Engineer</span>
            </div>

            {/* SEO TIP: Using your full name in H2 helps Google Indexing */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
              I'm <span className="text-blue-600">Mudabir Kowsar Khanday</span>, building high-performance <span className="text-cyan-500">digital ecosystems.</span>
            </h1>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                As a specialized <strong className="text-slate-900 dark:text-white">React Developer</strong> and <strong className="text-slate-900 dark:text-white">React Native Expert</strong>, I bridge the gap between complex backend architecture and intuitive mobile interfaces.
              </p>
              <p>
                With deep expertise in the <span className="text-slate-900 dark:text-white font-semibold">MERN Stack</span> (MongoDB, Express, React, Node.js), I engineer scalable web platforms and cross-platform mobile apps for iOS and Android using Expo and Native modules.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-6 my-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <Code2 className="text-blue-600" size={20} /> Web Architecture
                </div>
                <p className="text-sm text-slate-500">MERN Stack, Next.js, SEO</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <Smartphone className="text-cyan-500" size={20} /> Mobile Apps
                </div>
                <p className="text-sm text-slate-500">React Native, Expo, Native UI</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
              >
                Hire Mudabir <ArrowRight size={18} />
              </Link>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/mudabirkowsar"
                  aria-label="GitHub Profile of Mudabir Kowsar Khanday"
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mudabir-kowsar/"
                  aria-label="LinkedIn Profile of Mudabir Kowsar Khanday"
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;