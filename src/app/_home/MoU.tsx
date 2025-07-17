"use client";
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
import { moUPartners } from "@/utils/MoUPartnersList";
import { testimonials } from "@/utils/TestimonialList";

export default function MoU() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Our <span className="text-[#2187ab]">Educational Partners</span>
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
            <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
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
        <div className="my-32  border-t border-gray-200 pt-8">
          <h3 className="text-4xl font-bold text-gray-900  text-center mb-20">
            Our Partner Schools and Institutions
            <br />
            <span className="text-[#2187ab]">Memorandums of Understanding</span>
          </h3>

          <div className="relative mb-8">
            {/* Container with fixed height and scroll */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {moUPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col h-[280px]"
                >
                  {/* Header with logo and name */}
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4 text-blue-600 p-2 bg-blue-50 rounded-lg">
                      {partner.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg line-clamp-1">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="px-2 py-1 bg-gray-100 rounded-full">
                          {partner.type}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Stats in compact grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 flex-1">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Students</p>
                      <p className="font-bold text-gray-900 text-lg">
                        {partner.students}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="font-medium text-gray-900 line-clamp-1">
                        {partner.location}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">MoU Year</p>
                      <p className="font-bold text-blue-600">{partner.date}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Status</p>
                      <p className="font-medium text-green-600">Active</p>
                    </div>
                  </div>

                  {/* Programs section */}
                  {/* <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                      PROGRAMS
                    </p>
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">
                      {partner.programs}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
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
