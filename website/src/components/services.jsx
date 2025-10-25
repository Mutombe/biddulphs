import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck,
  Globe,
  Users,
  Package,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle,
  TrendingDown,
} from "lucide-react";
import Chip from "@mui/material/Chip";

export default function Services() {
  const services = [
    {
      icon: <Truck size={48} />,
      title: "Local Moves",
      description:
        "Whether it is a small flat or major household, this will be the best move you'll ever make. Professional, efficient, and stress-free local moving services.",
      path: "/services/local-moves",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Same-day service",
        "Professional packing",
        "Furniture protection",
        "Affordable rates",
      ],
      tags: ["Residential", "Commercial", "Same Day"],
    },
    {
      icon: <Globe size={48} />,
      title: "International Moves",
      description:
        "Our international consultants are expertly versed in all aspects of overseas moving. From customs clearance to door-to-door delivery.",
      path: "/services/international-moves",
      gradient: "from-green-500 to-green-600",
      features: [
        "FIDI certified",
        "Customs handling",
        "Door-to-door",
        "Insurance included",
      ],
      tags: ["Worldwide", "FIDI", "Shipping"],
    },
    {
      icon: <Users size={48} />,
      title: "Business Relocation",
      description:
        "With Biddulphs you don't simply move your office, you relocate with a minimum of disruption. Complete office moving solutions.",
      path: "/services/business-moves",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Planning assistance",
        "Minimal downtime",
        "IT equipment care",
        "Furniture installation",
      ],
      tags: ["Corporate", "Planning", "Weekend Moves"],
    },
    {
      icon: <Shield size={48} />,
      title: "Storage Facilities",
      description:
        "Modern palletized storage and self storage facilities keep your belongings safe & secure. Short-term and long-term options available.",
      path: "/services/storage",
      gradient: "from-red-500 to-red-600",
      features: [
        "24/7 security",
        "Climate control",
        "Flexible terms",
        "Easy access",
      ],
      tags: ["Secure", "Flexible", "Monitored"],
    },
    {
      icon: <Package size={48} />,
      title: "Packing Services",
      description:
        "Professional packing services using high-quality materials to ensure your items are protected during transit. Expert packing crews available.",
      path: "/services/packing",
      gradient: "from-yellow-500 to-yellow-600",
      features: [
        "Quality materials",
        "Expert packers",
        "Fragile item care",
        "Unpacking service",
      ],
      tags: ["Professional", "Materials", "Protection"],
    },
    {
      icon: <FileText size={48} />,
      title: "Transit Insurance",
      description:
        "Comprehensive insurance coverage for your peace of mind. All-risk, door-to-door coverage with competitive rates.",
      path: "/services/insurance",
      gradient: "from-indigo-500 to-indigo-600",
      features: [
        "All-risk coverage",
        "Competitive rates",
        "Easy claims",
        "Full protection",
      ],
      tags: ["Coverage", "Peace of Mind", "Claims Support"],
    },
    {
      icon: <Truck size={48} />,
      title: "Biddulphs Freight",
      description:
        "Professional logistic services for freight distribution, customized to your requirements and operating needs across Zimbabwe and SADC.",
      path: "/services/freight",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Overnight delivery",
        "Satellite tracking",
        "SADC coverage",
        "Load consolidation",
      ],
      tags: ["Express", "Crossborder", "Tracking"],
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="text-primary-green" size={32} />,
      title: "Professional Service",
      description: "Experienced team with over 90 years of moving expertise",
    },
    {
      icon: <Shield className="text-primary-green" size={32} />,
      title: "Fully Insured",
      description:
        "Comprehensive insurance coverage for complete peace of mind",
    },
    {
      icon: <TrendingDown className="text-primary-green" size={32} />,
      title: "Save Up To 33%",
      description: "Special rates during off-peak periods to save you money",
    },
  ];

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-accent-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive moving and logistics solutions tailored to meet your
              unique needs
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Chip
                label="Established 1928"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
              <Chip
                label="150+ Years Experience"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
              <Chip
                label="2.5M+ Moves"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group card-hover border border-gray-100"
                >
                  <div
                    className={`bg-gradient-to-br ${service.gradient} p-8 text-white group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary-green transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-gray-700"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary-green flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#F3F4F6",
                            fontFamily: "Gellix",
                            "&:hover": { bgcolor: "#EEC643" },
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center text-primary-green font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Why Choose <span className="text-primary-green">Biddulphs?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with Zimbabwe's most trusted
              moving company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-green to-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get a free, no-obligation quote for your moving needs today
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center bg-accent-gold text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight size={24} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-primary-dark text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        ↑
      </motion.button>
    </div>
  );
}
