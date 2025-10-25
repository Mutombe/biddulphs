import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Truck, Clock, CheckCircle, ArrowRight, Package } from 'lucide-react';
import Chip from '@mui/material/Chip';

export default function DeliveryNetwork() {
  const [selectedFrequency, setSelectedFrequency] = useState('6times');

  const deliverySchedule6Times = [
    { location: 'Bindura', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Bulawayo', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Chegutu', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Chivhu', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Glendale', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Gweru', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Kadoma', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Kwekwe', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Marondera', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Masvingo', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Mount Darwin', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Murehwa', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Mutare', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Rusape', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    { location: 'Shamva', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
  ];

  const deliverySchedule3Times = [
    { location: 'Gokwe', days: ['Sun', 'Mon', 'Wed', 'Sat'] },
    { location: 'Shurugwi', days: ['Sun', 'Mon', 'Wed', 'Sat'] },
    { location: 'Zvishavane', days: ['Sun', 'Mon', 'Tue', 'Sat'] },
    { location: 'Chiredzi', days: ['Sun', 'Mon', 'Tue', 'Sat'] },
    { location: 'Gutu', days: ['Sun', 'Mon', 'Tue', 'Sat'] },
    { location: 'Nyika', days: ['Sun', 'Mon', 'Tue', 'Thu', 'Sat'] },
    { location: 'Chipinge', days: ['Sun', 'Mon', 'Tue', 'Sat'] },
    { location: 'Plumtree', days: ['Sun', 'Tue', 'Thu', 'Sat'] },
    { location: 'Jerera', days: ['Sun', 'Tue', 'Thu', 'Sat'] },
    { location: 'Chivi', days: ['Tue', 'Wed', 'Thu', 'Sat'] },
    { location: 'Checheche', days: ['Sun', 'Tue', 'Wed', 'Thu', 'Sat'] },
    { location: 'Inyanga', days: ['Sun', 'Tue', 'Thu', 'Sat'] },
  ];

  const depots = [
    {
      name: 'Harare',
      address: '15 Craster Road, Southerton',
      phone: '+263 8677 007 007',
      coverage: 'Central & Northern Zimbabwe',
      features: ['Main Hub', 'Storage Facilities', '24/7 Security']
    },
    {
      name: 'Bulawayo',
      address: 'Industrial Area',
      phone: '+263 242 620 751',
      coverage: 'Southern & Western Zimbabwe',
      features: ['Regional Hub', 'Packing Services', 'Secure Parking']
    },
    {
      name: 'Gweru',
      address: 'Midlands Industrial Zone',
      phone: '+263 8677 007 007',
      coverage: 'Midlands Region',
      features: ['Distribution Center', 'Freight Services', 'Cross-docking']
    },
  ];

  const internationalOperations = [
    { country: 'Tanzania', flag: '🇹🇿', route: 'Harare - Dar es Salaam' },
    { country: 'Malawi', flag: '🇲🇼', route: 'Harare - Lilongwe' },
    { country: 'Mozambique', flag: '🇲🇿', route: 'Harare - Maputo' },
    { country: 'Zambia', flag: '🇿🇲', route: 'Harare - Lusaka' },
    { country: 'South Africa', flag: '🇿🇦', route: 'Harare - Johannesburg' },
    { country: 'Botswana', flag: '🇧🇼', route: 'Harare - Gaborone' },
    { country: 'Namibia', flag: '🇳🇦', route: 'Harare - Windhoek' },
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentSchedule = selectedFrequency === '6times' ? deliverySchedule6Times : deliverySchedule3Times;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                <Chip label="3 Depots" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
                <Chip label="Nationwide Coverage" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
                <Chip label="International Routes" sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-accent-gold">Delivery Network</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Safe, reliable, and secure inter-city transport service across Zimbabwe and the SADC region
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Depots Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Our <span className="text-primary-green">Strategic Depots</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three strategically located depots serving all cities and towns across Zimbabwe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depots.map((depot, index) => (
              <motion.div
                key={depot.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover border border-gray-100"
              >
                <div className="bg-primary-green text-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{depot.name}</h3>
                    <MapPin size={32} className="text-accent-gold" />
                  </div>
                  <p className="text-gray-200 text-sm">{depot.coverage}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Address</div>
                    <div className="font-medium text-gray-800">{depot.address}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Contact</div>
                    <a href={`tel:${depot.phone}`} className="font-medium text-primary-green hover:text-accent-gold transition-colors">
                      {depot.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Features</div>
                    <div className="flex flex-wrap gap-2">
                      {depot.features.map((feature) => (
                        <Chip 
                          key={feature} 
                          label={feature} 
                          size="small" 
                          icon={<CheckCircle size={14} />}
                          sx={{ bgcolor: '#F3F4F6', fontFamily: 'Gellix' }} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Schedule Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              <span className="text-primary-green">Delivery Schedule</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Regular, reliable delivery services to destinations across Zimbabwe
            </p>

            {/* Frequency Toggle */}
            <div className="inline-flex bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setSelectedFrequency('6times')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFrequency === '6times'
                    ? 'bg-primary-green text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-green'
                }`}
              >
                6 Times a Week
              </button>
              <button
                onClick={() => setSelectedFrequency('3times')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFrequency === '3times'
                    ? 'bg-primary-green text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-green'
                }`}
              >
                3 Times a Week
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFrequency}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-dark text-white">
                      <th className="px-6 py-4 text-left font-semibold">Location</th>
                      {daysOfWeek.map((day) => (
                        <th key={day} className="px-4 py-4 text-center font-semibold">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentSchedule.map((item, index) => (
                      <motion.tr
                        key={item.location}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-gray-800">
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} className="text-primary-green" />
                            <span>{item.location}</span>
                          </div>
                        </td>
                        {daysOfWeek.map((day) => (
                          <td key={day} className="px-4 py-4 text-center">
                            {item.days.includes(day) ? (
                              <div className="flex justify-center">
                                <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center">
                                  <CheckCircle size={16} className="text-white" />
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                              </div>
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-accent-gold/10 border-l-4 border-accent-gold rounded-lg p-6"
          >
            <div className="flex items-start space-x-3">
              <Clock size={24} className="text-primary-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary-dark mb-2">Delivery Information</h4>
                <p className="text-gray-700">
                  All deliveries are made during business hours. For specific delivery times or to track your shipment, 
                  please contact your nearest depot. Express services available upon request.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Operations */}
      <section className="section-padding bg-gradient-to-br from-primary-green to-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-accent-gold">Crossborder Operations</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Extending our services across the SADC region and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalOperations.map((operation, index) => (
              <motion.div
                key={operation.country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <div className="text-5xl mb-4 text-center">{operation.flag}</div>
                <h3 className="text-xl font-bold text-center mb-2">{operation.country}</h3>
                <p className="text-sm text-gray-200 text-center">{operation.route}</p>
                <div className="mt-4 flex justify-center">
                  <Chip 
                    label="Active Route" 
                    size="small" 
                    sx={{ bgcolor: '#EEC643', color: '#040F0F', fontWeight: 600, fontFamily: 'Gellix' }} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a href="/services/freight" className="inline-flex items-center bg-accent-gold text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More About Freight Services
              <ArrowRight size={20} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck size={40} />,
                title: 'Modern Fleet',
                description: 'All vehicles equipped with satellite tracking for real-time monitoring'
              },
              {
                icon: <Package size={40} />,
                title: 'Safe Handling',
                description: 'Professional packing and handling of all goods'
              },
              {
                icon: <Clock size={40} />,
                title: 'On-Time Delivery',
                description: 'Reliable schedules with guaranteed delivery times'
              },
              {
                icon: <CheckCircle size={40} />,
                title: 'Fully Insured',
                description: 'Comprehensive insurance coverage for all shipments'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-green to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}