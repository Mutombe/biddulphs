import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Truck,
  Package,
  Clock,
  CheckCircle,
  Shield,
  ArrowRight,
  DollarSign,
  Phone,
  FileText,
  Wrench,
  ThumbsUp,
} from "lucide-react";
import Chip from "@mui/material/Chip";
import { TbDatabaseDollar } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


export default function LocalMoves() {
  const features = [
    {
      icon: <Home size={24} />,
      title: "Residential Moving",
      description: "Complete home moving services",
    },
    {
      icon: <Clock size={24} />,
      title: "Same-Day Service",
      description: "Quick turnaround available",
    },
    {
      icon: <Package size={24} />,
      title: "Professional Packing",
      description: "Expert packing services",
    },
    {
      icon: <Shield size={24} />,
      title: "Fully Insured",
      description: "Complete protection",
    },
  ];

  const benefits = [
    "Experienced and trained moving crews",
    "Modern trucks with proper equipment",
    "Furniture protection and wrapping",
    "Affordable flat-rate pricing",
    "Same-day and weekend moves available",
    "No hidden costs or surprises",
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Contact us for a free, no-obligation quote",
      icon: <Phone size={32} />,
    },
    {
      step: "02",
      title: "Strategy",
      description: "We help you plan every detail of your move",
      icon: <FileText size={32} />,
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team executes your move professionally",
      icon: <Wrench size={32} />,
    },
    {
      step: "04",
      title: "Final Result",
      description: "Settled into your new location seamlessly",
      icon: <ThumbsUp size={32} />,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Blended Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop')",
          }}
        ></div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Chip
                label="Residential"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
              <Chip
                label="Commercial"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
              <Chip
                label="Same Day Available"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Local Moving Services
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Whether it's a small flat or a major household, this will be the
              best move you'll ever make. Professional, efficient, and
              stress-free local moving services across Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-quote"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:+2638677007007"
                className="btn-outline border-white text-white hover:bg-white hover:text-blue-600 inline-flex items-center justify-center"
              >
                Call Us Now
              </a>
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

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg hover:shadow-sm transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Redesigned to match uploaded image */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide">
              // Our Work Process
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Proven <span className="text-blue-600">Work Process</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div
                className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-gray-300"
                style={{ marginLeft: "12.5%", marginRight: "12.5%" }}
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 mb-4">
                      <div className="w-[120px] h-[120px] bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg relative">
                        {item.icon}
                        {/* Step Number Badge */}
                        <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-white">
                          {item.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4">
                      <h3 className="font-bold text-xl text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-6">
                Why Choose Our{" "}
                <span className="text-blue-600">Local Moving Service?</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With decades of experience and thousands of successful moves, we
                understand what it takes to make your local move smooth and
                stress-free. Our professional team treats your belongings with
                the care they deserve.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle
                      className="text-blue-600 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white overflow-hidden"
            >
              {/* Blended Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-50 rounded-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&auto=format&fit=crop')",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <HiOutlineCurrencyDollar size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">Save Up To 33%</h3>
                <p className="mb-6 leading-relaxed">
                  Reduce the cost of your move considerably by moving mid-month
                  or in other off-peak periods. Our rates are up to a third
                  lower in off-peak periods than at the end of the month.
                </p>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-sm text-gray-200 mb-2">
                    Special Offers Available:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Chip
                      label="Mid-Month Discounts"
                      size="small"
                      sx={{
                        bgcolor: "#EEC643",
                        color: "#040F0F",
                        fontFamily: "Gellix",
                      }}
                    />
                    <Chip
                      label="Weekday Rates"
                      size="small"
                      sx={{
                        bgcolor: "#EEC643",
                        color: "#040F0F",
                        fontFamily: "Gellix",
                      }}
                    />
                    <Chip
                      label="Off-Peak Specials"
                      size="small"
                      sx={{
                        bgcolor: "#EEC643",
                        color: "#040F0F",
                        fontFamily: "Gellix",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">
            Related Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/services/packing">
              <Chip
                label="Packing Services"
                clickable
                sx={{ "&:hover": { bgcolor: "#EEC643", fontFamily: "Gellix" } }}
              />
            </Link>
            <Link to="/services/storage">
              <Chip
                label="Storage Solutions"
                clickable
                sx={{ "&:hover": { bgcolor: "#EEC643", fontFamily: "Gellix" } }}
              />
            </Link>
            <Link to="/services/insurance">
              <Chip
                label="Moving Insurance"
                clickable
                sx={{ "&:hover": { bgcolor: "#EEC643", fontFamily: "Gellix" } }}
              />
            </Link>
            <Link to="/services/business-moves">
              <Chip
                label="Office Relocation"
                clickable
                sx={{ "&:hover": { bgcolor: "#EEC643", fontFamily: "Gellix" } }}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Move?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and let us make your local move easy and
            stress-free
          </p>
          <Link
            to="/get-quote"
            className="btn-primary bg-accent-gold text-primary-dark hover:bg-opacity-90 inline-flex items-center"
          >
            Get Free Quote
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
