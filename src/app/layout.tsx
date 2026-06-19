import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://elan-dev.vercel.app"),
  title:
    "Elanchezhian M | Full Stack Developer, Software Engineer & Portfolio",
  description:
    "Elanchezhian M – Full Stack Developer & Software Engineer specializing in modern web applications, AI integrations, and scalable solutions. View portfolio, skills, and projects in JavaScript, Python, and cloud platforms.",
  keywords: [
    "Elanchezhian M",
    "Full Stack Developer",
    "Software Developer",
    "JavaScript Developer",
    "Python Developer",
    "Next.js Portfolio",
    "React Developer",
    "Web Developer Portfolio",
    "Freelance Software Engineer",
    "AI Integrations Developer",
  ],
  alternates: {
    canonical: "https://elan-dev.vercel.app/",
  },
  openGraph: {
    title:
      "Elanchezhian M | Full Stack Developer, Software Engineer & Portfolio",
    description:
      "Full Stack Developer & Software Engineer specializing in modern web apps, AI integrations, and scalable solutions.",
    url: "https://elan-dev.vercel.app/",
    siteName: "Elanchezhian M Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Elanchezhian M Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Elanchezhian M | Full Stack Developer, Software Engineer & Portfolio",
    description:
      "Full Stack Developer & Software Engineer specializing in modern web applications, AI integrations, and scalable solutions.",
    images: ["/og-image.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <StarsCanvas />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
