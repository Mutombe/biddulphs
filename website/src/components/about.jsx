import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import Chip from '@mui/material/Chip';
import { LiaAwardSolid } from "react-icons/lia";
import { GiWorld } from "react-icons/gi";
import { GiWireframeGlobe } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { HiArrowTrendingUp } from "react-icons/hi2";


export default function About() {
  const stats = [
    { label: 'Est', value: '1928', icon: <LiaAwardSolid size={32} /> },
    { label: 'Depots', value: '3', icon: <LiaPeopleCarrySolid size={32} /> },
    { label: 'Experience', value: '150+ YRS', icon: <GiWorld size={32} /> },
    { label: 'Moves', value: '2.5M', icon: <HiArrowTrendingUp size={32} /> },
  ];

  const values = [
    'Professionalism and Excellence',
    'Customer Satisfaction',
    'Safety and Security',
    'Innovation and Improvement',
    'Integrity and Transparency',
    'Environmental Responsibility',
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white py-20 md:py-32">
        {/* Hero Image Background with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="4.jpg" 
            alt="Biddulphs moving team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-green/85 to-primary-dark/90"></div>
        </div>
        
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              About <span className="text-accent-gold">Biddulphs</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Moving families and businesses with excellence since 1928
            </p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-green">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Story Section with Image */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl font-display font-bold text-primary-dark mb-6">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Biddulphs International has been moving families around the country since 1928. With over 90 years of experience
                  in the moving industry, we have established ourselves as Zimbabwe's most trusted moving and logistics company.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Starting as a small family business, we have grown to become a leading provider of comprehensive moving solutions,
                  serving thousands of families and businesses across Zimbabwe and the SADC region.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, with three strategic depots in Harare, Bulawayo, and Gweru, we continue to deliver exceptional service
                  with the same commitment to excellence that has defined us for nearly a century.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="4.jpg" 
                    alt="Biddulphs team at work" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary-dark/80 to-transparent">
                    <p className="text-white font-semibold text-lg">Nearly a century of trusted service</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <CheckCircle className="text-primary-green flex-shrink-0" size={24} />
                <span className="font-medium text-gray-800">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-green text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">FIDI Certified Excellence</h2>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Biddulphs International moving partners comply with strict international FIDI FAIM quality standards,
              ensuring the highest level of service for your international moves.
            </p>
            <Chip label="FIDI FAIM Certified" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontSize: '1rem', padding: '24px 16px', fontFamily: 'Gellix' }} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}