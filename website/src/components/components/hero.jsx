import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Shield, Globe } from 'lucide-react';
import { Chip } from '@mui/material';

// Counter Animation Hook
const useCountUp = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const timeout = setTimeout(() => {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay, hasAnimated]);

  return count;
};

const EnhancedHeroSection = () => {
  // Counter animations for chips
  const yearCount = useCountUp(1928, 2000, 200);
  const experienceCount = useCountUp(150, 2000, 400);
  const movesCount = useCountUp(2.5, 2000, 600);
  
  // Counter for happy clients
  const clientsCount = useCountUp(10000, 2500, 800);

  // Certification badges data
  const certifications = [
    { 
      name: 'FIDI',
      subtitle: 'Certified',
      icon: '/FIDI.png',
    },
    { 
      name: 'FAIM',
      subtitle: 'Accredited',
      icon: '/FAIM.png', // Replace with your logo path or use Shield icon
    },
    { 
      name: 'ISO',
      subtitle: 'Certified',
      icon: '/iso.png', // Replace with your logo path or use CheckCircle icon
    },
    { 
      name: 'IAM',
      subtitle: 'Member',
      icon: '/IAM.png', // Replace with your logo path or use Globe icon
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white overflow-hidden">
      {/* Background Image Blended Across Entire Hero */}
      <div className="absolute inset-0">
        <img 
          src="/1.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
          style={{ mixBlendMode: 'overlay' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-green/70 to-primary-dark/80"></div>
      </div>

      <div className="relative container-custom section-padding min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Animated Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <Chip 
                label={`Est. ${yearCount}`}
                sx={{ 
                  bgcolor: '#EEC643', 
                  color: '#040F0F', 
                  fontWeight: 500, 
                  fontFamily: 'Gellix',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }} 
              />
              <Chip 
                label={`${experienceCount}+ Years Experience`}
                sx={{ 
                  bgcolor: '#EEC643', 
                  color: '#040F0F', 
                  fontWeight: 500, 
                  fontFamily: 'Gellix',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }} 
              />
              <Chip 
                label={`${movesCount.toFixed(1)}M+ Moves`}
                sx={{ 
                  bgcolor: '#EEC643', 
                  color: '#040F0F', 
                  fontWeight: 500, 
                  fontFamily: 'Gellix',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }} 
              />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              Moving Excellence <br />
              <span className="text-accent-gold">Since 1928</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Your move should be easy and stress-free, no matter the distance or size. 
              Professional moving and logistics services across Zimbabwe and the SADC region.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-0">
              <Link to="/get-quote" className="btn-primary inline-flex items-center justify-center group text-sm sm:text-base">
                Get Free Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
              </Link>
              <Link to="/services" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-dark inline-flex items-center justify-center text-sm sm:text-base">
                View All Services
              </Link>
            </div>

            {/* Happy Clients Counter - Desktop */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="hidden lg:block mt-8"
            >
              <div className=" backdrop-blur-md rounded-2xl p-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      { gender: "women", id: "78" },
                      { gender: "men", id: "91" },
                      { gender: "women", id: "32" },
                    ].map((person, i) => (
                      <motion.img
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.6 + i * 0.1 }}
                        src={`https://randomuser.me/api/portraits/${person.gender}/${person.id}.jpg`}
                        alt={`Client ${i + 1}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white object-cover ring-2 ring-accent-gold/50"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-accent-gold">
                      {clientsCount.toLocaleString()}+
                    </div>
                    <div className="text-sm text-white/90 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Certification Badges List */}
          <div className="relative hidden lg:block z-10">
            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.15, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-[#EEC643]/30 rounded-2xl blur-lg"></div>
                  <div className="relative backdrop-blur-md rounded-2xl p-3 border border-white/50 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-white">
                        <img 
                          src={cert.icon} 
                          alt={cert.name}
                          className="w-10 h-10 object-contain" 
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm font-bold text-primary-dark leading-tight">
                          {cert.name}
                        </div>
                        <div className="text-xs text-primary-dark/70 leading-tight">
                          {cert.subtitle}
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-[#EEC643] rounded-full flex items-center justify-center flex-shrink-0 ml-auto">
                        <CheckCircle size={14} className="text-primary-dark" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Badges - Below Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="lg:hidden col-span-full"
          >
            <div className="backdrop-blur-md rounded-2xl p-4 shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 1.3 + index * 0.1, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-accent-gold/20 rounded-xl blur-md"></div>
                    <div className="relative backdrop-blur-md rounded-xl p-2 shadow-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white">
                          <img 
                            src={cert.icon} 
                            alt={cert.name}
                            className="w-6 h-6 object-contain" 
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-xs font-bold text-primary-dark leading-tight">
                            {cert.name}
                          </div>
                          <div className="text-[10px] text-primary-dark/70 leading-tight">
                            {cert.subtitle}
                          </div>
                        </div>
                        <div className="w-4 h-4 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 ml-auto">
                          <CheckCircle size={10} className="text-primary-dark" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Happy Clients Counter - Mobile */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="lg:hidden col-span-full"
          >
            <div className="backdrop-blur-md rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    { gender: "women", id: "78" },
                    { gender: "men", id: "91" },
                    { gender: "women", id: "32" },
                  ].map((person, i) => (
                    <motion.img
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.6 + i * 0.1 }}
                      src={`https://randomuser.me/api/portraits/${person.gender}/${person.id}.jpg`}
                      alt={`Client ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover ring-2 ring-accent-gold/50"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-xl font-bold text-accent-gold">
                    {clientsCount.toLocaleString()}+
                  </div>
                  <div className="text-sm text-white/90 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;