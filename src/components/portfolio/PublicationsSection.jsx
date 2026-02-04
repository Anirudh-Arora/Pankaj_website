import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FileText, Star } from 'lucide-react';

export default function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    {
      title: "Decadal variability of Indian Summer Monsoon rainfall: A dynamical perspective",
      journal: "Journal of Climate",
      year: "2025",
      authors: "Your Name, Co-author A, Co-author B",
      doi: "10.1175/JCLI-D-XX-XXXX.1",
      featured: true,
      citations: 24
    },
    {
      title: "Machine learning approaches for seasonal monsoon prediction over South Asia",
      journal: "Climate Dynamics",
      year: "2024",
      authors: "Your Name, Co-author C",
      doi: "10.1007/s00382-XXX-XXXX-X",
      featured: true,
      citations: 18
    },
    {
      title: "Attribution of extreme precipitation events to anthropogenic warming in India",
      journal: "Nature Communications",
      year: "2024",
      authors: "Co-author A, Your Name, Co-author D",
      doi: "10.1038/s41467-XXX-XXXXX-X",
      featured: false,
      citations: 32
    },
    {
      title: "Regional climate model validation for the Indian subcontinent using CMIP6 forcings",
      journal: "Atmospheric Research",
      year: "2023",
      authors: "Your Name, Co-author B, Co-author E",
      doi: "10.1016/j.atmosres.XXXX.XXXXXX",
      featured: false,
      citations: 15
    },
    {
      title: "Impact of ENSO on winter fog frequency over the Indo-Gangetic Plains",
      journal: "Geophysical Research Letters",
      year: "2023",
      authors: "Co-author F, Your Name",
      doi: "10.1029/XXXXGLXXXXXX",
      featured: false,
      citations: 11
    }
  ];

  return (
    <section id="publications" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Publications</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-3">
            Selected <span className="font-semibold">Works</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Peer-reviewed publications in leading climate science journals
          </p>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                pub.featured 
                  ? 'bg-gradient-to-r from-slate-50 to-emerald-50/50 border-emerald-200 hover:border-emerald-300' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`hidden sm:flex w-12 h-12 rounded-lg items-center justify-center flex-shrink-0 ${
                  pub.featured ? 'bg-emerald-100' : 'bg-slate-100'
                }`}>
                  <FileText className={`w-5 h-5 ${pub.featured ? 'text-emerald-600' : 'text-slate-500'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{pub.authors}</p>
                    </div>
                    {pub.featured && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex-shrink-0">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
                    <span className="font-medium text-slate-700">{pub.journal}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-slate-500">{pub.year}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-slate-500">{pub.citations} citations</span>
                    <a 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      View Paper
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a 
            href="https://scholar.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            View all on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
