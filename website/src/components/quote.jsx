import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Truck } from 'lucide-react';
import { toast } from 'sonner';
import Chip from '@mui/material/Chip';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    moveFrom: '',
    moveTo: '',
    moveDate: '',
    propertySize: '',
    additionalInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Quote request received! We\'ll contact you within 24 hours.');
    setFormData({
      name: '', email: '', phone: '', service: '', moveFrom: '',
      moveTo: '', moveDate: '', propertySize: '', additionalInfo: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    'Local Move',
    'International Move',
    'Business Relocation',
    'Storage',
    'Packing Services',
    'Freight Services'
  ];

  const propertySizes = [
    'Studio/1 Bedroom',
    '2-3 Bedrooms',
    '4+ Bedrooms',
    'Office/Commercial',
    'Other'
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-center mb-6">
              <Chip label="Free Quote" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontSize: '1rem', padding: '20px 16px', fontFamily: 'Gellix' }} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Get Your <span className="text-accent-gold">Free Quote</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Fill out the form below and we'll provide you with a detailed quote within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <FileText size={24} />, title: 'Free Quote', desc: 'No obligation estimate' },
              { icon: <Truck size={24} />, title: 'Fast Response', desc: 'Within 24 hours' },
              { icon: <Send size={24} />, title: 'Easy Process', desc: 'Simple online form' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-green">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="+263..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Moving From *</label>
                  <input
                    type="text"
                    name="moveFrom"
                    value={formData.moveFrom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="City or Area"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Moving To *</label>
                  <input
                    type="text"
                    name="moveTo"
                    value={formData.moveTo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="City or Area"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Move Date *</label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Size *</label>
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                  >
                    <option value="">Select size</option>
                    {propertySizes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
                  placeholder="Any special requirements or additional details..."
                />
              </div>

              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center text-lg">
                <Send size={20} className="mr-2" />
                Request Quote
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to be contacted by Biddulphs International regarding your quote request.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-accent-gold/10 border-l-4 border-accent-gold rounded-lg p-6"
          >
            <h3 className="font-bold text-primary-dark mb-2">💰 Save Up To 33%!</h3>
            <p className="text-gray-700">
              Moving during off-peak periods (mid-month) can significantly reduce your moving costs. 
              Mention your flexibility in the additional information section for special rates!
            </p>
          </motion.div>
        </div>
      </section>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-primary-dark text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
            >
              ↑
            </motion.button>
    </div>
  );
}