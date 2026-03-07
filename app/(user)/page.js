import React from 'react'
import Hero from './mainPage/Hero'
import StatsCounter from './mainPage/StatsCounter'
import TechBentoGrid from './mainPage/TechBentoGrid'
import WebProjects from './mainPage/WebProjects'
import MobileShowcase from './mainPage/MobileShowcase'
import ExperienceTimeline from './mainPage/ExperienceTimeline'
import ContactForm from './mainPage/ContactForm'

export const metadata = {
  title: "Mudabir Kowsar Khanday | Senior MERN & React Native Developer",
  description: "Official portfolio of Mudabir Kowsar Khanday, a specialized Full-Stack MERN and React Native developer building high-performance web and mobile applications.",
  keywords: [
    "Mudabir Kowsar Khanday",
    "Mudabir Kowsar",
    "React Developer",
    "React Native Developer",
    "MERN Stack Developer",
    "Full Stack Developer India",
    "JavaScript Engineer",
    "Next.js Expert",
    "Mobile App Developer",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "Freelance Developer",
    "Remote Developer",
    "Open Source Contributor",
    "Tech Blogger",
    'Software Consultant',
    "Mudabir",
    "Kowsar",
    "Khanday",
    "mudabir",
    'kowsar',
    'khanday',
  ],
  authors: [{ name: "Mudabir Kowsar Khanday" }],
  openGraph: {
    title: "Mudabir Kowsar Khanday | Full-Stack Engineer",
    description: "Expert in MERN Stack and React Native development.",
    url: "https://your-portfolio-url.com",
    siteName: "Mudabir Kowsar Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create a professional OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function page() {
  return (
    <div>
      <Hero />
      <StatsCounter />
      <TechBentoGrid />
      <WebProjects />
      <MobileShowcase />
      <ExperienceTimeline />
      <ContactForm />
    </div>
  )
}

export default page