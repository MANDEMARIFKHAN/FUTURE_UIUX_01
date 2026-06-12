import { Dumbbell, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkItem } from '../types';

const NAV_LINKS: LinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Membership', href: '/membership' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? 'bg-black/60 backdrop-blur-md h-16' : 'bg-black/40 backdrop-blur-md h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-elite-red group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-display font-bold tracking-widest uppercase text-white flex gap-1">
            Elite<span className="text-elite-red">Fit</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`transition-colors hover:text-white ${
                location.pathname === link.href ? 'text-white border-b-2 border-elite-red pb-1' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-elite-red hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-elite-dark border-b border-white/10"
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-lg font-display uppercase tracking-widest ${
                  location.pathname === link.href ? 'text-elite-red' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-elite-red text-center hover:bg-red-600 text-white px-6 py-3 mt-4 rounded font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Join Now
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
