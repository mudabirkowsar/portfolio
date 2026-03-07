"use client";
import React from "react";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    ExternalLink,
    Code2,
    Heart,
    ArrowUp
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerLinks = {
        navigation: [
            { name: "About", href: "/about" },
            { name: "Web Projects", href: "/projects" },
            { name: "Mobile Apps", href: "/mobile" },
            { name: "Contact", href: "/contact" },
        ],
        social: [
            { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/mudabirkowsar" },
            { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mudabir-kowsar/" },
            { name: "Twitter", icon: <Twitter size={20} />, href: "https://twitter.com/mudabirkowsar" },
        ],
    };

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 group mb-6">
                            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                                <Code2 className="text-white" size={22} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                                Dev<span className="text-blue-600">Portfolio</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                            Full-Stack Developer crafting high-performance web systems and native mobile experiences with the MERN stack and React Native.
                        </p>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact/Availability */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:hello@yourname.com" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">
                                    <Mail size={16} /> khandaymudabir@gmail.com
                                </a>
                            </li>
                            <li className="text-sm text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-2 italic">
                                    Currently: Available for hire
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Social & Back to Top */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Social Media</h4>
                            <div className="flex gap-4">
                                {footerLinks.social.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors group"
                        >
                            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 dark:text-slate-500 text-xs">
                        © {currentYear} Mudabir Kowsar. All rights reserved.
                    </p>

                    {/* Tech Stack Shoutout - Shows you build your own tools */}
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                        <span>Built with:</span>
                        <div className="flex gap-3">
                            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">Next.js 15</span>
                            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">Tailwind</span>
                            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">Framer Motion</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-slate-500">
                        Made with <Heart size={12} className="text-red-500 fill-red-500" /> globally
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;