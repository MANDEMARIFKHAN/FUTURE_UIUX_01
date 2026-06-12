import { Award, Target, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-widest uppercase mb-6 border-l-4 border-elite-red pl-6">
              Our <span className="text-elite-red">Story</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              Founded in 2010, Elite Fit Gym started with a simple, unapologetic mission: to create a space for individuals who are serious about their fitness. We stripped away the gimmicks and built a state-of-the-art facility focused purely on high performance, raw strength, and undeniable results.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Today, we are widely recognized as one of the premier fitness destinations, home to professional athletes, fitness models, and anyone willing to put in the work. 
            </p>

            <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
               <div>
                 <p className="font-display text-4xl text-white font-bold tracking-widest mb-1">2010</p>
                 <p className="text-elite-red text-sm uppercase tracking-widest font-semibold">Founded</p>
               </div>
               <div>
                 <p className="font-display text-4xl text-white font-bold tracking-widest mb-1">5+</p>
                 <p className="text-elite-red text-sm uppercase tracking-widest font-semibold">Locations</p>
               </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-elite-red/20 to-transparent z-10 rounded-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1400" 
               alt="Gym Interior" 
               className="rounded-xl shadow-[0_0_40px_rgba(230,57,70,0.2)] w-full h-[600px] object-cover"
             />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-elite-card border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="flex gap-6">
            <Target className="w-12 h-12 text-elite-red shrink-0" />
            <div>
              <h3 className="font-display font-bold text-3xl tracking-widest uppercase mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                To provide an unmatched training environment that empowers individuals to achieve elite physical conditioning and mental toughness through world-class equipment and expert coaching.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Award className="w-12 h-12 text-elite-red shrink-0" />
            <div>
              <h3 className="font-display font-bold text-3xl tracking-widest uppercase mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                To be the global gold standard in elite fitness facilities, inspiring a movement of uncompromised dedication to health and strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Facility Images */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl tracking-widest uppercase mb-4 text-white">The <span className="text-elite-red">Facility</span></h2>
          <p className="text-gray-400">Where champions are forged.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-lg" alt="Facility 1"/>
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-lg md:col-span-2" alt="Facility 2"/>
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-lg md:col-span-2" alt="Facility 3"/>
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-lg" alt="Facility 4"/>
        </div>
      </section>
    </PageTransition>
  );
}
