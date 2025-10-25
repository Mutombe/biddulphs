import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Box, Wrench, ArrowRight } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function Packing() {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-yellow-600 to-yellow-700 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Blend */}
        <div className="absolute inset-0">
          <img 
            src="/5.jpg" 
            alt="Professional packing services" 
            className="w-full h-full object-cover opacity-96 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-yellow-700/80"></div>
        </div>
        
        {/* Decorative blur element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
        
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Chip label="Professional" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
              <Chip label="Quality Materials" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Packing Services</h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Professional packing services using high-quality materials to ensure your items are protected during transit.
            </p>
            <Link to="/get-quote" className="btn-primary inline-flex items-center">
              Get Quote <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Package size={32} />, title: 'Expert Packers', desc: 'Trained packing professionals' },
              { icon: <Box size={32} />, title: 'Quality Materials', desc: 'Industry-grade packing supplies' },
              { icon: <Wrench size={32} />, title: 'Furniture Assembly', desc: 'Disassembly & reassembly' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg hover:shadow-sm transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-700">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}