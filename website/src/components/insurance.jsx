import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, CheckCircle, ArrowRight, Award, Clock, Users, TrendingUp, Phone } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function PackingInsurance() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Blended Image */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Blend */}
        <div className="absolute inset-0">
          <img 
            src="/9.jpg" 
            alt="Insurance protection" 
            className="w-full h-full object-cover opacity-95 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-indigo-800/80"></div>
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
              <Chip label="All-Risk Coverage" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
              <Chip label="Door-to-Door" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Transit Insurance</h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Comprehensive insurance coverage for your peace of mind. All-risk, door-to-door coverage with competitive rates.
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

      {/* Stats Section - Inspired by achievements design */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">PROTECTION YOU CAN TRUST</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Our Insurance Stands Out</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With decades of experience and thousands of satisfied customers, we provide the most comprehensive coverage in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                number: '98%', 
                label: 'Claims Approved', 
                desc: 'Fast and fair claims processing',
                icon: <CheckCircle size={24} />,
                color: 'from-indigo-500 to-indigo-600'
              },
              { 
                number: '24/7', 
                label: 'Support Available', 
                desc: 'Round-the-clock assistance',
                icon: <Clock size={24} />,
                color: 'from-blue-500 to-blue-600'
              },
              { 
                number: '50K+', 
                label: 'Items Insured', 
                desc: 'Protecting what matters most',
                icon: <Shield size={24} />,
                color: 'from-purple-500 to-purple-600'
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="relative bg-white m-1 rounded-xl p-6 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Grid - Inspired by lifestyle cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Complete Coverage Package</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'All-Risk Protection',
                desc: 'Comprehensive door-to-door coverage for all your belongings',
                icon: <Shield size={32} />,
                color: 'bg-indigo-100',
                textColor: 'text-indigo-600',
                image: '/api/placeholder/400/300'
              },
              {
                title: 'Replacement Value',
                desc: 'Full replacement cost coverage, not depreciated value',
                icon: <TrendingUp size={32} />,
                color: 'bg-blue-100',
                textColor: 'text-blue-600',
                image: '/api/placeholder/400/300'
              },
              {
                title: 'Zero Deductibles',
                desc: 'No out-of-pocket costs when filing claims',
                icon: <Award size={32} />,
                color: 'bg-purple-100',
                textColor: 'text-purple-600',
                image: '/api/placeholder/400/300'
              },
              {
                title: 'Easy Claims Process',
                desc: 'Simple, straightforward claims with dedicated support',
                icon: <FileText size={32} />,
                color: 'bg-green-100',
                textColor: 'text-green-600',
                image: '/api/placeholder/400/300'
              },
              {
                title: 'International Coverage',
                desc: 'Protection across borders for overseas moves',
                icon: <Users size={32} />,
                color: 'bg-orange-100',
                textColor: 'text-orange-600',
                image: '/api/placeholder/400/300'
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock assistance whenever you need it',
                icon: <Phone size={32} />,
                color: 'bg-pink-100',
                textColor: 'text-pink-600',
                image: '/api/placeholder/400/300'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg shadow-2xl transition-shadow group cursor-pointer"
              >
                <div className={`${item.color} p-6 flex items-center justify-center h-40 relative overflow-hidden`}>
                  <div className={`${item.textColor} transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered Section - Bento Box Style */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">COVERAGE DETAILS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What's Protected</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our all-risk insurance policy covers your belongings from the moment they're packed until they're safely delivered to your new location.
                </p>
                <Link to="/get-quote" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                  Get a Custom Quote <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/31.jpg" 
                  alt="Insurance coverage" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Furniture and household items',
                'Electronics and appliances',
                'Artwork and collectibles',
                'Documents and valuables',
                'Antiques and heirlooms',
                'Clothing and personal items',
                'Kitchen and dining items',
                'Outdoor and garden equipment'
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.05 }} 
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-sm transition-shadow"
                >
                  <CheckCircle className="text-indigo-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">How Our Insurance Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Get a Quote', 
                  desc: 'Provide details about your move and items to insure',
                  icon: <FileText size={24} />
                },
                { 
                  step: '02', 
                  title: 'Choose Coverage', 
                  desc: 'Select the coverage level that fits your needs',
                  icon: <Shield size={24} />
                },
                { 
                  step: '03', 
                  title: 'Enjoy Peace of Mind', 
                  desc: 'Move with confidence knowing you\'re protected',
                  icon: <CheckCircle size={24} />
                },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 -ml-4"></div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10 shadow-lg">
                    {phase.step}
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    {phase.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Protected move" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-600/95"></div>
        </div>
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Protect Your Move?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free insurance quote and move with complete peace of mind
            </p>
            <Link to="/get-quote" className="btn-primary bg-accent-gold text-primary-dark inline-flex items-center">
              Get Free Quote <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}