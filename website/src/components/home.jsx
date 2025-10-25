import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Shield,
  Award,
  Phone,
  Mail,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Star,
  MapPin,
} from "lucide-react";
import { GiWireframeGlobe } from "react-icons/gi";
import { GiTruck } from "react-icons/gi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { PiShippingContainerLight } from "react-icons/pi";
import { GrSecure } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";

import Chip from "@mui/material/Chip";
import EnhancedHeroSection from "./components/hero";
import {
  WhyChooseUsAsymmetric,
  WhyChooseUsCardStyle,
  WhyChooseUsFloating,
  WhyChooseUsSplitPanel,
} from "./components/whileChooseUs";
import {
  TestimonialsWithProfilesSide,
  TestimonialsCarouselStyle,
  TestimonialsWithCustomImages,
  TestimonialsModernCards,
} from "./components/testimonials";

export default function Home() {
  const services = [
    {
      icon: <GiTruck size={32} />,
      title: "Local Moves",
      description:
        "Whether it is a small flat or major household, this will be the best move you'll ever make.",
      path: "/services/local-moves",
      color: "bg-blue-50",
      tags: ["Residential", "Same Day"],
      stat: "2,500+",
      statLabel: "Local Moves",
      size: "large",
      bgImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", // Modern home
      gradient: "from-accent-gold/90 to-accent-gold-800/90",
    },
    {
      icon: <GiWireframeGlobe size={32} />,
      title: "International Moves",
      description:
        "Our international consultants are expertly versed in all aspects of overseas moving.",
      path: "/services/international-moves",
      color: "bg-green-50",
      tags: ["Worldwide", "FIDI Certified"],
      stat: "90+",
      statLabel: "Years Experience",
      size: "large",
      bgImage:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", // Airplane/travel
      gradient: "from-emerald-600/90 to-teal-700/90",
    },
    {
      icon: <PiSuitcaseSimpleLight size={32} />,
      title: "Business Relocation",
      description:
        "With Biddulphs you don't simply move your office, you relocate with a minimum of disruption.",
      path: "/services/business-moves",
      color: "bg-purple-50",
      tags: ["Corporate", "Planning"],
      stat: "95%",
      statLabel: "Client Satisfaction",
      size: "medium",
      bgImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Modern office
      gradient: "from-white/95 to-purple-50/95",
    },
    {
      icon: <PiShippingContainerLight size={32} />,
      title: "Biddulphs Freight",
      description:
        "Professional logistic services for freight distribution, customized to your requirements.",
      path: "/services/freight",
      color: "bg-orange-50",
      tags: ["SADC", "Express"],
      stat: "24/7",
      statLabel: "Support",
      size: "small",
      bgImage:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", // Cargo/logistics
      gradient: "from-orange-50/98 to-orange-100/98",
    },
    {
      icon: <GrSecure size={32} />,
      title: "Storage Facilities",
      description:
        "Modern palletized storage and self storage facilities keep your belongings safe & secure.",
      path: "/services/storage",
      color: "bg-red-50",
      tags: ["Secure", "Climate Control"],
      stat: "100%",
      statLabel: "Secure Storage",
      size: "medium",
      bgImage:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", // Storage facility
      gradient: "from-gray-900/90 to-gray-800/90",
    },
    {
      icon: <Package size={32} />,
      title: "Packing Services",
      description:
        "Professional packing services to ensure your items are protected during transit.",
      path: "/services/packing",
      color: "bg-yellow-50",
      tags: ["Professional", "Materials"],
      stat: "500+",
      statLabel: "Materials Used",
      size: "small",
      bgImage:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80", // Packing boxes
      gradient: "from-white/96 to-amber-50/96",
    },
  ];

  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@biddulphs.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20Biddulphs%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";
    }
  };

  const whyChooseUs = [
    {
      icon: <Globe className="text-primary-green" size={40} />,
      title: "World Wide Network",
      description:
        "Biddulphs International moving partners comply with strict international FIDI FAIM quality standards.",
    },
    {
      icon: <Clock className="text-primary-green" size={40} />,
      title: "Moving Experience",
      description:
        "At Biddulphs International we have provided quality international moving services for over 90 years.",
    },
    {
      icon: <Star className="text-primary-green" size={40} />,
      title: "Client Satisfaction",
      description:
        "Our mission is to continuously strive to provide excellent service levels and meet customer's expectations.",
    },
    {
      icon: <TrendingUp className="text-primary-green" size={40} />,
      title: "Save Up To 33%",
      description:
        "Reduce the cost of your move considerably by moving mid-month or in other off-peak periods.",
    },
  ];

  const testimonials = [
    {
      name: "Jenny Cooper",
      text: "This is my 32nd house move and never before has everything gone so smoothly. I would highly recommend them.",
      rating: 5,
    },
    {
      name: "Michael Ebersohn",
      text: "From the word go, Biddulphs were on time and accurate. The team were very polite and professional on arrival and took care of everything.",
      rating: 5,
    },
    {
      name: "Eloni Ludwick",
      text: "The Biddulphs team successfully moved and relocated a total of 75 of our employees and their families.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <EnhancedHeroSection />

      {/* Services Section - Sophisticated Bento Box Layout */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-green uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-primary-dark mb-6">
              Our <span className="text-primary-green">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive moving and logistics solutions tailored to your
              needs
            </p>
          </motion.div>

          {/* Bento Box Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Local Moves - Large Card (spans 2 columns and 2 rows) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 lg:col-span-6 md:row-span-2"
            >
              <Link
                to={services[0].path}
                className="group relative block h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${services[0].bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[0].gradient}`}
                ></div>

                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
                </div>

                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                    <div className="text-white/90 mb-6">{services[0].icon}</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {services[0].title}
                    </h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {services[0].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {services[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold text-white">
                        {services[0].stat}
                      </span>
                      <span className="text-white/80 pb-2 text-lg">
                        {services[0].statLabel}
                      </span>
                    </div>
                    <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* International Moves - Large Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3 lg:col-span-6 md:row-span-2"
            >
              <Link
                to={services[1].path}
                className="group relative block h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${services[1].bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[1].gradient}`}
                ></div>

                {/* Decorative Globe Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        FIDI Certified
                      </span>
                    </div>
                    <div className="text-white/90 mb-6">{services[1].icon}</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {services[1].title}
                    </h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {services[1].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {services[1].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold text-white">
                        {services[1].stat}
                      </span>
                      <span className="text-white/80 pb-2 text-lg">
                        {services[1].statLabel}
                      </span>
                    </div>
                    <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                      Explore Global Services
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Business Relocation - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-4"
            >
              <Link
                to={services[2].path}
                className="group relative block h-full min-h-[240px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-gray-100"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${services[2].bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[2].gradient} backdrop-blur-[1px]`}
                ></div>

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-purple-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-700/90 transition-colors">
                      <div className="text-white">{services[2].icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-green transition-colors">
                      {services[2].title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {services[2].description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-primary-dark">
                        {services[2].stat}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {services[2].statLabel}
                      </span>
                    </div>
                    <div className="flex items-center text-primary-green font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      View Details
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Freight - Small Card with Stat Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="md:col-span-2 lg:col-span-4"
            >
              <Link
                to={services[3].path}
                className="group relative block h-full min-h-[240px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${services[3].bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[3].gradient} backdrop-blur-[0.5px]`}
                ></div>

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-white backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <div className="text-orange-600">{services[3].icon}</div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {services[3].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-full text-xs text-orange-700 font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <div className="text-4xl font-bold text-orange-700 mb-1">
                        {services[3].stat}
                      </div>
                      <div className="text-orange-600 text-sm font-medium">
                        {services[3].statLabel}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary-green transition-colors">
                      {services[3].title}
                    </h3>
                    <div className="flex items-center text-orange-700 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Storage - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-4"
            >
              <Link
                to={services[4].path}
                className="group relative block h-full min-h-[240px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${services[4].bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[4].gradient}`}
                ></div>

                <div className="absolute inset-0 opacity-10">
                  <Shield
                    size={200}
                    className="absolute bottom-0 right-0 translate-y-16 translate-x-16"
                  />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                      <div className="text-white">{services[4].icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {services[4].title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {services[4].description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-accent-gold">
                        {services[4].stat}
                      </span>
                      <span className="text-white/80 text-sm">
                        {services[4].statLabel}
                      </span>
                    </div>
                    <div className="flex items-center text-accent-gold font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Secure Your Items
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Packing - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="md:col-span-2 lg:col-span-4"
            >
              <Link
                to={services[5].path}
                className="group relative block h-full min-h-[240px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-accent-gold/20"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${services[5].bgImage})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[5].gradient} backdrop-blur-[0.5px]`}
                ></div>

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-accent-gold/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent-gold/30 transition-colors border border-accent-gold/30">
                      <div className="text-accent-gold">{services[5].icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-green transition-colors">
                      {services[5].title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {services[5].description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-accent-gold">
                        {services[5].stat}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {services[5].statLabel}
                      </span>
                    </div>
                    <div className="flex items-center text-primary-green font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Get Started
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              View All Services
              <ArrowRight size={22} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUsCardStyle />

      {/* Testimonials Section */}
      <TestimonialsWithProfilesSide />

      {/* CTA Section */}
      <section className="section-padding bg-primary-green/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-dark mb-6">
              Ready to Make Your Move?
            </h2>
            <p className="text-lg text-primary-dark/80 mb-8">
              Get a free, no-obligation quote today and experience the Biddulphs
              difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="btn-primary bg-primary-dark text-white hover:bg-primary-green inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
