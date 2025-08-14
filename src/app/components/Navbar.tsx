'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { BorderBeam } from './ui/border-beam';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allNavItems = [
  { href: '/', label: 'HOME' },
  { href: '/#about', label: 'ABOUT ME' },
  { href: '/#skills', label: 'SKILLS' },
  { href: '/#education', label: 'EDUCATION' },
  { href: '/#experience', label: 'EXPERIENCE' },
  { href: '/#projects', label: 'PROJECTS' },
  { href: '/#contact', label: 'CONTACT' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace(/.*#/, "");
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 300);
    }
  };

  const linkBaseStyle = 'uppercase font-medium transition-colors duration-200 ease-in-out';
  const getLinkClassName = (href: string) =>
    cn(
      linkBaseStyle,
      pathname === href ? 'text-white font-semibold' : 'text-white hover:text-purple-400'
    );

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1, duration: 0.25 }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      <div className="fixed top-4 sm:top-6 md:top-8 inset-x-0 z-50 px-4">
        <div className="bg-black/10 backdrop-blur-md border border-white/20 text-white flex items-center w-full py-5 px-4 sm:px-6 rounded-full max-w-[90%] sm:max-w-2xl lg:max-w-4xl mx-auto relative overflow-hidden">
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
            {allNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={cn(getLinkClassName(item.href), 'md:text-sm tracking-wide')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="text-white font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>

          {mounted && <BorderBeam duration={8} size={100} />}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
          >
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-7 right-6 text-white/80 hover:text-white">
              <X size={30} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {allNavItems.map((item) => (
                <motion.div key={item.href} variants={linkVariants}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={cn(getLinkClassName(item.href), 'text-2xl')}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}