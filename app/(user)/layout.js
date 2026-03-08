import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. ADVANCED SEO METADATA
export const metadata = {
  metadataBase: new URL('https://mudabir-khanday.vercel.app'), // Replace with your actual domain
  title: {
    default: "Mudabir Kowsar | Senior MERN & React Native Developer",
    template: "%s | Mudabir Kowsar"
  },
  description: "Official portfolio of Mudabir Kowsar, a specialized Full-Stack MERN and React Native developer building high-performance web and mobile applications.",
  keywords: [
    "Mudabir Kowsar",
    "Mudabir Kowsar Khanday",
    "MERN Stack Developer",
    "React Native Developer",
    "Next.js Expert",
    "Full Stack Developer India",
    "Mobile App Development",
    "JavaScript Engineer",
    "Mudabir",
    "Kowsar",
    "Khanday",
    "mudabir",
    "kowsar",
    "khanday",
  ],
  authors: [{ name: "Mudabir Kowsar" }],
  creator: "Mudabir Kowsar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudabir-khanday.vercel.app",
    title: "Mudabir Kowsar | Full-Stack MERN & React Native Developer",
    description: "Expert in building scalable web ecosystems and native mobile apps.",
    siteName: "Mudabir Kowsar Portfolio",
    images: [
      {
        url: "/image1.png", // This will be your social share preview image
        width: 1200,
        height: 630,
        alt: "Mudabir Kowsar Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudabir Kowsar | MERN & React Native Dev",
    description: "Building high-performance apps with React and React Native.",
    creator: "@your_twitter_handle",
    images: ["/image1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // 2. JSON-LD STRUCTURED DATA (Tells Google exactly who you are)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mudabir Kowsar",
    "alternateName": "Mudabir Kowsar Khanday",
    "description": "Senior Full-Stack MERN & React Native Developer",
    "url": "https://mudabir-khanday.vercel.app",
    "sameAs": [
      "https://github.com/mudabirkowsar",
      "https://www.linkedin.com/in/mudabir-kowsar/",
    ],
    "jobTitle": "Full-Stack Developer",
    "knowsAbout": ["React", "React Native", "Node.js", "MongoDB", "Next.js", "TypeScript"]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 
        min-h-screen flex flex-col selection:bg-blue-500 selection:text-white`}
      >
        <Navbar />

        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}