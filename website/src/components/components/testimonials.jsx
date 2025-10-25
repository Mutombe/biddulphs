import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';


// Option 1: With Profile Pictures at Top
export const TestimonialsWithProfilesTop = () => {
  const testimonials = [
    {
      name: "Jenny Cooper",
      text: "This is my 32nd house move and never before has everything gone so smoothly. I would highly recommend them.",
      rating: 5,
      role: "Homeowner",
      image: "https://i.pravatar.cc/150?img=1", // Placeholder - replace with actual images
      // Alternative: Use UI Avatars for initials
      // image: "https://ui-avatars.com/api/?name=Jenny+Cooper&background=6366f1&color=fff&size=200"
    },
    {
      name: "Michael Ebersohn",
      text: "From the word go, Biddulphs were on time and accurate. The team were very polite and professional on arrival and took care of everything.",
      rating: 5,
      role: "Business Owner",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Eloni Ludwick",
      text: "The Biddulphs team successfully moved and relocated a total of 75 of our employees and their families.",
      rating: 5,
      role: "HR Manager",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-green to-primary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Our <span className="text-accent-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-white/30 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-accent-gold rounded-full p-1.5">
                    <Star size={16} className="fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-100 mb-6 italic leading-relaxed text-center">
                "{testimonial.text}"
              </p>

              {/* Name and Role */}
              <div className="text-center">
                <div className="font-semibold text-accent-gold text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-300 mt-1">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Option 2: Profile Picture on Side with Quote Icon
export const TestimonialsWithProfilesSide = () => {
  const testimonials = [
    {
      name: "Jenny Cooper",
      text: "This is my 32nd house move and never before has everything gone so smoothly. I would highly recommend them.",
      rating: 5,
      role: "Homeowner",
      location: "Harare, Zimbabwe",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Ebersohn",
      text: "From the word go, Biddulphs were on time and accurate. The team were very polite and professional on arrival and took care of everything.",
      rating: 5,
      role: "Business Owner",
      location: "Bulawayo, Zimbabwe",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Eloni Ludwick",
      text: "The Biddulphs team successfully moved and relocated a total of 75 of our employees and their families.",
      rating: 5,
      role: "HR Manager",
      location: "Mutare, Zimbabwe",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-green to-primary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Our <span className="text-accent-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative overflow-hidden group hover:bg-white/15 transition-all duration-300"
            >
              {/* Large Quote Icon Background */}
              <Quote 
                size={80} 
                className="absolute -top-4 -right-4 text-white/5 group-hover:text-white/10 transition-colors"
              />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-100 mb-6 italic leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-3 border-white/30 object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-accent-gold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Option 3: Large Profile Picture with Modern Card
export const TestimonialsModernCards = () => {
  const testimonials = [
    {
      name: "Jenny Cooper",
      text: "This is my 32nd house move and never before has everything gone so smoothly. I would highly recommend them.",
      rating: 5,
      role: "Homeowner",
      moveType: "Residential Move",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Ebersohn",
      text: "From the word go, Biddulphs were on time and accurate. The team were very polite and professional on arrival and took care of everything.",
      rating: 5,
      role: "Business Owner",
      moveType: "Office Relocation",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Eloni Ludwick",
      text: "The Biddulphs team successfully moved and relocated a total of 75 of our employees and their families.",
      rating: 5,
      role: "HR Manager",
      moveType: "Corporate Move",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-green to-primary-dark text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Star className="w-4 h-4 text-accent-gold fill-accent-gold" />
            <span className="text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Our <span className="text-accent-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green to-accent-gold"></div>

                {/* Profile Section */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-green/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-primary-green rounded-full p-1">
                      <Star size={12} className="fill-white text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-accent-gold text-accent-gold"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                  {testimonial.moveType}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.text}"
                </p>

                {/* Quote Icon */}
                <div className="flex justify-end">
                  <Quote size={40} className="text-primary-green/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, i) => (
                <img
                  key={i}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold">Join 1,000+ Happy Customers</div>
              <div className="text-sm text-gray-300">Rated 4.9/5 stars</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Option 4: Carousel Style with Large Images
export const TestimonialsCarouselStyle = () => {
  const testimonials = [
    {
      name: "Jenny Cooper",
      text: "This is my 32nd house move and never before has everything gone so smoothly. I would highly recommend them.",
      rating: 5,
      role: "Homeowner",
      image: "https://i.pravatar.cc/150?img=1",
      verified: true,
    },
    {
      name: "Michael Ebersohn",
      text: "From the word go, Biddulphs were on time and accurate. The team were very polite and professional on arrival and took care of everything.",
      rating: 5,
      role: "Business Owner",
      image: "https://i.pravatar.cc/150?img=12",
      verified: true,
    },
    {
      name: "Eloni Ludwick",
      text: "The Biddulphs team successfully moved and relocated a total of 75 of our employees and their families.",
      rating: 5,
      role: "HR Manager",
      image: "https://i.pravatar.cc/150?img=5",
      verified: true,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-green to-primary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Our <span className="text-accent-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-accent-gold/50 transition-all duration-300 hover:shadow-2xl">
                {/* Large Profile Picture at Top */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-gold to-primary-green p-1">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white/20"
                      />
                    </div>
                    {testimonial.verified && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>

                  <h4 className="font-bold text-xl text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-300 mb-3">{testimonial.role}</p>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-accent-gold text-accent-gold"
                      />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-accent-gold to-transparent rounded-full mx-auto mb-6"></div>

                {/* Review Text */}
                <div className="relative">
                  <Quote 
                    size={30} 
                    className="absolute -top-2 -left-2 text-accent-gold/30"
                  />
                  <p className="text-gray-100 leading-relaxed text-center italic pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper component for using custom images
export const TestimonialsWithCustomImages = ({ customTestimonials }) => {
  // Use this if you want to pass your own image URLs
  // Example usage:
  /*
  const myTestimonials = [
    {
      name: "Jenny Cooper",
      text: "...",
      rating: 5,
      role: "Homeowner",
      image: "/images/jenny.jpg" // Your custom image path
    }
  ];
  
  <TestimonialsWithCustomImages customTestimonials={myTestimonials} />
  */
  
  return <TestimonialsWithProfilesTop testimonials={customTestimonials} />;
};

// Export all components
export default {
  TestimonialsWithProfilesTop,
  TestimonialsWithProfilesSide,
  TestimonialsModernCards,
  TestimonialsCarouselStyle,
  TestimonialsWithCustomImages
};