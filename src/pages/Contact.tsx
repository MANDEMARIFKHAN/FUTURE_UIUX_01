import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappNumber = '919908869621';
    const whatsappMessage = `New appointment request from ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'N/A'}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-5xl md:text-6xl tracking-widest uppercase mb-6"
          >
            Get In <span className="text-elite-red">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
             Ready to transform? Book a consultation, claim your free trial, or ask us any questions about our memberships.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="bg-elite-card border border-white/5 p-8 md:p-10 rounded-xl"
          >
            <h3 className="font-display font-bold text-3xl tracking-widest uppercase mb-8 text-white">Send a Message</h3>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500 text-green-400 p-6 rounded text-center">
                <p className="font-bold text-lg mb-2">Message Received!</p>
                <p className="font-light">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-elite-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-elite-red transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-elite-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Phone Optional</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-elite-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-elite-red transition-colors"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-elite-red hover:bg-red-600 text-white py-4 rounded font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-col gap-10"
          >
             <div>
                <h3 className="font-display font-bold text-3xl tracking-widest uppercase mb-8 text-white">Location & Hours</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-elite-dark border border-white/10 p-3 rounded shrink-0">
                      <MapPin className="w-6 h-6 text-elite-red" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase tracking-wider mb-1">Address</p>
                      <p className="text-gray-400 font-light text-lg">Arif Gym Center, Near Arts College,<br/>Kadiri, Andhra Pradesh</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-elite-dark border border-white/10 p-3 rounded shrink-0">
                      <Phone className="w-6 h-6 text-elite-red" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-gray-400 font-light text-lg">9908869621</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-elite-dark border border-white/10 p-3 rounded shrink-0">
                      <Mail className="w-6 h-6 text-elite-red" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase tracking-wider mb-1">Email</p>
                      <p className="text-gray-400 font-light text-lg">khana388846@gmail.com</p>
                    </div>
                  </li>
                </ul>
             </div>

             <div className="bg-elite-card border border-white/5 p-8 rounded-xl flex-grow">
               <h4 className="font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-4">Business Hours</h4>
               <ul className="space-y-3 font-light text-gray-400">
                 <li className="flex justify-between"><span>Monday - Friday</span><span className="text-white">24 Hours (Keycard)</span></li>
                 <li className="flex justify-between"><span>Saturday</span><span className="text-white">24 Hours (Keycard)</span></li>
                 <li className="flex justify-between"><span>Sunday</span><span className="text-white">24 Hours (Keycard)</span></li>
                 <li className="flex justify-between mt-4 pt-4 border-t border-white/10"><span>Staffed Hours</span><span className="text-white">6:00 AM - 10:00 PM</span></li>
               </ul>
               <a href="https://wa.me/919908869621" target="_blank" rel="noreferrer" className="mt-8 block text-center w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-3 rounded font-bold uppercase tracking-widest transition-colors mb-2">
                 Chat on WhatsApp
               </a>
             </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
