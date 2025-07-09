'use client';
import React, { useState, useEffect } from "react";
import {
  Quote,
  Star,
  Users,
  GraduationCap,
  Award,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function MoU() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const mouPartners = [
    {
      name: "Delhi Public School",
      logo: "🏫",
      type: "Private School",
      students: "2,500+",
      programs: "Robotics Club, AI Workshop",
      location: "New Delhi",
      year: "2024",
    },
    {
      name: "Kendriya Vidyalaya",
      logo: "🏛️",
      type: "Government School",
      students: "1,800+",
      programs: "STEM Labs, IoT Training",
      location: "Mumbai",
      year: "2023",
    },
    {
      name: "DAV Public School",
      logo: "🎓",
      type: "Private School",
      students: "3,200+",
      programs: "Automation Workshop, Coding",
      location: "Pune",
      year: "2024",
    },
    {
      name: "Army Public School",
      logo: "⭐",
      type: "Military School",
      students: "1,500+",
      programs: "Robotics Competition, AI Ethics",
      location: "Bangalore",
      year: "2023",
    },
    {
      name: "Ryan International",
      logo: "🌟",
      type: "International School",
      students: "4,000+",
      programs: "Tech Innovation, Future Skills",
      location: "Gurugram",
      year: "2024",
    },
    {
      name: "Modern School",
      logo: "🔬",
      type: "Private School",
      students: "2,800+",
      programs: "Science Club, Robotics Lab",
      location: "Kolkata",
      year: "2023",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Principal",
      school: "Delhi Public School",
      image: "👩‍🏫",
      rating: 5,
      text: "Utthan Robotics has revolutionized how our students approach technology. The hands-on workshops and expert guidance have significantly improved our students' problem-solving abilities and technical skills.",
      highlight: "Revolutionary approach to tech education",
    },
    {
      name: "Rajesh Kumar",
      role: "Science Teacher",
      school: "Kendriya Vidyalaya",
      image: "👨‍🔬",
      rating: 5,
      text: "The partnership with Utthan Robotics has been exceptional. Our students are now more confident in robotics and AI concepts. The curriculum is well-structured and age-appropriate.",
      highlight: "Well-structured curriculum",
    },
    {
      name: "Sarah Johnson",
      role: "STEM Coordinator",
      school: "Ryan International",
      image: "👩‍💼",
      rating: 5,
      text: "Outstanding support and innovative teaching methods. The MoU has opened new possibilities for our students. We've seen remarkable improvement in their technical creativity and innovation.",
      highlight: "Innovative teaching methods",
    },
    {
      name: "Col. Vikram Singh",
      role: "Administrator",
      school: "Army Public School",
      image: "👨‍✈️",
      rating: 5,
      text: "Discipline meets innovation with Utthan Robotics. Their systematic approach to robotics education aligns perfectly with our values. Students are excelling in national competitions.",
      highlight: "Systematic approach to education",
    },
    {
      name: "Ms. Anita Patel",
      role: "Academic Director",
      school: "DAV Public School",
      image: "👩‍🎓",
      rating: 5,
      text: "The quality of training and resources provided by Utthan Robotics is exceptional. Our partnership has enhanced our school's reputation in STEM education significantly.",
      highlight: "Enhanced STEM reputation",
    },
  ];

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Educational Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proudly partnered with leading educational institutions through
            MoUs, transforming technology education across schools nationwide.
          </p>
        </div>

        {/* MoU Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <p className="text-gray-600">Partner Schools</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
            <p className="text-gray-600">Students Reached</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
            <p className="text-gray-600">Programs Delivered</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* MoU Partners Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Memorandums of Understanding
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mouPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{partner.logo}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-gray-500">{partner.type}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium text-gray-900">
                      {partner.students}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-gray-900">
                      {partner.location}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">MoU Year:</span>
                    <span className="font-medium text-gray-900">
                      {partner.year}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Programs:</p>
                  <p className="text-sm font-medium text-blue-600">
                    {partner.programs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Partners Say
          </h3>

          <div className="relative">
            {/* Main Testimonial */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                {testimonials[activeTestimonial].image}
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-lg text-gray-700 italic mb-6 max-w-3xl mx-auto leading-relaxed">
                <Quote className="w-6 h-6 text-blue-600 inline mr-2" />
                {testimonials[activeTestimonial].text}
              </blockquote>

              <div className="mb-4">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-blue-600 font-medium">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[activeTestimonial].school}
                </p>
              </div>

              <div className="inline-block bg-blue-50 rounded-full px-4 py-2">
                <p className="text-sm text-blue-700 font-medium">
                  "{testimonials[activeTestimonial].highlight}"
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Ready to Partner with Us?
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Join our network of educational partners and transform your
              students' learning experience.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact for MoU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
