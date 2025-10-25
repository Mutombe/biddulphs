import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function News() {
  const news = [
    {
      title: 'Biddulphs Expands Fleet with New Eco-Friendly Trucks',
      date: '2025-01-15',
      category: 'Company News',
      excerpt: 'We are proud to announce the addition of 5 new eco-friendly trucks to our fleet, demonstrating our commitment to environmental sustainability.',
      image: 'https://via.placeholder.com/600x400/183C28/FFFFFF?text=New+Fleet'
    },
    {
      title: 'Customer Appreciation Month',
      date: '2025-01-10',
      category: 'Promotions',
      excerpt: 'Special discounts throughout January to thank our loyal customers. Book your move this month and save up to 33%!',
      image: 'https://via.placeholder.com/600x400/EEC643/040F0F?text=Appreciation'
    },
    {
      title: 'New Storage Facility Opens in Gweru',
      date: '2025-01-05',
      category: 'Expansion',
      excerpt: 'Our new state-of-the-art storage facility in Gweru is now operational, offering enhanced security and climate-controlled units.',
      image: 'https://via.placeholder.com/600x400/183C28/FFFFFF?text=Storage'
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              News & <span className="text-accent-gold">Updates</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay informed about the latest from Biddulphs International
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Chip label={item.category} size="small" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontFamily: 'Gellix' }} />
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className="text-primary-green font-semibold hover:text-accent-gold flex items-center group">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}