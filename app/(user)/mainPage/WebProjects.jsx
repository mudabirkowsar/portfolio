"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Layers, Database, Layout } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Coffee Shop",
    description: "A full-scale MERN application with Redux Toolkit, Stripe integration, and an admin dashboard for inventory management.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    liveLink: "#",
    githubLink: "https://www.linkedin.com/in/mudabir-kowsar/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop", // Replace with your screenshot
    category: "Full Stack"
  },
  {
    id: 2,
    title: "SkillSwap Platform",
    description: "A MERN-based skill-sharing platform with real-time chat, interactive dashboards, and a secure authentication system.",
    tech: ["Next.js", "Mongoose", "Chart.js", "PostgreSQL"],
    liveLink: "#",
    githubLink: "https://github.com/mudabirkowsar/SkillSwap--MERN-Stack-",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", // Replace with your screenshot
    category: "Dashboard"
  },
  {
    id: 3,
    title: "HandyCrew Web App",
    description: "A productivity web app for managing handyman services, featuring a sleek UI, real-time updates, and seamless third-party integrations.",
    tech: ["React", "Node.js", "Appwrite", "Framer Motion"],
    liveLink: "https://handycrew.onrender.com/",
    githubLink: "https://github.com/mudabirkowsar/HandyCrew-Web-MERN-Stack-",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop", // Replace with your screenshot
    category: "Productivity"
  }
];

const WebProjects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Featured <span className="text-blue-600">Web</span> Apps
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
              High-performance full-stack platforms built with the MERN ecosystem and modern web standards.
            </p>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:underline">
            <Link href="/projects" className="flex items-center gap-1">
              View All Projects
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* 1. Project Image / Browser Mockup */}
              <div className="relative pt-4 px-4 overflow-hidden bg-slate-100 dark:bg-slate-800">
                {/* Browser Top Bar */}
                <div className="flex gap-1.5 mb-3 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-xl border border-slate-200 dark:border-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                </div>
              </div>

              {/* 2. Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;