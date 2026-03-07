"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Omninos Solutions",
    period: "2026 - Present",
    location: "Mohali, Punjab",
    description: "Leading the development of a high-traffic MERN stack e-commerce platform and a cross-platform React Native mobile app.",
    achievements: [
      "Reduced API response time by 40% using Redis caching and MongoDB indexing.",
      "Architected a shared UI library for both Web (Next.js) and Mobile (React Native).",
      "Mentored a team of 5 junior developers in modern JavaScript practices."
    ],
    tech: ["Next.js", "React Native", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    role: "React Native Developer",
    company: "ClienZon",
    period: "2025 - 2026",
    location: "Mohali, Punjab",
    description: "Worked on live projects Viora and CollabKart.",
    achievements: [
      "Integrated complex Stripe payment workflows and subscription management.",
      "Optimized React frontend performance, achieving 95+ Lighthouse scores.",
      "Built real-time notification systems using Socket.io and Express."
    ],
    tech: ["React Native", "Express.js", "Redux"]
  },
  {
    id: 3,
    role: "React Native Intern",
    company: "Ladybird web solutions",
    period: "2025 - 2025",
    location: "Jammu & Kashmir",
    description: "Focused on building intuitive UI/UX for iOS and Android apps using React Native and Expo.",
    achievements: [
      "Successfully shipped 2 apps to the Apple App Store and Google Play Store.",
      "Implemented Biometric authentication and Push Notifications.",
      "Worked closely with UI/UX designers to translate Figma mocks into pixel-perfect code."
    ],
    tech: ["React Native", "Expo", "JavaScript", "Firebase", "Git"]
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional <span className="text-blue-600">Journey</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Line (The "Git Branch") */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot (Pulse effect for the first/current item) */}
                <div className={`absolute left-0 md:left-4 top-0 w-8 h-8 rounded-full border-4 border-white dark:border-slate-950 z-10 flex items-center justify-center 
                  ${index === 0 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-800"}`}>
                  {index === 0 && (
                    <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-25" />
                  )}
                  <Briefcase size={14} className={index === 0 ? "text-white" : "text-slate-500"} />
                </div>

                {/* Content Card */}
                <div className="p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:border-blue-500/30 transition-colors">
                  
                  {/* Title and Date Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        <span>{exp.company}</span>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <div className="flex items-center gap-1 text-slate-500 font-normal">
                          <MapPin size={14} /> {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 w-fit">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex gap-3 text-sm md:text-base text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Used Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md text-[11px] font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;