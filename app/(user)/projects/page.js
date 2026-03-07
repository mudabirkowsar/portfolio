"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Globe,
  Search,
  Filter,
  ExternalLink,
  Code2,
  Database,
  Layers
} from "lucide-react";
import Link from "next/link";

// Mock Data - In a real MERN app, this could come from your MongoDB API
const allProjects = [
  {
    id: 1,
    title: "E-Commerce Coffee Shop",
    category: "Full Stack",
    description: "A full-featured MERN stack application with user authentication, product management, and a shopping cart.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: { github: "https://github.com/mudabirkowsar", live: "#" }
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "Full Stack",
    description: "React frontend with a Node.js backend that integrates with an AI image generation API to create custom images based on user prompts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    tech: ["Next.js", "Tailwind", "Chart.js", "Framer"],
    links: { github: "https://github.com/mudabirkowsar", live: "#" }
  },
  {
    id: 4,
    title: "HandyCrew",
    category: "Full Stack",
    description: "A platform for connecting users with local service providers.",
    image: "./handy.png",
    tech: ["React", "Socket.io", "Cloudinary", "MongoDB"],
    links: { github: "https://github.com/mudabirkowsar/HandyCrew-Web-MERN-Stack-", live: "https://handycrew.onrender.com/" }
  },
  {
    id: 5,
    title: "Expense Tracker",
    category: "Full Stack",
    description: "A simple yet effective expense tracking application with budgeting features.",
    image: "exp.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: { github: "https://github.com/mudabirkowsar/expenseTracker", live: "#" }
  },
  {
    id: 6,
    title: "SkillSwap",
    category: "Full Stack",
    description: "A platform for users to exchange skills and services with each other.",
    image: "https://play-lh.googleusercontent.com/yVphJwxijwV131_Tv2BS3OaWP-qTJqwls-2ReOmORfUo7ZZFMmbfLj1W_wEWAHDnoQ=w240-h480-rw",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: { github: "https://github.com/mudabirkowsar/SkillSwap--MERN-Stack-", live: "#" }
  },
  
  {
    id: 7,
    title: "Meesho Clone",
    category: "Full Stack",
    description: "A platform for users to exchange skills and services with each other.",
    image: "https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: { github: "https://github.com/mudabirkowsar/meesho_Clone", live: "#" }
  }
];

const WebProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = filter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-5 md:px-25 pb-20">
      <div className="container mx-auto px-6">

        {/* 1. Header & Navigation */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
                Web <span className="text-blue-600">Portfolio</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-lg">
                A detailed collection of my full-stack web applications, from architecture to deployment.
              </p>
            </div>

            {/* Project Count Badge */}
            <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-2xl font-bold text-blue-600">{filteredProjects.length}</span>
              <span className="ml-2 text-slate-500 font-medium text-sm uppercase tracking-widest">Projects</span>
            </div>
          </div>
        </div>

        {/* 2. Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl mr-2">
            <Filter size={20} className="text-slate-500" />
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-500/50 transition-colors"
              >
                {/* Browser-style Preview */}
                <div className="relative pt-3 px-3 bg-slate-200/50 dark:bg-slate-800/50">
                  <div className="flex gap-1.5 mb-2 px-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a href={project.links.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.links.live} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-500/20">
                      <Globe size={16} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. Contact CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-slate-900 dark:bg-blue-600 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Code2 size={200} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project idea?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            I'm currently accepting new freelance projects and full-time opportunities.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:scale-105 transition-transform">
            Let's Talk <ExternalLink size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default WebProjectsPage;