import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Star,
  CheckCircle,
  TrendingUp,
  Heart
} from 'lucide-react';
import { SiFsecure } from "react-icons/si";
import { GiClockwork } from "react-icons/gi";
import { GiAlarmClock } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { LiaPeopleCarrySolid } from "react-icons/lia";
// Option 1: Card-Based with Images and Overlays
export const WhyChooseUsCardStyle = () => {
  const features = [
    {
      title: "Trusted & Reliable",
      description: "Over 10,000 successful moves with 5-star ratings from happy customers",
      icon: <SiFsecure className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      stats: "2M+ Moves",
      emoji: "🏆"
    },
    {
      title: "Lightning Fast",
      description: "Same-day bookings available with flexible scheduling that fits your timeline",
      icon: <GiClockwork className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      stats: "24/7 Available",
      emoji: "⚡"
    },
    {
      title: "Award Winning",
      description: "Recognized as the #1 moving service in the region for three years running",
      icon: <LiaAwardSolid className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      stats: "#1 Rated",
      emoji: "🌟"
    },
    {
      title: "Expert Team",
      description: "Professionally trained movers who treat your belongings like their own",
      icon: <LiaPeopleCarrySolid className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      stats: "500+ Experts",
      emoji: "👥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-green-400 fill-yellow-400" />
            <span className="text-primary-green font-semibold text-sm">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Your Move, <span className="text-transparent bg-clip-text bg-primary-green">Simplified</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience moving the way it should be - easy, reliable, and stress-free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:-translate-y-2">
                {/* Emoji Badge */}
                <div className="absolute -top-4 -right-4 text-4xl bg-white rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform">
                  {feature.emoji}
                </div>
                
                {/* Icon with Gradient */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>

                {/* Stats Badge */}
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mb-4">
                  {feature.stats}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Option 2: Interactive Split Panel Design
export const WhyChooseUsSplitPanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Trusted Protection",
      subtitle: "Your Belongings, Our Priority",
      description: "Full insurance coverage and careful handling of every item. We've successfully completed over 10,000 moves with a 99.9% damage-free record.",
      icon: <Shield className="w-12 h-12" />,
      color: "bg-purple-500",
      stats: ["10K+ Moves", "99.9% Safe", "Full Insurance"]
    },
    {
      title: "Speed & Efficiency",
      subtitle: "Fast Without Compromise",
      description: "Same-day bookings and quick turnaround times. Our streamlined process means you're moved before you know it, without sacrificing quality.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "bg-green-500",
      stats: ["24/7 Service", "Same-Day", "Quick Setup"]
    },
    {
      title: "Award-Winning Service",
      subtitle: "Excellence Recognized",
      description: "Three-time winner of the Regional Moving Excellence Award. Our commitment to quality has made us the most trusted name in moving.",
      icon: <Award className="w-12 h-12" />,
      color: "bg-orange-500",
      stats: ["#1 Rated", "3x Winner", "Industry Leader"]
    },
    {
      title: "Expert Team",
      subtitle: "Professionals You Can Trust",
      description: "Background-checked, trained professionals who care about your move. Every team member is an expert in safe, efficient moving.",
      icon: <Users className="w-12 h-12" />,
      color: "bg-blue-500",
      stats: ["50+ Experts", "Fully Trained", "Background Checked"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Thousands Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes us different
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Interactive List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-purple-50 to-green-50 shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${feature.color} p-3 rounded-xl text-white flex-shrink-0 ${
                    activeIndex === index ? 'scale-110' : ''
                  } transition-transform`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm mb-2">
                      {feature.subtitle}
                    </p>
                    {activeIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-purple-500 to-green-500 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                {features[activeIndex].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {features[activeIndex].title}
              </h3>
              <p className="text-lg mb-8 text-white/90">
                {features[activeIndex].description}
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {features[activeIndex].stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">{stat.split(' ')[0]}</div>
                      <div className="text-sm text-white/80">{stat.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Option 3: Minimalist with Floating Cards
export const WhyChooseUsFloating = () => {
  const features = [
    {
      title: "Trusted & Secure",
      description: "Licensed, insured, and background-checked professionals",
      icon: "🛡️",
      stat: "10,000+",
      label: "Happy Customers"
    },
    {
      title: "Fast & Flexible",
      description: "Book today, move today with our same-day service",
      icon: "⚡",
      stat: "24/7",
      label: "Availability"
    },
    {
      title: "Best Rated",
      description: "Three-time winner of the Excellence in Moving Award",
      icon: "⭐",
      stat: "4.9/5",
      label: "Average Rating"
    },
    {
      title: "Expert Care",
      description: "Trained professionals who handle your items with care",
      icon: "💎",
      stat: "50+",
      label: "Expert Movers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-green-50 relative overflow-hidden">
      {/* Floating Decorative Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-2xl opacity-20"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-green-300 rounded-full opacity-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Moving Made
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-green-600">
              Simple & Joyful
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've reimagined the moving experience from the ground up.
            No stress, no hassle - just a smooth transition to your new space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-green-200 -z-10" />

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05
              }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600 mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {feature.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-gray-700">Join </span>
            <span className="font-bold text-purple-600">10,000+ happy customers</span>
            <span className="text-gray-700"> who made the right choice</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Option 4: Asymmetric Layout with Large Visual
export const WhyChooseUsAsymmetric = () => {
  const mainFeatures = [
    {
      number: "01",
      title: "Trusted by Thousands",
      description: "Over 10,000 successful moves completed with a 99.9% satisfaction rate. Fully licensed, insured, and bonded for your peace of mind.",
      highlights: ["Licensed & Insured", "10K+ Moves", "5-Star Rated"]
    },
    {
      number: "02",
      title: "Lightning Fast Service",
      description: "Same-day booking available 24/7. Our efficient team can have you moved in no time without compromising on care and quality.",
      highlights: ["24/7 Available", "Same-Day Service", "Quick Response"]
    },
    {
      number: "03",
      title: "Award-Winning Excellence",
      description: "Recognized as the #1 moving service for three consecutive years. Our commitment to excellence is unmatched in the industry.",
      highlights: ["#1 Rated", "Industry Leader", "Award Winner"]
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Moving Doesn't Have to Be
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600">
                  Stressful or Expensive
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We've built our reputation on reliability, speed, and care. Every move is handled by professionals who treat your belongings as if they were their own.
              </p>
            </div>

            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-green-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {feature.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative z-10 bg-gradient-to-br from-purple-500 to-green-500 rounded-3xl p-12 text-white shadow-2xl">
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">10,000+</div>
                <div className="text-xl opacity-90">Successful Moves Completed</div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">4.9/5</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-90">Safe Delivery</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Available</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">#1</div>
                  <div className="text-sm opacity-90">Rated Service</div>
                </div>
              </div>

              {/* Rating Display */}
              <div className="bg-white rounded-2xl p-6 text-gray-900">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Customer Satisfaction</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-20">Service</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[98%] rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold w-10 text-right">98%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-20">Speed</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[95%] rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold w-10 text-right">95%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-20">Care</span>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[99%] rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold w-10 text-right">99%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl z-20"
            >
              <div className="text-4xl">🏆</div>
              <div className="text-sm font-semibold text-gray-900 mt-2">Award Winner</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl z-20"
            >
              <div className="text-4xl">⚡</div>
              <div className="text-sm font-semibold text-gray-900 mt-2">Same Day</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Export all options
export default {
  WhyChooseUsCardStyle,
  WhyChooseUsSplitPanel,
  WhyChooseUsFloating,
  WhyChooseUsAsymmetric
};