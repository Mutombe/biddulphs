import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+263 8677 007 007', '+263 242 620 751'],
      link: 'tel:+2638677007007'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['enquiries@biddulphs.net'],
      link: 'mailto:enquiries@biddulphs.net'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['15 Craster Road', 'Southerton, Harare', 'Zimbabwe'],
      link: null
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      details: ['Mon-Fri: 7:30 AM - 5:00 PM', 'Sat: 8:00 AM - 12:00 PM'],
      link: null
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Contact <span className="text-accent-gold">Us</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or assistance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="+263..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center">
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-dark mb-2">{info.title}</h3>
                      {info.details.map((detail, j) => (
                        <p key={j} className="text-gray-600">
                          {info.link && j === 0 ? (
                            <a href={info.link} className="hover:text-primary-green transition-colors">{detail}</a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-primary-green to-primary-dark text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-200 mb-4">Call us now for urgent inquiries</p>
                <a href="tel:+2638677007007" className="btn-primary bg-accent-gold text-primary-dark hover:bg-opacity-90 inline-flex items-center">
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.3!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Biddulphs Location"
        />
      </section>
    </div>
  );
}