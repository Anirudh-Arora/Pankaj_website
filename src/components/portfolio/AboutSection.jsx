import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Award, Target, Globe } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: BookOpen, label: "Publications", value: "12+" },
    { icon: Award, label: "Citations", value: "150+" },
    { icon: Target, label: "Projects", value: "8" },
    { icon: Globe, label: "Collaborations", value: "5 Countries" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-slate-900 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-3 mb-6">
              Passionate About <span className="font-semibold">Climate Solutions</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I recently completed my PhD from the Centre for Atmospheric Sciences at IIT Delhi, 
                where I focused on understanding monsoon variability and its implications for 
                South Asian climate systems.
              </p>
              <p>
                My research combines advanced statistical methods, climate modeling, and machine 
                learning to decode complex atmospheric patterns. I'm particularly interested in 
                how climate change affects regional weather extremes and agricultural productivity.
              </p>
              <p>
                Beyond research, I'm committed to science communication and making climate 
                science accessible to policymakers and the public.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-slate-900">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
