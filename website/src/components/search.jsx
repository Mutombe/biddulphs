import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Mail, Truck, Package, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Searchable content for Biddulphs
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'Biddulphs International - Your trusted moving and logistics partner',
      keywords: ['home', 'main', 'landing', 'start', 'biddulphs'],
      category: 'Page'
    },
    {
      title: 'Services',
      path: '/services',
      description: 'Explore our comprehensive moving and logistics services',
      keywords: ['services', 'offerings', 'solutions', 'what we do'],
      category: 'Page'
    },
    {
      title: 'Local Moves',
      path: '/services/local-moves',
      description: 'Residential and office moves within your city',
      keywords: ['local', 'moves', 'moving', 'relocation', 'city', 'residential', 'domestic'],
      category: 'Service'
    },
    {
      title: 'International Moves',
      path: '/services/international-moves',
      description: 'Professional international relocation services',
      keywords: ['international', 'overseas', 'global', 'abroad', 'worldwide', 'export'],
      category: 'Service'
    },
    {
      title: 'Business Moves',
      path: '/services/business-moves',
      description: 'Office and commercial relocation services',
      keywords: ['business', 'office', 'commercial', 'corporate', 'company', 'workplace'],
      category: 'Service'
    },
    {
      title: 'Storage Solutions',
      path: '/services/storage',
      description: 'Secure storage facilities for your belongings',
      keywords: ['storage', 'warehouse', 'secure', 'keep', 'store', 'facility'],
      category: 'Service'
    },
    {
      title: 'Packing Services',
      path: '/services/packing',
      description: 'Professional packing and unpacking services',
      keywords: ['packing', 'pack', 'wrap', 'box', 'materials', 'unpacking'],
      category: 'Service'
    },
    {
      title: 'Insurance',
      path: '/services/insurance',
      description: 'Comprehensive insurance coverage for your move',
      keywords: ['insurance', 'protection', 'coverage', 'safety', 'secure'],
      category: 'Service'
    },
    {
      title: 'Freight Services',
      path: '/services/freight',
      description: 'Reliable freight and cargo transportation',
      keywords: ['freight', 'cargo', 'shipping', 'transport', 'delivery'],
      category: 'Service'
    },
    {
      title: 'Delivery Network',
      path: '/delivery-network',
      description: 'Our extensive delivery and logistics network',
      keywords: ['delivery', 'network', 'coverage', 'locations', 'reach'],
      category: 'Page'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'Learn about Biddulphs International and our history',
      keywords: ['about', 'company', 'history', 'team', 'mission', 'vision', 'who we are'],
      category: 'Page'
    },
    {
      title: 'FAQ',
      path: '/faq',
      description: 'Frequently asked questions about our services',
      keywords: ['faq', 'questions', 'answers', 'help', 'support', 'information'],
      category: 'Page'
    },
    {
      title: 'News',
      path: '/news',
      description: 'Latest news and updates from Biddulphs',
      keywords: ['news', 'blog', 'updates', 'articles', 'latest', 'announcements'],
      category: 'Page'
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with Biddulphs International',
      keywords: ['contact', 'reach', 'location', 'address', 'phone', 'email', 'map'],
      category: 'Page'
    },
    {
      title: 'Get A Quote',
      path: '/get-quote',
      description: 'Request a free moving quote',
      keywords: ['quote', 'estimate', 'price', 'cost', 'request', 'free'],
      category: 'Action'
    },
    {
      title: 'Phone: +263 8677 007 007',
      path: 'tel:+2638677007007',
      description: 'Call us for inquiries and quotes',
      keywords: ['phone', 'call', 'telephone', 'contact', 'reach'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Email: enquiries@biddulphs.net',
      path: 'mailto:enquiries@biddulphs.net',
      description: 'Send us an email for inquiries',
      keywords: ['email', 'mail', 'message', 'contact', 'write'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Business Hours',
      path: '/contact',
      description: 'Mon-Fri: 7:30 AM - 5:00 PM | Sat: 8:00 AM - 12:00 PM',
      keywords: ['hours', 'open', 'time', 'schedule', 'when', 'business hours'],
      category: 'Info'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Service':
        return <Truck className="w-4 h-4" />;
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      case 'Info':
        return <Clock className="w-4 h-4" />;
      case 'Action':
        return <Package className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Service':
        return 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100';
      case 'Contact':
        return 'bg-yellow-50 text-yellow-700 group-hover:bg-yellow-100';
      case 'Info':
        return 'bg-blue-50 text-blue-700 group-hover:bg-blue-100';
      case 'Action':
        return 'bg-green-50 text-green-700 group-hover:bg-green-100';
      default:
        return 'bg-gray-50 text-gray-700 group-hover:bg-gray-100';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-20"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                <Search className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, pages, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-400 text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-emerald-600" />
                    </div>
                    <p className="text-gray-600 font-medium mb-2">
                      Start searching...
                    </p>
                    <p className="text-gray-400 text-sm">
                      Try searching for services like "local moves", "storage", or "insurance"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                        />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-3">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 hover:bg-emerald-50/50 transition-colors duration-200 group"
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full flex-shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 hover:bg-emerald-50/50 transition-colors duration-200 group"
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full flex-shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 font-medium mb-1">No results found</p>
                    <p className="text-gray-400 text-sm">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div className="border-t border-gray-200 px-4 py-3 bg-emerald-50/30">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↵</kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">ESC</kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;