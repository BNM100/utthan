'use client';
import React, { useState } from "react";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Calendar,
  Users,
  ExternalLink,
} from "lucide-react";

export default function Awards() {
  const [activeCategory, setActiveCategory] = useState("all");

  const awards = [
    {
      id: 1,
      title: "Best Educational Innovation",
      organization: "National Education Excellence Awards",
      year: "2024",
      category: "innovation",
      icon: <Trophy className="w-8 h-8" />,
      description:
        "Recognized for revolutionary approach to robotics education",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      id: 2,
      title: "Outstanding STEM Program",
      organization: "India STEM Foundation",
      year: "2024",
      category: "education",
      icon: <Award className="w-8 h-8" />,
      description: "Excellence in delivering comprehensive STEM education",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      id: 3,
      title: "Tech Startup of the Year",
      organization: "EdTech India Awards",
      year: "2023",
      category: "business",
      icon: <Star className="w-8 h-8" />,
      description: "Leading innovation in educational technology sector",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      id: 4,
      title: "Youth Impact Award",
      organization: "National Youth Development Council",
      year: "2023",
      category: "social",
      icon: <Medal className="w-8 h-8" />,
      description: "Significant contribution to youth skill development",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      id: 5,
      title: "Best Training Institute",
      organization: "Robotics Excellence Awards",
      year: "2023",
      category: "education",
      icon: <Trophy className="w-8 h-8" />,
      description: "Superior quality in robotics and AI training programs",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      id: 6,
      title: "Innovation in Learning",
      organization: "Digital India Education Summit",
      year: "2022",
      category: "innovation",
      icon: <Star className="w-8 h-8" />,
      description: "Pioneering digital learning methodologies",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
  ];

  const categories = [
    { id: "all", label: "All Awards", count: awards.length },
    {
      id: "innovation",
      label: "Innovation",
      count: awards.filter((a) => a.category === "innovation").length,
    },
    {
      id: "education",
      label: "Education",
      count: awards.filter((a) => a.category === "education").length,
    },
    {
      id: "business",
      label: "Business",
      count: awards.filter((a) => a.category === "business").length,
    },
    {
      id: "social",
      label: "Social Impact",
      count: awards.filter((a) => a.category === "social").length,
    },
  ];

  const filteredAwards =
    activeCategory === "all"
      ? awards
      : awards.filter((award) => award.category === activeCategory);

  const stats = [
    {
      icon: Trophy,
      label: "Total Awards",
      value: "15+",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      icon: Calendar,
      label: "Years Active",
      value: "3+",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Users,
      label: "Recognition Level",
      value: "National",
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & <span className="text-blue-600">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence in robotics education has been
            recognized by leading organizations across the nation.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bg} mb-4`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAwards.map((award, index) => (
            <div
              key={award.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Award Header */}
              <div
                className={`bg-gradient-to-r ${award.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {award.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-white/90 text-sm">{award.organization}</p>
                </div>
              </div>

              {/* Award Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {award.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${award.bgColor} ${award.textColor}`}
                  >
                    {award.category.charAt(0).toUpperCase() +
                      award.category.slice(1)}
                  </span>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Timeline */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Journey of Excellence
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {["2022", "2023", "2024"].map((year, index) => (
                <div key={year} className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <h4 className="font-bold text-gray-900 mb-2">{year}</h4>
                        <p className="text-sm text-gray-600">
                          {year === "2022" &&
                            "Started winning recognition for innovative teaching methods"}
                          {year === "2023" &&
                            "Expanded recognition across multiple categories"}
                          {year === "2024" &&
                            "Achieved national-level excellence awards"}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && (
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <h4 className="font-bold text-gray-900 mb-2">{year}</h4>
                        <p className="text-sm text-gray-600">
                          {year === "2022" &&
                            "Started winning recognition for innovative teaching methods"}
                          {year === "2023" &&
                            "Expanded recognition across multiple categories"}
                          {year === "2024" &&
                            "Achieved national-level excellence awards"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
