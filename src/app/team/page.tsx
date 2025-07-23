"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Binam Shrestha",
    role: "Founder,CEO",
    department: "Leadership",
    image: "/assets/team/binam_shrestha.png",
    bio: "Visionary leader with a passion for robotics and education, driving innovation at Utthan Robotics Lab.",
    skills: ["Strategy", "Leadership", "Innovation"],
    social: {
      linkedin: "#",
      facebook: "#",
      email: "binam9800961247@gmail.com",
    },
  },
  {
    id: 2,
    name: "Shruti Shrestha",
    role: "Finance Manager",
    department: "Finance",
    image: "/assets/team/shruti_shrestha.png",
    bio: "Financial strategist ensuring sustainable growth and resource management at Utthan Robotics Lab.",
    skills: ["Financial Analysis", "Budgeting", "Forecasting"],
    social: {
      linkedin: "#",
      facebook: "https://www.facebook.com/shrutishrestha007",
      email: "",
    },
  },
  {
    id: 3,
    name: "Lokesh Kr. Mandal",
    role: "IOT instructor",
    department: "Engineering",
    image: "/assets/team/lokesh_mandal.png",
    bio: "Experienced IoT instructor with a passion for teaching and empowering the next generation of innovators.",
    skills: ["IoT", "Embedded Systems", "Teaching"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: 4,
    name: "Bikram Thapa",
    role: "3D Modeler",
    department: "Design",
    image: "/assets/team/bikram_thapa.png",
    bio: "3D modeling expert creating immersive and engaging visual experiences.",
    skills: ["3D Modeling", "Animation", "Visual Effects"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: 6,
    name: "Jeewan Lamsal",
    role: "AI Instructor",
    department: "Engineering",
    image: "/assets/team/jeewan_lamsal.png",
    bio: "AI Instructor dedicated to fostering a deep understanding of artificial intelligence and its applications.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "",
    },
  },
  {
    id: 7,
    name: "MukeshWar Mandal",
    role: "Robotics Intern",
    department: "Engineering",
    image: "/assets/team/mukeshwor_mandal.png",
    bio: "Robotics intern with a keen interest in developing innovative robotic solutions.",
    skills: ["Robotics", "Programming", "Problem Solving"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "",
    },
  },
  {
    id: 8,
    name: "Bipin Bista",
    role: "AI/ML Intern",
    department: "Engineering",
    image: "/assets/team/bipin_bista.png",
    bio: "AI/ML intern with a passion for developing intelligent solutions.",
    skills: ["Machine Learning", "Data Analysis", "Python"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "",
    },
  },
  {
    id: 9,
    name: "Pratik Kr. Mishra",
    role: "IOT Intern",
    department: "Engineering",
    image: "/assets/team/pratik_kr_mishra.png",
    bio: "IOT intern with a focus on developing innovative IoT solutions.",
    skills: ["IoT", "Embedded Systems", "Programming"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "",
    },
  },
  {
    id: 10,
    name: "Spandan Ghimire",
    role: "3D Modeler",
    department: "Design",
    image: "/assets/team/spandan_ghimire.png",
    bio: "3D modeler with a passion for creating stunning visual experiences.",
    skills: ["3D Modeling", "Animation", "Visual Effects"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "",
    },
  },
  {
    id: 11,
    name: "Dipika Chaudhary",
    role: "Robotics Intern",
    department: "Engineering",
    image: "/assets/team/dipika_chaudhary.png",
    bio: "Robotics intern with a passion for developing innovative robotic solutions.",
    skills: ["Robotics", "Programming", "Problem Solving"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "",
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
            <Button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedDepartment === dept
                  ? "bg-[#2187ab] text-white shadow-lg shadow-[#2187ab]/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2187ab]/30 hover:text-[#2187ab]"
              }`}
            >
              {dept}
            </Button>
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    layout="fill"
                    objectFit="contain"
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
