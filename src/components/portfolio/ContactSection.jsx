import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "yourname@iitd.ac.in", href: "mailto:yourname@iitd.ac.in" },
    { icon: MapPin, label: "Location", value: "New Delhi, India", href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { icon: Github, label: "GitHub", href: "https://github.com/yourprofile" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourhandle" },
    { icon: FileText, label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-3">
            Let's <span className="font-semibold">Collaborate</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Interested in research collaboration, consulting, or just want to chat about climate science? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-900 font-medium hover:text-emerald-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm text-slate-500 mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:shadow-md transition-all"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white">
              <h3 className="font-semibold text-lg mb-2">Download CV</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Get a detailed overview of my academic background, research experience, and publications.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-emerald-700 hover:bg-emerald-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-slate-50 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-slate-50 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-slate-700 mb-2 block">Subject</label>
                <Input 
                  placeholder="What would you like to discuss?" 
                  className="bg-slate-50 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700 mb-2 block">Message</label>
                <Textarea 
                  placeholder="Your message..." 
                  rows={5}
                  className="bg-slate-50 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                />
              </div>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
