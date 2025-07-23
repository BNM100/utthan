"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Globe,
  MessageSquare,
  Users,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "nabin yadav",
    email: "nabin.yadav@example.com",
    phone: "9800961247",
    subject: "Inquiry about services",
    message: "I would like to know more about your services.",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // 'success', 'error', or null

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "workshop", label: "Workshop Registration", icon: Users },
    { value: "collaboration", label: "Collaboration", icon: Globe },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "utthanroboticslab01@gmail.com",
      secondary: "utthanroboticslab01@gmail.com",
      description: "Get in touch via email",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+977 980-0961247",
      secondary: "+977 980-0961247",
      description: "Sun-Fri 9AM-6PM NPT",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Dharan, Nepal",
      secondary: "Nepal",
      description: "Our main office location",
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Sun - Fri: 9AM - 6PM",
      secondary: "Sat: 10AM - 4PM",
      description: "Nepal Standard Time",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2187ab]/10 via-[#2187ab]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="bg-[#2187ab]/10 text-[#2187ab] hover:bg-[#2187ab]/20 mb-6 text-base px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your robotics journey? We'd love to hear from you.
              Reach out for workshops, collaborations, or any questions you
              might have.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Connect
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-br from-[#2187ab] to-[#1a6d8a] rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-[#2187ab] font-medium mb-1">
                              {info.primary}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                              {info.secondary}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <Card className="mt-8 border-0 bg-gradient-to-br from-[#2187ab] to-[#1a6d8a] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Email Response</span>
                      <span className="font-semibold"> &lt; 2 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Phone Response</span>
                      <span className="font-semibold"> &lt; 30 mins</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100">Meeting Setup</span>
                      <span className="font-semibold">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 font-medium">
                      Failed to send message. Please try again or contact us
                      directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                inquiryType: type.value,
                              }))
                            }
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center space-y-2 hover:scale-105 ${
                              formData.inquiryType === type.value
                                ? "border-[#2187ab] bg-[#2187ab]/5 text-[#2187ab]"
                                : "border-gray-200 hover:border-[#2187ab]/30 text-gray-600"
                            }`}
                          >
                            <IconComponent className="w-6 h-6" />
                            <span className="text-sm font-medium text-center">
                              {type.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2187ab]/20 focus:border-[#2187ab] transition-all duration-300 bg-white/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2187ab]/20 focus:border-[#2187ab] transition-all duration-300 bg-white/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2187ab]/20 focus:border-[#2187ab] transition-all duration-300 bg-white/50"
                        placeholder="+977 98-XXXXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2187ab]/20 focus:border-[#2187ab] transition-all duration-300 bg-white/50"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2187ab]/20 focus:border-[#2187ab] transition-all duration-300 resize-none bg-white/50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2187ab] to-[#1a6d8a] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-[#2187ab]/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    We typically respond within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
