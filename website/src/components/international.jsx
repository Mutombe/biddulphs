import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Ship,
  Plane,
  CheckCircle,
  Award,
  Shield,
  ArrowRight,
  Package,
  MapPin,
} from "lucide-react";
import Chip from "@mui/material/Chip";

export default function InternationalMoves() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Blended Image */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Blend */}
        <div className="absolute inset-0">
          <img
            src="/13.jpg"
            alt="International shipping containers"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-800/80"></div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"
        ></motion.div>

        <div className="relative container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <Chip
                  label="FIDI Certified"
                  sx={{
                    bgcolor: "#EEC643",
                    color: "#040F0F",
                    fontWeight: 600,
                    fontFamily: "Gellix",
                  }}
                />
                <Chip
                  label="Worldwide Network"
                  sx={{
                    bgcolor: "#EEC643",
                    color: "#040F0F",
                    fontWeight: 600,
                    fontFamily: "Gellix",
                  }}
                />
                <Chip
                  label="Door-to-Door"
                  sx={{
                    bgcolor: "#EEC643",
                    color: "#040F0F",
                    fontWeight: 600,
                    fontFamily: "Gellix",
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                International Moving
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed mb-8">
                Our international consultants are expertly versed in all aspects
                of overseas moving. From packing to customs clearance to
                door-to-door delivery - we handle it all.
              </p>
              <Link
                to="/get-quote"
                className="btn-primary inline-flex items-center"
              >
                Get Free Quote <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>

            {/* Hero Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/14.jpg"
                    alt="Professional packing"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                  />
                  <img
                    src="/15.jpg"
                    alt="Global shipping"
                    className="w-full h-40 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/9.jpg"
                    alt="Cargo container"
                    className="w-full h-40 object-cover rounded-2xl shadow-2xl"
                  />
                  <img
                    src="/6.jpg"
                    alt="Delivery truck"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} />,
                title: "Worldwide Network",
                desc: "FIDI FAIM certified partners globally",
              },
              {
                icon: <Ship size={32} />,
                title: "Sea & Air Freight",
                desc: "Flexible shipping options",
              },
              {
                icon: <Award size={32} />,
                title: "90+ Years Experience",
                desc: "Proven international expertise",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg hover:shadow-sm transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/10.jpg"
                  alt="International moving process"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">150+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Your Journey, Our Expertise
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                With over 90 years of experience in international relocations,
                we understand that moving abroad is more than just transporting
                belongings—it's about starting a new chapter in your life.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Package size={24} />,
                    title: "Professional Packing",
                    desc: "Expert handling of your valuables",
                  },
                  {
                    icon: <Ship size={24} />,
                    title: "Global Shipping",
                    desc: "Sea and air freight options",
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: "Door-to-Door",
                    desc: "Complete end-to-end service",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-sm transition-shadow"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Comprehensive Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need for a seamless international move
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: "/16.jpg",
                title: "Packing Services",
                desc: "Professional packing materials and techniques",
              },
              {
                img: "/18.jpg",
                title: "Customs Clearance",
                desc: "Expert documentation handling",
              },
              {
                img: "/19.jpg",
                title: "Pet Relocation",
                desc: "Safe transport for your pets",
              },
              {
                img: "/8.jpg",
                title: "Storage Solutions",
                desc: "Secure temporary storage",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-48">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Pre-move consultation & planning",
                "Professional packing services",
                "Customs documentation & clearance",
                "Door-to-door delivery",
                "Transit insurance",
                "Pet & vehicle relocation",
                "Storage solutions",
                "Unpacking & setup",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-sm transition-shadow"
                >
                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative section-padding text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/11.jpg"
            alt="World map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/95"></div>
        </div>

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready for Your International Move?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a comprehensive moving quote
            </p>
            <Link
              to="/get-quote"
              className="btn-primary bg-accent-gold text-primary-dark inline-flex items-center"
            >
              Get Free Quote <ArrowRight size={20} className="ml-2" />
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
