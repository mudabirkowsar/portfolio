"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Apple, Play, Cpu, Layers, QrCode, ArrowUpRight } from "lucide-react";

const mobileProjects = [
  {
    id: 1,
    title: "Zest",
    description: "Ecommerse mobile app with custom native modules for advanced camera features, offline support, and seamless animations.",
    tech: ["React Native", "Expo", "Redux", "Node.js"],
    platform: "iOS & Android",
    image: "./zest1.png", // Replace with app screenshot
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Foody App",
    description: "Recipe discovery app with personalized recommendations, real-time grocery list syncing, and interactive cooking guides.",
    tech: ["Native Modules", "Firebase", "Styled Components"],
    platform: "iOS & Android",
    image: "./foody.png", // Replace with app screenshot
    color: "from-emerald-500 to-teal-600"
  }
];

const MobileShowcase = () => {
  return (
    <section id="mobile" className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Mobile Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experiences</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl text-lg">
            Specialized in high-performance, cross-platform mobile applications using React Native and the Expo ecosystem.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-10"
            >

              {/* 1. THE PHONE MOCKUP */}
              <div className="relative shrink-0 group">
                {/* Outer Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-tr ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />

                {/* Phone Frame */}
                <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-4 ring-slate-800/50">
                  {/* Notch / Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-12 h-1 bg-slate-800 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Reflection Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 2. PROJECT DETAILS */}
              <div className="flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Apple size={20} className="text-slate-400" />
                  <Play size={20} className="text-slate-400" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Mobile Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600"><Cpu size={16} /></div>
                    Native Performance Optimized
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/30 text-cyan-500"><Layers size={16} /></div>
                    {project.platform} Support
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95">
                    View Case Study <ArrowUpRight size={18} />
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <QrCode size={18} /> Scan Demo
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;