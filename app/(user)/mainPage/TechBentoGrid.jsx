"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Smartphone, Database, Globe, 
  Layers, Cpu, Server, Layout 
} from "lucide-react";

const TechBentoGrid = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-blue-600">Ecosystem</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My specialized stack for building high-performance web platforms and native mobile applications.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* 1. MERN Stack - Large Feature Card */}
          <motion.div 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-slate-900 p-8 group"
          >
            <div className="absolute top-4 right-4 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
              <Globe size={120} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">MERN Stack</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xs">
                  Architecting full-stack web applications with MongoDB, Express, React, and Node.js.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js", "Express", "MongoDB", "Redux"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. React Native - Tall Feature Card */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-900/10 dark:to-slate-900 p-8 group"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/20">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">React Native</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Building cross-platform mobile apps with Expo and Native Modules.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[90%]"></div>
                 </div>
                 <span className="text-xs font-bold text-cyan-600">iOS & Android Specialist</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Database - Wide Card */}
          <motion.div 
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="md:col-span-1 lg:col-span-1 md:row-span-1 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-center gap-2 hover:border-blue-500/50 transition-colors"
          >
            <Database className="text-indigo-500 mb-2" size={32} />
            <h4 className="font-bold text-slate-900 dark:text-white">Database Design</h4>
            <p className="text-sm text-slate-500">PostgreSQL, Mongoose, Redis</p>
          </motion.div>

          {/* 4. UI/UX - Small Card */}
          <motion.div 
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-center gap-2 hover:border-pink-500/50 transition-colors"
          >
            <Layout className="text-pink-500 mb-2" size={32} />
            <h4 className="font-bold text-slate-900 dark:text-white">Modern UI</h4>
            <p className="text-sm text-slate-500">Tailwind, Framer, Radix</p>
          </motion.div>

          {/* 5. Cloud/API - Small Card */}
          <motion.div 
            custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-center gap-2 hover:border-emerald-500/50 transition-colors"
          >
            <Server className="text-emerald-500 mb-2" size={32} />
            <h4 className="font-bold text-slate-900 dark:text-white">API Services</h4>
            <p className="text-sm text-slate-500">REST, GraphQL, AWS</p>
          </motion.div>

          {/* 6. DevOps/Core - Small Card */}
          <motion.div 
            custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-blue-600 p-6 flex flex-col justify-center gap-2 text-white"
          >
            <Cpu size={32} />
            <h4 className="font-bold">Core Skills</h4>
            <p className="text-xs opacity-80">Git, Docker, Linux, CI/CD (Basics)</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechBentoGrid;