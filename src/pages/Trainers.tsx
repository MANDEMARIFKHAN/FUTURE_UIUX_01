import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import PageTransition from '../components/PageTransition';
import { trainers } from '../data';

export default function Trainers() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-5xl md:text-6xl tracking-widest uppercase mb-6"
          >
            Expert <span className="text-elite-red">Trainers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Meet the elite coaches dedicated to pushing your limits. Years of experience, professional certifications, and a passion for results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-elite-card rounded-xl overflow-hidden border border-white/5 relative group"
            >
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="font-display font-bold text-3xl tracking-widest uppercase text-white mb-1">{trainer.name}</h3>
                <p className="text-elite-red font-semibold text-sm tracking-widest uppercase mb-4">{trainer.role}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  {trainer.socials.instagram && <a href={trainer.socials.instagram} className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>}
                  {trainer.socials.twitter && <a href={trainer.socials.twitter} className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>}
                  {trainer.socials.facebook && <a href={trainer.socials.facebook} className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>}
                </div>
              </div>

              {/* Hover overlay stats */}
              <div className="absolute inset-0 bg-elite-dark/95 backdrop-blur-sm p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <h3 className="font-display font-bold text-3xl tracking-widest uppercase text-white mb-1">{trainer.name}</h3>
                 <p className="text-elite-red font-semibold text-sm tracking-widest uppercase mb-8">{trainer.role}</p>
                 
                 <div className="mb-6">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-semibold">Experience</p>
                    <p className="text-white text-lg font-light">{trainer.experience}</p>
                 </div>
                 
                 <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-semibold">Areas of Expertise</p>
                    <ul className="flex flex-wrap gap-2">
                      {trainer.expertise.map((exp, i) => (
                        <li key={i} className="bg-white/10 text-white px-3 py-1 text-xs uppercase tracking-wider rounded">{exp}</li>
                      ))}
                    </ul>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
