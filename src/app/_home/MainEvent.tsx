'use client';
import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  BookOpen,
  Zap,
  ChevronRight,
  Play,
  School,
  Trophy,
  Star,
} from "lucide-react";

export default function MainEvent() {
  const [activeSchool, setActiveSchool] = useState(0);
  const [registrations, setRegistrations] = useState(0);

  const eventStats = [
    {
      icon: Users,
      label: "Total Participants",
      value: "2,500+",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: School,
      label: "Schools Covered",
      value: "25+",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Trophy,
      label: "Projects Completed",
      value: "180+",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Star,
      label: "Success Rate",
      value: "95%",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  const schoolEvents = [
    {
      school: "Delhi Public School",
      location: "New Delhi",
      date: "March 15-17, 2024",
      participants: 150,
      image: "🏫",
      projects: 25,
      status: "Completed",
    },
    {
      school: "Ryan International",
      location: "Mumbai",
      date: "April 8-10, 2024",
      participants: 200,
      image: "🌟",
      projects: 32,
      status: "Completed",
    },
    {
      school: "DAV Public School",
      location: "Bangalore",
      date: "May 12-14, 2024",
      participants: 180,
      image: "🎓",
      projects: 28,
      status: "Completed",
    },
    {
      school: "Kendriya Vidyalaya",
      location: "Pune",
      date: "June 20-22, 2024",
      participants: 160,
      image: "🏛️",
      projects: 24,
      status: "Upcoming",
    },
  ];

  const programHighlights = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "3-day intensive program covering robotics fundamentals, AI concepts, and hands-on projects",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Industry professionals and experienced educators guide students through practical learning",
    },
    {
      icon: Award,
      title: "Project-Based Learning",
      description:
        "Students build real robots and present their innovations to peers and judges",
    },
    {
      icon: Zap,
      title: "Future Skills",
      description:
        "Develops critical thinking, problem-solving, and technological literacy for tomorrow's leaders",
    },
  ];

  useEffect(() => {
    // Animate registration counter
    const target = 2500;
    const duration = 2000;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
      setRegistrations((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Flagship Program
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Young Robotics{" "}
            <span className="text-blue-600">Scientist Program</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering the next generation of innovators through hands-on
            robotics education. A transformative 3-day program that ignites
            curiosity and builds future-ready skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Program Highlights
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors">
              Download Brochure
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Live Counter */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-16 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Program Impact</h3>
          <div className="text-6xl font-bold mb-2">
            {Math.floor(registrations).toLocaleString()}+
          </div>
          <p className="text-xl opacity-90">Young Scientists Trained</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {eventStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
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

        {/* Program Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* School Events Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Schools Program Schedule
          </h2>

          {/* School Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {schoolEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSchool(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSchool === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Event {index + 1}
              </button>
            ))}
          </div>

          {/* Active School Event */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">
                    {schoolEvents[activeSchool].image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {schoolEvents[activeSchool].school}
                    </h3>
                    <p className="text-gray-600 flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {schoolEvents[activeSchool].location}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    schoolEvents[activeSchool].status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {schoolEvents[activeSchool].status}
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Event Dates</p>
                    <p className="font-semibold text-gray-900">
                      {schoolEvents[activeSchool].date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Participants</p>
                    <p className="font-semibold text-gray-900">
                      {schoolEvents[activeSchool].participants} Students
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Projects</p>
                    <p className="font-semibold text-gray-900">
                      {schoolEvents[activeSchool].projects} Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            3-Day Program Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                day: "Day 1",
                title: "Foundation & Theory",
                topics: [
                  "Robotics Introduction",
                  "Basic Components",
                  "Programming Basics",
                  "Safety Protocols",
                ],
                color: "bg-blue-100 text-blue-700",
              },
              {
                day: "Day 2",
                title: "Hands-On Building",
                topics: [
                  "Robot Assembly",
                  "Sensor Integration",
                  "Programming Practice",
                  "Testing & Debugging",
                ],
                color: "bg-green-100 text-green-700",
              },
              {
                day: "Day 3",
                title: "Project & Presentation",
                topics: [
                  "Final Project",
                  "Innovation Challenge",
                  "Peer Presentations",
                  "Award Ceremony",
                ],
                color: "bg-purple-100 text-purple-700",
              },
            ].map((day, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${day.color}`}
                >
                  {day.day}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {day.title}
                </h3>
                <ul className="space-y-2">
                  {day.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Host the Next Program?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Bring the Young Robotics Scientist Program to your school and
            inspire the next generation of innovators.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Schedule a Program
          </button>
        </div>
      </div>
    </section>
  );
}
