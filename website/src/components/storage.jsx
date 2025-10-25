import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Warehouse, Shield, Lock, CheckCircle, ArrowRight } from "lucide-react";
import Chip from "@mui/material/Chip";

export default function Storage() {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Blend */}
        <div className="absolute inset-0">
          <img
            src="/3.jpg"
            alt="Secure storage facility"
            className="w-full h-full object-cover opacity-96 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-red-800/80"></div>
        </div>

        {/* Decorative blur element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Chip
                label="24/7 Security"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
              <Chip
                label="Climate Controlled"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
              <Chip
                label="Flexible Terms"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontWeight: 600,
                  fontFamily: "Gellix",
                }}
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Storage Facilities
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Modern palletized storage and self storage facilities keep your
              belongings safe & secure. Short-term and long-term storage
              solutions available.
            </p>
            <Link
              to="/get-quote"
              className="btn-primary inline-flex items-center"
            >
              Get Quote <ArrowRight size={20} className="ml-2" />
            </Link>
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Warehouse size={32} />,
                title: "Modern Facilities",
                desc: "Clean, secure storage spaces",
              },
              {
                icon: <Shield size={32} />,
                title: "24/7 Security",
                desc: "CCTV monitoring & guards",
              },
              {
                icon: <Lock size={32} />,
                title: "Individual Access",
                desc: "Your own secure unit",
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
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
