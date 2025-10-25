import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function Footer() {
  const services = [
    { name: 'Local Moves', path: '/services/local-moves' },
    { name: 'International Moves', path: '/services/international-moves' },
    { name: 'Business Moves', path: '/services/business-moves' },
    { name: 'Storage Facilities', path: '/services/storage' },
    { name: 'Packing Services', path: '/services/packing' },
    { name: 'Transit Insurance', path: '/services/insurance' },
    { name: 'Freight Services', path: '/services/freight' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Delivery Network', path: '/delivery-network' },
    { name: 'FAQ', path: '/faq' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Get Quote', path: '/get-quote' },
  ];

  const stats = [
    { label: 'Established', value: '1928' },
    { label: 'Branches', value: '3' },
    { label: 'Experience', value: '150+ YRS' },
    { label: 'Local Moves', value: '2.5M' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Stats Bar */}
      <div className="border-b border-gray-700">
        <div className="container-custom py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/logo.svg" 
              alt="Biddulphs International" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Biddulphs International has been moving families around the country since 1928. 
              Providing professional, reliable moving and logistics services.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent-gold transition-colors text-sm flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-accent-gold transition-colors text-sm flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+2638677007007" className="flex items-start space-x-3 text-gray-400 hover:text-accent-gold transition-colors text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div>+263 8677 007 007</div>
                  <div>+263 242 620 751</div>
                </div>
              </a>
              <a href="mailto:enquiries@biddulphs.net" className="flex items-start space-x-3 text-gray-400 hover:text-accent-gold transition-colors text-sm">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>enquiries@biddulphs.net</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>15 Craster Road, Southerton, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon-Fri: 7:30 AM - 5:00 PM</div>
                  <div>Sat: 8:00 AM - 12:00 PM</div>
                </div>
              </div>
            </div>

            {/* Service Area Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip label="Zimbabwe" size="small" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontFamily: 'Gellix' }} />
              <Chip label="SADC Region" size="small" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontFamily: 'Gellix' }} />
              <Chip label="International" size="small" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontFamily: 'Gellix' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Biddulphs International. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>VAT: 220182776</span>
              <span>|</span>
              <span>Reg: 399/81</span>
              <span>|</span>
              <span>TIN: 2000031403</span>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/confidentiality" className="text-gray-400 hover:text-accent-gold transition-colors">
                Confidentiality
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}