import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react';
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { TbMenu3 } from "react-icons/tb";
import SearchModal from './search';
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Local Moves', path: '/services/local-moves' },
    { name: 'International Moves', path: '/services/international-moves' },
    { name: 'Business Moves', path: '/services/business-moves' },
    { name: 'Storage', path: '/services/storage' },
    { name: 'Packing Services', path: '/services/packing' },
    { name: 'Insurance', path: '/services/insurance' },
    { name: 'Freight Services', path: '/services/freight' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Delivery Network', path: '/delivery-network' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Top Info Bar */}
      <div className="bg-primary-dark text-white py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+2638677007007" className="flex items-center space-x-2 hover:text-accent-gold transition-colors">
              <Phone size={16} />
              <span>+263 8677 007 007</span>
            </a>
            <a href="mailto:enquiries@biddulphs.net" className="flex items-center space-x-2 hover:text-accent-gold transition-colors">
              <Mail size={16} />
              <span>enquiries@biddulphs.net</span>
            </a>
          </div>
          <div className="text-neutral-silver">
            Mon-Fri: 7:30 AM - 5:00 PM | Sat: 8:00 AM - 12:00 PM
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-12 md:h-16"
                >
                  <img 
                    src="/logo.svg" 
                    alt="Biddulphs International" 
                    className="h-full w-auto"
                  />
                </motion.div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  {link.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        onClick={() => navigate('/services')}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                          location.pathname.startsWith('/services')
                            ? 'text-primary-green'
                            : 'text-gray-700 hover:text-primary-green'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                          >
                            {services.map((service, index) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block px-6 py-3 text-gray-700 hover:bg-primary-green hover:text-white transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary-green'
                          : 'text-gray-700 hover:text-primary-green'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search & CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors group"
                aria-label="Search"
              >
                <CiSearch className="w-5 h-5 text-gray-600 group-hover:text-primary-green transition-colors" />
              </motion.button>

              {/* Get Quote Button */}
              <Link
                to="/get-quote"
                className="btn-primary"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Search and Menu Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-primary-dark" />
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-primary-dark hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <TbMenu3 size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <span className="font-medium">{link.name}</span>
                          <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-1 mt-1"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-green hover:text-white rounded-lg transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'bg-primary-green text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/get-quote"
                  className="block w-full text-center btn-primary mt-4"
                >
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}