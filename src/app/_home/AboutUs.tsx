"use client";
import React, { useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  Award,
  Calendar,
  Target,
  Zap,
  Code,
  Bot,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import CountUp from "react-countup";

const CrouselImageList = [
  "/assets/images/crousel/1.jpg",
  "/assets/images/crousel/2.jpg",
  "/assets/images/crousel/3.jpg",
  "/assets/images/crousel/4.jpg",
  "/assets/images/crousel/5.jpg",
  "/assets/images/crousel/6.jpg",
  "/assets/images/crousel/7.jpg",
  "/assets/images/crousel/8.jpg",
  "/assets/images/crousel/9.jpg",
  "/assets/images/crousel/10.jpg",
  "/assets/images/crousel/11.jpg",
  "/assets/images/crousel/12.jpg",
  "/assets/images/crousel/13.jpg",
];

export default function AboutUs() {
  const [counters, setCounters] = useState({
    students: 0,
    sessions: 0,
    projects: 0,
    // awards: 0,
  });

  const finalValues = {
    students: 2600,
    sessions: 180,
    projects: 75,
    // awards: 15,
  };

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    const incrementValues = {
      students: finalValues.students / steps,
      sessions: finalValues.sessions / steps,
      projects: finalValues.projects / steps,
      // awards: finalValues.awards / steps,
    };

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters: typeof counters = { ...prev };
        let allComplete = true;

        (Object.keys(prev) as Array<keyof typeof prev>).forEach((key) => {
          const current = prev[key];
          const increment = incrementValues[key];
          const target = finalValues[key];

          if (current < target) {
            newCounters[key] = Math.min(current + increment, target);
            allComplete = false;
          } else {
            newCounters[key] = target;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Students Enrolled",
      value: Math.floor(counters.students),
      suffix: "+",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BookOpen,
      label: "Sessions Conducted",
      value: Math.floor(counters.sessions),
      suffix: "+",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Code,
      label: "Projects Completed",
      value: Math.floor(counters.projects),
      suffix: "+",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    // {
    //   icon: Award,
    //   label: "Awards Won",
    //   value: Math.floor(counters.awards),
    //   suffix: "+",
    //   color: "text-orange-600",
    //   bgColor: "bg-orange-50",
    // },
  ];

  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering the next generation with cutting-edge robotics and AI education",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Leading with the latest technologies and methodologies in tech education",
    },
    {
      icon: Bot,
      title: "Hands-On Learning",
      description:
        "Practical workshops and real-world projects for comprehensive skill development",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-[#2187ab]">Utthan Robotics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
            At Utthan Robotics, we are dedicated to transforming education
            through innovative technology solutions. Our mission is to empower
            students and educators with the skills and knowledge needed to
            thrive in the digital age.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-evenly gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.bgColor} mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        {/* Crousel */}
        <div className="my-32">
          <Carousel
            opts={{
              align: "center",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {CrouselImageList.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex justify-center items-center p-2">
                    <Image
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      className="rounded-lg object-cover w-full h-[350px] max-w-[400px]"
                      width={400}
                      height={350}
                      priority={index === 0} // Optional: preload first image
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Main Content */}
        {/* Main Content - Modern Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center my-32">
          {/* Left Content - Interactive Card */}
          <div className="relative group">
            {/* Floating card effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>

            <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Pioneering the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Robotics Education
                </span>
              </h3>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At{" "}
                <span className="font-semibold text-blue-600">
                  Utthan Robotics
                </span>
                , we're not just teaching technology - we're shaping the
                innovators of tomorrow. Our immersive learning ecosystem bridges
                the gap between theoretical knowledge and real-world robotics
                applications.
              </p>

              {/* Interactive Features */}
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 hover:bg-blue-50 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Animated Visuals */}
          <div className="relative">
            {/* Floating elements container */}
            <div className="relative h-full min-h-[400px]">
              {/* Main card */}
              <div className="absolute top-0 left-0 right-0 bg-[#2187ab] rounded-2xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Transforming Learning Experiences
                </h4>
                <p className="text-blue-100 mb-6 text-lg">
                  Join 35,00+ learners who've accelerated their careers with
                  our cutting-edge programs in robotics, AI, and automation.
                </p>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-white mb-1">
                      <CountUp end={95} duration={2} />%
                    </div>
                    <div className="text-blue-100 font-medium">
                      Career Advancement
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-white mb-1">
                      <CountUp end={24} duration={2} />
                      /7
                    </div>
                    <div className="text-blue-100 font-medium">
                      Expert Support
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-white mb-1">
                      <CountUp end={50} duration={2} />+
                    </div>
                    <div className="text-blue-100 font-medium">
                      Hands-on Projects
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-white mb-1">
                      <CountUp end={100} duration={2} />%
                    </div>
                    <div className="text-blue-100 font-medium">
                      Practical Focus
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating robot illustration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40">
                <Image
                  src="/assets/robot-illustration.png"
                  alt="Robot Illustration"
                  className="w-full h-full object-contain"
                  width={160}
                  height={160}
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply opacity-20"></div>
              <div className="absolute bottom-20 -right-5 w-16 h-16 bg-purple-400 rounded-full mix-blend-multiply opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
