import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Truck,
} from "lucide-react";
import Chip from "@mui/material/Chip";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GiSurferVan } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { LiaWalkingSolid } from "react-icons/lia";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

export default function News() {
  const featuredNews = {
    title: "Revolutionizing Cross-Border Logistics in Southern Africa",
    date: "2025-10-20",
    category: "Innovation",
    excerpt:
      "Explore our vision and mission as we aim to revolutionize cross-border moving by providing innovative and intuitive solutions across the region.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    featured: true,
  };

  const stats = [
    { value: "2M+", label: "Successful Moves", icon: GiSurferVan },
    { value: "98%", label: "Customer Satisfaction", icon: LiaAwardSolid },
    { value: "120+", label: "Years Experience", icon: LiaWalkingSolid },
    { value: "5000+", label: "Team Members", icon: LiaPeopleCarrySolid },
  ];

  const news = [
    {
      title: "Smart Packaging Solutions for Fragile Items",
      date: "2025-10-15",
      category: "Tips & Guides",
      excerpt:
        "Our latest packaging innovations ensure your valuables arrive safely. Learn about our specialized wrapping techniques.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    },
    {
      title: "New Climate-Controlled Storage Facility",
      date: "2025-10-12",
      category: "Expansion",
      excerpt:
        "State-of-the-art storage facility in Harare featuring advanced climate control and 24/7 security monitoring.",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    },
    {
      title: "International Moving Made Simple",
      date: "2025-10-08",
      category: "Services",
      excerpt:
        "Comprehensive guide to planning your international relocation. Everything you need to know about customs and documentation.",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80",
    },
    {
      title: "Employee Spotlight: Meet Our Moving Specialists",
      date: "2025-10-05",
      category: "Team",
      excerpt:
        "Get to know the dedicated professionals who make every move smooth and stress-free.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    },
    {
      title: "Sustainable Moving: Our Green Initiative",
      date: "2025-10-01",
      category: "Sustainability",
      excerpt:
        "How Biddulphs is reducing carbon footprint with eco-friendly trucks and reusable packing materials.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    },
    {
      title: "Corporate Relocation Services Expanded",
      date: "2025-09-28",
      category: "Business",
      excerpt:
        "New partnership programs for companies relocating employees across Southern Africa.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
  ];

  const insights = [
    {
      title: "Dedication",
      description:
        "We are committed to providing the best service to our clients.",
    },
    {
      title: "Creativity",
      description: "We believe in innovative solutions for every challenge.",
    },
    {
      title: "Excellence",
      description: "Leading the way in moving and logistics services.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#040F0F] via-[#183C28] to-[#248232] text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Chip
              label="NEWS"
              sx={{
                bgcolor: "#EEC643",
                color: "#040F0F",
                fontFamily: "Gellix",
                mb: 2,
                fontSize: "14px",
                fontWeight: 600,
              }}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-4">
              Unveiling Our Vision
              <br />
              and Mission
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our vision and mission as we aim to revolutionize moving
              and logistics by providing innovative and intuitive solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Featured Article + Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Featured Article - Large */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Chip
                    label={featuredNews.category}
                    sx={{
                      bgcolor: "#EEC643",
                      color: "#040F0F",
                      fontFamily: "Gellix",
                      fontWeight: 600,
                    }}
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {new Date(featuredNews.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#040F0F] mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <button className="text-[#248232] font-semibold hover:text-[#EEC643] flex items-center group-hover:translate-x-1 transition-transform">
                  Read Full Story
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </motion.article>

            {/* Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${
                    i === 2 ? "col-span-2 bg-[#EEC643]" : "bg-white"
                  } rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center text-center`}
                >
                  <stat.icon
                    size={32}
                    className={`${
                      i === 2 ? "text-[#040F0F]" : "text-[#248232]"
                    } mb-3`}
                  />
                  <div
                    className={`text-3xl md:text-4xl font-bold ${
                      i === 2 ? "text-[#040F0F]" : "text-[#183C28]"
                    } mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      i === 2 ? "text-[#040F0F]" : "text-gray-600"
                    } font-medium`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary Grid - News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {news.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        bgcolor: "#183C28",
                        color: "#FFFFFF",
                        fontFamily: "Gellix",
                        fontSize: "12px",
                      }}
                    />
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#040F0F] mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="text-[#248232] text-sm font-semibold hover:text-[#EEC643] flex items-center group">
                    Read More
                    <ArrowRight
                      size={14}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Our Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Chip
                label="OUR VALUES"
                sx={{
                  bgcolor: "#EEC643",
                  color: "#040F0F",
                  fontFamily: "Gellix",
                  mb: 2,
                  fontWeight: 600,
                }}
              />
              <h2 className="text-3xl md:text-4xl font-bold text-[#040F0F] mt-4">
                Leading the Way in
                <br />
                Moving & Logistics
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((insight, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold text-[#183C28] mb-2">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#040F0F] mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{insight.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                We believe that by nurturing these qualities, we unlock the
                potential for groundbreaking innovations in the moving industry.
                Our relentless curiosity propels us to explore new technologies,
                while our boundless creativity cultivates a culture of constant
                learning, pushing boundaries, and thinking outside the box to
                deliver exceptional moving experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#183C28] to-[#248232] py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Biddulphs for their
            moving and storage needs.
          </p>
          <button className="bg-[#EEC643] text-[#040F0F] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
            Get a Free Quote
          </button>
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
