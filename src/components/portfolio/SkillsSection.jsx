import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming & Analysis",
      skills: ["Python", "R", "MATLAB", "NCL", "Fortran", "Shell Scripting"]
    },
    {
      title: "Climate Tools",
      skills: ["WRF", "CESM", "CDO", "NCO", "GrADS", "Panoply"]
    },
    {
      title: "Data Science",
      skills: ["Machine Learning", "Deep Learning", "Statistical Analysis", "Time Series", "Spatial Analysis"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["xarray", "pandas", "scikit-learn", "TensorFlow", "cartopy", "matplotlib"]
    }
  ];

  const tools = [
    { name: "Python", level: 95 },
    { name: "Climate Modeling", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Visualization", level: 92 },
    { name: "Scientific Writing", level: 88 }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-medium text-sm tracking-wider uppercase">Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
            Tools & <span className="font-semibold">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {skillCategories.map((category, index) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Core Competencies</h3>
            {tools.map((tool, index) => (
              <div key={tool.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">{tool.name}</span>
                  <span className="text-emerald-400">{tool.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tool.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="mt-10 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <h4 className="text-white font-semibold mb-3">Computing Resources</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experience with HPC clusters including IITD HPC, PARAM Siddhi-AI, 
                and cloud computing platforms (AWS, Google Cloud) for large-scale climate simulations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
