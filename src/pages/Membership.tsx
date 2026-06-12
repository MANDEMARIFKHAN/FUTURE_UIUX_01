import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { pricingPlans } from '../data';

export default function Membership() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-5xl md:text-6xl tracking-widest uppercase mb-6"
        >
          Pricing <span className="text-elite-red">Plans</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16"
        >
          Choose the membership that fits your goals. No hidden fees, no complicated contracts. Just pure fitness.
        </motion.p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
              className={`relative bg-elite-card rounded-2xl border ${plan.recommended ? 'border-elite-red shadow-[0_0_30px_rgba(230,57,70,0.15)] py-12 md:-mt-8 md:mb-8' : 'border-white/10 py-10'} px-8 flex flex-col h-full`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-elite-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shrink-0">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-3xl uppercase tracking-widest mb-2">{plan.name}</h3>
              <div className="flex items-end justify-center gap-1 mb-8">
                <span className="text-gray-400 text-lg">₹</span>
                <span className="text-5xl font-display font-bold tracking-widest text-white leading-none">{plan.price}</span>
                <span className="text-gray-400 mb-1">{plan.frequency}</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-elite-red shrink-0 mt-0.5" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-4 rounded font-bold uppercase tracking-widest transition-colors ${plan.recommended ? 'bg-elite-red hover:bg-red-600 text-white' : 'bg-transparent border border-white hover:bg-white hover:text-black text-white'}`}
              >
                Select Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Sneak Peek */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-white/5">
        <h2 className="font-display font-bold text-4xl uppercase tracking-widest text-center mb-12">Frequently Asked <span className="text-elite-red">Questions</span></h2>
        <div className="space-y-6">
          {[
            { q: "Can I cancel my membership anytime?", a: "Yes. Our monthly plans are completely flexible with no aggressive cancellation fees. We only ask for 30 days notice." },
            { q: "Do you offer personal training?", a: "Absolutely. Personal training is included in the Elite plan, and can be added a-la-carte to Basic and Premium memberships." },
            { q: "Is the gym open 24/7?", a: "Yes, members get a key fob allowing 24/7 secure access to the main weight room and cardio deck." }
          ].map((faq, i) => (
            <div key={i} className="bg-elite-card border border-white/5 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-white">{faq.q}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
