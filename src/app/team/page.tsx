"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    department: "Leadership",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 12+ years in tech innovation and strategic growth.",
    skills: ["Strategy", "Leadership", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@company.com",
    },
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    department: "Engineering",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack architect passionate about scalable solutions and team mentorship.",
    skills: ["Architecture", "DevOps", "Mentoring"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@company.com",
    },
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Design",
    department: "Design",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer focused on user-centered experiences and design systems.",
    skills: ["UX Design", "Design Systems", "Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@company.com",
    },
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Software Engineer",
    department: "Engineering",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Backend specialist with expertise in distributed systems and performance optimization.",
    skills: ["Backend", "Databases", "Performance"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@company.com",
    },
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Product Manager",
    department: "Product",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Data-driven product strategist with a passion for user experience and market analysis.",
    skills: ["Product Strategy", "Analytics", "User Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@company.com",
    },
  },
  {
    id: 6,
    name: "James Park",
    role: "DevOps Engineer",
    department: "Engineering",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Infrastructure expert ensuring reliable, scalable, and secure deployment pipelines.",
    skills: ["AWS", "Kubernetes", "Security"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@company.com",
    },
  },
];

const departments = ["All", "Leadership", "Engineering", "Design", "Product"];

export default function OurTeam() {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2187ab]/5 to-[#2187ab]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Talented individuals united by a shared vision to create
              exceptional experiences and drive innovation in everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedDepartment === dept
                  ? "bg-[#2187ab] text-white shadow-lg shadow-[#2187ab]/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2187ab]/30 hover:text-[#2187ab]"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links - appear on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#2187ab] transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#2187ab] transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#2187ab] transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-[#2187ab]/10 text-[#2187ab] hover:bg-[#2187ab]/20 mb-3"
                    >
                      {member.department}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#2187ab] font-medium">{member.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium hover:bg-[#2187ab]/10 hover:text-[#2187ab] transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
