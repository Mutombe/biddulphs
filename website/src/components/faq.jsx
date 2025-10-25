import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, TrendingUp, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function AdvancedFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [helpfulVotes, setHelpfulVotes] = useState({});

  const faqs = [
    {
      category: 'General',
      icon: '🏢',
      color: 'from-blue-500 to-blue-600',
      questions: [
        { 
          q: 'How long have you been in business?', 
          a: 'Biddulphs International has been serving Zimbabwe since 1928, with over 95 years of experience. We are proud to be one of the oldest and most trusted moving companies in the region.', 
          popular: true,
          tags: ['history', 'experience']
        },
        { 
          q: 'Are you licensed and insured?', 
          a: 'Yes, we are fully licensed and insured. All our moves are covered by comprehensive insurance to protect your belongings throughout the entire moving process.',
          popular: true,
          tags: ['insurance', 'safety']
        },
        { 
          q: 'What areas do you serve?', 
          a: 'We serve all areas across Zimbabwe and extend our services throughout the SADC region for international moves. Our network covers major cities and remote locations.',
          tags: ['coverage', 'locations']
        },
      ]
    },
    {
      category: 'Pricing',
      icon: '💰',
      color: 'from-green-500 to-green-600',
      questions: [
        { 
          q: 'How do you charge for moves?', 
          a: 'Pricing depends on factors like distance, volume, and services required. We consider the size of your home, amount of furniture, packing needs, and destination. Contact us for a free, no-obligation quote.',
          popular: true,
          tags: ['cost', 'quote']
        },
        { 
          q: 'Can I save money on my move?', 
          a: 'Yes! Moving during off-peak periods (mid-month) can save you up to 33% on your move. We also offer discounts for flexible moving dates and partial packing services.',
          tags: ['savings', 'discounts']
        },
        { 
          q: 'Are there any hidden fees?', 
          a: 'No, we provide transparent pricing with no hidden costs. Your quote includes all agreed services. Any additional services requested will be discussed and approved before being added.',
          tags: ['transparency', 'fees']
        },
        { 
          q: 'What payment methods do you accept?', 
          a: 'We accept cash, bank transfers, mobile money (EcoCash, OneMoney), and major credit cards. Payment terms will be discussed during your quote consultation.',
          tags: ['payment', 'methods']
        },
      ]
    },
    {
      category: 'Services',
      icon: '📦',
      color: 'from-purple-500 to-purple-600',
      questions: [
        { 
          q: 'Do you provide packing services?', 
          a: 'Yes, we offer professional packing services with high-quality materials. Our experienced team can pack everything from delicate items to large furniture, ensuring safe transport.',
          popular: true,
          tags: ['packing', 'materials']
        },
        { 
          q: 'Can you store my belongings?', 
          a: 'Yes, we have modern, secure storage facilities in Harare, Bulawayo, and Gweru. Our climate-controlled units are monitored 24/7 and available for short-term or long-term storage.',
          tags: ['storage', 'facilities']
        },
        { 
          q: 'Do you handle international moves?', 
          a: 'Yes, we are FIDI certified and handle international moves worldwide with our global partners. We manage all customs documentation and ensure smooth border crossings.',
          popular: true,
          tags: ['international', 'FIDI']
        },
        { 
          q: 'Can you move special items like pianos or artwork?', 
          a: 'Absolutely! We have specialized equipment and trained staff for moving delicate and valuable items including pianos, artwork, antiques, and safes.',
          tags: ['special items', 'equipment']
        },
      ]
    },
    {
      category: 'Booking',
      icon: '📅',
      color: 'from-orange-500 to-orange-600',
      questions: [
        { 
          q: 'How far in advance should I book?', 
          a: 'We recommend booking at least 2-4 weeks in advance, especially during peak moving season (December-January). However, we can accommodate last-minute moves when possible.',
          tags: ['timing', 'scheduling']
        },
        { 
          q: 'Can I change my moving date?', 
          a: 'Yes, we understand plans change. Contact us as soon as possible to reschedule. Changes made more than 7 days before your move are free of charge.',
          tags: ['flexibility', 'changes']
        },
        { 
          q: 'What happens on moving day?', 
          a: 'Our team arrives at the scheduled time, conducts a final walkthrough, carefully loads your items, and transports them to your new location. We unload and can help with basic furniture placement.',
          tags: ['process', 'moving day']
        },
      ]
    },
  ];

  // Get all categories
  const categories = ['All', ...faqs.map(f => f.category)];

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs
      .map(category => ({
        ...category,
        questions: category.questions.filter(faq => {
          const matchesSearch = searchTerm === '' || 
            faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
          
          const matchesCategory = selectedCategory === 'All' || category.category === selectedCategory;
          
          return matchesSearch && matchesCategory;
        })
      }))
      .filter(category => category.questions.length > 0);
  }, [searchTerm, selectedCategory]);

  // Get popular questions
  const popularQuestions = useMemo(() => {
    return faqs
      .flatMap((category, catIndex) => 
        category.questions
          .map((q, qIndex) => ({ ...q, category: category.category, catIndex, qIndex }))
          .filter(q => q.popular)
      )
      .slice(0, 3);
  }, []);

  const handleVote = (index, type) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [index]: type
    }));
  };

  const totalQuestions = faqs.reduce((sum, cat) => sum + cat.questions.length, 0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-64 h-64 bg-accent-gold rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green rounded-full blur-3xl"
          />
        </div>

        <div className="relative container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <HelpCircle size={20} />
              <span className="text-sm font-medium">Knowledge Center</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Frequently Asked <span className="text-accent-gold">Questions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our moving services
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 justify-center text-sm"
            >
              <div className="flex items-center gap-2">
                <Star className="text-accent-gold fill-accent-gold" size={18} />
                <span>{totalQuestions}+ Questions Answered</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <TrendingUp className="text-accent-gold" size={18} />
                <span>Updated Weekly</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container-custom py-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-6"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search questions, answers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none transition-colors text-gray-700"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-green text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'All' ? '🔍 ' : faqs.find(f => f.category === category)?.icon + ' '}
                  {category}
                  {category !== 'All' && (
                    <span className="ml-1 text-xs opacity-75">
                      ({faqs.find(f => f.category === category)?.questions.length})
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions Section */}
      {selectedCategory === 'All' && !searchTerm && (
        <section className="section-padding bg-gradient-to-br from-accent-gold/5 to-primary-green/5">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-accent-gold/10 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="text-accent-gold" size={18} />
                <span className="text-sm font-semibold text-primary-dark">Most Popular</span>
              </div>
              <h2 className="text-3xl font-bold text-primary-dark">
                Top Questions from Our Customers
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {popularQuestions.map((faq, idx) => {
                const index = 'popular-' + idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-green"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-lg flex items-center justify-center">
                        <Star className="text-white fill-white" size={20} />
                      </div>
                      <h3 className="font-semibold text-primary-dark flex-1">{faq.q}</h3>
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-gray-600 leading-relaxed"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {openIndex !== index && (
                      <p className="text-sm text-gray-500 mt-2">Click to read more →</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Search className="mx-auto mb-4 text-gray-300" size={64} />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No questions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </motion.div>
          ) : (
            filteredFaqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-dark flex items-center gap-3">
                      {category.category}
                    </h2>
                    <p className="text-sm text-gray-500">{category.questions.length} questions</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const index = catIndex * 100 + qIndex;
                    const isOpen = openIndex === index;
                    const vote = helpfulVotes[index];

                    return (
                      <motion.div
                        key={qIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: qIndex * 0.05 }}
                        className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors group"
                        >
                          <div className="flex items-start gap-3 flex-1 pr-4">
                            <motion.div
                              animate={{ rotate: isOpen ? 90 : 0 }}
                              className="flex-shrink-0 w-6 h-6 bg-primary-green/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-primary-green/20 transition-colors"
                            >
                              <span className="text-primary-green font-bold text-sm">Q</span>
                            </motion.div>
                            <span className="font-semibold text-primary-dark">{faq.q}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown
                              className="flex-shrink-0 text-primary-green"
                              size={24}
                            />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <div className="flex items-start gap-3 mb-4">
                                  <div className="flex-shrink-0 w-6 h-6 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                                    <span className="text-accent-gold font-bold text-sm">A</span>
                                  </div>
                                  <p className="text-gray-700 leading-relaxed flex-1">{faq.a}</p>
                                </div>

                                {/* Tags */}
                                {faq.tags && (
                                  <div className="flex flex-wrap gap-2 mb-4 pl-9">
                                    {faq.tags.map((tag, tagIdx) => (
                                      <span
                                        key={tagIdx}
                                        className="text-xs px-2 py-1 bg-primary-green/10 text-primary-green rounded-full"
                                      >
                                        #{tag}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Helpful Vote */}
                                <div className="pl-9 flex items-center gap-4 pt-4 border-t border-gray-200">
                                  <span className="text-sm text-gray-600">Was this helpful?</span>
                                  <div className="flex gap-2">
                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={() => handleVote(index, 'yes')}
                                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                                        vote === 'yes'
                                          ? 'bg-green-100 text-green-700'
                                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                      }`}
                                    >
                                      <ThumbsUp size={16} />
                                      <span className="text-sm">Yes</span>
                                    </motion.button>
                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={() => handleVote(index, 'no')}
                                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                                        vote === 'no'
                                          ? 'bg-red-100 text-red-700'
                                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                      }`}
                                    >
                                      <ThumbsDown size={16} />
                                      <span className="text-sm">No</span>
                                    </motion.button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-32 h-32 border-4 border-accent-gold/20 rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-40 h-40 border-4 border-white/10 rounded-full"
        />

        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <HelpCircle size={20} />
              <span className="text-sm font-medium">Need More Help?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our friendly team is here to help. Contact us and we'll get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-primary-dark font-semibold rounded-xl hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="tel:+263"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                📞 Call Us Now
              </motion.a>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold mb-1">Email Support</div>
                <div className="text-sm text-gray-200">Response within 24 hours</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-2">💬</div>
                <div className="font-semibold mb-1">Live Chat</div>
                <div className="text-sm text-gray-200">Available Mon-Fri 8AM-5PM</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl mb-2">📍</div>
                <div className="font-semibold mb-1">Visit Us</div>
                <div className="text-sm text-gray-200">Offices in Harare, Bulawayo, Gweru</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}