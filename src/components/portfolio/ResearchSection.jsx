import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CloudRain, Thermometer, Wind, BarChart3 } from 'lucide-react';

export default function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const researchAreas = [
    {
      icon: CloudRain,
      title: "Monsoon Dynamics",
      description: "Investigating the mechanisms driving Indian Summer Monsoon variability and its predictability on seasonal to decadal timescales.",
      tags: ["ENSO", "IOD", "Teleconnections"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Thermometer,
      title: "Climate Extremes",
      description: "Analyzing the changing patterns of heatwaves, droughts, and extreme precipitation events under global warming scenarios.",
      tags: ["Attribution", "Risk Assessment", "Adaptation"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Wind,
      title: "Atmospheric Modeling",
      description: "Developing and validating regional climate models to improve projections for South Asian climate systems.",
      tags: ["WRF", "CMIP6", "Downscaling"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Climate Data Science",
      description: "Applying machine learning and statistical techniques to extract insights from large-scale climate datasets.",
      tags: ["ML/AI", "Big Data", "Pattern Recognition"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="research" className="py-24 md:py-32 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Research Focus</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-3">
            Areas of <span className="font-semibold">Expertise</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            My research sits at the intersection of climate physics, data science, and societal impact,
            aiming to bridge the gap between scientific understanding and actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-transparent overflow-hidden"
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{area.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
