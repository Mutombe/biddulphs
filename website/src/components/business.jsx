import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, Clock, CheckCircle, ArrowRight, Briefcase, TrendingUp, Shield, Target } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function BusinessMoves() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Blended Image */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Blend */}
        <div className="absolute inset-0">
          <img 
            src="/8.jpg" 
            alt="Modern office space" 
            className="w-full h-full object-cover opacity-95 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-purple-800/80"></div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
        
        <div className="relative container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-6">
                <Chip label="Corporate" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
                <Chip label="Minimal Disruption" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
                <Chip label="Weekend Moves" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Business Relocation</h1>
              <p className="text-xl text-gray-100 leading-relaxed mb-8">
                With Biddulphs you don't simply move your office, you relocate with a minimum of disruption. 
                Complete planning and execution for seamless business moves.
              </p>
              <Link to="/get-quote" className="btn-primary inline-flex items-center">
                Get Free Quote <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            
            {/* Hero Image Mosaic */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/22.jpg" 
                    alt="Office planning" 
                    className="w-full h-56 object-cover rounded-2xl shadow-2xl"
                  />
                  <img 
                    src="/21.jpg" 
                    alt="Business team" 
                    className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/24.jpg" 
                    alt="Modern workspace" 
                    className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                  />
                  <img 
                    src="/7.jpg" 
                    alt="Moving team" 
                    className="w-full h-56 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Building2 size={32} />, title: 'Office Moves', desc: 'Complete office relocation services' },
              { icon: <Users size={32} />, title: 'Planning Support', desc: 'Dedicated project management' },
              { icon: <Clock size={32} />, title: 'Minimal Downtime', desc: 'After-hours & weekend options' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg hover:shadow-sm transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Large Image */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Strategic Business Relocation</h2>
              <p className="text-gray-600 text-lg mb-8">
                We understand that time is money. Our expert team ensures your business transition 
                happens smoothly with minimal disruption to your operations.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Target size={24} />, title: 'Strategic Planning', desc: 'Detailed timeline and logistics' },
                  { icon: <Briefcase size={24} />, title: 'Professional Execution', desc: 'Trained corporate moving specialists' },
                  { icon: <Shield size={24} />, title: 'Asset Protection', desc: 'Secure handling of equipment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-sm transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="/22.jpg" 
                  alt="Office relocation in progress" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-sm">Successful Relocations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Complete Corporate Solutions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From small offices to large corporate headquarters, we handle every detail
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: '/20.jpg', title: 'IT Infrastructure', desc: 'Specialized tech equipment handling' },
              { img: '/30.jpg', title: 'Furniture Systems', desc: 'Modular office furniture setup' },
              { img: '/28.jpg', title: 'Archive Management', desc: 'Secure document handling' },
              { img: '/27.jpg', title: 'Space Planning', desc: 'Layout and design coordination' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-48">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Checklist */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Why Choose Biddulphs for Business Moves</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Dedicated project manager assigned',
                'After-hours and weekend moving options',
                'IT and server room relocation expertise',
                'Furniture dismantling and reassembly',
                'Secure document and file handling',
                'Equipment and machinery moving',
                'Comprehensive insurance coverage',
                'Post-move support and setup'
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.05 }} 
                  className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="text-purple-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Success Stories 
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: '/api/placeholder/400/300',
                company: 'Tech Solutions Inc.',
                size: '250 employees',
                text: 'Completed a weekend move with zero downtime. The team was professional and efficient.',
                industry: 'Technology'
              },
              {
                img: '/api/placeholder/400/300',
                company: 'Finance Group Ltd.',
                size: '100 employees',
                text: 'Handled our sensitive documents with care and maintained complete confidentiality throughout.',
                industry: 'Finance'
              },
              {
                img: '/api/placeholder/400/300',
                company: 'Creative Agency',
                size: '50 employees',
                text: 'The space planning consultation helped us optimize our new office layout perfectly.',
                industry: 'Marketing'
              },
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={story.img} 
                  alt={story.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600">{story.industry}</span>
                    <span className="text-sm text-gray-500">{story.size}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{story.company}</h3>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{story.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Timeline/Process Visualization */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Proven Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Initial site survey and planning' },
                { step: '02', title: 'Planning', desc: 'Detailed timeline and logistics' },
                { step: '03', title: 'Execution', desc: 'Professional moving team' },
                { step: '04', title: 'Setup', desc: 'Complete installation and support' },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative section-padding text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Modern office building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-600/95"></div>
        </div>
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Plan Your Office Move</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your business relocation needs and create a customized moving plan
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