import { Dumbbell, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <Dumbbell className="w-8 h-8 text-elite-red group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display font-bold tracking-widest text-2xl uppercase text-white flex gap-1">
              Elite<span className="text-elite-red">Fit</span>
            </span>
          </Link>
          <p className="text-gray-400 mb-6 font-light leading-relaxed">
            Transforming bodies and elevating lives. Join the premier fitness destination and push beyond your limits.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-elite-red transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-elite-red transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-elite-red transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans font-black text-xl italic tracking-tighter mb-6 text-white uppercase">Menu</h4>
          <ul className="space-y-3 font-light text-gray-400">
            <li><Link to="/about" className="hover:text-elite-red transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-elite-red transition-colors">Programs</Link></li>
            <li><Link to="/trainers" className="hover:text-elite-red transition-colors">Expert Trainers</Link></li>
            <li><Link to="/membership" className="hover:text-elite-red transition-colors">Pricing Plans</Link></li>
            <li><Link to="/contact" className="hover:text-elite-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-sans font-black text-xl italic tracking-tighter mb-6 text-white uppercase">Location</h4>
          <ul className="space-y-4 font-light text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-elite-red shrink-0 mt-0.5" />
              <span>Arif Gym Center, Near Arts College,<br/>Kadiri, Andhra Pradesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-elite-red shrink-0" />
              <span>9908869621</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-elite-red shrink-0" />
              <span>khana388846@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-sans font-black text-xl italic tracking-tighter mb-6 text-white uppercase">Newsletter</h4>
          <p className="text-gray-400 mb-4 font-light">Subscribe for fitness tips, updates, and exclusive offers.</p>
          <form className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-elite-card border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-elite-red transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-elite-red hover:bg-red-600 text-white py-3 rounded font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500 font-light">
        <p>&copy; {new Date().getFullYear()} Elite Fit Gym. All rights reserved.</p>
      </div>
    </footer>
  );
}
