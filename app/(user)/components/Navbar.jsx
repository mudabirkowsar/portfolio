"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Smartphone, Terminal, User, Send, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "About", href: "/about", icon: <User size={18} /> },
    { name: "Projects", href: "/projects", icon: <Terminal size={18} /> },
    { name: "Mobile", href: "/mobile", icon: <Smartphone size={18} /> },
    { name: "Contact", href: "/contact", icon: <Send size={18} /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-sm"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center">

            {/* 1. LOGO: Responsive font sizing */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-xl group-hover:rotate-6 transition-transform duration-300 shadow-blue-500/20 shadow-lg">
                <Code2 className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white">
                Dev<span className="text-blue-600">Portfolio</span>
              </span>
            </Link>

            {/* 2. DESKTOP NAV: Visible from 'md' (768px) and up */}
            <div className="hidden md:flex items-center lg:space-x-10 md:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group py-2"
                >
                  <span className="flex items-center gap-2">
                    {/* Icons hidden on smaller tablets (md), shown on desktops (lg) to save space */}
                    <span className="hidden lg:block">{link.icon}</span>
                    {link.name}
                  </span>
                  {/* Hover Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Responsive Button: Smaller on tablets, larger on desktops */}
              <Link
                href="https://drive.google.com/file/d/1ScSTIFzEEN-Yur81hUWzJxHYuTN--IjB/view?usp=sharing"
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 md:px-4 lg:px-6 md:py-2 rounded-full text-sm font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-md hover:shadow-blue-500/20 active:scale-95"
              >
                <FileText size={16} />
                <span>Resume</span>
              </Link>
            </div>

            {/* 3. MOBILE/TABLET TOGGLE: Visible only below 'md' (768px) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 4. MOBILE MENU OVERLAY: Slide down animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col space-y-2 px-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-lg font-medium text-slate-700 dark:text-slate-200 transition-all"
                  >
                    <span className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-blue-600">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform">
                    Download CV
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop for mobile menu to close when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;