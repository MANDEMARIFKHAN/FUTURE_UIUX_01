import { ArrowRight, CheckCircle2, ChevronRight, Play, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { pricingPlans, programsInfo, testimonials, trainers } from '../data';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544433817-14e23fac7cb6?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elite-dark via-elite-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start w-full gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/5 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full mb-6 w-fit">
              <span className="w-2 h-2 bg-elite-red rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-elite-red">Elite Performance Center</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] uppercase mb-6 tracking-widest drop-shadow-lg text-white">
              Transform Your Body.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Elevate Your Life.</span>
            </h1>
            
            <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed font-light">
              Experience fitness in its most refined form. Professional-grade equipment, olympic-level coaching, and a community of high-performers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-elite-red text-white font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all"
              >
                Claim Free Trial <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/programs" 
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold uppercase tracking-widest rounded flex items-center justify-center transition-all"
              >
                Explore Programs
              </Link>
            </div>

            {/* Stats inline with hero */}
            <div className="flex flex-wrap gap-8 md:gap-12 text-left">
              <div>
                <div className="text-3xl font-black text-white">2.5k+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Active Members</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Pro Trainers</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-black text-white">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Years Legacy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-widest uppercase mb-6 border-l-4 border-elite-red pl-6">
              Why Choose <br/>
              <span className="text-elite-red">Elite Fit</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              We aren't just a gym; we are a dedicated community pushing boundaries. Our state-of-the-art facility is equipped with exclusive, high-end gear, and our trainers are world-class professionals committed to your success.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Premium equipment from top brands',
                'Tailored personal training programs',
                'Luxury locker rooms & spa facilities',
                'Comprehensive nutrition guidance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-elite-red shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-elite-red font-medium tracking-wide uppercase hover:text-white transition-colors">
              Learn More About Us <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" 
              alt="Gym Overview" 
              className="rounded-xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -left-6 bg-elite-red text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full"><Play fill="currentColor" className="w-6 h-6 ml-0.5" /></div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm">Virtual Tour</p>
                  <p className="text-xs font-light text-white/80">See our facility</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-elite-card border-y border-white/5 mx-auto px-6 w-full relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-widest mb-4">Member <span className="text-elite-red">Stories</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div 
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-elite-dark border border-white/10 p-8 rounded-xl"
              >
                <div className="flex gap-1 mb-6 text-yellow-500">
                   {[...Array(test.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-300 font-light italic leading-relaxed mb-8">"{test.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-white uppercase tracking-wider text-sm">{test.name}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-widest mb-2">Inside <span className="text-elite-red">Elite Fit</span></h2>
              <p className="text-gray-400 font-light">Train in a world-class environment.</p>
            </div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=400" className="w-full h-48 md:h-64 object-cover rounded shadow-lg transition-transform hover:scale-105" alt="Gym weights"/>
           <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" className="w-full h-48 md:h-64 object-cover rounded shadow-lg transition-transform hover:scale-105" alt="Gym interior"/>
           <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400" className="w-full h-48 md:h-64 object-cover rounded shadow-lg transition-transform hover:scale-105" alt="Gym equipment"/>
           <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" className="w-full h-48 md:h-64 object-cover rounded shadow-lg transition-transform hover:scale-105" alt="Trainer checking phone"/>
         </div>
      </section>

      {/* BMI Calculator & Contact Banner */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-widest mb-6">Calculate Your <span className="text-elite-red">BMI</span></h2>
            <p className="text-gray-400 font-light mb-8">
              Use our quick BMI calculator to determine your body mass index and understand your starting point. Our expert trainers use these metrics to craft your personalized workout and nutrition plans.
            </p>
            <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <input type="number" placeholder="Height / cm" className="w-full bg-elite-dark border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-elite-red text-white transition-colors" />
                 </div>
                 <div>
                   <input type="number" placeholder="Weight / kg" className="w-full bg-elite-dark border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-elite-red text-white transition-colors" />
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <input type="number" placeholder="Age" className="w-full bg-elite-dark border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-elite-red text-white transition-colors" />
                 </div>
                 <div>
                   <select className="w-full bg-elite-dark border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-elite-red text-gray-400 font-light appearance-none transition-colors">
                     <option value="">Sex</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                   </select>
                 </div>
               </div>
               <button type="button" onClick={() => alert('BMI functionality would execute here.')} className="w-full bg-transparent border border-elite-red text-elite-red hover:bg-elite-red hover:text-white py-3 rounded font-bold uppercase tracking-widest transition-colors mt-4">
                 Calculate
               </button>
            </form>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-elite-red/10 rounded-xl transform translate-x-4 translate-y-4"></div>
             <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" alt="BMI Measurement" className="w-full h-[400px] object-cover rounded-xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-elite-red py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1400')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest mb-6 text-white text-shadow">Ready to Start Your Journey?</h2>
          <p className="text-white/90 text-lg font-light mb-10 max-w-2xl mx-auto">
            Take the first step towards a stronger, healthier you. Join our elite community today.
          </p>
          <Link to="/contact" className="inline-block bg-white text-elite-red hover:bg-elite-dark hover:text-white px-10 py-5 rounded text-lg font-bold uppercase tracking-widest transition-all shadow-xl">
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
