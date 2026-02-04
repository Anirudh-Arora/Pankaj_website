import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        {/* Subtle animated circles representing climate data */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 text-emerald-400 mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">PhD in Climate Science</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight">
            Dr. <span className="font-semibold">Pankaj Upadhayay</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Decoding Earth's Climate Systems Through
            <span className="text-emerald-400 font-medium"> Data-Driven Research</span>
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-2 text-slate-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Indian Institute of Technology Delhi</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a 
              href="#research" 
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Explore Research
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-medium rounded-full transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
}
