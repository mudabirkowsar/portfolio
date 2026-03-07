"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Coffee } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Projects Completed",
    value: "20+",
    icon: <Globe className="text-blue-500" size={24} />,
    description: "Web & Mobile",
  },
  {
    id: 2,
    label: "Mobile Apps",
    value: "08",
    icon: <Smartphone className="text-cyan-500" size={24} />,
    description: "React Native / Expo",
  },
  {
    id: 3,
    label: "Open Source",
    value: "100+",
    icon: <Code2 className="text-indigo-500" size={24} />,
    description: "GitHub Commits",
  },
  {
    id: 4,
    label: "Cups of Coffee",
    value: "∞",
    icon: <Coffee className="text-amber-500" size={24} />,
    description: "Fueling Code",
  },
];

const StatsCounter = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800/50">
      <div className="container mx-auto px-6">
        {/* Responsive Grid: 1 col on tiny mobile, 2 cols on mobile/tablet, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with Hover Effect */}
              <div className="mb-4 p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </h3>

              {/* Stat Label */}
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                {stat.label}
              </p>

              {/* Description (Hidden on very small mobile to save space) */}
              <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-500 mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;