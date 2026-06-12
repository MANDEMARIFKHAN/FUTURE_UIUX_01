import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { programsInfo } from '../data';

export default function Programs() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/10 bg-elite-dark">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-left"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-5xl md:text-6xl tracking-widest uppercase mb-6"
          >
            Our <span className="text-elite-red">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            From raw strength to functional mobility, discover meticulously crafted classes designed to forge physical excellence at every level.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsInfo.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group rounded-xl overflow-hidden bg-elite-card border border-white/5 shadow-xl hover:border-elite-red/30 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-2xl tracking-widest uppercase text-white">{program.title}</h3>
                </div>
                <p className="text-gray-400 font-light mb-6 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-elite-red font-medium">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <Link to="/contact" className="text-white hover:text-elite-red transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-semibold border-b border-transparent hover:border-elite-red pb-1">
                    Join <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
}
